import MockAdapter from 'axios-mock-adapter';
import {createAPI} from '../../services/api';
import * as operations from './operations';
import * as types from './types';
import {cardsFull} from '../../tests-mock';
import {Statuses} from '../../services/load-statuses';

const api = createAPI(() => {});

describe(`Favorites async operation work correctly`, () => {
  it(`Should make a correct API call to /favorite with loadFavorites`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const loadFavoritesOperation = operations.loadFavorites();

    apiMock
      .onGet(`favorite`)
      .reply(200, cardsFull.api);

    return loadFavoritesOperation(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(3);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: types.SET_LOADED,
          payload: Statuses.LOAD
        });
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: types.SET_CARDS,
          payload: cardsFull.adapted,
        });
        expect(dispatch).toHaveBeenNthCalledWith(3, {
          type: types.SET_LOADED,
          payload: Statuses.LOADED
        });
      });
  });

  it(`Should make a correct API call to /favorite/:id/:status with changeFavorite`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const changeFavoritesOperation = operations.changeFavorite(1, 1);

    apiMock
      .onPost(`favorite/1/1`)
      .reply(200, cardsFull.api[0]);

    return changeFavoritesOperation(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: types.CHANGE_CARD,
          payload: cardsFull.adapted[0],
        });
      });
  });
});
