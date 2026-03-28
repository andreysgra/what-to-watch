import Logo from '../../components/logo/logo';
import ReviewForm from '../../components/review-form/review-form';
import UserNavigation from '../../components/user-navigation/user-navigation';
import {useAppDispatch} from '../../hooks/use-app-dispatch';
import {Link, useParams} from 'react-router-dom';
import {useAppSelector} from '../../hooks/use-app-selector';
import {AppRoute, PageTitle, RouteParam} from '../../const';
import {Fragment, useEffect} from 'react';
import {fetchFilm} from '../../store/film/api-actions';
import {getFilm} from '../../store/film/selectors';
import ErrorMessage from '../../components/error-message/error-message';
import {Helmet} from 'react-helmet-async';

function AddReviewPage() {
  const film = useAppSelector(getFilm);

  const dispatch = useAppDispatch();
  const id = useParams().id as string;

  useEffect(() => {
    if (id) {
      dispatch(fetchFilm(id));
    }
  }, [id, dispatch]);

  if (!film) {
    return <ErrorMessage/>;
  }

  const {name, backgroundImage, posterImage} = film;
  const link = AppRoute.Film.replace(RouteParam.Id, id);

  return (
    <Fragment>
      <Helmet>
        <title>{PageTitle.AddReview}</title>
      </Helmet>
      <section className="film-card film-card--full">
        <div className="film-card__header">
          <div className="film-card__bg">
            <img src={backgroundImage} alt={name}/>
          </div>
          <h1 className="visually-hidden">WTW</h1>
          <header className="page-header">
            <Logo/>
            <nav className="breadcrumbs">
              <ul className="breadcrumbs__list">
                <li className="breadcrumbs__item">
                  <Link className="breadcrumbs__link" to={link}>
                    {name}
                  </Link>
                </li>
                <li className="breadcrumbs__item">
                  <a className="breadcrumbs__link">Add review</a>
                </li>
              </ul>
            </nav>
            <UserNavigation/>
          </header>
          <div className="film-card__poster film-card__poster--small">
            <img src={posterImage} alt={`${name} poster`} width={218} height={327}/>
          </div>
        </div>
        <div className="add-review">
          <ReviewForm id={id}/>
        </div>
      </section>
    </Fragment>
  );
}

export default AddReviewPage;
