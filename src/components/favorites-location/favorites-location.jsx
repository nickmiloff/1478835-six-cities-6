import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import CardsList from '../cards-list/cards-list';
import {changeFavorite} from '../../store/favorites/operations';

const FavoritesLocation = ({city, cards, onFavoriteClick}) => {
  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <a className="locations__item-link" href="#">
            <span>{city}</span>
          </a>
        </div>
      </div>
      <CardsList cards={cards} cardType="favorites" onFavoriteClick={onFavoriteClick} />
    </li>
  );
};

FavoritesLocation.propTypes = {
  city: PropTypes.string.isRequired,
  cards: PropTypes.array.isRequired,
  onFavoriteClick: PropTypes.func.isRequired
};

const mapDispatchToProps = {
  onFavoriteClick: changeFavorite
};

export default connect(null, mapDispatchToProps)(FavoritesLocation);
