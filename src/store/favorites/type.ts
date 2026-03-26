import {TFilms} from '../../types/film';
import {RequestStatus} from '../../services/api/const';

export type TFilmsFavoriteState = {
  filmsFavorite: TFilms;
  addingStatus: RequestStatus;
  loadingStatus: RequestStatus;
}
