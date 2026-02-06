import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import {films} from './mocks/films';
import {filmPromo} from './mocks/film-promo';
import {film} from './mocks/film';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App films={films} filmPromo={filmPromo} film={film} />
  </React.StrictMode>
);
