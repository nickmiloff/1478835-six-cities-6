import * as types from './types';
import * as actions from './actions';
import {simpleMock} from '../../tests-mock';

describe(`Main action creators work correctly`, () => {
  it(`setLocation action creator returns correct action`, () => {
    const expectedAction = {
      type: types.SET_LOCATION,
      payload: simpleMock
    };

    expect(actions.setLocation(simpleMock)).toEqual(expectedAction);
  });

  it(`setCards action creator returns correct action`, () => {
    const expectedAction = {
      type: types.SET_CARDS,
      payload: simpleMock
    };

    expect(actions.setCards(simpleMock)).toEqual(expectedAction);
  });

  it(`setType action creator returns correct action`, () => {
    const expectedAction = {
      type: types.SET_TYPE,
      payload: simpleMock
    };

    expect(actions.setType(simpleMock)).toEqual(expectedAction);
  });

  it(`setLoaded action creator returns correct action`, () => {
    const expectedAction = {
      type: types.SET_LOADED,
      payload: simpleMock
    };

    expect(actions.setLoaded(simpleMock)).toEqual(expectedAction);
  });

  it(`changeCard action creator returns correct action`, () => {
    const expectedAction = {
      type: types.CHANGE_CARD,
      payload: simpleMock
    };

    expect(actions.changeCard(simpleMock)).toEqual(expectedAction);
  });
});
