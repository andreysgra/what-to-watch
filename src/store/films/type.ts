import {TFilms} from '../../types/film';

export type TFilmsState = {
  films: TFilms;
  filmsSimilar: TFilms;
  isFilmsLoading: boolean;
}
