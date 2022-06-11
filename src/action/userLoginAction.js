import axios from "axios";
export const userLoginAction = (username, pass) => async (dispatch) => {
  console.log({
    username,
    pass,
  });
  try {
    dispatch({ type: "USER_LOGIN_REQUEST" });
    const { data } = await axios.get(
      `https://retoolapi.dev/B13laa/getusers?user_id=${username}&password=${pass}`
    );
    dispatch({
      type: "USER_LOGIN_SUCCESS",
      payload: data,
    });

    localStorage.setItem("userInfo", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: "USER_LOGIN_FAIL",
      payload: error,
    });
  }
};
