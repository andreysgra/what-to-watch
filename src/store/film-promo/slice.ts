import {TFilmPromoState} from './type';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {StoreSlice} from '../const';
import {fetchFilmPromo} from './api-actions';
import {TFilmFavorite, TFilmPromo} from '../../types/film';
import {setFavorite} from '../favorites/api-actions';
import {RequestStatus} from '../../services/api/const';

const initialState: TFilmPromoState = {
  filmPromo: null,
  loadingStatus: RequestStatus.Idle
};

const filmPromoSlice = createSlice({
  name: StoreSlice.FilmPromo,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchFilmPromo.fulfilled, (state, action: PayloadAction<TFilmPromo>) => {
        state.filmPromo = action.payload;
        state.loadingStatus = RequestStatus.Success;
      })
      .addCase(fetchFilmPromo.pending, (state) => {
        state.loadingStatus = RequestStatus.Pending;
      })
      .addCase(fetchFilmPromo.rejected, (state) => {
        state.filmPromo = null;
        state.loadingStatus = RequestStatus.Error;
      })
      .addCase(setFavorite.fulfilled, (state, action: PayloadAction<TFilmFavorite>) => {
        if (state.filmPromo?.id === action.payload.id) {
          state.filmPromo.isFavorite = action.payload.isFavorite;
        }
      });
  }
});

export default filmPromoSlice;
