import {Fragment} from 'react';
import PageFooter from '../../components/page-footer/page-footer';
import Logo from '../../components/logo/logo';
import {TFilmPromo} from '../../types/film';
import {AuthorizationStatus} from '../../const';
import UserNavigation from '../../components/user-navigation/user-navigation';
import MyListButton from '../../components/my-list-button/my-list-button';
import Catalog from '../../components/catalog/catalog';

type MainPageProps = {
  filmPromo: TFilmPromo;
  authorizationStatus: AuthorizationStatus;
}

function MainPage({filmPromo, authorizationStatus}: MainPageProps) {
  const {
    name,
    posterImage,
    isFavorite,
    genre,
    released,
    backgroundImage
  } = filmPromo;

  return (
    <Fragment>
      <section className="film-card">
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
          <div className="film-card__info">
            <div className="film-card__poster">
              <img
                src={posterImage}
                alt={name}
                width={218}
                height={327}
              />
            </div>
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
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <Catalog />
        <PageFooter />
      </div>
    </Fragment>
  );
}

export default MainPage;
