import favoritesReducer, {initialState} from './reducer';
import * as actions from './actions';
import {simpleMock, cards} from '../../tests-mock';

describe(`Favorite reducers work correctly`, () => {
  it(`Reducer without additional parameters should return initial state`, () => {
    expect(favoritesReducer(undefined, {})).toEqual(initialState);
  });

  it(`Reducer should change cards with setCards action creator`, () => {
    const expectedState = {
      ...initialState,
      cards: [simpleMock]
    };

    expect(favoritesReducer(undefined, actions.setCards([simpleMock]))).toEqual(expectedState);
  });

  it(`Reducer should change loaded with setLoaded action creator`, () => {
    const expectedState = {
      ...initialState,
      loaded: simpleMock
    };

    expect(favoritesReducer(undefined, actions.setLoaded(simpleMock))).toEqual(expectedState);
  });

  it(`Reducer should change cards with changeCard action creator`, () => {
    const state = {
      ...initialState,
      cards: [...cards.start]
    };
    const expectedState = {
      ...initialState,
      cards: [...cards.endWithRemove]
    };

    expect(favoritesReducer(state, actions.changeCard({...cards.changedCard}))).toEqual(expectedState);
  });
});
