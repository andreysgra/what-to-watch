import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import {Provider} from 'react-redux';
import store from './store';
import {fetchUserStatus} from './store/user/api-actions';
import {fetchFilms} from './store/films/api-actions';
import {fetchFilmPromo} from './store/film-promo/api-actions';

store.dispatch(fetchUserStatus());
store.dispatch(fetchFilms());
store.dispatch(fetchFilmPromo());

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
