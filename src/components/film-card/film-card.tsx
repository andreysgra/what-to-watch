import {TFilm} from '../../types/film';
import {Link} from 'react-router-dom';
import {AppRoute, RouteParam} from '../../const';

type FilmCardProps = {
  film: TFilm;
}

function FilmCard({film}: FilmCardProps) {
  const {id, name, previewImage} = film;
  const link = AppRoute.Film.replace(RouteParam.Id, id);

  return (
    <article className="small-film-card catalog__films-card">
      <div className="small-film-card__image">
        <img
          src={previewImage}
          alt={name}
          width={280}
          height={175}
        />
      </div>
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to={link}>
          {name}
        </Link>
      </h3>
    </article>
  );
}

export default FilmCard;
