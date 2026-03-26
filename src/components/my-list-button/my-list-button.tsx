import {useAppSelector} from '../../hooks/use-app-selector';
import {getFilmsFavorite, getIsFavoriteAdding} from '../../store/favorites/selectors';
import {useAppDispatch} from '../../hooks/use-app-dispatch';
import {setFavorite} from '../../store/favorites/api-actions';
import {FavoriteStatus} from '../../services/api/const';
import {TFilm} from '../../types/film';

type MyListButtonProps = {
  id: TFilm['id'];
  isFavorite: boolean;
}

function MyListButton({id, isFavorite}: MyListButtonProps) {
  const films = useAppSelector(getFilmsFavorite);
  const isFavoriteAdding = useAppSelector(getIsFavoriteAdding);

  const dispatch = useAppDispatch();

  const handleButtonClick = () => {
    dispatch(setFavorite(
      {
        id,
        status: isFavorite ? FavoriteStatus.Off : FavoriteStatus.On
      }
    ));
  };

  return (
    <button
      className="btn btn--list film-card__button"
      type="button"
      disabled={isFavoriteAdding}
      onClick={handleButtonClick}
    >
      {!isFavorite ? (
        <svg viewBox="0 0 19 20" width={19} height={20}>
          <use xlinkHref="#add"/>
        </svg>
      ) :
        (
          <svg viewBox="0 0 18 14" width={18} height={14}>
            <use xlinkHref="#in-list"></use>
          </svg>
        )}
      <span>My list</span>
      <span className="film-card__count">{films.length}</span>
    </button>
  );
}

export default MyListButton;
