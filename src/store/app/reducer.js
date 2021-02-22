import * as types from './types';

const initialState = {
  authorized: null
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_AUTH:
      return {
        ...state,
        authorized: action.payload
      };

    default:
      return state;
  }
};

export default appReducer;
