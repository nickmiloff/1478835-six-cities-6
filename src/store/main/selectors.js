import {createSelector} from 'reselect';

export const getLocation = (state) => state.main.location;
export const getAllCards = (state) => state.main.cards;
export const getType = (state) => state.main.type;

export const getCards = createSelector(
    [getLocation, getAllCards, getType],
    (location, cards, type) => {
      const suitableCards = cards.filter((card) => card.city.name === location);

      switch (type) {
        case `Price: high to low`:
          return suitableCards.sort((a, b) => b.price - a.price);

        case `Price: low to high`:
          return suitableCards.sort((a, b) => a.price - b.price);

        case `Top rated first`:
          return suitableCards.sort((a, b) => b.rating - a.rating);

        default:
          return suitableCards;
      }
    }
);
