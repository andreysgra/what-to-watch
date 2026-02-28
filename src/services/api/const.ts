export const BASE_URL = 'https://16.design.htmlacademy.pro/wtw';

export const REQUEST_TIMEOUT = 5000;

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN'
}

export enum SubmitStatus {
  Still = 'STILL',
  Pending = 'PENDING',
  Fulfilled = 'FULFILLED',
  Rejected = 'REJECTED'
}
