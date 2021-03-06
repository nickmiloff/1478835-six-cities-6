import React, {useEffect} from 'react';
import {compose} from 'redux';
import {connect} from 'react-redux';
import {useParams} from 'react-router';
import PropTypes from 'prop-types';
import {offerPropTypes} from '../../../prop-types.prop';
import Header from '../../header/header';
import OfferInfo from '../../offer-info/offer-info';
import NearPlaces from '../../near-places/near-places';
import {getIsLoaded, getNearby, getOffer, getReviews} from '../../../store/offer/selectors';
import {loadOffer} from '../../../store/offer/operations';
import withLoading from '../../../hocs/with-loading/with-loading';

const OfferPage = ({offer, nearby, reviews, onComponentMount}) => {
  const params = useParams();

  useEffect(() => {
    onComponentMount(params.id);
  }, [params.id]);

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

OfferPage.propTypes = {
  offer: PropTypes.shape(offerPropTypes).isRequired,
  nearby: PropTypes.array.isRequired,
  reviews: PropTypes.array.isRequired,
  onComponentMount: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  offer: getOffer(state),
  nearby: getNearby(state),
  reviews: getReviews(state),
  isLoaded: getIsLoaded(state)
});

const mapDispatchToProps = {
  onComponentMount: loadOffer
};

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withLoading
)(OfferPage);
