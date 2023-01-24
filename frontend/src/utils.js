let api = "http://localhost:5000";

if (process.env.MODE === "production") {
  api = "https://exercise-tracker-backend-ahhh.onrender.com";
}

export default api;