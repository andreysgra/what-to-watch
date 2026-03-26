import {State} from '../../types/state';
import {StoreSlice} from '../const';
import {RequestStatus} from '../../services/api/const';

const storeSlice = StoreSlice.Films;

export const getFilms = (state: State) => state[storeSlice].films;

export const getFilmsSimilar = (state: State) => state[storeSlice].filmsSimilar;

export const getIsFilmsLoading = (state: State) =>
  state[storeSlice].loadingStatus === RequestStatus.Pending;
