import * as actions from './actions';
import * as statuses from '../../services/load-statuses';
import {dataToHotelCard, dataToComment} from '../../services/adapters';

const ERROR_TIMEOUT = 5000;

export const loadOffer = (id) => (dispatch, _getState, api) => {
  dispatch(actions.setLoaded(statuses.LOAD));
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
    .then(() => {
      dispatch(actions.setLoaded(statuses.LOADED));
    })
    .catch(() => {
      dispatch(actions.setLoaded(statuses.ERROR));
    });
};

export const sendComment = (id, comment, rating) => (dispatch, _getState, api) => {
  dispatch(actions.setReviewLoaded(statuses.LOAD));
  api.post(`comments/${id}/`, {comment, rating})
    .then(({data}) => {
      dispatch(actions.setReviews(data.map(dataToComment)));
    })
    .then(() => {
      dispatch(actions.setReviewLoaded(statuses.LOADED));
    })
    .catch(() => {
      dispatch(actions.setReviewLoaded(statuses.ERROR));
    })
    .finally(() => {
      setTimeout(() => dispatch(actions.setReviewLoaded(statuses.PENDING)), ERROR_TIMEOUT);
    });
};
