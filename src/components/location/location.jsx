import React from 'react';
import PropTypes from 'prop-types';

const Location = ({activeCity, currentCity, changeCity}) => {
  return (
    <li className="locations__item">
      <a
        className={`locations__item-link tabs__item${activeCity === currentCity && ` tabs__item--active` || ``}`}
        href="#"
        onClick={() => {
          changeCity(currentCity);
        }}>
        <span>{currentCity}</span>
      </a>
    </li>
  );
};

Location.propTypes = {
  activeCity: PropTypes.string.isRequired,
  currentCity: PropTypes.string.isRequired,
  changeCity: PropTypes.func.isRequired
};

export default Location;
