import axios from "axios";
export const axiosInstance = axios.create({
  baseURL: "https://wagermoni-api.onrender.com",
  headers: {
    authorization: `Bearer ${localStorage.getItem(
      "token"
    )}`,
  },
  withCredentials: true,
});
