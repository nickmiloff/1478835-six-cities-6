import MockAdapter from 'axios-mock-adapter';
import {createAPI} from '../../services/api';
import * as operations from './operations';
import * as types from './types';
import {cardsFull, comments} from '../../tests-mock';
import {Statuses} from '../../services/load-statuses';

const api = createAPI(() => {});

describe(`Offer async operation work correctly`, () => {
  it(`Should make a correct API call to /hotels/:id, hotels/:id/nearby, comments/:id with loadOffer`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const loadOfferOperation = operations.loadOffer(1);

    apiMock
      .onGet(`hotels/1`)
      .reply(200, cardsFull.api[0])
      .onGet(`hotels/1/nearby`)
      .reply(200, cardsFull.api)
      .onGet(`comments/1`)
      .reply(200, comments.api);

    return loadOfferOperation(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(5);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: types.SET_LOADED,
          payload: Statuses.LOAD
        });
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: types.SET_OFFER,
          payload: cardsFull.adapted[0],
        });
        expect(dispatch).toHaveBeenNthCalledWith(3, {
          type: types.SET_NEARBY,
          payload: cardsFull.adapted,
        });
        expect(dispatch).toHaveBeenNthCalledWith(4, {
          type: types.SET_REVIEWS,
          payload: comments.adapted,
        });
        expect(dispatch).toHaveBeenNthCalledWith(5, {
          type: types.SET_LOADED,
          payload: Statuses.LOADED
        });
      });
  });

  it(`Should make a correct API call to comments/:id with sendComment`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const sendCommentOperation = operations.sendComment(1, ``, 0);

    apiMock
      .onPost(`comments/1`)
      .reply(200, comments.api);

    return sendCommentOperation(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(3);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: types.SET_REVIEW_LOADED,
          payload: Statuses.LOAD
        });
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: types.SET_REVIEWS,
          payload: comments.adapted,
        });
        expect(dispatch).toHaveBeenNthCalledWith(3, {
          type: types.SET_REVIEW_LOADED,
          payload: Statuses.LOADED
        });
      });
  });

  it(`Should make a correct API call to favorite/:id/:status with changeFavorite`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const changeFavoriteOperation = operations.changeFavorite(1, 1);

    apiMock
      .onPost(`favorite/1/1`)
      .reply(200, cardsFull.api[0]);

    return changeFavoriteOperation(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: types.SET_OFFER,
          payload: cardsFull.adapted[0],
        });
      });
  });

  it(`Should make a correct API call to favorite/:id/:status with changeNearbyFavorite`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const changeFavoriteOperation = operations.changeNearbyFavorite(1, 1);

    apiMock
      .onPost(`favorite/1/1`)
      .reply(200, cardsFull.api[0]);

    return changeFavoriteOperation(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: types.CHANGE_NEARBY,
          payload: cardsFull.adapted[0],
        });
      });
  });
});
