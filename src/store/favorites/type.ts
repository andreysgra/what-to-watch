import {TFilms} from '../../types/film';

export type TFilmsFavoriteState = {
  filmsFavorite: TFilms;
  isFilmsFavoriteLoading: boolean;
  isStatusPending: boolean;
}
