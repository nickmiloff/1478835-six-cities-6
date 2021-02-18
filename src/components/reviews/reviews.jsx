import React from 'react';
import PropTypes from 'prop-types';
import ReviewsList from '../reviews-list/reviews-list';
import ReviewForm from '../review-form/review-form';

const Reviews = ({reviews, withForm = false}) => {
  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">1</span></h2>
      <ReviewsList reviews={reviews} />
      {withForm && <ReviewForm /> || ``}
    </section>
  );
};

Reviews.propTypes = {
  reviews: PropTypes.array.isRequired,
  withForm: PropTypes.bool
};

export default Reviews;
