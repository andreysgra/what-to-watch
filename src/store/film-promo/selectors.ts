import {State} from '../../types/state';
import {StoreSlice} from '../const';

export const getFilmPromo = (state: State) => state[StoreSlice.FilmPromo].filmPromo;

export const getIsFilmPromoLoading = (state: State) =>
  state[StoreSlice.FilmPromo].isFilmPromoLoading;
