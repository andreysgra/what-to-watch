import {TFilmDetailed} from '../../types/film';
import {RequestStatus} from '../../services/api/const';

export type TFilmState = {
  film: TFilmDetailed | null;
  loadingStatus: RequestStatus;
}
