import browserHistory from '../../browser-history';
import * as types from './types';

export const redirect = (_store) => (next) => (action) => {
  if (action.type === types.REDIRECT_TO_ROUTE) {
    browserHistory.push(action.payload);
  }

  return next(action);
};
