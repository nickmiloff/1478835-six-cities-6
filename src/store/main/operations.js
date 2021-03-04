import * as actions from './actions';
import {Statuses} from '../../services/load-statuses';
import {dataToHotelCard} from '../../services/adapters';

export const loadOffers = () => (dispatch, _getState, api) => {
  dispatch(actions.setLoaded(Statuses.LOAD));
  return api.get(`hotels`)
    .then(({data}) => {
      dispatch(actions.setCards(data.map(dataToHotelCard)));
      dispatch(actions.setLoaded(Statuses.LOADED));
    })
    .catch(() => {
      dispatch(actions.setLoaded(Statuses.ERROR));
    });
};

export const changeFavorite = (id, status) => (dispatch, _getState, api) => {
  return api.post(`favorite/${id}/${Number(status)}`)
    .then(({data}) => {
      dispatch(actions.changeCard(dataToHotelCard(data)));
    })
    .catch(() => {
      dispatch(actions.setLoaded(Statuses.ERROR));
    });
};
