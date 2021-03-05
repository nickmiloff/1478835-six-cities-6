import React from 'react';
import {reviewPropTypes} from '../../prop-types.prop';

const RATING_PER_STAR = 20;

const Review = ({comment, date, rating, user}) => {
  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={user.avatarUrl} width="54" height="54" alt="Reviews avatar" />
        </div>
        <span className="reviews__user-name">
          {user.name}
        </span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{width: `${RATING_PER_STAR * rating}%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">
          {comment}
        </p>
        <time className="reviews__time" dateTime={date}>{new Date(date).toLocaleDateString('en-EU', {month: `long`, year: `numeric`})}</time>
      </div>
    </li>
  );
};

Review.propTypes = reviewPropTypes;

export default Review;
