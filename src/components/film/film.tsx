import Logo from '../logo/logo';
import UserNavigation from '../user-navigation/user-navigation';
import MyListButton from '../my-list-button/my-list-button';
import {Link} from 'react-router-dom';
import FilmDescription from '../film-description/film-description';
import {useEffect} from 'react';
import {useAppSelector} from '../../hooks/use-app-selector';
import {getFilm, getIsFilmLoading} from '../../store/film/selectors';
import {getComments} from '../../store/comments/selectors';
import {getIsAuthorized} from '../../store/user/selectors';
import Spinner from '../spinner/spinner';
import {fetchFilm} from '../../store/film/api-actions';
import {fetchComments} from '../../store/comments/api-actions';
import {useAppDispatch} from '../../hooks/use-app-dispatch';
import {AppRoute, RouteParam} from '../../const';

type FilmProps = {
  id: string;
}

function Film({id}: FilmProps) {
  const film = useAppSelector(getFilm);
  const isFilmLoading = useAppSelector(getIsFilmLoading);
  const comments = useAppSelector(getComments);
  const isAuthorized = useAppSelector(getIsAuthorized);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchFilm(id));
    dispatch(fetchComments(id));
  }, [id, dispatch]);

  if (!film) {
    return null;
  }

  if (isFilmLoading) {
    return <Spinner />;
  }

  const {
    name,
    isFavorite,
    genre,
    posterImage,
    backgroundImage,
    backgroundColor,
    released
  } = film;

  const link = AppRoute.AddReview.replace(RouteParam.Id, id);

  return (
    <section className="film-card film-card--full" style={{backgroundColor: backgroundColor}}>
      <div className="film-card__hero">
        <div className="film-card__bg">
          <img src={backgroundImage} alt={name}/>
        </div>
        <h1 className="visually-hidden">WTW</h1>
        <header className="page-header film-card__head">
          <Logo />
          <UserNavigation />
        </header>
        <div className="film-card__wrap">
          <div className="film-card__desc">
            <h2 className="film-card__title">{name}</h2>
            <p className="film-card__meta">
              <span className="film-card__genre">{genre}</span>
              <span className="film-card__year">{released}</span>
            </p>
            <div className="film-card__buttons">
              <button className="btn btn--play film-card__button" type="button">
                <svg viewBox="0 0 19 19" width={19} height={19}>
                  <use xlinkHref="#play-s"/>
                </svg>
                <span>Play</span>
              </button>
              <MyListButton isFavorite={isFavorite} />
              {isAuthorized && (
                <Link className="btn film-card__button" to={link}>
                  Add review
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="film-card__wrap film-card__translate-top">
        <div className="film-card__info">
          <div className="film-card__poster film-card__poster--big">
            <img src={posterImage} alt={name} width={218} height={327}/>
          </div>
          <FilmDescription film={film} reviews={comments} />
        </div>
      </div>
    </section>
  );
}

export default Film;
