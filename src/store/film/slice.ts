import {TFilmState} from './type';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {StoreSlice} from '../const';
import {fetchFilm} from './api-actions';
import {TFilmDetailed, TFilmFavorite} from '../../types/film';
import {setFavorite} from '../favorites/api-actions';

const initialState: TFilmState = {
  film: null,
  isFilmLoading: false
};

const filmSlice = createSlice({
  name: StoreSlice.Film,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchFilm.fulfilled, (state, action: PayloadAction<TFilmDetailed>) => {
        state.film = action.payload;
        state.isFilmLoading = false;
      })
      .addCase(fetchFilm.pending, (state) => {
        state.isFilmLoading = true;
      })
      .addCase(fetchFilm.rejected, (state) => {
        state.isFilmLoading = false;
      })
      .addCase(setFavorite.fulfilled, (state, action: PayloadAction<TFilmFavorite>) => {
        if (state.film && state.film.id === action.payload.id) {
          state.film.isFavorite = action.payload.isFavorite;
        }
      });
  }
});

export default filmSlice;
