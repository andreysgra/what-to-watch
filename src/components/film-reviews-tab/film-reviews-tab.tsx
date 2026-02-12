import {TReviews} from '../../types/review';
import Review from '../review/review';
import {REVIEW_COLUMNS_COUNT} from '../../const';

type FilmReviewsTabProps = {
  reviews: TReviews;
}

function FilmReviewsTab({reviews}: FilmReviewsTabProps) {
  const reviewsPerColumn = Math.ceil(reviews.length / REVIEW_COLUMNS_COUNT);
  const firstColumnReviews = reviews.slice(0, reviewsPerColumn);
  const secondColumnCount = reviews.slice(reviewsPerColumn);

  return (
    <div className="film-card__reviews film-card__row">
      <div className="film-card__reviews-col">
        {firstColumnReviews.map((review) => <Review key={review.id} review={review} />)}
      </div>
      <div className="film-card__reviews-col">
        {secondColumnCount.map((review) => <Review key={review.id} review={review} />)}
      </div>
    </div>
  );
}

export default FilmReviewsTab;
