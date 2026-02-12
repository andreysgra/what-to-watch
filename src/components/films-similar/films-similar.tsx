import FilmsList from '../films-list/films-list';
import {TFilms} from '../../types/film';
import {MAX_SIMILAR_FILMS_COUNT} from '../../const';

type FilmsSimilarProps = {
  similarFilms: TFilms;
}

function FilmsSimilar({similarFilms}: FilmsSimilarProps) {
  return (
    <section className="catalog catalog--like-this">
      <h2 className="catalog__title">More like this</h2>
      <FilmsList films={similarFilms} filmsCount={MAX_SIMILAR_FILMS_COUNT} />
    </section>
  );
}

export default FilmsSimilar;
