export const dataToAuthInfo = (data) => {
  const authInfo = {
    ...data,
    avatarUrl: data[`avatar_url`],
    isPro: data[`is_pro`]
  };

  delete authInfo[`avatar_url`];
  delete authInfo[`is_pro`];

  return authInfo;
};

export const dataToHotelCard = (data) => {
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
};

export const dataToComment = (data) => {
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
};
