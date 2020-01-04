import org.json.simple.JSONObject;

public class MainClass {

	public static void main(String[] args) throws Exception {
		JSONObject request = Request.createInstance();
		request = Request.getInstance();
		Request.animate();
	}

}
