import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { listOfAllUserReducer } from "../reducer/listOfAllUserReducer";
import { userDetailReducer } from "../reducer/useDetailReducer";
import { userLoginReducer } from "../reducer/userLoginReducer";

const reducer = combineReducers({
  listOfAllUserStore: listOfAllUserReducer,
  userDetailStore: userDetailReducer,
  userLoginStore: userLoginReducer,
});

const initialState = {};
export const store = configureStore({
  reducer,
  initialState,
});
