export const getOffer = (state) => state.offer.offer;
export const getNearby = (state) => state.offer.nearby.slice(0, 3);
export const getReviews = (state) => state.offer.reviews.slice(0, 10);
export const getIsLoaded = (state) => state.offer.loaded;
export const getReviewIsLoaded = (state) => state.offer.reviewLoaded;
