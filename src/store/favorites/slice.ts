import {TFilmsFavoriteState} from './type';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {StoreSlice} from '../const';
import {fetchFilmsFavorite, setFavorite} from './api-actions';
import {TFilmFavorite, TFilms} from '../../types/film';
import {RequestStatus} from '../../services/api/const';

const initialState: TFilmsFavoriteState = {
  filmsFavorite: [],
  addingStatus: RequestStatus.Idle,
  loadingStatus: RequestStatus.Idle
};

const filmsFavoriteSlice = createSlice({
  name: StoreSlice.Favorites,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchFilmsFavorite.fulfilled, (state, action: PayloadAction<TFilms>) => {
        state.filmsFavorite = action.payload;
        state.loadingStatus = RequestStatus.Success;
      })
      .addCase(fetchFilmsFavorite.pending, (state) => {
        state.loadingStatus = RequestStatus.Pending;
      })
      .addCase(fetchFilmsFavorite.rejected, (state) => {
        state.loadingStatus = RequestStatus.Error;
      })
      .addCase(setFavorite.fulfilled, (state, action: PayloadAction<TFilmFavorite>) => {
        if (action.payload.isFavorite) {
          state.filmsFavorite.push(action.payload);
        } else {
          state.filmsFavorite = state.filmsFavorite.filter((favoriteOffer) =>
            favoriteOffer.id !== action.payload.id);
        }

        state.addingStatus = RequestStatus.Success;
      })
      .addCase(setFavorite.pending, (state) => {
        state.addingStatus = RequestStatus.Pending;
      })
      .addCase(setFavorite.rejected, (state) => {
        state.addingStatus = RequestStatus.Error;
      });
  }
});

export default filmsFavoriteSlice;
