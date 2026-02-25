import {CommentLength, STARS_COUNT} from '../../const';
import RatingStar from '../../components/rating-star/rating-star';
import {ChangeEvent, FormEvent, useState} from 'react';
import {TReviewContent} from '../../types/review';

type ReviewFormProps = {
  onSubmit: (formData: Omit<TReviewContent,'id'>) => void;
}

function ReviewForm({onSubmit}: ReviewFormProps) {
  const [rating, setRating] = useState<number>(0);
  const [text, setText] = useState<string>('');

  const handleRadioChange = (evt: ChangeEvent<HTMLInputElement>) =>
    setRating(Number(evt.target.value));

  const handleTextAreaChange = (evt: ChangeEvent<HTMLTextAreaElement>) => {
    setText(evt.target.value);
  };

  const handleFormSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    onSubmit({comment: text, rating});
    setRating(0);
    setText('');
  };

  const isDisabled = !rating || (text.length < CommentLength.Min || text.length > CommentLength.Max);

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
          value={text}
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
