import axios from "axios";
export const userDetailAction = (id) => async (dispatch) => {
  try {
    dispatch({ type: "USER_DETAIL_REQUEST" });
    const { data } = await axios.get(
      `https://retoolapi.dev/H2F0Ui/getemployedetail?id=${id}`
    );
    console.log(data);
    dispatch({
      type: "USER_DETAIL_SUCCESS",
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: "USER_DETAIL_FAIL",
      payload: error,
    });
  }
};
