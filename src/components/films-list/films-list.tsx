import FilmCard from '../film-card/film-card';
import {TFilms} from '../../types/film';
import {useState} from 'react';
import {FILMS_PER_LOAD} from '../../const';

type FilmsListProps = {
  films: TFilms;
  filmsCount?: number;
}

function FilmsList({films, filmsCount = FILMS_PER_LOAD}: FilmsListProps) {
  const [filmCurrentId, setFilmCurrentId] = useState<string | null>(null);

  const handleCardMouseEnter = (id: string) => setFilmCurrentId(id);
  const handleCardMouseLeave = () => setFilmCurrentId(null);

  return (
    <div className="catalog__films-list">
      {films.slice(0, filmsCount).map((film) => (
        <FilmCard
          key={film.id} film={film}
          filmCurrentId={filmCurrentId}
          onMouseEnter={handleCardMouseEnter}
          onMouseLeave={handleCardMouseLeave}
        />
      ))}
    </div>
  );
}

export default FilmsList;
