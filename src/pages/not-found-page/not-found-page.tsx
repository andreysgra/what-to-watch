import {Link} from 'react-router-dom';
import {AppRoute} from '../../const';
import './not-found-page.css';

function NotFoundPage() {
  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <div className="logo">
          <a href="main.html" className="logo__link">
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">W</span>
          </a>
        </div>
        <h1 className="page-title user-page__title">404</h1>
      </header>
      <div className="sign-in user-page__content">
        <section className="not-found">
          {/*<h1 className="not-found__title">404</h1>*/}
          <h2 className="not-found__text">Page not found</h2>
          <p className="not-found__description">
            The page you are looking for does not exist or has been moved.
          </p>
          <Link to={AppRoute.Root} className="not-found__link button">Back to home page</Link>
        </section>
      </div>
      <footer className="page-footer">
        <div className="logo">
          <a href="main.html" className="logo__link logo__link--light">
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">W</span>
          </a>
        </div>
        <div className="copyright">
          <p>© 2019 What to watch Ltd.</p>
        </div>
      </footer>
    </div>
  );
}

export default NotFoundPage;
