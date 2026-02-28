import {combineReducers} from '@reduxjs/toolkit';
import {StoreSlice} from './const';
import commentsSlice from './comments/slice';
import filmSlice from './film/slice';
import filmsSlice from './films/slice';
import filmPromoSlice from './film-promo/slice';
import siteProcessSlice from './site-process/slice';
import userSlice from './user/slice';


export const reducer = combineReducers({
  [StoreSlice.Comments]: commentsSlice.reducer,
  [StoreSlice.Film]: filmSlice.reducer,
  [StoreSlice.FilmPromo]: filmPromoSlice.reducer,
  [StoreSlice.Films]: filmsSlice.reducer,
  [StoreSlice.SiteProcess]: siteProcessSlice.reducer,
  [StoreSlice.User]: userSlice.reducer
});
