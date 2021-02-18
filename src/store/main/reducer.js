import * as types from './types';
import {cards} from '../../mock';

const initialState = {
  location: `Paris`,
  cards: [...cards],
  type: `Price: high to low`
};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_LOCATION:
      return {
        ...state,
        location: action.payload
      };

    case types.SET_CARDS:
      return {
        ...state,
        cards: action.payload
      };

    case types.SET_TYPE:
      return {
        ...state,
        type: action.payload
      };

    default:
      return state;
  }
};

export default mainReducer;
