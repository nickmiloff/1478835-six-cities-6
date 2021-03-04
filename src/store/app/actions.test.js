import * as types from './types';
import * as actions from './actions';
import {simpleMock} from '../../tests-mock';

describe(`App action creators work correctly`, () => {
  it(`setAuth action creator returns correct action`, () => {
    const expectedAction = {
      type: types.SET_AUTH,
      payload: simpleMock
    };

    expect(actions.setAuth(simpleMock)).toEqual(expectedAction);
  });
});
