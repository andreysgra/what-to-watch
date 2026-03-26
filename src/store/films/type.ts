import {TFilms} from '../../types/film';
import {RequestStatus} from '../../services/api/const';

export type TFilmsState = {
  films: TFilms;
  filmsSimilar: TFilms;
  loadingStatus: RequestStatus;
}
