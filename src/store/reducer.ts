import {TFilms} from '../types/film';
import {createReducer} from '@reduxjs/toolkit';
import {setFilms, setFilmsCount, setGenre} from './action';
import {ALL_GENRES, FILMS_PER_LOAD} from '../const';

type State = {
  genre: string;
  films: TFilms;
  filmsCount: number;
}

const initialState: State = {
  genre: ALL_GENRES,
  films: [],
  filmsCount: FILMS_PER_LOAD
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setGenre, (state, action) => {
      state.genre = action.payload;
    })
    .addCase(setFilms, (state, action) => {
      state.films = action.payload;
    })
    .addCase(setFilmsCount, (state, action) => {
      state.filmsCount = action.payload;
    });
});
