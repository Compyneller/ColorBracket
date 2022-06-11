export const listOfAllUserReducer = (state = { user: [] }, action) => {
  switch (action.type) {
    case "USER_REQUEST":
      return { loading: true, user: [] };
    case "USER_SUCCESS":
      return {
        loading: false,
        user: action.payload,
      };
    case "USER_FAIL":
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};
