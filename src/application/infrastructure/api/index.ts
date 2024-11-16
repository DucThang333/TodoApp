import axios from "axios";

// Create an instance of axios to set custom configuration (optional)
const axiosInstance = axios.create({
  baseURL: "https://your-api-url.com", // Replace with your API's base URL
  headers: {
    "Content-Type": "application/json",
    // Add other custom headers if needed, like authorization tokens
  },
});

export default axiosInstance;
