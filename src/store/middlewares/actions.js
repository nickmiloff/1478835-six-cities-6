import * as types from './types';

export const redirectToRoute = (route) => ({type: types.REDIRECT_TO_ROUTE, payload: route});
