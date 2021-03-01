import React from 'react';
import PropTypes from 'prop-types';
import ReviewsList from '../reviews-list/reviews-list';
import ReviewForm from '../review-form/review-form';

const Reviews = ({reviews, isAuth}) => {
  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
      <ReviewsList reviews={reviews} />
      {isAuth && <ReviewForm /> || ``}
    </section>
  );
};

Reviews.propTypes = {
  reviews: PropTypes.array.isRequired,
  isAuth: PropTypes.bool.isRequired
};

export default React.memo(Reviews);
