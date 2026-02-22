import {createAsyncThunk} from '@reduxjs/toolkit';
import {TFilms} from '../types/film';
import {AxiosInstance} from 'axios';
import {ApiRoute} from '../services/api/api-route';

export const fetchFilms = createAsyncThunk<TFilms, undefined, {extra: AxiosInstance}>(
  'films/fetch',
  async (_, {extra: api}) => {
    const {data} = await api.get<TFilms>(ApiRoute.Films);

    return data;
  }
);
