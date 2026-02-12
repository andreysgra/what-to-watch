import {TReview} from '../../types/review';
import {getFormattedDate, getFormattedRating} from '../../utils/utils';

type ReviewProps = {
  review: TReview;
}

function Review({review}: ReviewProps) {
  const {comment, user, rating, date} = review;
  return (
    <div className="review" style={{borderBottomColor: 'rgba(255, 255, 255, 0.2)'}}>
      <blockquote className="review__quote">
        <p className="review__text">{comment}</p>

        <footer className="review__details">
          <cite className="review__author">{user}</cite>
          <time className="review__date" dateTime={date}>{getFormattedDate(date)}</time>
        </footer>
      </blockquote>

      <div className="review__rating">{getFormattedRating(rating)}</div>
    </div>
  );
}

export default Review;
