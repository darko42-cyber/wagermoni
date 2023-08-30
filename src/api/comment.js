import { axiosInstance } from "./axiosInstance";

export const createComment = async (data) => {
  try {
    const res = await axiosInstance.post(`/comments/create-comment`, data);
    return res.data;
  } catch (error) {
    return error.response.data.message;
  }
};
export const getComments = async (id) => {
  try {
    const res = await axiosInstance.post(`/comments/get-comments`, { id });
    return res.data;
  } catch (error) {
    return error.response.data.message;
  }
};
