import * as types from './types';
import {Statuses} from '../../services/load-statuses';

const initialState = {
  cards: [],
  loaded: Statuses.PENDING
};

const favoritesReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_CARDS:
      return {
        ...state,
        cards: [...action.payload]
      };

    case types.SET_LOADED:
      return {
        ...state,
        loaded: action.payload
      };

    case types.CHANGE_CARD:
      const index = state.cards.findIndex((card) => card.id === action.payload.id);

      return {
        ...state,
        cards: [
          ...state.cards.slice(0, index),
          ...state.cards.slice(index + 1)
        ]
      };

    default:
      return state;
  }
};

export default favoritesReducer;
