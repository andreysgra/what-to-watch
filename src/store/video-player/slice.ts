import {TVideoPlayerState} from './type';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {StoreSlice} from '../const';

const initialState: TVideoPlayerState = {
  currentTime: 0,
  duration: 0
};

const videoPlayerSlice = createSlice({
  name: StoreSlice.VideoPlayer,
  initialState,
  reducers: {
    setCurrentTime: (state, action: PayloadAction<number>) => {
      state.currentTime = action.payload;
    },
    setDuration: (state, action: PayloadAction<number>) => {
      state.duration = action.payload;
    },
    resetPlayback: (state) => {
      state.currentTime = 0;
    }
  }
});

export const {setCurrentTime, setDuration, resetPlayback} = videoPlayerSlice.actions;

export default videoPlayerSlice;
