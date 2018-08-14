package com.mkyong.model;

public class Bet {
	private int userId;
	private int roundAttendeeId;
	private boolean bet;
	private String fbId;
	
	public int getUserId() {
		return userId;
	}
	public void setUserId(int userId) {
		this.userId = userId;
	}
	
	public boolean isBet() {
		return bet;
	}
	public void setBet(boolean bet) {
		this.bet = bet;
	}
	public int getRoundAttendeeId() {
		return roundAttendeeId;
	}
	public void setRoundAttendeeId(int roundAttendeeId) {
		this.roundAttendeeId = roundAttendeeId;
	}
	public String getFbId() {
		return fbId;
	}
	public void setFbId(String fbId) {
		this.fbId = fbId;
	}
	
}
