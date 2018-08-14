package com.mkyong.model;

public class User {
	private int id;
	private String fbId;
	private String name;
	private boolean isGameMember;
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getFbId() {
		return fbId;
	}
	public void setFbId(String fbId) {
		this.fbId = fbId;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public boolean isGameMember() {
		return isGameMember;
	}
	public void setGameMember(boolean isGameMember) {
		this.isGameMember = isGameMember;
	}
	
}
