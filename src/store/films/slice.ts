import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {StoreSlice} from '../const';
import {TFilmsState} from './type';
import {fetchFilms, fetchFilmsSimilar} from './api-actions';
import {TFilms} from '../../types/film';

const initialState: TFilmsState = {
  films: [],
  filmsSimilar: [],
  isFilmsLoading: false
};

const filmsSlice = createSlice({
  name: StoreSlice.Films,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchFilms.fulfilled, (state, action: PayloadAction<TFilms>) => {
        state.films = action.payload;
        state.isFilmsLoading = false;
      })
      .addCase(fetchFilms.pending, (state) => {
        state.isFilmsLoading = true;
      })
      .addCase(fetchFilms.rejected, (state) => {
        state.isFilmsLoading = false;
      })
      .addCase(fetchFilmsSimilar.fulfilled, (state, action: PayloadAction<TFilms>) => {
        state.filmsSimilar = action.payload;
      });
  }
});

export default filmsSlice;
