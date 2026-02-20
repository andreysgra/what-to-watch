import GenresList from '../genres-list/genres-list';
import FilmsList from '../films-list/films-list';
import {useAppSelector} from '../../hooks/use-app-selector';
import {ALL_GENRES, MAX_GENRES_COUNT} from '../../const';
import {groupBy} from '../../utils/utils';

function Catalog() {
  const films = useAppSelector((state) => state.films);
  const activeGenre = useAppSelector((state) => state.genre);

  const filmsGroupedByGenre = groupBy(films, (film) => film.genre);

  const genres = [ALL_GENRES, ...Object.keys(filmsGroupedByGenre)
    .slice(0, MAX_GENRES_COUNT)
    .sort()];

  const filmsByGenre =
    (activeGenre === ALL_GENRES) ? films : films.filter((film) => film.genre === activeGenre);

  return (
    <section className="catalog">
      <h2 className="catalog__title visually-hidden">Catalog</h2>
      <GenresList genres={genres} />
      <FilmsList films={filmsByGenre} />
      <div className="catalog__more">
        <button className="catalog__button" type="button">
          Show more
        </button>
      </div>
    </section>
  );
}

export default Catalog;
