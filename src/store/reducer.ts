import {TFilms} from '../types/film';
import {createReducer} from '@reduxjs/toolkit';
import {setFilmsCount, setGenre} from './action';
import {ALL_GENRES, AuthorizationStatus, FILMS_PER_LOAD} from '../const';
import {fetchFilms, fetchUserStatus, loginUser, logoutUser} from './api-actions';
import {TUser} from '../types/user';

type State = {
  genre: string;
  films: TFilms;
  filmsCount: number;
  isFilmsLoading: boolean;
  authorizationStatus: AuthorizationStatus;
  user: Pick<TUser, 'name' | 'avatarUrl'>;
}

const initialState: State = {
  genre: ALL_GENRES,
  films: [],
  filmsCount: FILMS_PER_LOAD,
  isFilmsLoading: false,
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
