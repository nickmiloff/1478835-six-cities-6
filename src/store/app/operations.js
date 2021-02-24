import * as actions from './actions';
import * as middlewaresActions from '../middlewares/actions';
import {dataToAuthInfo} from '../../services/adapters';

export const checkAuth = () => (dispatch, _getState, api) => {
  api.get(`login`)
    .then(({data}) => dispatch(actions.setAuth(dataToAuthInfo(data))))
    .catch(() => {});
};

export const login = (user) => (dispatch, _getState, api) => {
  api.post(`login`, user)
    .then(({data}) => dispatch(actions.setAuth(dataToAuthInfo(data))))
    .then(() => dispatch(middlewaresActions.redirectToRoute(`/`)))
    .catch(() => {});
};

export const logout = () => (dispatch, _getState, api) => {
  api.get(`logout`)
    .then(() => dispatch(actions.setAuth(null)))
    .catch(() => {});
};
