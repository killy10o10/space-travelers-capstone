import { createAsyncThunk } from "@reduxjs/toolkit";

const SHOW_MISSION = "missions/missions/SOW_MISSION";

const url = "https://api.spacexdata.com/v3/missions";
const initialState = { missionArray: [] };

export const showMission = createAsyncThunk(
  SHOW_MISSION,
  async (args, { dispatch }) => {
    const response = await fetch(url);
    const data = await response.json();
    const missions = Object.keys(data).map((key) => {
      const mission = data[key];
      return {
        id: key,
        ...mission,
      };
    });
    dispatch({
      type: SHOW_MISSION,
      payload: missions,
    });
    return missions;
  },
);

const missionReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_MISSION:
      return {
        ...state,
        missionArray: action.payload,
      };
    default:
      return state;
  }
};

export default missionReducer;
