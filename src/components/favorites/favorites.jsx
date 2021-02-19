import React from 'react';
import PropTypes from 'prop-types';
import FavoritesLocation from '../favorites-location/favorites-location';

const CITIES_LIST = [`Paris`, `Cologne`, `Brussels`, `Amsterdam`, `Hamburg`, `Dusseldorf`];

const Favorites = ({cards}) => {
  return (
    <section className="favorites">
      <h1 className="favorites__title">Saved listing</h1>
      <ul className="favorites__list">
        {
          CITIES_LIST.map(
              (city, index) => {
                const filteredCards = cards.filter((card) => card.city.name === city);
                return filteredCards.length < 1 ? `` : <FavoritesLocation city={city} cards={filteredCards} key={index} />;
              })
        }
      </ul>
    </section>
  );
};

Favorites.propTypes = {
  cards: PropTypes.array.isRequired
};

export default Favorites;
