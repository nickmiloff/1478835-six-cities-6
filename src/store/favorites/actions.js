import {createAction} from '@reduxjs/toolkit';
import * as types from './types';

export const setCards = createAction(types.SET_CARDS, (cards) => {
  return {
    payload: cards
  };
});

export const setLoaded = createAction(types.SET_LOADED, (loaded) => {
  return {
    payload: loaded
  };
});

export const changeCard = createAction(types.CHANGE_CARD, (card) => {
  return {
    payload: card
  };
});
