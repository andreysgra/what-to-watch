import {ChangeEvent, Fragment} from 'react';

type RatingStarProps = {
  value: number;
  rating: number;
  onChange: (evt: ChangeEvent<HTMLInputElement>) => void;
}

function RatingStar({value, rating, onChange}: RatingStarProps) {
  const handleRadioChange = (evt: ChangeEvent<HTMLInputElement>) => onChange(evt);

  return (
    <Fragment>
      <input
        className="rating__input"
        id={`star-${value}`}
        type="radio"
        name="rating"
        value={value}
        checked={value === rating}
        onChange={handleRadioChange}
      />
      <label className="rating__label" htmlFor={`star-${value}`}>
        {`Rating ${value}`}
      </label>
    </Fragment>
  );
}

export default RatingStar;
