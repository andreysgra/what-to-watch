import {TFilmsFavoriteState} from './type';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {StoreSlice} from '../const';
import {fetchFilmsFavorite} from './api-actions';
import {TFilms} from '../../types/film';

const initialState: TFilmsFavoriteState = {
  filmsFavorite: [],
  isFilmsFavoriteLoading: false
};

const filmsFavoriteSlice = createSlice({
  name: StoreSlice.Favorites,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchFilmsFavorite.fulfilled, (state, action: PayloadAction<TFilms>) => {
        state.filmsFavorite = action.payload;
        state.isFilmsFavoriteLoading = false;
      })
      .addCase(fetchFilmsFavorite.pending, (state) => {
        state.isFilmsFavoriteLoading = true;
      })
      .addCase(fetchFilmsFavorite.rejected, (state) => {
        state.isFilmsFavoriteLoading = false;
      });
  }
});

export default filmsFavoriteSlice;
