import React from 'react';
import PropTypes from 'prop-types';
import CardsList from '../cards-list/cards-list';

const NearPlaces = ({places}) => {
  return (
    <section className="near-places places">
      <h2 className="near-places__title">Other places in the neighbourhood</h2>
      <CardsList cards={places} cardType="offer" />
    </section>
  );
};

NearPlaces.propTypes = {
  places: PropTypes.array.isRequired
};

export default NearPlaces;
