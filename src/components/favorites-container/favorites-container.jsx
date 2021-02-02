import React from 'react';
import PropTypes from 'prop-types';
import FavoriteLocationItems from '../favorites-location-items/favorites-location-items';

const CITIES_LIST = [`Paris`, `Cologne`, `Brussels`, `Amsterdam`, `Hamburg`, `Dusseldorf`];

const FavoritesContainer = ({cards}) => {
  return (
    <section className="favorites">
      <h1 className="favorites__title">Saved listing</h1>
      <ul className="favorites__list">
        {
          CITIES_LIST.map(
              (city, index) => {
                const filteredCards = cards.filter((card) => card.city.name === city);
                return filteredCards.length < 1 ? `` : <FavoriteLocationItems city={city} cards={filteredCards} key={index} />;
              })
        }
      </ul>
    </section>
  );
};

FavoritesContainer.propTypes = {
  cards: PropTypes.array.isRequired
};

export default FavoritesContainer;
