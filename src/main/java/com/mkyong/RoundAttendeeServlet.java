package com.mkyong;

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.TreeMap;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.json.JSONArray;

import com.mkyong.model.RoundAttendee;
import com.mkyong.ui.model.AttendeeGroup;

@SuppressWarnings("serial")

@WebServlet(name = "roundAttendee",
 urlPatterns = "/roundAttendee")
public class RoundAttendeeServlet extends HttpServlet {

	  @Override
	  public void doGet(HttpServletRequest req, HttpServletResponse resp) throws IOException, ServletException {
	    Connection conn = getConnection();
	    final String selectSql = "SELECT * FROM round_attendee;";

	    PrintWriter out = resp.getWriter();
	    resp.setContentType("text/plain");

	    try {
	      try (ResultSet rs = conn.prepareStatement(selectSql).executeQuery()) {
	        
	        List<RoundAttendee> roundAttendees = new ArrayList<>();
	        while (rs.next()) {
	        	RoundAttendee roundAttendee = new RoundAttendee();
	        	roundAttendee.setId(rs.getInt("id"));
	        	roundAttendee.setYear(rs.getInt("year"));
	        	roundAttendee.setRound(rs.getInt("round"));
	        	roundAttendee.setGrounpName(rs.getString("group_name"));
	        	roundAttendee.setTeamId(rs.getInt("team_id"));
	        	roundAttendees.add(roundAttendee);
	        }
	        
	        List<AttendeeGroup> groups = toGroups(roundAttendees);
	        JSONArray array = new JSONArray(groups);
	        out.print(array.toString());
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

	  private List<AttendeeGroup> toGroups(List<RoundAttendee> roundAttendees) {
		  Map<String, AttendeeGroup> groups = new TreeMap<>();
		  roundAttendees.stream().forEach(attendee->{
			  if(!groups.containsKey(attendee.getRoundGroup())) {
				  groups.put(attendee.getRoundGroup(), new AttendeeGroup(attendee.getRound(), attendee.getGrounpName()));
			  }
			  AttendeeGroup group = groups.get(attendee.getRoundGroup());
			  group.add(attendee);
		  });
		return new ArrayList<>(groups.values());
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
