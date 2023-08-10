import { axiosInstance } from "../../api/axiosInstance";

export const loadUser = () => async (dispatch) => {
  dispatch({ type: "LoadUserRequest" });

  try {
    const { data } = await axiosInstance.get("/users/load-user");
    dispatch({ type: "LoadUserSuccess", payload: data });
  } catch (error) {
    dispatch({
      type: "LoadUserFailure",
      payload: error.response.data.message,
    });
  }
};
