import React from 'react';
import PropTypes from 'prop-types';
import Places from '../places/places';
import PlacesEmpty from '../places-empty/places-empty';

const Cities = ({cards, activeCity}) => {
  return (
    <div className="cities">
      <div className={`cities__places-container container${cards.length === 0 && ` cities__places-container--empty` || ``}`}>
        {
          cards.length === 0
          && <PlacesEmpty activeCity={activeCity} />
          || <Places cards={cards} activeCity={activeCity} />
        }
        <div className="cities__right-section">
          {cards.length === 0 ? `` : <section className="cities__map map"></section>}
        </div>
      </div>
    </div>
  );
};

Cities.propTypes = {
  cards: PropTypes.array.isRequired,
  activeCity: PropTypes.string.isRequired
};

export default Cities;
