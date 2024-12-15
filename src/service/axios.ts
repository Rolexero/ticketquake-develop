import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://booking-com15.p.rapidapi.com/api/v1",
  headers: {
    "x-rapidapi-key": "f546e7e1f5mshafbb094e6f343a4p19c7e5jsnb9b9aee3130d",
    "x-rapidapi-host": "booking-com15.p.rapidapi.com",
  },
});

export default axiosInstance;
