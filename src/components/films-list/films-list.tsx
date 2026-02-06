import FilmCard from '../film-card/film-card';
import {TFilms} from '../../types/film';
import {useState} from 'react';

type FilmsListProps = {
  films: TFilms;
}

function FilmsList({films}: FilmsListProps) {
  const [, setActiveOfferId] = useState<string | null>(null);

  const handleCardMouseEnter = (id: string) => setActiveOfferId(id);
  const handleCardMouseLeave = () => setActiveOfferId(null);

  return (
    <div className="catalog__films-list">
      {films.map((film) => (
        <FilmCard
          key={film.id} film={film}
          onMouseEnter={handleCardMouseEnter}
          onMouseLeave={handleCardMouseLeave}
        />
      ))}
    </div>
  );
}

export default FilmsList;
