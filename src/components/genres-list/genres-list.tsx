import {useAppSelector} from '../../hooks/use-app-selector';
import {useAppDispatch} from '../../hooks/use-app-dispatch';
import GenreItem from '../genre-item/genre-item';
import {FILMS_PER_LOAD} from '../../const';
import {getGenre} from '../../store/site-process/selectors';
import {setFilmsCount, setGenre} from '../../store/site-process/slice';

type GenresListProps = {
  genres: string[];
}

function GenresList({genres}: GenresListProps) {
  const activeGenre = useAppSelector(getGenre);
  const dispatch = useAppDispatch();

  const handleItemClick = (genre: string) => {
    dispatch(setGenre(genre));
    dispatch(setFilmsCount(FILMS_PER_LOAD));
  };

  return (
    <ul className="catalog__genres-list">
      {genres.map((genre) =>
        <GenreItem key={genre} genre={genre} isActive={genre === activeGenre} onClick={handleItemClick} />
      )}
    </ul>
  );
}

export default GenresList;
