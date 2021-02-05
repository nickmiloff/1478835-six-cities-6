import React from 'react';
import PropTypes from 'prop-types';
import CardList from '../card-list/card-list';

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
      <CardList cards={cards} cardType="favorites" />
    </li>
  );
};

FavoritesLocation.propTypes = {
  city: PropTypes.string.isRequired,
  cards: PropTypes.array.isRequired
};

export default FavoritesLocation;
