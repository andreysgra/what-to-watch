import {useParams} from 'react-router-dom';
import {useAppDispatch} from '../../hooks/use-app-dispatch';
import {useAppSelector} from '../../hooks/use-app-selector';
import {getFilm, getIsFilmLoading} from '../../store/film/selectors';
import Spinner from '../../components/spinner/spinner';
import {Fragment, useEffect} from 'react';
import {fetchFilm} from '../../store/film/api-actions';
import Player from '../../components/player/player';
import ErrorMessage from '../../components/error-message/error-message';
import {PageTitle} from '../../const';
import {Helmet} from 'react-helmet-async';

function PlayerPage() {
  const film = useAppSelector(getFilm);
  const isFilmLoading = useAppSelector(getIsFilmLoading);

  const id = useParams().id as string;

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchFilm(id));
  }, [id, dispatch]);

  if (!film) {
    return <ErrorMessage/>;
  }

  if (isFilmLoading) {
    return <Spinner/>;
  }

  return (
    <Fragment>
      <Helmet>
        <title>{PageTitle.Player}</title>
      </Helmet>
      <Player film={film}/>
    </Fragment>
  );
}

export default PlayerPage;
