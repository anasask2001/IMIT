import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://imit-backend-7enh.onrender.com/api/",
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;
