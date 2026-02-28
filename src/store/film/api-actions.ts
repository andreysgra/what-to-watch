import {createAsyncThunk} from '@reduxjs/toolkit';
import {TFilmDetailed} from '../../types/film';
import {AxiosError, AxiosInstance} from 'axios';
import {AppDispatch} from '../../types/state';
import {ApiRoute} from '../../services/api/api-route';
import {HttpCode} from '../../services/api/http-code';
import {redirectToRoute} from '../action';
import {AppRoute} from '../../const';
import {StoreSlice} from '../const';

export const fetchFilm = createAsyncThunk<TFilmDetailed, TFilmDetailed['id'], {
  extra: AxiosInstance;
  dispatch: AppDispatch;
}>(
  `${StoreSlice.Film}/fetch`,
  async (id, {extra: api, dispatch}) => {
    try {
      const {data} = await api.get<TFilmDetailed>(`${ApiRoute.Films}/${id}`);

      return data;
    } catch (error) {
      const axiosError = error as AxiosError;

      if (axiosError.response?.status === HttpCode.NotFound) {
        dispatch(redirectToRoute(AppRoute.NotFound));
      }

      return Promise.reject(error);
    }
  }
);
