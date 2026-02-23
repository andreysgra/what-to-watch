import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import {filmPromo} from './mocks/film-promo';
import {film} from './mocks/film';
import {reviews} from './mocks/reviews';
import {Provider} from 'react-redux';
import store from './store';
import {fetchFilms, fetchUserStatus} from './store/api-actions';

store.dispatch(fetchUserStatus());
store.dispatch(fetchFilms());

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App reviews={reviews} filmPromo={filmPromo} film={film} />
    </Provider>
  </React.StrictMode>
);
