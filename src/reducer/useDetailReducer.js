export const userDetailReducer = (state = { userDetail: [] }, action) => {
  switch (action.type) {
    case "USER_DETAIL_REQUEST":
      return { loading: true, userDetail: [] };
    case "USER_DETAIL_SUCCESS":
      return {
        loading: false,
        userDetail: action.payload,
      };
    case "USER_DETAIL_FAIL":
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};
