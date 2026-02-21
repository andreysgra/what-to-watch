import GenresList from '../genres-list/genres-list';
import FilmsList from '../films-list/films-list';
import {useAppSelector} from '../../hooks/use-app-selector';
import {ALL_GENRES, FILMS_PER_LOAD, MAX_GENRES_COUNT} from '../../const';
import {groupBy} from '../../utils/utils';
import ShowMoreButton from '../show-more-button/show-more-button';
import {useAppDispatch} from '../../hooks/use-app-dispatch';
import {setFilmsCount} from '../../store/action';

function Catalog() {
  const films = useAppSelector((state) => state.films);
  const activeGenre = useAppSelector((state) => state.genre);
  const displayedFilms = useAppSelector((state) => state.filmsCount);

  const dispatch = useAppDispatch();

  const filmsGroupedByGenre = groupBy(films, (film) => film.genre);

  const genres = [ALL_GENRES, ...Object.keys(filmsGroupedByGenre)
    .slice(0, MAX_GENRES_COUNT)
    .sort()];

  const filmsByGenre =
    (activeGenre === ALL_GENRES) ? films : films.filter((film) => film.genre === activeGenre);

  const handleShowMoreButtonClick = () => dispatch(setFilmsCount(displayedFilms + FILMS_PER_LOAD));

  return (
    <section className="catalog">
      <h2 className="catalog__title visually-hidden">Catalog</h2>
      <GenresList genres={genres} />
      <FilmsList films={filmsByGenre.slice(0, displayedFilms)} />
      {filmsByGenre.length > displayedFilms && (
        <div className="catalog__more">
          <ShowMoreButton onClick={handleShowMoreButtonClick} />
        </div>
      )}
    </section>
  );
}

export default Catalog;
