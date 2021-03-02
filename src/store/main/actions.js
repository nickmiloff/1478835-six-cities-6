import {createAction} from '@reduxjs/toolkit';
import * as types from './types';

export const setLocation = createAction(types.SET_LOCATION, (location) => {
  return {
    payload: location
  };
});

export const setCards = createAction(types.SET_CARDS, (cards) => {
  return {
    payload: cards
  };
});

export const setType = createAction(types.SET_TYPE, (type) => {
  return {
    payload: type
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
