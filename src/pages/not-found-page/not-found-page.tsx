import {Link} from 'react-router-dom';
import {AppRoute} from '../../const';
import './not-found-page.css';
import Logo from '../../components/logo/logo';
import PageFooter from '../../components/page-footer/page-footer';

function NotFoundPage() {
  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo />
        <h1 className="page-title user-page__title">404</h1>
      </header>

      <div className="sign-in user-page__content">
        <section className="not-found">
          <h2 className="not-found__text">Page not found</h2>
          <p className="not-found__description">
            The page you are looking for does not exist or has been moved.
          </p>
          <Link to={AppRoute.Root} className="not-found__link button">Back to home page</Link>
        </section>
      </div>

      <PageFooter />
    </div>
  );
}

export default NotFoundPage;
