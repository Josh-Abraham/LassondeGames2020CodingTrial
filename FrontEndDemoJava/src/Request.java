
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.io.OutputStream;
import java.net.HttpURLConnection;
import java.net.URL;


public class Request {
	static String URL = "http://localhost:8081";

	@SuppressWarnings("unchecked")
	public static JSONObject makeRequest(String fullURL, String type) {
		JSONObject json = new JSONObject();
		try {
			URL obj = new URL(fullURL);
			HttpURLConnection con = (HttpURLConnection) obj.openConnection();
			con.setRequestMethod(type);

			if (type.equals("POST")) {
				con.setDoOutput(true);
				OutputStream os = con.getOutputStream();
				os.flush();
				os.close();
			}

			try (BufferedReader in = new BufferedReader(
					new InputStreamReader(con.getInputStream()))) {

				String line;
				StringBuilder response = new StringBuilder();

				while ((line = in.readLine()) != null) {
					response.append(line);
				}

				JSONParser parser = new JSONParser();
				json = (JSONObject) parser.parse(response.toString());
			}
		} catch (Exception e) {
			json.put("type", "Bad Request");
		}

		return json;

	}
	
	@SuppressWarnings("unchecked")
	public static JSONObject createInstance() {
		// Check old instance data
		JSONObject json = new JSONObject();
		try {
			json = makeRequest(URL + "/instance", "POST");
		} catch (Exception e) {
			json.put("type", "ERROR");
		}

			return json;
	}
	
	public static JSONObject deleteInstance() {
		JSONObject json = makeRequest(URL + "/instance", "DELETE");

		return json;
	}
	
	// Gets the current Instance and all Information
	public static JSONObject getInstance() {
		return makeRequest(URL + "/instance", "GET");
	}
	

	public static JSONObject animate() {
		return makeRequest(URL + "/animate", "POST");
	}
	
}
