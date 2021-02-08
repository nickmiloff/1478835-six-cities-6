import React from 'react';
import PropTypes from 'prop-types';
import Header from '../../header/header';
import OfferReview from '../../offer-review/offer-review';
import CardsList from '../../cards-list/cards-list';
import OfferReviewForm from '../../offer-review-form/offer-review-form';
import {offerPropTypes} from '../../../prop-types';

const RATING_PER_STAR = 20;

const Offer = ({offer, reviews, nearPlaces}) => {
  const {
    images = [],
    isPremium = false,
    title = `unknown`,
    isFavorite = false,
    rating = 0,
    type = `unknown`,
    bedrooms = 0,
    maxAdults = 0,
    price = 0,
    goods = [],
    host = {
      avatarUrl: `https://via.placeholder.com/74/000000/FFFFFF/?text=unknown`,
      id: 0,
      isPro: false,
      name: `unknown`
    },
    description = ``
  } = offer;

  return (
    <>
      <Header />
      <main className="page__main page__main--property">
        <section className="property">
          <div className="property__gallery-container container">
            <div className="property__gallery">
              {images.slice(0, 6).map((image, index) => (
                <div className="property__image-wrapper" key={index}>
                  <img className="property__image" src={image} alt="Photo studio" />
                </div>
              ))}
            </div>
          </div>
          <div className="property__container container">
            <div className="property__wrapper">
              {isPremium && <div className="property__mark"><span>Premium</span></div> || ``}
              <div className="property__name-wrapper">
                <h1 className="property__name">
                  {title}
                </h1>
                <button className={`property__bookmark-button button${isFavorite && ` property__bookmark-button--active` || ``}`} type="button">
                  <svg className="property__bookmark-icon" width="31" height="33">
                    <use xlinkHref="#icon-bookmark"></use>
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <div className="property__rating rating">
                <div className="property__stars rating__stars">
                  <span style={{width: `${RATING_PER_STAR * rating}%`}}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="property__rating-value rating__value">{rating}</span>
              </div>
              <ul className="property__features">
                <li className="property__feature property__feature--entire">
                  {type}
                </li>
                <li className="property__feature property__feature--bedrooms">
                  {bedrooms} Bedrooms
                </li>
                <li className="property__feature property__feature--adults">
                  Max {maxAdults} adults
                </li>
              </ul>
              <div className="property__price">
                <b className="property__price-value">&euro;{price}</b>
                <span className="property__price-text">&nbsp;night</span>
              </div>
              <div className="property__inside">
                <h2 className="property__inside-title">What&apos;s inside</h2>
                <ul className="property__inside-list">
                  {goods.map((good, index) => (
                    <li className="property__inside-item" key={index}>
                      {good}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="property__host">
                <h2 className="property__host-title">Meet the host</h2>
                <div className="property__host-user user">
                  <div className={`property__avatar-wrapper user__avatar-wrapper${host.isPro && ` property__avatar-wrapper--pro` || ``}`}>
                    <img className="property__avatar user__avatar" src={host.avatarUrl} width="74" height="74" alt="Host avatar" />
                  </div>
                  <span className="property__user-name">
                    {host.name}
                  </span>
                </div>
                <div className="property__description">
                  <p className="property__text">
                    {description}
                  </p>
                </div>
              </div>
              <section className="property__reviews reviews">
                <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">1</span></h2>
                <ul className="reviews__list">
                  {reviews.map((review) => <OfferReview {...review} key={review.id} />)}
                </ul>
                <OfferReviewForm />
              </section>
            </div>
          </div>
          <section className="property__map map"></section>
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <CardsList cards={nearPlaces} cardType="offer" />
          </section>
        </div>
      </main>
    </>
  );
};

Offer.propTypes = {
  offer: PropTypes.shape(offerPropTypes).isRequired,
  reviews: PropTypes.array.isRequired,
  nearPlaces: PropTypes.array.isRequired
};

export default Offer;
