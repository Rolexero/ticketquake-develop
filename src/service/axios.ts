import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://booking-com15.p.rapidapi.com/api/v1",
  headers: {
    "x-rapidapi-key": import.meta.env.VITE_RAPIDAPI_KEY,
    "x-rapidapi-host": "booking-com15.p.rapidapi.com",
  },
});

export default axiosInstance;
