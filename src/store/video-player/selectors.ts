import {State} from '../../types/state';
import {StoreSlice} from '../const';
import {getFormattedDuration} from '../../utils/utils';

export const getRemainingTime = (state: State): string => {
  const remainingTime =
    Math.round(state[StoreSlice.VideoPlayer].duration - state[StoreSlice.VideoPlayer].currentTime);

  return remainingTime > 0 ? `-${getFormattedDuration(remainingTime)}` : `${getFormattedDuration(remainingTime)}`;
};

export const getPlaybackProgress = (state: State): number =>
  Math.ceil(state[StoreSlice.VideoPlayer].currentTime * 100 / state[StoreSlice.VideoPlayer].duration) || 0;
