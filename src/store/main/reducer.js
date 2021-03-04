import {createReducer} from '@reduxjs/toolkit';
import * as actions from './actions';
import {Statuses} from '../../services/load-statuses';

const initialState = {
  location: `Paris`,
  cards: [],
  type: `Popular`,
  loaded: Statuses.PENDING
};

const mainReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(actions.setLocation, (state, action) => {
      state.location = action.payload;
    })
    .addCase(actions.setCards, (state, action) => {
      state.cards = [...action.payload];
    })
    .addCase(actions.setType, (state, action) => {
      state.type = action.payload;
    })
    .addCase(actions.setLoaded, (state, action) => {
      state.loaded = action.payload;
    })
    .addCase(actions.changeCard, (state, action) => {
      const index = state.cards.findIndex((card) => card.id === action.payload.id);
      state.cards = [
        ...state.cards.slice(0, index),
        action.payload,
        ...state.cards.slice(index + 1)
      ];
    });
});

export default mainReducer;
export {
  initialState
};
