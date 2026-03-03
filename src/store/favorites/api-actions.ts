import {createAsyncThunk} from '@reduxjs/toolkit';
import {TFilms} from '../../types/film';
import {AxiosInstance} from 'axios';
import {StoreSlice} from '../const';
import {ApiRoute} from '../../services/api/api-route';

export const fetchFilmsFavorite = createAsyncThunk<TFilms, undefined, {extra: AxiosInstance}>(
  `${StoreSlice.Favorites}/fetch`,
  async (_, {extra: api}) => {
    const {data} = await api.get<TFilms>(ApiRoute.Favorite);

    return data;
  }
);
