import { combineReducers, configureStore } from "@reduxjs/toolkit";
import missionReducer from "./mission/Mission";

const reducer = combineReducers({
  mission: missionReducer,
});

const store = configureStore({
  reducer,
});

export default store;
