import {TFilms} from '../types/film';
import {createReducer} from '@reduxjs/toolkit';
import {setFilmsCount, setGenre} from './action';
import {ALL_GENRES, AuthorizationStatus, FILMS_PER_LOAD} from '../const';
import {fetchFilms, fetchUserStatus} from './api-actions';

type State = {
  genre: string;
  films: TFilms;
  filmsCount: number;
  isFilmsLoading: boolean;
  authorizationStatus: AuthorizationStatus;
}

const initialState: State = {
  genre: ALL_GENRES,
  films: [],
  filmsCount: FILMS_PER_LOAD,
  isFilmsLoading: false,
  authorizationStatus: AuthorizationStatus.NoAuth
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setGenre, (state, action) => {
      state.genre = action.payload;
    })
    .addCase(setFilmsCount, (state, action) => {
      state.filmsCount = action.payload;
    })
    .addCase(fetchFilms.fulfilled, (state, action) => {
      state.films = action.payload;
      state.isFilmsLoading = false;
    })
    .addCase(fetchFilms.pending, (state) => {
      state.isFilmsLoading = true;
    })
    .addCase(fetchUserStatus.fulfilled, (state) => {
      state.authorizationStatus = AuthorizationStatus.Auth;
    })
    .addCase(fetchUserStatus.rejected, (state) => {
      state.authorizationStatus = AuthorizationStatus.NoAuth;
    });
});
