import Logo from '../../components/logo/logo';
import ReviewForm from '../../components/review-form/review-form';
import UserNavigation from '../../components/user-navigation/user-navigation';
import {TReviewContent} from '../../types/review';
import {fetchFilm, postComment} from '../../store/api-actions';
import {useAppDispatch} from '../../hooks/use-app-dispatch';
import {Link, useParams} from 'react-router-dom';
import {useAppSelector} from '../../hooks/use-app-selector';
import {AppRoute, RouteParam} from '../../const';
import {useEffect} from 'react';

function AddReviewPage() {
  const film = useAppSelector((state) => state.film);

  const dispatch = useAppDispatch();
  const params = useParams();

  useEffect(() => {
    const {id} = params;

    if (id) {
      dispatch(fetchFilm(id));
    }
  }, [params, dispatch]);

  if (!film) {
    return null;
  }

  const {id, name, backgroundImage, posterImage} = film;
  const link = AppRoute.Film.replace(RouteParam.Id, id);

  const handleFormSubmit = (formData: Omit<TReviewContent, 'id'>) => {
    dispatch(postComment({id, ...formData}));
  };

  return (
    <section className="film-card film-card--full">
      <div className="film-card__header">
        <div className="film-card__bg">
          <img
            src={backgroundImage}
            alt={name}
          />
        </div>
        <h1 className="visually-hidden">WTW</h1>
        <header className="page-header">
          <Logo />
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
          <UserNavigation />
        </header>
        <div className="film-card__poster film-card__poster--small">
          <img
            src={posterImage}
            alt={`${name} poster`}
            width={218}
            height={327}
          />
        </div>
      </div>
      <div className="add-review">
        <ReviewForm onSubmit={handleFormSubmit} />
      </div>
    </section>
  );
}

export default AddReviewPage;
