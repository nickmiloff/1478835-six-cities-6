import * as actions from './actions';
import {dataToHotelCard} from '../../services/adapters';

export const loadOffers = () => (dispatch, _getState, api) => {
  dispatch(actions.setLoaded(false));
  api.get(`hotels`)
    .then(({data}) => dispatch(actions.setCards(data.map(dataToHotelCard))))
    .catch(() => {})
    .finally(() => dispatch(actions.setLoaded(true)));
};
