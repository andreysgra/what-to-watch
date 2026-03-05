import {State} from '../../types/state';
import {StoreSlice} from '../const';

export const getFilms = (state: State) => state[StoreSlice.Films].films;

export const getFilmsSimilar = (state: State) => state[StoreSlice.Films].filmsSimilar;

export const getIsFilmsLoading = (state: State) => state[StoreSlice.Films].isFilmsLoading;
