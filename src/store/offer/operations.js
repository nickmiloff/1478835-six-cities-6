import * as actions from './actions';
import * as mainActions from '../main/actions';
import {Statuses} from '../../services/load-statuses';
import {dataToHotelCard, dataToComment} from '../../services/adapters';

const ERROR_TIMEOUT = 5000;

export const loadOffer = (id) => (dispatch, _getState, api) => {
  dispatch(actions.setLoaded(Statuses.LOAD));
  return Promise.all([
    api.get(`hotels/${id}`),
    api.get(`hotels/${id}/nearby`),
    api.get(`comments/${id}`)
  ])
    .then(([offer, nearby, reviews]) => {
      dispatch(actions.setOffer(dataToHotelCard(offer.data)));
      dispatch(actions.setNearby(nearby.data.map(dataToHotelCard)));
      dispatch(actions.setReviews(reviews.data.map(dataToComment)));
      dispatch(actions.setLoaded(Statuses.LOADED));
    })
    .catch(() => {
      dispatch(actions.setLoaded(Statuses.ERROR));
    });
};

export const sendComment = (id, comment, rating) => (dispatch, _getState, api) => {
  dispatch(actions.setReviewLoaded(Statuses.LOAD));
  return api.post(`comments/${id}`, {comment, rating})
    .then(({data}) => {
      dispatch(actions.setReviews(data.map(dataToComment)));
      dispatch(actions.setReviewLoaded(Statuses.LOADED));
    })
    .catch(() => {
      dispatch(actions.setReviewLoaded(Statuses.ERROR));
    })
    .finally(() => {
      setTimeout(() => dispatch(actions.setReviewLoaded(Statuses.PENDING)), ERROR_TIMEOUT);
    });
};

export const changeFavorite = (id, status) => (dispatch, _getState, api) => {
  return api.post(`favorite/${id}/${Number(status)}`)
    .then(({data}) => {
      dispatch(actions.setOffer(dataToHotelCard(data)));
      dispatch(mainActions.changeCard(dataToHotelCard(data)));
    })
    .catch(() => {
      dispatch(actions.setLoaded(Statuses.ERROR));
    });
};

export const changeNearbyFavorite = (id, status) => (dispatch, _getState, api) => {
  return api.post(`favorite/${id}/${Number(status)}`)
    .then(({data}) => {
      dispatch(actions.changeNearby(dataToHotelCard(data)));
      dispatch(mainActions.changeCard(dataToHotelCard(data)));
    })
    .catch(() => {
      dispatch(actions.setLoaded(Statuses.ERROR));
    });
};
