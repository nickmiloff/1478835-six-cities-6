import {createAction} from '@reduxjs/toolkit';
import * as types from './types';

export const setAuth = createAction(types.SET_AUTH, (auth) => {
  return {
    payload: auth
  };
});
