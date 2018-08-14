package com.mkyong.model;

public class RoundAttendee {
	private int id;
	private int year;
	private int round;
	private String grounpName;
	private int teamId;
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public int getYear() {
		return year;
	}
	public void setYear(int year) {
		this.year = year;
	}
	public int getRound() {
		return round;
	}
	public void setRound(int round) {
		this.round = round;
	}
	public String getGrounpName() {
		return grounpName;
	}
	public void setGrounpName(String grounpName) {
		this.grounpName = grounpName;
	}
	public int getTeamId() {
		return teamId;
	}
	public void setTeamId(int teamId) {
		this.teamId = teamId;
	}
	
	public String getRoundGroup() {
		return round+"_"+grounpName;
	}
}
