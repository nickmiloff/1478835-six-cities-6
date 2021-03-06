import {redirect} from './redirect';
import * as types from './types';
import * as actions from './actions';

describe(`App async operation work correctly`, () => {
  it(`Should make a correct API call to /login with checkAuth`, () => {
    const next = jest.fn();

    redirect(null)(next)(actions.redirectToRoute(`/`));

    expect(next).toHaveBeenCalledTimes(1);
    expect(next).toHaveBeenNthCalledWith(1, {
      type: types.REDIRECT_TO_ROUTE,
      payload: `/`,
    });
  });
});
