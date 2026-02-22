import {configureStore} from '@reduxjs/toolkit';
import {reducer} from './reducer';
import {setFilms} from './action';
import {films} from '../mocks/films';
import {createApi} from '../services/api/api';

const api = createApi();

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      },
    }),
});

store.dispatch(setFilms(films));

export default store;
