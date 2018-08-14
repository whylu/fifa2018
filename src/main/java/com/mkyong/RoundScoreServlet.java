package com.mkyong;

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.json.JSONArray;

import com.mkyong.model.RoundScore;

@SuppressWarnings("serial")
@WebServlet(name = "roundScore", urlPatterns = "/roundScore")
public class RoundScoreServlet extends HttpServlet {

	@Override
	public void doGet(HttpServletRequest req, HttpServletResponse resp) throws IOException, ServletException {

		resp.setCharacterEncoding("UTF-8");
		req.setCharacterEncoding("UTF-8");
		Connection conn = getConnection();
		final String selectSql = "SELECT * FROM roundscore;";

		PrintWriter out = resp.getWriter();
		resp.setContentType("text/plain");

		try {
			try (ResultSet rs = conn.prepareStatement(selectSql).executeQuery()) {

				List<RoundScore> roundScores = new ArrayList<>();
				while (rs.next()) {
					RoundScore roundScore = new RoundScore();
					roundScore.setYear(rs.getInt("year"));
					roundScore.setRound(rs.getInt("round"));
					roundScore.setTeamId(rs.getInt("team_id"));
					roundScore.setScore(rs.getInt("score"));
					roundScores.add(roundScore);
				}
				out.print(new JSONArray(roundScores).toString());
			}
		} catch (SQLException e) {
			throw new ServletException("SQL error", e);
		} finally {
		    try {
				conn.close();
			} catch (SQLException e) {
				e.printStackTrace();
			}
		}
	}

	  private Connection getConnection() throws ServletException {
		  Connection conn;
			String url = System.getProperty("cloudsql");
			log("connecting to: " + url);
			try {
				conn = DriverManager.getConnection(url);
			} catch (SQLException e) {
				throw new ServletException("Unable to connect to Cloud SQL", e);
			}
			return conn;
	  }
}
