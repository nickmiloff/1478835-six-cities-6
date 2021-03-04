import * as actions from './actions';
import * as middlewaresActions from '../middlewares/actions';
import * as mainOperations from '../main/operations';
import {dataToAuthInfo} from '../../services/adapters';

export const checkAuth = () => (dispatch, _getState, api) => {
  return api.get(`login`)
    .then(({data}) => dispatch(actions.setAuth(dataToAuthInfo(data))))
    .catch(() => {});
};

export const login = (user) => (dispatch, _getState, api) => {
  return api.post(`login`, user)
    .then(({data}) => {
      dispatch(actions.setAuth(dataToAuthInfo(data)));
      dispatch(middlewaresActions.redirectToRoute(`/`));
      dispatch(mainOperations.loadOffers());
    })
    .catch(() => {});
};

export const logout = () => (dispatch, _getState, api) => {
  return api.get(`logout`)
    .then(() => {
      dispatch(actions.setAuth(null));
      dispatch(middlewaresActions.redirectToRoute(`/`));
      dispatch(mainOperations.loadOffers());
    })
    .catch(() => {});
};
