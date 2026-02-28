import {State} from '../../types/state';
import {StoreSlice} from '../const';

export const getFilms = (state: State) => state[StoreSlice.Films].films;

export const getFilmsSimilar = (state: State) => state[StoreSlice.Films].filmsSimilar;

export const getFilmsFavorite = (state: State) => state[StoreSlice.Films].filmsFavorite;

export const getIsFilmsLoading = (state: State) => state[StoreSlice.Films].isFilmsLoading;

export const getIsFilmsFavoriteLoading =
  (state: State) => state[StoreSlice.Films].isFilmsFavoriteLoading;
