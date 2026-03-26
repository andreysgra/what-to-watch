import FilmCard from '../film-card/film-card';
import {TFilms} from '../../types/film';

type FilmsListProps = {
  films: TFilms;
  filmsCount?: number;
}

function FilmsList({films, filmsCount = films.length}: FilmsListProps) {
  return (
    <div className="catalog__films-list">
      {films.slice(0, filmsCount).map((film) => (
        <FilmCard key={film.id} film={film} />
      ))}
    </div>
  );
}

export default FilmsList;
