import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {offerPropTypes} from '../../../prop-types.prop';
import Header from '../../header/header';
import OfferInfo from '../../offer-info/offer-info';
import NearPlaces from '../../near-places/near-places';
import {getNearby, getOffer, getReviews} from '../../../store/offer/selectors';

const Offer = ({offer, nearby, reviews}) => {
  return (
    <div className="page">
      <Header />
      <main className="page__main page__main--property">
        <OfferInfo offer={offer} reviews={reviews} mapPlaces={nearby} />
        <div className="container">
          <NearPlaces places={nearby} />
        </div>
      </main>
    </div>
  );
};

Offer.propTypes = {
  offer: PropTypes.shape(offerPropTypes).isRequired,
  nearby: PropTypes.array.isRequired,
  reviews: PropTypes.array.isRequired
};

const mapStateToProps = (state) => ({
  offer: getOffer(state),
  nearby: getNearby(state),
  reviews: getReviews(state)
});

export default connect(mapStateToProps)(Offer);
