import {useAppSelector} from '../../hooks/use-app-selector';
import Logo from '../logo/logo';
import UserNavigation from '../user-navigation/user-navigation';
import MyListButton from '../my-list-button/my-list-button';
import {getIsAuthorized} from '../../store/user/selectors';
import {getFilmPromo} from '../../store/film-promo/selectors';
import PlayButton from '../play-button/play-button';

function FilmPromo() {
  const filmPromo = useAppSelector(getFilmPromo);
  const isAuthorized = useAppSelector(getIsAuthorized);

  if (!filmPromo) {
    return null;
  }

  const {
    id,
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
              <PlayButton id={id} />
              {isAuthorized && <MyListButton id={id} isFavorite={isFavorite} />}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FilmPromo;
