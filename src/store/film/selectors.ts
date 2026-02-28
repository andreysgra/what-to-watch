import {State} from '../../types/state';
import {StoreSlice} from '../const';

export const getFilm = (state: State) => state[StoreSlice.Film].film;

export const getIsFilmLoading = (state: State) => state[StoreSlice.Film].isFilmLoading;
