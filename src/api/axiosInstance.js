import axios from "axios";
export const axiosInstance = axios.create({
  baseURL: "https://wagermoni-ap.onrender.com",
  headers: {},
  withCredentials: true,
});
