import MainPage from '../../pages/main-page/main-page';
import {Route, Routes} from 'react-router-dom';
import {AppRoute} from '../../const';
import LoginPage from '../../pages/login-page/login-page';
import MyListPage from '../../pages/my-list-page/my-list-page';
import FilmPage from '../../pages/film-page/film-page';
import PlayerPage from '../../pages/player-page/player-page';
import AddReviewPage from '../../pages/add-review-page/add-review-page';
import NotFoundPage from '../../pages/not-found-page/not-found-page';
import PrivateRoute from '../private-route/private-route';
import HistoryRouter from '../history-router/history-router';
import browserHistory from '../../services/browser-history';
import {useAppSelector} from '../../hooks/use-app-selector';
import {useEffect} from 'react';
import {useAppDispatch} from '../../hooks/use-app-dispatch';
import {fetchFilmsFavorite} from '../../store/api-actions';
import {AuthorizationStatus} from '../../services/api/const';

function App() {
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);
  const dispatch = useAppDispatch();

  const isAuthorized = authorizationStatus === AuthorizationStatus.Auth;

  useEffect(() => {
    if (isAuthorized) {
      dispatch(fetchFilmsFavorite());
    }
  }, [isAuthorized, dispatch]);

  return (
    <HistoryRouter history={browserHistory}>
      <Routes>
        <Route
          index
          element={<MainPage /> }
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
          element={<FilmPage />}
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
    </HistoryRouter>
  );
}

export default App;
