import Logo from '../../components/logo/logo';
import PageFooter from '../../components/page-footer/page-footer';
import FilmsList from '../../components/films-list/films-list';
import UserNavigation from '../../components/user-navigation/user-navigation';
import {useAppSelector} from '../../hooks/use-app-selector';
import Spinner from '../../components/spinner/spinner';
import {getFilmsFavorite, getIsFavoritesFailed, getIsFavoritesLoading} from '../../store/favorites/selectors';
import ErrorMessage from '../../components/error-message/error-message';
import {PageTitle} from '../../const';
import {Helmet} from 'react-helmet-async';
import {Fragment} from 'react';

function MyListPage() {
  const films = useAppSelector(getFilmsFavorite);
  const isFavoritesLoading = useAppSelector(getIsFavoritesLoading);
  const isFavoritesFailed = useAppSelector(getIsFavoritesFailed);

  if (isFavoritesLoading) {
    return <Spinner/>;
  }

  if (isFavoritesFailed) {
    return <ErrorMessage/>;
  }

  return (
    <Fragment>
      <Helmet>
        <title>{PageTitle.MyList}</title>
      </Helmet>
      <div className="user-page">
        <header className="page-header user-page__head">
          <Logo/>
          <h1 className="page-title user-page__title">
            My list <span className="user-page__film-count">{films.length}</span>
          </h1>
          <UserNavigation/>
        </header>
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>
          <FilmsList films={films}/>
        </section>
        <PageFooter/>
      </div>
    </Fragment>
  );
}

export default MyListPage;
