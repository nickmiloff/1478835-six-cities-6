import React, {useState} from 'react';

const STARS_COUNT = 5;
const REVIEW_SIZING = {
  min: 50,
  max: 300
};

const ReviewForm = () => {
  const [rating, setRating] = useState(null);
  const [review, setReview] = useState(``);

  return (
    <form className="reviews__form form" action="#" method="post">
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {Array(5).fill(``).map((_, index) =>
          <React.Fragment key={index}>
            <input
              className="form__rating-input visually-hidden"
              name="rating"
              value={STARS_COUNT - index}
              id={`${STARS_COUNT - index}-stars`}
              type="radio"
              onChange={() => {
                setRating(() => STARS_COUNT - index);
              }}
              checked={rating === STARS_COUNT - index} />
            <label htmlFor={`${STARS_COUNT - index}-stars`} className="reviews__rating-label form__rating-label" title="perfect">
              <svg className="form__star-image" width="37" height="33">
                <use xlinkHref="#icon-star"></use>
              </svg>
            </label>
          </React.Fragment>
        )}
      </div>
      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        value={review}
        onChange={(evt) => {
          setReview(evt.target.value);
        }}
        maxLength={REVIEW_SIZING.max}></textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled={rating === null || review.length < REVIEW_SIZING.min}>Submit</button>
      </div>
    </form>
  );
};

export default ReviewForm;
