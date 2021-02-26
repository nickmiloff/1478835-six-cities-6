import * as actions from './actions';
import * as mainActions from '../main/actions';
import {Statuses} from '../../services/load-statuses';
import {dataToHotelCard} from '../../services/adapters';

export const loadFavorites = () => (dispatch, _getState, api) => {
  dispatch(actions.setLoaded(Statuses.LOAD));
  api.get(`favorite`)
    .then(({data}) => {
      dispatch(actions.setCards(data.map(dataToHotelCard)));
      dispatch(actions.setLoaded(Statuses.LOADED));
    })
    .catch(() => {
      dispatch(actions.setLoaded(Statuses.ERROR));
    });
};

export const changeFavorite = (id, status) => (dispatch, _getState, api) => {
  api.post(`favorite/${id}/${Number(status)}`)
    .then(({data}) => {
      dispatch(actions.changeCard(dataToHotelCard(data)));
      dispatch(mainActions.changeCard(dataToHotelCard(data)));
    })
    .catch(() => {
      dispatch(actions.setLoaded(Statuses.ERROR));
    });
};
