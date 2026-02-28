import {TSiteProcessState} from './type';
import {ALL_GENRES, FILMS_PER_LOAD} from '../../const';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {StoreSlice} from '../const';

const initialState: TSiteProcessState = {
  genre: ALL_GENRES,
  filmsCount: FILMS_PER_LOAD
};

const siteProcessSlice = createSlice({
  name: StoreSlice.SiteProcess,
  initialState,
  reducers: {
    setGenre: (state, action: PayloadAction<string>) => {
      state.genre = action.payload;
    },
    setFilmsCount: (state, action: PayloadAction<number>) => {
      state.filmsCount = action.payload;
    }
  }
});

export const {setGenre, setFilmsCount} = siteProcessSlice.actions;

export default siteProcessSlice;
