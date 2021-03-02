import React from 'react';
import PropTypes from 'prop-types';
import Card from '../card/card';

const CARD_TYPES = {
  main: `cities__places-list places__list tabs__content`,
  favorites: `favorites__places`,
  offer: `near-places__list places__list`
};

const CardsList = ({cards, cardType, onChnageActiveCardId = () => {}, onFavoriteClick}) => {
  const changeActiveCardIdHandler = React.useCallback((id) => onChnageActiveCardId(id), []);

  return (
    <div className={CARD_TYPES[cardType]}>
      {cards.map((card) =>
        <Card
          cardType={cardType}
          key={card.id}
          onChnageActiveCardId={changeActiveCardIdHandler}
          onFavoriteClick={onFavoriteClick}
          {...card} />)}
    </div>
  );
};

CardsList.propTypes = {
  cards: PropTypes.array.isRequired,
  cardType: PropTypes.string.isRequired,
  onChnageActiveCardId: PropTypes.func,
  onFavoriteClick: PropTypes.func.isRequired
};

export default React.memo(CardsList);
