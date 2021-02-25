import React, {useEffect} from 'react';
import {compose} from 'redux';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {offerPropTypes} from '../../../prop-types.prop';
import Header from '../../header/header';
import OfferInfo from '../../offer-info/offer-info';
import NearPlaces from '../../near-places/near-places';
import {getIsLoaded, getNearby, getOffer, getReviews} from '../../../store/offer/selectors';
import {loadOffer} from '../../../store/offer/operations';
import withLoading from '../../../hocs/withLoading';

const Offer = ({offer, nearby, reviews, uploadOffer, match}) => {
  useEffect(() => {
    uploadOffer(match.params.id);
  }, [match.params.id]);

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
  reviews: PropTypes.array.isRequired,
  uploadOffer: PropTypes.func.isRequired,
  match: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  offer: getOffer(state),
  nearby: getNearby(state),
  reviews: getReviews(state),
  isLoaded: getIsLoaded(state)
});

const mapDispatchToProps = {
  uploadOffer: loadOffer
};

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withLoading
)(Offer);
