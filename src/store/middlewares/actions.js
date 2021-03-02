import {createAction} from '@reduxjs/toolkit';
import * as types from './types';

export const redirectToRoute = createAction(types.REDIRECT_TO_ROUTE, (route) => {
  return {
    payload: route
  };
});
