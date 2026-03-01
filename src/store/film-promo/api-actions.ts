import {createAsyncThunk} from '@reduxjs/toolkit';
import {TFilmPromo} from '../../types/film';
import {AxiosInstance} from 'axios';
import {ApiRoute} from '../../services/api/api-route';
import {StoreSlice} from '../const';

export const fetchFilmPromo = createAsyncThunk<TFilmPromo, undefined, {extra: AxiosInstance}>(
  `${StoreSlice.FilmPromo}/fetch`,
  async (_, {extra: api}) => {
    const {data} = await api.get<TFilmPromo>(ApiRoute.Promo);

    return data;
  }
);
