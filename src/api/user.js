import { axiosInstance } from "./axiosInstance";

export const LoginUser = async (data) => {
  try {
    const res = await axiosInstance.post("/users/login", data);
    return res.data;
  } catch (error) {
    return error.response.data.message;
  }
};
