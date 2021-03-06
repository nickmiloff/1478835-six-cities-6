import * as types from './types';
import * as actions from './actions';
import {simpleMock} from '../../tests-mock';

describe(`Offer action creators work correctly`, () => {
  it(`setOffer action creator returns correct action`, () => {
    const expectedAction = {
      type: types.SET_OFFER,
      payload: simpleMock
    };

    expect(actions.setOffer(simpleMock)).toEqual(expectedAction);
  });

  it(`setNearby action creator returns correct action`, () => {
    const expectedAction = {
      type: types.SET_NEARBY,
      payload: simpleMock
    };

    expect(actions.setNearby(simpleMock)).toEqual(expectedAction);
  });

  it(`setReviews action creator returns correct action`, () => {
    const expectedAction = {
      type: types.SET_REVIEWS,
      payload: simpleMock
    };

    expect(actions.setReviews(simpleMock)).toEqual(expectedAction);
  });

  it(`setLoaded action creator returns correct action`, () => {
    const expectedAction = {
      type: types.SET_LOADED,
      payload: simpleMock
    };

    expect(actions.setLoaded(simpleMock)).toEqual(expectedAction);
  });

  it(`setReviewLoaded action creator returns correct action`, () => {
    const expectedAction = {
      type: types.SET_REVIEW_LOADED,
      payload: simpleMock
    };

    expect(actions.setReviewLoaded(simpleMock)).toEqual(expectedAction);
  });

  it(`changeNearby action creator returns correct action`, () => {
    const expectedAction = {
      type: types.CHANGE_NEARBY,
      payload: simpleMock
    };

    expect(actions.changeNearby(simpleMock)).toEqual(expectedAction);
  });
});
