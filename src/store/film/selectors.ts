import {State} from '../../types/state';
import {StoreSlice} from '../const';
import {RequestStatus} from '../../services/api/const';

const storeSlice = StoreSlice.Film;

export const getFilm = (state: State) => state[storeSlice].film;

export const getIsFilmLoading = (state: State) =>
  state[storeSlice].loadingStatus === RequestStatus.Pending;

export const getIsFilmFailed = (state: State)=>
  state[storeSlice].loadingStatus === RequestStatus.Error;
