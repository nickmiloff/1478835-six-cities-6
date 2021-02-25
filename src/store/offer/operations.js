import * as actions from './actions';
import {dataToHotelCard, dataToComment} from '../../services/adapters';

export const loadOffer = (id) => (dispatch, _getState, api) => {
  dispatch(actions.setLoaded(false));
  Promise.all([
    api.get(`hotels/${id}`),
    api.get(`hotels/${id}/nearby`),
    api.get(`comments/${id}`)
  ])
    .then(([offer, nearby, reviews]) => {
      dispatch(actions.setOffer(dataToHotelCard(offer.data)));
      dispatch(actions.setNearby(nearby.data.map(dataToHotelCard)));
      dispatch(actions.setReviews(reviews.data.map(dataToComment)));
    })
    .catch(() => {})
    .finally(() => dispatch(actions.setLoaded(true)));
};
