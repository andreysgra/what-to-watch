import MainPage from '../../pages/main-page/main-page';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../const';
import LoginPage from '../../pages/login-page/login-page';
import MyListPage from '../../pages/my-list-page/my-list-page';
import FilmPage from '../../pages/film-page/film-page';
import PlayerPage from '../../pages/player-page/player-page';
import AddReviewPage from '../../pages/add-review-page/add-review-page';
import NotFoundPage from '../../pages/not-found-page/not-found-page';
import PrivateRoute from '../private-route/private-route';
import {TFilmDetailed, TFilmPromo, TFilms} from '../../types/film';
import {TReviews} from '../../types/review';

type AppProps = {
  films: TFilms;
  reviews: TReviews;
  filmPromo: TFilmPromo;
  film: TFilmDetailed;
}

const authorizationStatus = AuthorizationStatus.NoAuth;

function App({films, reviews, filmPromo, film}: AppProps) {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          index
          element={<MainPage films={films} filmPromo={filmPromo} authorizationStatus={authorizationStatus} /> }
        />
        <Route
          path={AppRoute.Login}
          element={
            <PrivateRoute
              authorizationStatus={authorizationStatus}
              restrictedFor={AuthorizationStatus.Auth}
              redirectedTo={AppRoute.Root}
            >
              <LoginPage />
            </PrivateRoute>
          }
        />
        <Route
          path={AppRoute.MyList}
          element={
            <PrivateRoute
              authorizationStatus={authorizationStatus}
              restrictedFor={AuthorizationStatus.NoAuth}
              redirectedTo={AppRoute.Login}
            >
              <MyListPage films={films} />
            </PrivateRoute>
          }
        />
        <Route
          path={AppRoute.Film}
          element={<FilmPage film={film} reviews={reviews} authorizationStatus={authorizationStatus} />}
        />
        <Route
          path={AppRoute.AddReview}
          element={
            <PrivateRoute
              authorizationStatus={authorizationStatus}
              restrictedFor={AuthorizationStatus.NoAuth}
              redirectedTo={AppRoute.Login}
            >
              <AddReviewPage />
            </PrivateRoute>
          }
        />
        <Route
          path={AppRoute.Player}
          element={<PlayerPage />}
        />
        <Route
          path="*"
          element={<NotFoundPage />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
