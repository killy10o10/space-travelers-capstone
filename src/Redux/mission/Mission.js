import { createAsyncThunk } from "@reduxjs/toolkit";

const SHOW_MISSION = "missions/missions/SOW_MISSION";
const SHOW_STATUS = "missions/missions/SHOW_STATUS";
const LEAVE_MISSIONS = "missions/missions/leaveMissions";

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

export const showStatus = (id) => (dispatch) => {
  dispatch({
    type: SHOW_STATUS,
    payload: id,
  });
};

export const LeaveMission = (id) => (dispatch) => {
  dispatch({ type: LEAVE_MISSIONS, payload: id });
};

const missionReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_MISSION:
      return {
        ...state,
        missionArray: action.payload,
      };
    case SHOW_STATUS:
      return {
        missionArray: state.missionArray.map((mission) => (mission.mission_id !== action.payload
          ? mission
          : { ...mission, reserved: true })),
      };
    case LEAVE_MISSIONS:
      return {
        missionArray: state.missionArray.map((mission) => (mission.mission_id !== action.payload
          ? mission
          : { ...mission, reserved: false })),
      };
    default:
      return state;
  }
};

export default missionReducer;
