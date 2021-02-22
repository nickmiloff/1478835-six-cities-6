import * as types from './types';

const initialState = {
  location: `Paris`,
  cards: [],
  type: `Popular`,
  loaded: false
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
        cards: [...action.payload]
      };

    case types.SET_TYPE:
      return {
        ...state,
        type: action.payload
      };

    case types.SET_LOADED:
      return {
        ...state,
        loaded: action.payload
      };

    default:
      return state;
  }
};

export default mainReducer;
