import mainReducer, {initialState} from './reducer';
import * as actions from './actions';
import {simpleMock, cards} from '../../tests-mock';

describe(`Main reducers work correctly`, () => {
  it(`Reducer without additional parameters should return initial state`, () => {
    expect(mainReducer(undefined, {})).toEqual(initialState);
  });

  it(`Reducer should change location with setLocation action creator`, () => {
    const expectedState = {
      ...initialState,
      location: simpleMock
    };

    expect(mainReducer(undefined, actions.setLocation(simpleMock))).toEqual(expectedState);
  });

  it(`Reducer should change cards with setCards action creator`, () => {
    const expectedState = {
      ...initialState,
      cards: [simpleMock]
    };

    expect(mainReducer(undefined, actions.setCards([simpleMock]))).toEqual(expectedState);
  });

  it(`Reducer should change type with setType action creator`, () => {
    const expectedState = {
      ...initialState,
      type: simpleMock
    };

    expect(mainReducer(undefined, actions.setType(simpleMock))).toEqual(expectedState);
  });

  it(`Reducer should change loaded with setLoaded action creator`, () => {
    const expectedState = {
      ...initialState,
      loaded: simpleMock
    };

    expect(mainReducer(undefined, actions.setLoaded(simpleMock))).toEqual(expectedState);
  });

  it(`Reducer should change cards with changeCard action creator`, () => {
    const state = {
      ...initialState,
      cards: [...cards.start]
    };
    const expectedState = {
      ...initialState,
      cards: [...cards.end]
    };

    expect(mainReducer(state, actions.changeCard({...cards.changedCard}))).toEqual(expectedState);
  });
});
