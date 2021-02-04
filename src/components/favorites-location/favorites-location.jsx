import React from 'react';
import PropTypes from 'prop-types';
import Card from '../card/card';

const FavoritesLocation = ({city, cards}) => {
  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <a className="locations__item-link" href="#">
            <span>{city}</span>
          </a>
        </div>
      </div>
      <div className="favorites__places">
        {cards.map((card, index) => <Card cardType="favorites" {...card} key={index} />)}
      </div>
    </li>
  );
};

FavoritesLocation.propTypes = {
  city: PropTypes.string.isRequired,
  cards: PropTypes.array.isRequired
};

export default FavoritesLocation;
