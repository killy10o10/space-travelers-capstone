import { createAsyncThunk } from '@reduxjs/toolkit';
/* eslint-disable max-len */

const RETRIEVE_ASYNC_ROCKETS = 'space-travlers/rockets/RETRIEVE_ROCKETS';
const RETRIEVE_ROCKETS = 'space-travlers/rockets/RETRIEVE_ROCKETS/fulfilled';
const BOOK_ROCKET = 'space-travlers/rockets/BOOK_ROCKET';
const LEAVE_ROCKET = 'space-travlers/rockets/LEAVE_ROCKET';

const url = 'https://api.spacexdata.com/v3/rockets';
const initialState = [];

export const showRockets = createAsyncThunk(
  RETRIEVE_ASYNC_ROCKETS,
  async () => {
    const response = await fetch(url);
    const data = await response.json();
    const rockets = data.map((item) => ({
      id: item.id,
      name: item.rocket_name,
      description: item.description,
      image: item.flickr_images,
    }));
    return rockets;
  },
);

export const bookRocket = (payload) => ({ type: BOOK_ROCKET, payload });
export const leaveRocket = (payload) => ({ type: LEAVE_ROCKET, payload });

const rocketReducer = (state = initialState, action) => {
  switch (action.type) {
    case RETRIEVE_ROCKETS:
      return action.payload;
    case BOOK_ROCKET:
      return state.map((rocket) => (rocket.id === action.payload ? { ...rocket, reserved: true } : rocket));
    case LEAVE_ROCKET:
      return state.map((rocket) => (rocket.id === action.payload ? { ...rocket, reserved: false } : rocket));
    default:
      return state;
  }
};

export default rocketReducer;
