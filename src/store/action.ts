import {createAction} from '@reduxjs/toolkit';
import {AppRoute} from '../const';

export const setGenre = createAction<string>('genre/set');

export const setFilmsCount = createAction<number>('filmsCount/set');

export const redirectToRoute = createAction<AppRoute>('app/redirectToRoute');
