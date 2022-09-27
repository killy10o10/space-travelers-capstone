import { combineReducers, configureStore } from "@reduxjs/toolkit";
import missionReducer from "./mission/Mission";
import rocketReducer from "./rockets/Rockets";

const reducer = combineReducers({
  mission: missionReducer,
  rocket: rocketReducer,
});

const store = configureStore({
  reducer,
});

export default store;
