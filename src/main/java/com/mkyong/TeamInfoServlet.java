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

import com.mkyong.model.Team;


@SuppressWarnings("serial")

@WebServlet(name = "teamInfo",
 urlPatterns = "/teamInfo")
public class TeamInfoServlet extends HttpServlet {

	  @Override
	  public void doGet(HttpServletRequest req, HttpServletResponse resp) throws IOException, ServletException {
	    Connection conn = getConnection();
		
	    final String selectSql = "SELECT * FROM team;";

	    PrintWriter out = resp.getWriter();
	    resp.setContentType("text/plain");

	    try {
	      try (ResultSet rs = conn.prepareStatement(selectSql).executeQuery()) {
	        
	        List<Team> teams = new ArrayList<>();
	        while (rs.next()) {
	        	Team team = new Team();
	        	team.setId(rs.getInt("id"));
	        	team.setName(rs.getString("name"));
	        	team.setSimpleName(rs.getString("simple_name"));
	        	team.setYear(rs.getInt("year"));
	        	team.setFactor(rs.getInt("factor"));
	        	teams.add(team);
	        }

			out.print(new JSONArray(teams).toString());
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
