import {State} from '../../types/state';
import {StoreSlice} from '../const';
import {createSelector} from '@reduxjs/toolkit';
import {getFilms} from '../films/selectors';
import {groupBy} from '../../utils/utils';
import {ALL_GENRES} from '../../const';

const storeSlice = StoreSlice.SiteProcess;

export const getGenre = (state: State) => state[storeSlice].genre;

export const getFilmsCount = (state: State) => state[storeSlice].filmsCount;

export const getFilmsByGenre = createSelector(
  [getFilms, getGenre],
  (films, genre) =>
    (genre === ALL_GENRES) ? films : films.filter((film) => film.genre === genre)
);

export const getGroupedFilms = createSelector(
  [getFilms],
  (films) => groupBy(films, (film) => film.genre)
);
