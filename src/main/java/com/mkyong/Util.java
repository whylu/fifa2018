package com.mkyong;

import java.io.BufferedReader;

import org.json.JSONException;
import org.json.JSONObject;

public class Util {

	public static JSONObject readPayload(BufferedReader reader) {
		StringBuffer jb = new StringBuffer();
		String line = null;
		try {
			while ((line = reader.readLine()) != null)
				jb.append(line);
		} catch (Exception e) {
			/* report an error */
			e.printStackTrace();
		}

		try {
			JSONObject jsonObject = new JSONObject(jb.toString());
			return jsonObject;
		} catch (JSONException e) {
			// crash and burn
			e.printStackTrace();
		}
		return null;
	}

}
