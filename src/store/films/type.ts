import {TFilms} from '../../types/film';

export type TFilmsState = {
  films: TFilms;
  filmsSimilar: TFilms;
  filmsFavorite: TFilms;
  isFilmsLoading: boolean;
  isFilmsFavoriteLoading: boolean;
}
