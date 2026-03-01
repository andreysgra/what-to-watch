import {createAsyncThunk} from '@reduxjs/toolkit';
import {TFilm, TFilms} from '../../types/film';
import {AxiosInstance} from 'axios';
import {ApiRoute} from '../../services/api/api-route';
import {StoreSlice} from '../const';

export const fetchFilms = createAsyncThunk<TFilms, undefined, {extra: AxiosInstance}>(
  `${StoreSlice.Films}/fetch`,
  async (_, {extra: api}) => {
    const {data} = await api.get<TFilms>(ApiRoute.Films);

    return data;
  }
);

export const fetchFilmsSimilar = createAsyncThunk<TFilms, TFilm['id'], {extra: AxiosInstance}>(
  `${StoreSlice.Films}/fetch-similar`,
  async (id, {extra: api}) => {
    const {data} = await api.get<TFilms>(`${ApiRoute.Films}/${id}/similar`);

    return data;
  }
);

export const fetchFilmsFavorite = createAsyncThunk<TFilms, undefined, {extra: AxiosInstance}>(
  `${StoreSlice.Films}/fetch-favorite`,
  async (_, {extra: api}) => {
    const {data} = await api.get<TFilms>(ApiRoute.Favorite);

    return data;
  }
);
