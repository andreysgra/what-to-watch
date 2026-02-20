import {TFilms} from '../types/film';
import {createReducer} from '@reduxjs/toolkit/src';
import {setFilms, setGenre} from './action';
import {ALL_GENRES} from '../const';

type State = {
  genre: string;
  films: TFilms;
}

const initialState: State = {
  genre: ALL_GENRES,
  films: []
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setGenre, (state, action) => {
      state.genre = action.payload;
    })
    .addCase(setFilms, (state, action) => {
      state.films = action.payload;
    });
});
