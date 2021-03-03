import * as actions from './actions';
import * as middlewaresActions from '../middlewares/actions';
import * as mainOperations from '../main/operations';
import {dataToAuthInfo} from '../../services/adapters';

export const checkAuth = () => (dispatch, _getState, api) => {
  api.get(`login`)
    .then(({data}) => dispatch(actions.setAuth(dataToAuthInfo(data))))
    .catch(() => {});
};

export const login = (user) => (dispatch, _getState, api) => {
  api.post(`login`, user)
    .then(({data}) => {
      dispatch(actions.setAuth(dataToAuthInfo(data)));
      dispatch(mainOperations.loadOffers());
      dispatch(middlewaresActions.redirectToRoute(`/`));
    })
    .catch(() => {});
};

export const logout = () => (dispatch, _getState, api) => {
  api.get(`logout`)
    .then(() => {
      dispatch(actions.setAuth(null));
      dispatch(middlewaresActions.redirectToRoute(`/`));
      dispatch(mainOperations.loadOffers());
    })
    .catch(() => {});
};
