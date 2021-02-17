import React from 'react';
import PropTypes from 'prop-types';
import Review from '../review/review';

const ReviewsList = ({reviews}) => {
  return (
    <ul className="reviews__list">
      {reviews.map((review) => <Review key={review.id} {...review} />)}
    </ul>
  );
};

ReviewsList.propTypes = {
  reviews: PropTypes.array.isRequired
};

export default ReviewsList;
