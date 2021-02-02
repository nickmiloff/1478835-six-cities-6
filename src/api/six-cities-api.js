import * as axios from 'axios';

const instance = axios.create({
  baseURL: `https://6.react.pages.academy/six-cities/`,
  headers: {
    "Content-Type": `application/json;charset=utf-8`
  },
  withCredentials: true
});

const sixCitiesApi = {
  _transformDataToCard(data) {
    const card = {
      ...data,
      host: {
        ...data.host,
        avatarUrl: data.host[`avatar_url`],
        isPro: data.host[`is_pro`]
      },
      isFavorite: data[`is_favorite`],
      isPremium: data[`is_premium`],
      previewImage: data[`preview_image`],
      maxAdults: data[`max_adults`]
    };

    delete card.host[`avatar_url`];
    delete card.host[`is_pro`];
    delete card[`is_favorite`];
    delete card[`is_premium`];
    delete card[`preview_image`];
    delete card[`max_adults`];

    return card;
  },

  _transformDataToComment(data) {
    const comment = {
      ...data,
      user: {
        ...data.user,
        avatarUrl: data.user[`avatar_url`],
        isPro: data.user[`is_pro`]
      }
    };

    delete comment.user[`avatar_url`];
    delete comment.user[`is_pro`];

    return comment;
  },

  _transformDataToAuthInfo(data) {
    const authInfo = {
      ...data,
      avatarUrl: data[`avatar_url`],
      isPro: data[`is_pro`]
    };

    delete authInfo[`avatar_url`];
    delete authInfo[`is_pro`];

    return authInfo;
  },

  getHotels() {
    return instance.get(`hotels`)
      .then((response) => response.data)
      .then((data) => data.map(this._transformDataToCard));
  },

  getHotel(id = 1) {
    return instance.get(`hotels/${id}`)
      .then((response) => response.data)
      .then((data) => this._transformDataToCard(data));
  },

  getNearbyHotels(id = 1) {
    return instance.get(`hotels/${id}/nearby`)
      .then((response) => response.data)
      .then((data) => data.map(this._transformDataToCard));
  },

  getFavorite() {
    return instance.get(`favorite`)
      .then((response) => response.data)
      .then((data) => data.map(this._transformDataToCard));
  },

  setFavorite(id = 1, status = 0) {
    if (status !== 0 || status !== 1) {
      throw new Error(`Невалидное значение статуса`);
    }

    return instance.post(`favorite/${id}/${status}`)
      .then((response) => response.data)
      .then((data) => this._transformDataToCard(data));
  },

  getComments(id = 1) {
    return instance.get(`comments/${id}`)
      .then((response) => response.data)
      .then((data) => data.map(this._transformDataToComment));
  },

  postComment(id = 1, comment) {
    return instance.post(`comments/${id}`, comment)
      .then((response) => response.data)
      .then((data) => data.map(this._transformDataToComment));
  },

  login(authInfo) {
    return instance.post(`login`, authInfo)
      .then((response) => response.data)
      .then((data) => data.map(this._transformDataToAuthInfo));
  },

  getLoginStatus() {
    return instance.get(`login`)
      .then((response) => response.data)
      .then((data) => data.map(this._transformDataToAuthInfo));
  },

  logout() {
    return instance.get(`logout`);
  }
};

export default sixCitiesApi;
