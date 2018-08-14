package com.mkyong;

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.json.JSONArray;

@SuppressWarnings("serial")

@WebServlet(name = "roundWinner",
 urlPatterns = "/roundWinner")
public class RoundWinnerServlet extends HttpServlet {

	  @Override
	  public void doGet(HttpServletRequest req, HttpServletResponse resp) throws IOException, ServletException {
	    Connection conn = getConnection();
		
	    final String selectSql = "SELECT * FROM round_winner;";

	    PrintWriter out = resp.getWriter();
	    resp.setContentType("text/plain");

	    try {
	      try (ResultSet rs = conn.prepareStatement(selectSql).executeQuery()) {
	        
    	    JSONArray ary = new JSONArray();
	        while (rs.next()) {
	        	ary.put(rs.getInt("round_attendee_id"));
	        }
			out.print(ary.toString());
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