import {createAsyncThunk} from '@reduxjs/toolkit';
import {TReview, TReviewContent, TReviews} from '../../types/review';
import {TFilm} from '../../types/film';
import {AxiosInstance} from 'axios';
import {ApiRoute} from '../../services/api/api-route';
import {AppDispatch} from '../../types/state';
import {AppRoute, RouteParam} from '../../const';
import {redirectToRoute} from '../action';
import {StoreSlice} from '../const';

export const fetchComments = createAsyncThunk<TReviews, TFilm['id'], {extra: AxiosInstance}>(
  `${StoreSlice.Comments}/fetch`,
  async (id, {extra: api}) => {
    const {data} = await api.get<TReviews>(`${ApiRoute.Comments}/${id}`);

    return data;
  }
);

export const postComment = createAsyncThunk<TReview, TReviewContent, {
  extra: AxiosInstance;
  dispatch: AppDispatch;
}>(
  `${StoreSlice.Comments}/post`,
  async ({id, comment, rating}, {extra: api, dispatch}) => {
    const {data} = await api.post<TReview>(`${ApiRoute.Comments}/${id}`, {comment, rating});
    const filmLink = AppRoute.Film.replace(RouteParam.Id, id);

    dispatch(redirectToRoute(filmLink as AppRoute));

    return data;
  }
);
