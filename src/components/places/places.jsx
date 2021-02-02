import React from 'react';
import PropTypes from 'prop-types';
import Card from '../card/card';
import PlacesSorting from '../places-sorting/places-sorting';

const Places = ({cards, activeCity}) => {
  return (
    <section className="cities__places places">
      <h2 className="visually-hidden">Places</h2>
      <b className="places__found">{cards.length} places to stay in {activeCity}</b>
      <PlacesSorting />
      <div className="cities__places-list places__list tabs__content">
        {cards.map((card, index) => <Card {...card} key={index} />)}
      </div>
    </section>
  );
};

Places.propTypes = {
  cards: PropTypes.array.isRequired,
  activeCity: PropTypes.string.isRequired
};

export default Places;
