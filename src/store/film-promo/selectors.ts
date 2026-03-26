import {State} from '../../types/state';
import {StoreSlice} from '../const';
import {RequestStatus} from '../../services/api/const';

const storeSlice = StoreSlice.FilmPromo;

export const getFilmPromo = (state: State) => state[storeSlice].filmPromo;

export const getIsFilmPromoLoading = (state: State) =>
  state[storeSlice].loadingStatus === RequestStatus.Pending;

export const getIsFilmPromoFailed = (state: State)=>
  state[storeSlice].loadingStatus === RequestStatus.Error;
