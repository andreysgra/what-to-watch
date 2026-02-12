import {Fragment} from 'react';
import {TFilmDetailed} from '../../types/film';
import {getStarringShortList} from '../../utils/utils';
import FilmRating from '../film-rating/film-rating';

type FilmOverviewTabProps = {
  film: TFilmDetailed;
}

function FilmOverviewTab({film}: FilmOverviewTabProps) {
  const {scoresCount, description, director, rating, starring} = film;

  return (
    <Fragment>
      <FilmRating rating={rating} scoresCount={scoresCount} />
      <div className="film-card__text">
        <p>{description}</p>
        <p className="film-card__director">
          <strong>Director: {director}</strong>
        </p>
        <p className="film-card__starring">
          <strong>
            Starring: {getStarringShortList(starring)}
          </strong>
        </p>
      </div>
    </Fragment>
  );
}

export default FilmOverviewTab;
