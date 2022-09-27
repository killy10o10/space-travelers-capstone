import { createAsyncThunk } from '@reduxjs/toolkit';

const SHOW_ROCKETS = 'rockets/rockets/SHOW_ROCKETS';

const url = 'https://api.spacexdata.com/v3/rockets/';
const initialState = { rocketsArray: [] };

export const showRockets = createAsyncThunk(
  SHOW_ROCKETS,
  async (args, { dispatch }) => {
    const response = await fetch(url);
    const data = await response.json();
    const rockets = Object.keys(data).map((key) => {
      const rocket = data[key];
      return {
        id: key,
        ...rocket,
      };
    });
    dispatch({
      ...rockets,
      type: SHOW_ROCKETS,
      payload: rockets,
    });
    return rockets;
  },
);

const rocketReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_ROCKETS:
      return {
        ...state,
        rocketsArray: action.payload,
      };
    default:
      return state;
  }
};

export default rocketReducer;
