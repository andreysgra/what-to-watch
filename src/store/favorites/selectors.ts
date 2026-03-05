import {State} from '../../types/state';
import {StoreSlice} from '../const';

export const getFilmsFavorite = (state: State) => state[StoreSlice.Favorites].filmsFavorite;

export const getIsFilmsFavoriteLoading =
  (state: State) => state[StoreSlice.Favorites].isFilmsFavoriteLoading;

export const getIsStatusPending =
  (state: State) => state[StoreSlice.Favorites].isStatusPending;
