import FilmCard from '../film-card/film-card';
import {TFilms} from '../../types/film';
import {useState} from 'react';

type FilmsListProps = {
  films: TFilms;
}

function FilmsList({films}: FilmsListProps) {
  const [filmCurrentId, setFilmCurrentId] = useState<string | null>(null);

  const handleCardMouseEnter = (id: string) => setFilmCurrentId(id);
  const handleCardMouseLeave = () => setFilmCurrentId(null);

  return (
    <div className="catalog__films-list">
      {films.map((film) => (
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
