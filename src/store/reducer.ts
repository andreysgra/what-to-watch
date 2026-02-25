import {TFilmDetailed, TFilmPromo, TFilms} from '../types/film';
import {createReducer} from '@reduxjs/toolkit';
import {setFilmsCount, setGenre} from './action';
import {ALL_GENRES, AuthorizationStatus, FILMS_PER_LOAD} from '../const';
import {
  fetchComments,
  fetchFilm,
  fetchFilmPromo,
  fetchFilms,
  fetchFilmsFavorite,
  fetchFilmsSimilar,
  fetchUserStatus,
  loginUser,
  logoutUser
} from './api-actions';
import {TUser} from '../types/user';
import {TReviews} from '../types/review';

type State = {
  genre: string;
  films: TFilms;
  film: TFilmDetailed | null;
  filmPromo: TFilmPromo | null;
  filmsSimilar: TFilms;
  filmsFavorite: TFilms;
  comments: TReviews;
  filmsCount: number;
  isFilmsLoading: boolean;
  isFilmLoading: boolean;
  isFilmsFavoriteLoading: boolean;
  authorizationStatus: AuthorizationStatus;
  user: Pick<TUser, 'name' | 'avatarUrl'>;
}

const initialState: State = {
  genre: ALL_GENRES,
  films: [],
  film: null,
  filmPromo: null,
  filmsSimilar: [],
  filmsFavorite: [],
  comments: [],
  filmsCount: FILMS_PER_LOAD,
  isFilmsLoading: false,
  isFilmLoading: false,
  isFilmsFavoriteLoading: false,
  authorizationStatus: AuthorizationStatus.Unknown,
  user: {
    name: '',
    avatarUrl: ''
  }
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
    .addCase(fetchFilm.fulfilled, (state, action) => {
      state.film = action.payload;
      state.isFilmLoading = false;
    })
    .addCase(fetchFilm.pending, (state) => {
      state.isFilmLoading = true;
    })
    .addCase(fetchFilm.rejected, (state) => {
      state.isFilmLoading = false;
    })
    .addCase(fetchFilmPromo.fulfilled, (state, action) => {
      state.filmPromo = action.payload;
    })
    .addCase(fetchFilmsSimilar.fulfilled, (state, action) => {
      state.filmsSimilar = action.payload;
    })
    .addCase(fetchFilmsFavorite.fulfilled, (state, action) => {
      state.filmsFavorite = action.payload;
      state.isFilmsFavoriteLoading = false;
    })
    .addCase(fetchFilmsFavorite.pending, (state) => {
      state.isFilmsFavoriteLoading = true;
    })
    .addCase(fetchFilmsFavorite.rejected, (state) => {
      state.isFilmsFavoriteLoading = false;
    })
    .addCase(fetchComments.fulfilled, (state, action) => {
      state.comments = action.payload;
    })
    .addCase(fetchUserStatus.fulfilled, (state, action) => {
      state.user = action.payload;
      state.authorizationStatus = AuthorizationStatus.Auth;
    })
    .addCase(fetchUserStatus.rejected, (state) => {
      state.authorizationStatus = AuthorizationStatus.NoAuth;
    })
    .addCase(loginUser.fulfilled, (state, action) => {
      state.user = action.payload;
      state.authorizationStatus = AuthorizationStatus.Auth;
    })
    .addCase(logoutUser.fulfilled, (state) => {
      state.user = {name: '', avatarUrl: ''};
      state.authorizationStatus = AuthorizationStatus.NoAuth;
    });
});
