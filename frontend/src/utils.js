let api = "http://localhost:5000";

require("dotenv").config();
if (process.env.MODE === "production") {
  api = "https://exercise-tracker-backend-ahhh.onrender.com";
}

export default api;