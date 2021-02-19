import * as types from './types';
import {offer, cards, reviews} from '../../mock';

const initialState = {
  offer: {...offer},
  nearby: [...cards],
  reviews: [...reviews]
};

const offerReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_OFFER:
      return {
        ...state,
        offer: {...action.payload}
      };

    case types.SET_NEARBY:
      return {
        ...state,
        nearby: [...action.payload]
      };

    case types.SET_REVIEWS:
      return {
        ...state,
        reviews: [...action.payload]
      };

    default:
      return state;
  }
};

export default offerReducer;
