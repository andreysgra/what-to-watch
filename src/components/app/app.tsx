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
import {TFilmDetailed, TFilmPromo} from '../../types/film';
import {TReviews} from '../../types/review';

type AppProps = {
  reviews: TReviews;
  filmPromo: TFilmPromo;
  film: TFilmDetailed;
}

function App({reviews, filmPromo, film}: AppProps) {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          index
          element={<MainPage filmPromo={filmPromo} /> }
        />
        <Route
          path={AppRoute.Login}
          element={
            <PrivateRoute
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
              restrictedFor={AuthorizationStatus.NoAuth}
              redirectedTo={AppRoute.Login}
            >
              <MyListPage />
            </PrivateRoute>
          }
        />
        <Route
          path={AppRoute.Film}
          element={<FilmPage film={film} reviews={reviews} />}
        />
        <Route
          path={AppRoute.AddReview}
          element={
            <PrivateRoute
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
