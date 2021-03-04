import offerReducer, {initialState} from './reducer';
import * as actions from './actions';
import {simpleMock, cards} from '../../tests-mock';

describe(`Offer reducers work correctly`, () => {
  it(`Reducer without additional parameters should return initial state`, () => {
    expect(offerReducer(undefined, {})).toEqual(initialState);
  });

  it(`Reducer should change offer with setOffer action creator`, () => {
    const expectedState = {
      ...initialState,
      offer: {simpleMock}
    };

    expect(offerReducer(undefined, actions.setOffer({simpleMock}))).toEqual(expectedState);
  });

  it(`Reducer should change nearby with setNearby action creator`, () => {
    const expectedState = {
      ...initialState,
      nearby: [simpleMock]
    };

    expect(offerReducer(undefined, actions.setNearby([simpleMock]))).toEqual(expectedState);
  });

  it(`Reducer should change reviews with setReviews action creator`, () => {
    const expectedState = {
      ...initialState,
      reviews: [simpleMock]
    };

    expect(offerReducer(undefined, actions.setReviews([simpleMock]))).toEqual(expectedState);
  });

  it(`Reducer should change loaded with setLoaded action creator`, () => {
    const expectedState = {
      ...initialState,
      loaded: simpleMock
    };

    expect(offerReducer(undefined, actions.setLoaded(simpleMock))).toEqual(expectedState);
  });

  it(`Reducer should change reviewLoaded with setReviewLoaded action creator`, () => {
    const expectedState = {
      ...initialState,
      reviewLoaded: simpleMock
    };

    expect(offerReducer(undefined, actions.setReviewLoaded(simpleMock))).toEqual(expectedState);
  });

  it(`Reducer should change cards with changeNearby action creator`, () => {
    const state = {
      ...initialState,
      nearby: [...cards.start]
    };
    const expectedState = {
      ...initialState,
      nearby: [...cards.end]
    };

    expect(offerReducer(state, actions.changeNearby({...cards.changedCard}))).toEqual(expectedState);
  });
});
