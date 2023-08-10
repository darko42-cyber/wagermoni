import { axiosInstance } from "./axiosInstance";
export const createPrediction = async (value) => {
  try {
    const response = await axiosInstance.post(
      "/predictions/new-prediction",
      value
    );
    return response.data;
  } catch (error) {
    return error.message;
  }
};
export const updatePrediction = async (value, id) => {
  try {
    const response = await axiosInstance.put(
      `/predictions/new-prediction/${id}`,
      value
    );
    return response.data;
  } catch (error) {
    return error.message;
  }
};
export const deletePrediction = async (id) => {
  try {
    const response = await axiosInstance.delete(
      `/predictions/new-prediction/${id}`
    );
    return response.data;
  } catch (error) {
    return error.message;
  }
};
export const likePrediction = async (data) => {
  try {
    const response = await axiosInstance.post(`/likes/like`, data);
    return response.data;
  } catch (error) {
    return error.message;
  }
};
export const unlikePrediction = async (data) => {
  try {
    const response = await axiosInstance.post(`/likes/unlike`, data);
    return response.data;
  } catch (error) {
    return error.message;
  }
};
export const allLikes = async (data) => {
  try {
    const response = await axiosInstance.post(`/likes/all-likes`, data);
    return response.data;
  } catch (error) {
    return error.message;
  }
};
