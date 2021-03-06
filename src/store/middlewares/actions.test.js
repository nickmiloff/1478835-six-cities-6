import * as types from './types';
import * as actions from './actions';
import {simpleMock} from '../../tests-mock';

describe(`App action creators work correctly`, () => {
  it(`redirectToRoute action creator returns correct action`, () => {
    const expectedAction = {
      type: types.REDIRECT_TO_ROUTE,
      payload: simpleMock
    };

    expect(actions.redirectToRoute(simpleMock)).toEqual(expectedAction);
  });
});
