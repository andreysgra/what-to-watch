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

export const STARS_COUNT = 10;

export const CommentLength = {
  Min: 50,
  Max: 300
} as const;
