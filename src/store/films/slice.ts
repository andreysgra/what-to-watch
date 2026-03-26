import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {StoreSlice} from '../const';
import {TFilmsState} from './type';
import {fetchFilms, fetchFilmsSimilar} from './api-actions';
import {TFilms} from '../../types/film';
import {RequestStatus} from '../../services/api/const';

const initialState: TFilmsState = {
  films: [],
  filmsSimilar: [],
  loadingStatus: RequestStatus.Idle
};

const filmsSlice = createSlice({
  name: StoreSlice.Films,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchFilms.fulfilled, (state, action: PayloadAction<TFilms>) => {
        state.films = action.payload;
        state.loadingStatus = RequestStatus.Success;
      })
      .addCase(fetchFilms.pending, (state) => {
        state.loadingStatus = RequestStatus.Pending;
      })
      .addCase(fetchFilms.rejected, (state) => {
        state.loadingStatus = RequestStatus.Error;
      })
      .addCase(fetchFilmsSimilar.fulfilled, (state, action: PayloadAction<TFilms>) => {
        state.filmsSimilar = action.payload;
      })
      .addCase(fetchFilmsSimilar.rejected, (state) => {
        state.filmsSimilar = [];
      });
  }
});

export default filmsSlice;
