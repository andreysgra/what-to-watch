import {TFilmState} from './type';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {StoreSlice} from '../const';
import {fetchFilm} from './api-actions';
import {TFilmDetailed, TFilmFavorite} from '../../types/film';
import {setFavorite} from '../favorites/api-actions';
import {RequestStatus} from '../../services/api/const';

const initialState: TFilmState = {
  film: null,
  loadingStatus: RequestStatus.Idle
};

const filmSlice = createSlice({
  name: StoreSlice.Film,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchFilm.fulfilled, (state, action: PayloadAction<TFilmDetailed>) => {
        state.film = action.payload;
        state.loadingStatus = RequestStatus.Success;
      })
      .addCase(fetchFilm.pending, (state) => {
        state.loadingStatus = RequestStatus.Pending;
      })
      .addCase(fetchFilm.rejected, (state) => {
        state.film = null;
        state.loadingStatus = RequestStatus.Error;
      })
      .addCase(setFavorite.fulfilled, (state, action: PayloadAction<TFilmFavorite>) => {
        if (state.film?.id === action.payload.id) {
          state.film.isFavorite = action.payload.isFavorite;
        }
      });
  }
});

export default filmSlice;
