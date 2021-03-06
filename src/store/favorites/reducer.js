import {createReducer} from '@reduxjs/toolkit';
import * as actions from './actions';
import {Statuses} from '../../services/load-statuses';

const initialState = {
  cards: [],
  loaded: Statuses.PENDING
};

const favoritesReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(actions.setCards, (state, action) => {
      state.cards = [...action.payload];
    })
    .addCase(actions.setLoaded, (state, action) => {
      state.loaded = action.payload;
    })
    .addCase(actions.changeCard, (state, action) => {
      const index = state.cards.findIndex((card) => card.id === action.payload.id);
      state.cards = [
        ...state.cards.slice(0, index),
        ...state.cards.slice(index + 1)
      ];
    });
});

export default favoritesReducer;
export {
  initialState
};
