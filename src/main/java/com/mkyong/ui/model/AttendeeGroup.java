package com.mkyong.ui.model;

import java.util.ArrayList;
import java.util.List;

import com.mkyong.model.RoundAttendee;

public class AttendeeGroup {
	private int round;
	private String groupName;
	private List<RoundAttendee> attendees = new ArrayList<>();
	
	public AttendeeGroup(int round, String groupName) {
		this.round = round;
		this.groupName = groupName;
	}
	
	public int getRound() {
		return round;
	}
	public void setRound(int round) {
		this.round = round;
	}
	public String getGroupName() {
		return groupName;
	}
	public void setGroupName(String groupName) {
		this.groupName = groupName;
	}
	public List<RoundAttendee> getAttendees() {
		return attendees;
	}
	public void setAttendees(List<RoundAttendee> attendees) {
		this.attendees = attendees;
	}
	
	public void add(RoundAttendee attendee) {
		attendees.add(attendee);
	}
			
}
