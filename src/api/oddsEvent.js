import { axiosInstance } from "./axiosInstance";

export const deleteOddsEvent = async (id) => {
  try {
    const res = await axiosInstance.delete(`/events/delete-oddsEvent/${id}`);
    return res.data;
  } catch (error) {
    return error.response.data.message;
  }
};
export const updateOddsEvent = async (id) => {
  try {
    const res = await axiosInstance.delete(`/events/delete-oddsEvent/${id}`);
    return res.data;
  } catch (error) {
    return error.response.data.message;
  }
};
