import React from 'react';
import PropTypes from 'prop-types';
import CardsList from '../cards-list/cards-list';
import PlacesSorting from '../places-sorting/places-sorting';

const Places = ({cards, location, setActiveCardId}) => {
  return (
    <section className="cities__places places">
      <h2 className="visually-hidden">Places</h2>
      <b className="places__found">{cards.length} places to stay in {location}</b>
      <PlacesSorting />
      <CardsList cards={cards} cardType="main" chnageActiveCardId={setActiveCardId} />
    </section>
  );
};

Places.propTypes = {
  location: PropTypes.string.isRequired,
  cards: PropTypes.array.isRequired,
  setActiveCardId: PropTypes.func.isRequired
};

export default Places;
