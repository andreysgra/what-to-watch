import {createAsyncThunk} from '@reduxjs/toolkit';
import {TFavoriteStatus, TFilmFavorite, TFilms} from '../../types/film';
import {AxiosError, AxiosInstance, HttpStatusCode} from 'axios';
import {StoreSlice} from '../const';
import {ApiRoute} from '../../services/api/api-route';
import {AppDispatch} from '../../types/state';
import {AppRoute} from '../../const';
import {redirectToRoute} from '../action';

export const fetchFilmsFavorite = createAsyncThunk<TFilms, undefined, {extra: AxiosInstance}>(
  `${StoreSlice.Favorites}/fetch`,
  async (_, {extra: api}) => {
    const {data} = await api.get<TFilms>(ApiRoute.Favorite);

    return data;
  }
);

export const setFavorite = createAsyncThunk<TFilmFavorite, TFavoriteStatus, {
  extra: AxiosInstance;
  dispatch: AppDispatch;
}>(
  `${StoreSlice.Favorites}/post`,
  async ({id, status}, {extra: api, dispatch}) => {
    try {
      const {data} = await api.post<TFilmFavorite>(`${ApiRoute.Favorite}/${id}/${status}`);

      return data;
    } catch (error) {
      const axiosError = error as AxiosError;

      if (axiosError.response?.status === HttpStatusCode.Unauthorized) {
        dispatch(redirectToRoute(AppRoute.Login));
      }

      return Promise.reject(error);
    }
  }
);
