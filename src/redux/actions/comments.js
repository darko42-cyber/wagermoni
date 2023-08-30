import { axiosInstance } from "../../api/axiosInstance";

export const loadPredictionComments = (id) => async (dispatch) => {
  dispatch({ type: "LoadCommentsRequest" });

  try {
    const { data } = await axiosInstance.post("/comments/get-comments", { id });
    dispatch({ type: "LoadCommentsSuccess", payload: data.data });
  } catch (error) {
    dispatch({
      type: "LoadCommentsFailure",
      payload: error.response.data.message,
    });
  }
};
