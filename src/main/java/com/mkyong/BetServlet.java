package com.mkyong;

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
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
import org.json.JSONObject;

import com.mkyong.model.Bet;

@SuppressWarnings("serial")

@WebServlet(name = "bet", urlPatterns = "/bet")
public class BetServlet extends HttpServlet {
	Connection conn;

	private final String updateBetSql = "INSERT INTO bet (user_id, round_attendee_id, `bet`) "
			+ " VALUES((SELECT id FROM `user` WHERE fb_id=?), ?, ?) " + " ON DUPLICATE KEY UPDATE `bet`=? ;";

	protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		Connection conn = getConnection();
		
		resp.setCharacterEncoding("UTF-8");
		req.setCharacterEncoding("UTF-8");
		JSONObject payload = Util.readPayload(req.getReader());
		String fbId = payload.getString("fbId");
		int roundAttendeeId = payload.getInt("roundAttendeeId");
		boolean bet = payload.getBoolean("bet");

		try (PreparedStatement statementCreateUser = conn.prepareStatement(updateBetSql)) {
			statementCreateUser.setString(1, fbId);
			statementCreateUser.setInt(2, roundAttendeeId);
			statementCreateUser.setBoolean(3, bet);
			statementCreateUser.setBoolean(4, bet);
			statementCreateUser.executeUpdate();

			payload.put("success", true);

			PrintWriter out = resp.getWriter();
			resp.setContentType("text/plain");
			out.print(payload.toString());
			return;
		} catch (SQLException e) {
			payload.put("success", false);
			PrintWriter out = resp.getWriter();
			resp.setContentType("text/plain");
			out.print(payload.toString());
			throw new ServletException("SQL error", e);
		}finally {
		    try {
				conn.close();
			} catch (SQLException e) {
				e.printStackTrace();
			}
		}

	}

	@Override
	public void doGet(HttpServletRequest req, HttpServletResponse resp) throws IOException, ServletException {
		Connection conn = getConnection();
		final String selectSql = "SELECT b.*, fb_id FROM bet b LEFT JOIN `user` u ON u.id=user_id;";

		PrintWriter out = resp.getWriter();
		resp.setContentType("text/plain");

		try {
			try (ResultSet rs = conn.prepareStatement(selectSql).executeQuery()) {

				List<Bet> bets = new ArrayList<>();
				while (rs.next()) {
					Bet bet = new Bet();
					bet.setUserId(rs.getInt("user_id"));
					bet.setRoundAttendeeId(rs.getInt("round_attendee_id"));
					bet.setBet(rs.getBoolean("bet"));
					bet.setFbId(rs.getString("fb_id"));
					bets.add(bet);
				}

				JSONArray array = new JSONArray(bets);
				out.print(array.toString());
			}
		} catch (SQLException e) {
			throw new ServletException("SQL error", e);
		}finally {
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
