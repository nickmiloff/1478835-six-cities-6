import * as actions from './actions';
import * as statuses from '../../services/load-statuses';
import {dataToHotelCard} from '../../services/adapters';

export const loadOffers = () => (dispatch, _getState, api) => {
  dispatch(actions.setLoaded(statuses.LOAD));
  api.get(`hotels`)
    .then(({data}) => {
      dispatch(actions.setCards(data.map(dataToHotelCard)));
    })
    .then(() => {
      dispatch(actions.setLoaded(statuses.LOADED));
    })
    .catch(() => {
      dispatch(actions.setLoaded(statuses.ERROR));
    });
};
