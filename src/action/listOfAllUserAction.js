import axios from "axios";
export const listOfAllUserAction = () => async (dispatch) => {
  try {
    dispatch({ type: "USER_REQUEST" });
    const { data } = await axios.get(
      "https://retoolapi.dev/GFHqAV/getemployees"
    );

    dispatch({
      type: "USER_SUCCESS",
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: "USER_FAIL",
      payload: error,
    });
  }
};
