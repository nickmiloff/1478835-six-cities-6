import React from 'react';
import PropTypes from 'prop-types';

const PlacesEmpty = ({location}) => {
  return (
    <section className="cities__no-places">
      <div className="cities__status-wrapper tabs__content">
        <b className="cities__status">No places to stay available</b>
        <p className="cities__status-description">We could not find any property available at the moment in {location}</p>
      </div>
    </section>
  );
};

PlacesEmpty.propTypes = {
  location: PropTypes.string.isRequired
};

export default PlacesEmpty;
