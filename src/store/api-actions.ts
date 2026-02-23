import {createAsyncThunk} from '@reduxjs/toolkit';
import {TFilms} from '../types/film';
import {AxiosInstance} from 'axios';
import {ApiRoute} from '../services/api/api-route';
import {TUser, TUserAuth} from '../types/user';
import {dropToken, saveToken} from '../services/token';

export const fetchFilms = createAsyncThunk<TFilms, undefined, {extra: AxiosInstance}>(
  'films/fetch',
  async (_, {extra: api}) => {
    const {data} = await api.get<TFilms>(ApiRoute.Films);

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
