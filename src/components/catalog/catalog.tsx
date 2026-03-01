import GenresList from '../genres-list/genres-list';
import FilmsList from '../films-list/films-list';
import {useAppSelector} from '../../hooks/use-app-selector';
import {ALL_GENRES, FILMS_PER_LOAD, MAX_GENRES_COUNT} from '../../const';
import ShowMoreButton from '../show-more-button/show-more-button';
import {useAppDispatch} from '../../hooks/use-app-dispatch';
import Spinner from '../spinner/spinner';
import {getIsFilmsLoading} from '../../store/films/selectors';
import {getFilmsByGenre, getFilmsCount, getGroupedFilms} from '../../store/site-process/selectors';
import {setFilmsCount} from '../../store/site-process/slice';

function Catalog() {
  const displayedFilms = useAppSelector(getFilmsCount);
  const isFilmsLoading = useAppSelector(getIsFilmsLoading);
  const filmsGroupedByGenre = useAppSelector(getGroupedFilms);
  const filmsByGenre = useAppSelector(getFilmsByGenre);

  const dispatch = useAppDispatch();


  const genres = [ALL_GENRES, ...Object.keys(filmsGroupedByGenre)
    .slice(0, MAX_GENRES_COUNT)
    .sort()];


  const handleShowMoreButtonClick = () => dispatch(setFilmsCount(displayedFilms + FILMS_PER_LOAD));

  if (isFilmsLoading) {
    return <Spinner />;
  }

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
