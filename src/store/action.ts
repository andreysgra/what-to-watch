import {createAction} from '@reduxjs/toolkit/src';
import {TFilms} from '../types/film';

export const setGenre = createAction<string>('genre/set');

export const setFilms = createAction<TFilms>('films/set');

export const setFilmsCount = createAction<number>('filmsCount/set');
