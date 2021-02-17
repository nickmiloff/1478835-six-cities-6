import React from 'react';
import PropTypes from 'prop-types';
import {offerPropTypes} from '../../../prop-types.prop';
import Header from '../../header/header';
import OfferInfo from '../../offer-info/offer-info';
import NearPlaces from '../../near-places/near-places';

const Offer = ({offer, reviews, nearPlaces}) => {
  return (
    <>
      <Header />
      <main className="page__main page__main--property">
        <OfferInfo offer={offer} reviews={reviews} mapPlaces={nearPlaces} />
        <div className="container">
          <NearPlaces places={nearPlaces} />
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
