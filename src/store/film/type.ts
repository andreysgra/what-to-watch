import {TFilmDetailed} from '../../types/film';

export type TFilmState = {
  film: TFilmDetailed | null;
  isFilmLoading: boolean;
}
