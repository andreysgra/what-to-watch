import {TFilmPromoState} from './type';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {StoreSlice} from '../const';
import {fetchFilmPromo} from './api-actions';
import {TFilmFavorite, TFilmPromo} from '../../types/film';
import {setFavorite} from '../favorites/api-actions';

const initialState: TFilmPromoState = {
  filmPromo: null,
  isFilmPromoLoading: false
};

const filmPromoSlice = createSlice({
  name: StoreSlice.FilmPromo,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchFilmPromo.fulfilled, (state, action: PayloadAction<TFilmPromo>) => {
        state.filmPromo = action.payload;
        state.isFilmPromoLoading = false;
      })
      .addCase(fetchFilmPromo.pending, (state) => {
        state.isFilmPromoLoading = true;
      })
      .addCase(fetchFilmPromo.rejected, (state) => {
        state.filmPromo = null;
        state.isFilmPromoLoading = false;
      })
      .addCase(setFavorite.fulfilled, (state, action: PayloadAction<TFilmFavorite>) => {
        if (state.filmPromo && state.filmPromo.id === action.payload.id) {
          state.filmPromo.isFavorite = action.payload.isFavorite;
        }
      });
  }
});

export default filmPromoSlice;
