import React from 'react';
import {Link} from 'react-router-dom';
import {cardPropTypes} from '../../prop-types';

const RATING_PER_STAR = 20;
const CARD_TYPES = {
  main: {
    articleClass: `cities__place-card `,
    image: {
      class: `cities`,
      width: 260,
      height: 200
    },
    infoClass: ``
  },
  favorites: {
    articleClass: `favorites__card `,
    image: {
      class: `favorites`,
      width: 150,
      height: 110
    },
    infoClass: `favorites__card-info `
  },
  offer: {
    articleClass: `near-places__card `,
    image: {
      class: `near-places`,
      width: 260,
      height: 200
    },
    infoClass: ``
  }
};

const Card = ({isPremium, previewImage, price, isFavorite, rating, title, id, type, cardType}) => {
  const cardTypeOptions = CARD_TYPES[cardType];

  return (
    <article className={`${cardTypeOptions.articleClass}place-card`}>
      {isPremium && <div className="place-card__mark"><span>Premium</span></div> || ``}
      <div className={`${cardTypeOptions.image.class}__image-wrapper place-card__image-wrapper`}>
        <Link to={`/offer/${id}`}>
          <img
            className="place-card__image"
            src={previewImage}
            width={cardTypeOptions.image.width}
            height={cardTypeOptions.image.height}
            alt="Place image" />
        </Link>
      </div>
      <div className={`${cardTypeOptions.infoClass}place-card__info`}>
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className={`place-card__bookmark-button button${isFavorite && ` place-card__bookmark-button--active` || ``}`} type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `${RATING_PER_STAR * rating}%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`/offer/${id}`}>{title}</Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
};

Card.propTypes = cardPropTypes;

export default Card;
