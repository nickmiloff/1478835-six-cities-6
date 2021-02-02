import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {loadHotels} from '../../store/reducers/favorites-reducer';
import {getHotels} from '../../store/selectors/favorites-selectors';
import FavoriteCard from '../favorite-card/favorite-card';

const FavoriteLocationItems = ({city, cards, updateHotels}) => {
  useEffect(() => {
    updateHotels();
  }, [JSON.stringify(cards)]);

  const filteredCards = cards.filter((hotel) => hotel.city.name === city);

  if (filteredCards.length < 1) {
    return (<></>);
  }

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
        {filteredCards.map((card, index) => <FavoriteCard {...card} key={index} />)}
      </div>
    </li>
  );
};

FavoriteLocationItems.propTypes = {
  city: PropTypes.string.isRequired,
  cards: PropTypes.array.isRequired,
  updateHotels: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  cards: getHotels(state)
});

const mapDispatchToProps = {
  updateHotels: loadHotels
};

export default connect(mapStateToProps, mapDispatchToProps)(FavoriteLocationItems);
