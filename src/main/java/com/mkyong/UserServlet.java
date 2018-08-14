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

import com.mkyong.model.User;

@SuppressWarnings("serial")
@WebServlet(name = "user", urlPatterns = "/user")
public class UserServlet extends HttpServlet {


	private final String createUserSql = "INSERT INTO `user` (`fb_id`, `name`) "
			+ " SELECT * FROM (SELECT ?, ?) AS tmp "
			+ " WHERE NOT EXISTS( SELECT fb_id FROM `user` WHERE fb_id=?);";

	protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		Connection conn = getConnection();
		resp.setCharacterEncoding("UTF-8");
		req.setCharacterEncoding("UTF-8");
		JSONObject payload = Util.readPayload(req.getReader());
		
		
		try (PreparedStatement statementCreateUser = conn.prepareStatement(createUserSql)) {
			 statementCreateUser.setString(1, payload.getString("fbId"));
			 statementCreateUser.setString(2, payload.getString("name"));
			 statementCreateUser.setString(3, payload.getString("fbId"));
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
		} finally {
		    try {
				conn.close();
			} catch (SQLException e) {
				e.printStackTrace();
			}
		}

	}

	

	@Override
	public void doGet(HttpServletRequest req, HttpServletResponse resp) throws IOException, ServletException {

		resp.setCharacterEncoding("UTF-8");
		req.setCharacterEncoding("UTF-8");
		Connection conn = getConnection();
		final String selectSql = "SELECT * FROM user;";

		PrintWriter out = resp.getWriter();
		resp.setContentType("text/plain");

		try {
			try (ResultSet rs = conn.prepareStatement(selectSql).executeQuery()) {

				List<User> users = new ArrayList<>();
				while (rs.next()) {
					User user = new User();
					user.setId(rs.getInt("id"));
					user.setFbId(rs.getString("fb_id"));
					user.setName(rs.getString("name"));
					user.setGameMember(rs.getBoolean("is_game_member"));
					users.add(user);
				}
				out.print(new JSONArray(users).toString());
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
