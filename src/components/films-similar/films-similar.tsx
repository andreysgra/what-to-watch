import FilmsList from '../films-list/films-list';
import {MAX_SIMILAR_FILMS_COUNT} from '../../const';
import {useAppSelector} from '../../hooks/use-app-selector';
import {getFilmsSimilar} from '../../store/films/selectors';
import {useAppDispatch} from '../../hooks/use-app-dispatch';
import {Fragment, useEffect} from 'react';
import {fetchFilmsSimilar} from '../../store/films/api-actions';

type FilmsSimilarProps = {
  id: string;
}

function FilmsSimilar({id}: FilmsSimilarProps) {
  const films = useAppSelector(getFilmsSimilar);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchFilmsSimilar(id));
  }, [id, dispatch]);

  return (
    <section className="catalog catalog--like-this">
      {films.length > 0 && (
        <Fragment>
          <h2 className="catalog__title">More like this</h2>
          <FilmsList films={films} filmsCount={MAX_SIMILAR_FILMS_COUNT}/>
        </Fragment>
      )}
    </section>
  );
}

export default FilmsSimilar;
