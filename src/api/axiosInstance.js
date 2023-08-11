import axios from "axios";
export const axiosInstance = axios.create({
  baseURL: "https://wagermoni-api.onrender.com",
  headers: {},
  withCredentials: true,
});
