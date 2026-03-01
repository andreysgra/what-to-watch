import React, {Fragment, useEffect} from 'react';
import Logo from '../../components/logo/logo';
import PageFooter from '../../components/page-footer/page-footer';
import {Link, useParams} from 'react-router-dom';
import {AppRoute, RouteParam} from '../../const';
import UserNavigation from '../../components/user-navigation/user-navigation';
import MyListButton from '../../components/my-list-button/my-list-button';
import FilmDescription from '../../components/film-description/film-description';
import FilmsSimilar from '../../components/films-similar/films-similar';
import {useAppSelector} from '../../hooks/use-app-selector';
import {useAppDispatch} from '../../hooks/use-app-dispatch';
import Spinner from '../../components/spinner/spinner';
import {getFilm, getIsFilmLoading} from '../../store/film/selectors';
import {getFilmsSimilar} from '../../store/films/selectors';
import {getComments} from '../../store/comments/selectors';
import {getIsAuthorized} from '../../store/user/selectors';
import {fetchFilm} from '../../store/film/api-actions';
import {fetchComments} from '../../store/comments/api-actions';
import {fetchFilmsSimilar} from '../../store/films/api-actions';

function FilmPage(): React.JSX.Element | null {
  const film = useAppSelector(getFilm);
  const filmsSimilar = useAppSelector(getFilmsSimilar);
  const isFilmLoading = useAppSelector(getIsFilmLoading);
  const comments = useAppSelector(getComments);
  const isAuthorized = useAppSelector(getIsAuthorized);

  const dispatch = useAppDispatch();

  const {id} = useParams();

  useEffect(() => {
    if (id) {
      dispatch(fetchFilm(id));
      dispatch(fetchComments(id));
      dispatch(fetchFilmsSimilar(id));
    }
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

  const link = AppRoute.AddReview.replace(RouteParam.Id, film.id);

  return (
    <Fragment>
      <section className="film-card film-card--full" style={{backgroundColor: backgroundColor}}>
        <div className="film-card__hero">
          <div className="film-card__bg">
            <img
              src={backgroundImage}
              alt={name}
            />
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
                    <use xlinkHref="#play-s" />
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

      <div className="page-content">
        {filmsSimilar.length > 0 && <FilmsSimilar films={filmsSimilar} />}
        <PageFooter />
      </div>
    </Fragment>
  );
}

export default FilmPage;
