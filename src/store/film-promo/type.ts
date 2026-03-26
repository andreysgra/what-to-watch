import {TFilmPromo} from '../../types/film';
import {RequestStatus} from '../../services/api/const';

export type TFilmPromoState = {
  filmPromo: TFilmPromo | null;
  loadingStatus: RequestStatus;
}
