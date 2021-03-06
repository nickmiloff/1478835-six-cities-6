import * as types from './types';
import * as actions from './actions';
import {simpleMock} from '../../tests-mock';

describe(`Favorites action creators work correctly`, () => {
  it(`setCards action creator returns correct action`, () => {
    const expectedAction = {
      type: types.SET_CARDS,
      payload: simpleMock
    };

    expect(actions.setCards(simpleMock)).toEqual(expectedAction);
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
