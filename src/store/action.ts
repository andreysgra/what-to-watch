import {createAction} from '@reduxjs/toolkit';

export const setGenre = createAction<string>('genre/set');

export const setFilmsCount = createAction<number>('filmsCount/set');
