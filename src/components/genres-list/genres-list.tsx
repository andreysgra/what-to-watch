import {useAppSelector} from '../../hooks/use-app-selector';
import {useAppDispatch} from '../../hooks/use-app-dispatch';
import {setGenre} from '../../store/action';
import GenreItem from '../genre-item/genre-item';

type GenresListProps = {
  genres: string[];
}

function GenresList({genres}: GenresListProps) {
  const activeGenre = useAppSelector((state) => state.genre);
  const dispatch = useAppDispatch();

  const handleItemClick = (genre: string) => dispatch(setGenre(genre));

  return (
    <ul className="catalog__genres-list">
      {genres.map((genre) =>
        <GenreItem key={genre} genre={genre} isActive={genre === activeGenre} onClick={handleItemClick} />
      )}
    </ul>
  );
}

export default GenresList;
