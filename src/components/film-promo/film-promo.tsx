import {useAppSelector} from '../../hooks/use-app-selector';
import Logo from '../logo/logo';
import UserNavigation from '../user-navigation/user-navigation';
import MyListButton from '../my-list-button/my-list-button';
import {AuthorizationStatus} from '../../services/api/const';

function FilmPromo() {
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);
  const filmPromo = useAppSelector((state) => state.filmPromo);

  if (!filmPromo) {
    return null;
  }

  const isAuthorized = authorizationStatus === AuthorizationStatus.Auth;

  const {
    name,
    posterImage,
    isFavorite,
    genre,
    released,
    backgroundImage
  } = filmPromo;

  return (
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
        <UserNavigation />
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
              {isAuthorized && <MyListButton isFavorite={isFavorite} />}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FilmPromo;
