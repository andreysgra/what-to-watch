import {TFilmPromoState} from './type';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {StoreSlice} from '../const';
import {fetchFilmPromo} from './api-actions';
import {TFilmPromo} from '../../types/film';

const initialState: TFilmPromoState = {
  filmPromo: null
};

const filmPromoSlice = createSlice({
  name: StoreSlice.FilmPromo,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchFilmPromo.fulfilled, (state, action: PayloadAction<TFilmPromo>) => {
        state.filmPromo = action.payload;
      });
  }
});

export default filmPromoSlice;
