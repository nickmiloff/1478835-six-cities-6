import React from 'react';
import PropTypes from 'prop-types';

const LOCATIONS = [`Paris`, `Cologne`, `Brussels`, `Amsterdam`, `Hamburg`, `Dusseldorf`];

const Locations = ({activeLocation, changeLocation}) => {
  return (
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {LOCATIONS.map((location, index) =>
          <li className="locations__item" key={index}>
            <a
              className={`locations__item-link tabs__item${location === activeLocation && ` tabs__item--active` || ``}`}
              onClick={() => {
                changeLocation(() => location);
              }}>
              <span>{location}</span>
            </a>
          </li>
        )}
      </ul>
    </section>
  );
};

Locations.propTypes = {
  activeLocation: PropTypes.string.isRequired,
  changeLocation: PropTypes.func.isRequired
};

export default Locations;
