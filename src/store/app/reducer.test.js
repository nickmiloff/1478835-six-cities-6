import appReducer, {initialState} from './reducer';
import * as actions from './actions';
import {simpleMock} from '../../tests-mock';

describe(`App reducers work correctly`, () => {
  it(`Reducer without additional parameters should return initial state`, () => {
    expect(appReducer(undefined, {})).toEqual(initialState);
  });

  it(`Reducer should change authorized with setAuth action creator`, () => {
    const expectedState = {
      authorized: simpleMock
    };

    expect(appReducer(undefined, actions.setAuth(simpleMock))).toEqual(expectedState);
  });
});
