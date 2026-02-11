import {getFilmRating, getFormattedRating} from '../../utils/utils';

type FilmRatingProps = {
  rating: number;
  scoresCount: number;
}
function FilmRating({rating, scoresCount}: FilmRatingProps) {
  return (
    <div className="film-rating">
      <div className="film-rating__score">{getFormattedRating(rating)}</div>
      <p className="film-rating__meta">
        <span className="film-rating__level">{getFilmRating(rating)}</span>
        <span className="film-rating__count">{scoresCount} ratings</span>
      </p>
    </div>
  );
}

export default FilmRating;
