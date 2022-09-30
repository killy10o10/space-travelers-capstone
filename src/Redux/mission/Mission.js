/* eslint-disable max-len */
import { createAsyncThunk } from '@reduxjs/toolkit';

const RETRIEVE_ASYNC_MISSIONS = 'space-travlers/missions/RETRIEVE_MISSIONS';
const RETRIEVE_MISSIONS = 'space-travlers/missions/RETRIEVE_MISSIONS/fulfilled';
const BOOK_MISSION = 'space-travlers/missions/BOOK_MISSION';
const LEAVE_MISSION = 'space-travlers/missions/LEAVE_MISSION';

const url = 'https://api.spacexdata.com/v3/missions';
const initialState = [];

export const showMission = createAsyncThunk(
  RETRIEVE_ASYNC_MISSIONS,
  async () => {
    const response = await fetch(url);
    const data = await response.json();
    const missions = data.map((item) => ({
      id: item.mission_id,
      name: item.mission_name,
      description: item.description,
      reserved: false,
    }));
    return missions;
  },
);

export const bookMission = (payload) => ({ type: BOOK_MISSION, payload });
export const leaveMission = (payload) => ({ type: LEAVE_MISSION, payload });

const missionReducer = (state = initialState, action) => {
  switch (action.type) {
    case RETRIEVE_MISSIONS:
      return action.payload;
    case BOOK_MISSION:
      return state.map((mission) => (mission.id !== action.payload ? mission : { ...mission, reserved: true }));

    case LEAVE_MISSION:
      return state.map((mission) => (mission.id !== action.payload ? mission : { ...mission, reserved: false }));
    default:
      return state;
  }
};

export default missionReducer;
