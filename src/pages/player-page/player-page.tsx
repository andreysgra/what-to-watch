import {useParams} from 'react-router-dom';
import {useAppDispatch} from '../../hooks/use-app-dispatch';
import {useAppSelector} from '../../hooks/use-app-selector';
import {getFilm, getIsFilmLoading} from '../../store/film/selectors';
import Spinner from '../../components/spinner/spinner';
import {useEffect} from 'react';
import {fetchFilm} from '../../store/film/api-actions';
import Player from '../../components/player/player';

function PlayerPage() {
  const film = useAppSelector(getFilm);
  const isFilmLoading = useAppSelector(getIsFilmLoading);

  const id = useParams().id as string;

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchFilm(id));
  }, [id, dispatch]);

  if (!film) {
    return null;
  }

  if (isFilmLoading) {
    return <Spinner />;
  }

  return (
    <Player film={film} />
  );
}

export default PlayerPage;
