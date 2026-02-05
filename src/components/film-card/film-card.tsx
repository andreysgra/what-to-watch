import {TFilm} from '../../types/film';
import {Link} from 'react-router-dom';
import {AppRoute, RouteParam} from '../../const';

type FilmCardProps = {
  film: TFilm;
  onMouseEnter: (id: string) => void;
  onMouseLeave: () => void;
}

function FilmCard({film, onMouseEnter, onMouseLeave}: FilmCardProps) {
  const {id, name, previewImage} = film;
  const link = AppRoute.Film.replace(RouteParam.Id, id);

  const handleMouseEnter = () => onMouseEnter(id);
  const handleMouseLeave = () => onMouseLeave();

  return (
    <article
      className="small-film-card catalog__films-card"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Link className="small-film-card__image" to={link}>
        <img
          src={previewImage}
          alt={name}
          width={280}
          height={175}
        />
      </Link>
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to={link}>
          {name}
        </Link>
      </h3>
    </article>
  );
}

export default FilmCard;
