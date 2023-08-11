import axios from "axios";
export const axiosInstance = axios.create({
  baseURL: "https://wagermoni-api.onrender.com/api",
  headers: {},
  withCredentials: true,
});
