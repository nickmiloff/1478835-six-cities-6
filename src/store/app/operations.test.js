import MockAdapter from 'axios-mock-adapter';
import {createAPI} from '../../services/api';
import * as operations from './operations';
import * as types from './types';
import * as middlewaresTypes from '../middlewares/types';
import {auth, user} from '../../tests-mock';

const api = createAPI(() => {});

describe(`App async operation work correctly`, () => {
  it(`Should make a correct API call to /login with checkAuth`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const loginOperation = operations.checkAuth();

    apiMock
      .onGet(`login`)
      .reply(200, auth.api);

    return loginOperation(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: types.SET_AUTH,
          payload: auth.adapted,
        });
      });
  });

  it(`Should make a correct API call to /login with login`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const loginOperation = operations.login(user);

    apiMock
      .onPost(`login`)
      .reply(200, auth.api);

    return loginOperation(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(3);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: types.SET_AUTH,
          payload: auth.adapted,
        });
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: middlewaresTypes.REDIRECT_TO_ROUTE,
          payload: `/`
        });
      });
  });

  it(`Should make a correct API call to /logout with logout`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const logoutOperation = operations.logout();

    apiMock
      .onGet(`logout`)
      .reply(200);

    return logoutOperation(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(3);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: types.SET_AUTH,
          payload: null,
        });
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: middlewaresTypes.REDIRECT_TO_ROUTE,
          payload: `/`
        });
      });
  });
});
