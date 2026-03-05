import {FilmRatingLevel, FilmRatingMinThreshold, MAX_STARRING_COUNT} from '../const';

export const getFormattedRunTime = (runtime: number): string => {
  const hours = Math.floor(runtime / 60);
  const minutes = runtime % 60;

  return hours > 0 ? `${hours}h ${minutes}m` : `${minutes}m`;
};

export const getFormattedDuration = (runtime: number): string => {
  const hours = Math.floor(runtime / 3600);
  const minutes = Math.floor((runtime % 3600) / 60);
  const seconds = runtime % 60;

  const formattedHours = hours ? `${hours.toString().padStart(2, '0')}:` : '';
  const formattedMinutes = `${minutes.toString().padStart(2, '0')}:`;
  const formattedSeconds = `${seconds.toString().padStart(2, '0')}`;

  return `${formattedHours}${formattedMinutes}${formattedSeconds}`;
};

export const getStarringShortList = (starring: string[]): string => {
  const shortStarring = starring.slice(0, MAX_STARRING_COUNT).join(', ');

  return starring.length > MAX_STARRING_COUNT ? shortStarring.concat(' and other') : shortStarring;
};

export const getFormattedRating = (rating: number): string =>
  rating.toFixed(1).replace('.', ',');

export const getFilmRating = (rating: number): string => {
  switch (true) {
    case rating === FilmRatingMinThreshold[FilmRatingLevel.Awesome]:
      return FilmRatingLevel.Awesome;
    case rating >= FilmRatingMinThreshold[FilmRatingLevel.VeryGood]:
      return FilmRatingLevel.VeryGood;
    case rating >= FilmRatingMinThreshold[FilmRatingLevel.Good]:
      return FilmRatingLevel.Good;
    case rating >= FilmRatingMinThreshold[FilmRatingLevel.Normal]:
      return FilmRatingLevel.Normal;
    default:
      return FilmRatingLevel.Bad;
  }
};

export const getFormattedDate = (date: string): string =>
  new Date(date).toLocaleDateString('en-US', {month: 'long', day: '2-digit', year: 'numeric', });

export const groupBy = <K extends PropertyKey, T>(items: Iterable<T>, getKey: (item: T) => K) =>
  Array.from(items).reduce(
    (result, item) => {
      const key = getKey(item);

      (result[key] ??= []).push(item);

      return result;
    },
    {} as Record<K, T[]>
  );
