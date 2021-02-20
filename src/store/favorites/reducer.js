import * as types from './types';
import {cards} from '../../mock';

const initialState = {
  cards: [...cards]
};

const favoritesReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_CARDS:
      return {
        ...state,
        cards: [...action.payload]
      };

    default:
      return state;
  }
};

export default favoritesReducer;
