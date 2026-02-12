import {Fragment} from 'react';
import Logo from '../../components/logo/logo';
import PageFooter from '../../components/page-footer/page-footer';
import {Link} from 'react-router-dom';
import {AppRoute, AuthorizationStatus, RouteParam} from '../../const';
import UserNavigation from '../../components/user-navigation/user-navigation';
import MyListButton from '../../components/my-list-button/my-list-button';
import {TFilmDetailed, TFilms} from '../../types/film';
import {TReviews} from '../../types/review';
import FilmDescription from '../../components/film-description/film-description';
import FilmsSimilar from '../../components/films-similar/films-similar';

type FilmPageProps = {
  films: TFilms;
  film: TFilmDetailed;
  reviews: TReviews;
  authorizationStatus: AuthorizationStatus;
}

function FilmPage({films, film, reviews, authorizationStatus}: FilmPageProps) {
  const isAuthorized = authorizationStatus === AuthorizationStatus.Auth;

  const {
    id,
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
            <UserNavigation authorizationStatus={authorizationStatus} />
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
            <FilmDescription film={film} reviews={reviews} />
          </div>
        </div>
      </section>

      <div className="page-content">
        <FilmsSimilar similarFilms={films} />
        <PageFooter />
      </div>
    </Fragment>
  );
}

export default FilmPage;
