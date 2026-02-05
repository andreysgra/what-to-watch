import FilmCard from '../film-card/film-card';
import {TFilms} from '../../types/film';

type FilmsListProps = {
  films: TFilms;
}

function FilmsList({films}: FilmsListProps) {
  return (
    <div className="catalog__films-list">
      {films.map((film) => <FilmCard key={film.id} film={film} />)}
    </div>
  );
}

export default FilmsList;
