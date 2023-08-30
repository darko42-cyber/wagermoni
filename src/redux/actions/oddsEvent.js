import { axiosInstance } from "../../api/axiosInstance";

export const NewOddsEvent = (form) => async (dispatch) => {
  dispatch({ type: "NewOddsEventRequest" });

  try {
    const { data } = await axiosInstance.post(`/events/new-odds`, form);
    dispatch({ type: "NewOddsEventSuccess", payload: data?.data });
  } catch (error) {
    dispatch({
      type: "NewOddsEventFailure",
      payload: error.response.data.message,
    });
  }
};

export const GetAllOddsEvent = (form) => async (dispatch) => {
  dispatch({ type: "GetAllOddsEventRequest" });

  try {
    const { data } = await axiosInstance.get(`/events/get-all-odds`, form);
    dispatch({ type: "GetAllOddsEventSuccess", payload: data?.data });
  } catch (error) {
    dispatch({
      type: "GetAllOddsEventFailure",
      payload: error.response.data.message,
    });
  }
};

export const likeOddsEvent = (id) => async (dispatch) => {
  try {
    const { data } = await axiosInstance.put(`/events/like-oddsEvent/${id}`);
    dispatch({ type: "LikeOddsEventSuccess", payload: data?.data });
  } catch (error) {}
};
