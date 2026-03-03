import {TFilmsFavoriteState} from './type';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {StoreSlice} from '../const';
import {fetchFilmsFavorite, setFavorite} from './api-actions';
import {TFilmFavorite, TFilms} from '../../types/film';

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
      })
      .addCase(setFavorite.fulfilled, (state, action: PayloadAction<TFilmFavorite>) => {
        if (action.payload.isFavorite) {
          state.filmsFavorite.push(action.payload);
        } else {
          state.filmsFavorite = state.filmsFavorite.filter((favoriteOffer) =>
            favoriteOffer.id !== action.payload.id);
        }
      });
  }
});

export default filmsFavoriteSlice;
