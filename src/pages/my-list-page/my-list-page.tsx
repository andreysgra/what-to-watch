import Logo from '../../components/logo/logo';
import PageFooter from '../../components/page-footer/page-footer';
import FilmsList from '../../components/films-list/films-list';
import UserNavigation from '../../components/user-navigation/user-navigation';
import {useAppSelector} from '../../hooks/use-app-selector';
import Spinner from '../../components/spinner/spinner';

function MyListPage() {
  const films = useAppSelector((state) => state.filmsFavorite);
  const isFilmsFavoriteLoading = useAppSelector((state) => state.isFilmsFavoriteLoading);

  if (isFilmsFavoriteLoading) {
    return <Spinner />;
  }

  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo />
        <h1 className="page-title user-page__title">
          My list <span className="user-page__film-count">{films.length}</span>
        </h1>
        <UserNavigation />
      </header>
      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>
        <FilmsList films={films} />
      </section>
      <PageFooter />
    </div>
  );
}

export default MyListPage;
