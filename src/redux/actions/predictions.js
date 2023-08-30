import { axiosInstance } from "../../api/axiosInstance";

export const getAllPredictions = () => async (dispatch) => {
  dispatch({ type: "AllPredictionRequest" });

  try {
    const { data } = await axiosInstance.get("/predictions");
    dispatch({ type: "AllPredictionSuccess", payload: data?.data });
  } catch (error) {
    dispatch({
      type: "AllPredictionFailure",
      payload: error.response.data.message,
    });
  }
};
