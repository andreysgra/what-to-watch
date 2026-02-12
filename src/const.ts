export enum AppRoute {
  Root = '/',
  Login = '/login',
  MyList = '/mylist',
  Film = '/films/:id',
  AddReview = '/films/:id/review',
  Player = '/player/:id'
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH'
}

export enum RouteParam {
  Id = ':id',
  Status = ':status'
}

export enum FilmRatingLevel {
  Bad = 'Bad',
  Normal = 'Normal',
  Good = 'Good',
  VeryGood = 'Very good',
  Awesome = 'Awesome'
}

export enum FilmTabName {
  Overview = 'Overview',
  Details = 'Details',
  Reviews = 'Reviews'
}

export const FilmRatingMinThreshold = {
  [FilmRatingLevel.Normal]: 3,
  [FilmRatingLevel.Good]: 5,
  [FilmRatingLevel.VeryGood]: 8,
  [FilmRatingLevel.Awesome]: 10
} as const;

export const STARS_COUNT = 10;

export const CommentLength = {
  Min: 50,
  Max: 300
} as const;

export const DELAY_BEFORE_PLAY_VIDEO = 1000;

export const MAX_STARRING_COUNT = 4;

export const MAX_SIMILAR_FILMS_COUNT = 4;

export const FILMS_PER_LOAD = 8;

export const REVIEW_COLUMNS_COUNT = 2;
