import {CommentLength, ErrorMessage, STARS_COUNT, SuccessMessage} from '../../const';
import RatingStar from '../../components/rating-star/rating-star';
import {ChangeEvent, FormEvent, useEffect, useState} from 'react';
import {TReviewContent} from '../../types/review';
import {useAppSelector} from '../../hooks/use-app-selector';
import {
  getIsCommentSubmitFailed,
  getIsCommentSubmitSuccess,
  getIsCommentSubmitting
} from '../../store/comments/selectors';
import {toast} from 'react-toastify';
import {TFilm} from '../../types/film';
import {postComment} from '../../store/comments/api-actions';
import {useAppDispatch} from '../../hooks/use-app-dispatch';

type ReviewFormProps = {
  id: TFilm['id'];
}

function ReviewForm({id}: ReviewFormProps) {
  const [rating, setRating] = useState<number>(0);
  const [comment, setComment] = useState<string>('');

  const isSubmitting = useAppSelector(getIsCommentSubmitting);
  const isSubmitSuccess = useAppSelector(getIsCommentSubmitSuccess);
  const isSubmitFailed = useAppSelector(getIsCommentSubmitFailed);

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (isSubmitSuccess) {
      toast.success(SuccessMessage.ReviewSubmit);

      setRating(0);
      setComment('');
    }

    if (isSubmitFailed) {
      toast.error(ErrorMessage.ReviewSubmit);
    }
  }, [isSubmitSuccess, isSubmitFailed]);

  const handleRadioChange = (evt: ChangeEvent<HTMLInputElement>) =>
    setRating(Number(evt.target.value));

  const handleTextAreaChange = (evt: ChangeEvent<HTMLTextAreaElement>) => {
    setComment(evt.target.value);
  };

  const handleFormSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    dispatch(postComment({id, comment, rating} as TReviewContent));
  };

  const isDisabled = isSubmitting || !rating ||
    (comment.length < CommentLength.Min || comment.length > CommentLength.Max);

  return (
    <form action="#" className="add-review__form" onSubmit={handleFormSubmit}>
      <div className="rating">
        <div className="rating__stars">
          {Array.from({length: STARS_COUNT}, (_, i: number) => (
            <RatingStar
              key={`star-${STARS_COUNT - i}`}
              value={STARS_COUNT - i}
              rating={rating}
              onChange={handleRadioChange}
            />
          ))}
        </div>
      </div>
      <div className="add-review__text">
        <textarea
          className="add-review__textarea"
          name="review-text"
          id="review-text"
          placeholder="Review text"
          value={comment}
          onChange={handleTextAreaChange}
        />
        <div className="add-review__submit">
          <button
            className="add-review__btn"
            type="submit"
            disabled={isDisabled}
          >
            Post
          </button>
        </div>
      </div>
    </form>
  );
}

export default ReviewForm;
