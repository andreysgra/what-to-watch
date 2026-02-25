import {createAsyncThunk} from '@reduxjs/toolkit';
import {TFilm, TFilmDetailed, TFilmPromo, TFilms} from '../types/film';
import {AxiosError, AxiosInstance} from 'axios';
import {ApiRoute} from '../services/api/api-route';
import {TUser, TUserAuth} from '../types/user';
import {dropToken, saveToken} from '../services/token';
import {AppDispatch} from '../types/state';
import {HttpCode} from '../services/api/http-code';
import {redirectToRoute} from './action';
import {AppRoute} from '../const';
import browserHistory from '../services/browser-history';
import {TReviews} from '../types/review';

export const fetchFilms = createAsyncThunk<TFilms, undefined, {extra: AxiosInstance}>(
  'films/fetch',
  async (_, {extra: api}) => {
    const {data} = await api.get<TFilms>(ApiRoute.Films);

    return data;
  }
);

export const fetchFilm = createAsyncThunk<TFilmDetailed, TFilmDetailed['id'], {
  extra: AxiosInstance;
  dispatch: AppDispatch;
}>(
  'film/fetch',
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

export const fetchFilmPromo = createAsyncThunk<TFilmPromo, undefined, {extra: AxiosInstance}>(
  'film-promo/fetch',
  async (_, {extra: api}) => {
    const {data} = await api.get<TFilmPromo>(ApiRoute.Promo);

    return data;
  }
);

export const fetchComments = createAsyncThunk<TReviews, TFilm['id'], {extra: AxiosInstance}>(
  'film/fetch-comments',
  async (id, {extra: api}) => {
    const {data} = await api.get<TReviews>(`${ApiRoute.Comments}/${id}`);

    return data;
  }
);

export const fetchUserStatus = createAsyncThunk<TUser, undefined, {extra: AxiosInstance}>(
  'user/fetch-status',
  async (_, {extra: api}) => {
    const {data} = await api.get<TUser>(ApiRoute.Login);

    return data;
  }
);

export const loginUser = createAsyncThunk<TUser, TUserAuth, { extra: AxiosInstance }>(
  'user/login',
  async ({email, password}, {extra: api}) => {
    const {data} = await api.post<TUser>(ApiRoute.Login, {email, password});
    const {token} = data;

    saveToken(token);
    browserHistory.back();

    return data;
  }
);

export const logoutUser = createAsyncThunk<void, undefined, { extra: AxiosInstance }>(
  'user/logout',
  async (_, {extra: api}) => {
    await api.delete(ApiRoute.Logout);

    dropToken();
  }
);
