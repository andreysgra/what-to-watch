import {FavoriteStatus} from '../services/api/const';

export type TFilm = {
  id: string;
  name: string;
  previewImage: string;
  previewVideoLink: string;
  genre: string;
}

export type TFilms = TFilm[];

export type TFilmPromo = Omit<TFilm, 'previewImage' | 'previewVideoLink'> & {
  posterImage: string;
  backgroundImage: string;
  videoLink: string;
  released: number;
  isFavorite: boolean;
}

export type TFilmDetailed = TFilmPromo & {
  backgroundColor: string;
  description: string;
  rating: number;
  scoresCount: number;
  director: string;
  starring: string[];
  runTime: number;
}
export type TFilmFavorite = TFilmDetailed & {
  previewImage: string;
  previewVideoLink: string;
}

export type TFavoriteStatus = Pick<TFilm, 'id'> & {status: FavoriteStatus};
