import MainPage from '../../pages/main-page/main-page';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {AppRoute} from '../../const';
import LoginPage from '../../pages/login-page/login-page';
import MyListPage from '../../pages/my-list-page/my-list-page';
import FilmPage from '../../pages/film-page/film-page';
import PlayerPage from '../../pages/player-page/player-page';
import AddReviewPage from '../../pages/add-review-page/add-review-page';
import NotFoundPage from '../../pages/not-found-page/not-found-page';

type AppProps = {
  filmsCount: number;
}

function App({filmsCount}: AppProps) {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          index
          element={<MainPage filmsCount={filmsCount} /> }
        />
        <Route
          path={AppRoute.Login}
          element={<LoginPage />}
        />
        <Route
          path={AppRoute.MyList}
          element={<MyListPage />}
        />
        <Route
          path={AppRoute.Film}
          element={<FilmPage />}
        />
        <Route
          path={AppRoute.AddReview}
          element={<AddReviewPage />}
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
