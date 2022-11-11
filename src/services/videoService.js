import { createClient } from "@supabase/supabase-js";

const PROJECT_URL = "https://gztpwyrcnwuvmmyljeur.supabase.co";
const PUBLIC_KEY =
	"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imd6dHB3eXJjbnd1dm1teWxqZXVyIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjgxNjQ3MTIsImV4cCI6MTk4Mzc0MDcxMn0.HJ6WbNOAayDakGBL-rpGxOJgy2Bi9G0IhlXeq0WR-Z4";

const supabase = createClient(PROJECT_URL, PUBLIC_KEY);

export function videoService() {
	return {
		getAllVideos() {
			return supabase.from("video").select("*");
		},
	};
}
