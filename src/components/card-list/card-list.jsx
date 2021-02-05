import React from 'react';
import PropTypes from 'prop-types';
import Card from '../card/card';

const CARD_TYPES = {
  main: `cities__places-list places__list tabs__content`,
  favorites: `favorites__places`,
  offer: `near-places__list places__list`
};

const CardList = ({cards, cardType}) => {
  return (
    <div className={CARD_TYPES[cardType]}>
      {cards.map((card) => <Card cardType={cardType} {...card} key={card.id} />)}
    </div>
  );
};

CardList.propTypes = {
  cards: PropTypes.array.isRequired,
  cardType: PropTypes.string.isRequired
};

export default CardList;
