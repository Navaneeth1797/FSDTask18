import axios from "axios"; // Importing axios library for making HTTP requests

let API_URL = "https://659b27b9d565feee2daae091.mockapi.io"; // URL of the API
let axiosService = axios.create({
  // Creating an instance of axios with custom configurations
  baseURL: API_URL, // Setting the base URL for the requests
  headers: { "Content-Type": "Application/json" }, // Setting headers for JSON content type
});
export default axiosService;
