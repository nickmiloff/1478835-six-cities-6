export const simpleMock = `test`;

export const cards = {
  changedCard: {
    id: 2,
    isFavorite: true
  },
  start: [
    {
      id: 1,
      isFavorite: true
    },
    {
      id: 2,
      isFavorite: false
    },
    {
      id: 3,
      isFavorite: false
    }
  ],
  end: [
    {
      id: 1,
      isFavorite: true
    },
    {
      id: 2,
      isFavorite: true
    },
    {
      id: 3,
      isFavorite: false
    }
  ],
  endWithRemove: [
    {
      id: 1,
      isFavorite: true
    },
    {
      id: 3,
      isFavorite: false
    }
  ]
};

export const auth = {
  api: {
    "id": 1,
    "email": `mail@mail.com`,
    "name": `name`,
    "avatar_url": `avatar.jpeg`,
    "is_pro": true
  },
  adapt: {
    id: 1,
    email: `mail@mail.com`,
    name: `name`,
    avatarUrl: `avatar.jpeg`,
    isPro: true
  }
};

export const user = {
  email: `mail@mail.com`,
  password: 12345678
};

export const cardsFull = {
  api: [
    {
      "city": {
        "name": `Paris`,
        "location": {
          "latitude": 48.85661,
          "longitude": 2.351499,
          "zoom": 13
        }
      },
      "images": [],
      "title": `Tile House`,
      "rating": 2,
      "type": `house`,
      "bedrooms": 2,
      "price": 161,
      "goods": [`Laptop friendly workspace`],
      "host": {
        "id": 25,
        "name": `Angelina`,
        "avatar_url": `img/avatar-angelina.jpg`,
        "is_pro": true
      },
      "description": `Relax, rejuvenate and unplug in this ultimate rustic getaway experience in the country. In our beautiful screened Pondhouse, you can gaze at the stars and listen to the sounds of nature from your cozy warm bed.`,
      "location": {
        "latitude": 48.85761,
        "longitude": 2.358499,
        "zoom": 16
      },
      "id": 1,
      "is_favorite": false,
      "is_premium": true,
      "preview_image": `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/19.jpg`,
      "max_adults": 9
    },
    {
      "city": {
        "name": `Amsterdam`,
        "location": {
          "latitude": 52.37454,
          "longitude": 4.897976,
          "zoom": 13
        }
      },
      "images": [],
      "title": `Loft Studio in the Central Area`,
      "rating": 3.6,
      "type": `apartment`,
      "bedrooms": 3,
      "price": 271,
      "goods": [
        `Laptop friendly workspace`,
        `Washer`,
        `Breakfast`,
        `Air conditioning`
      ],
      "host": {
        "id": 25,
        "name": `Angelina`,
        "avatar_url": `img/avatar-angelina.jpg`,
        "is_pro": true
      },
      "description": `Discover daily local life in city center, friendly neighborhood, clandestine casino, karaoke, old-style artisans, art gallery and artist studio downstairs.`,
      "location": {
        "latitude": 52.388540000000006,
        "longitude": 4.899976,
        "zoom": 16
      },
      "id": 2,
      "is_favorite": false,
      "is_premium": false,
      "preview_image": `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/6.jpg`,
      "max_adults": 8
    },
    {
      "city": {
        "name": `Paris`,
        "location": {
          "latitude": 48.85661,
          "longitude": 2.351499,
          "zoom": 13
        }
      },
      "images": [],
      "title": `Tile House`,
      "rating": 4.6,
      "type": `house`,
      "bedrooms": 2,
      "price": 865,
      "goods": [`Laptop friendly workspace`, `Breakfast`],
      "host": {
        "id": 25,
        "name": `Angelina`,
        "avatar_url": `img/avatar-angelina.jpg`,
        "is_pro": true
      },
      "description": `Discover daily local life in city center, friendly neighborhood, clandestine casino, karaoke, old-style artisans, art gallery and artist studio downstairs.`,
      "location": {
        "latitude": 48.83861,
        "longitude": 2.350499,
        "zoom": 16
      },
      "id": 3,
      "is_favorite": true,
      "is_premium": false,
      "preview_image": `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/6.jpg`,
      "max_adults": 8
    }
  ],
  adapted: [
    {
      city: {
        name: `Paris`,
        location: {
          latitude: 48.85661,
          longitude: 2.351499,
          zoom: 13,
        },
      },
      images: [],
      title: `Tile House`,
      rating: 2,
      type: `house`,
      bedrooms: 2,
      price: 161,
      goods: [`Laptop friendly workspace`],
      host: {
        id: 25,
        name: `Angelina`,
        avatarUrl: `img/avatar-angelina.jpg`,
        isPro: true,
      },
      description: `Relax, rejuvenate and unplug in this ultimate rustic getaway experience in the country. In our beautiful screened Pondhouse, you can gaze at the stars and listen to the sounds of nature from your cozy warm bed.`,
      location: {
        latitude: 48.85761,
        longitude: 2.358499,
        zoom: 16,
      },
      id: 1,
      isFavorite: false,
      isPremium: true,
      previewImage: `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/19.jpg`,
      maxAdults: 9,
    },
    {
      city: {
        name: `Amsterdam`,
        location: {
          latitude: 52.37454,
          longitude: 4.897976,
          zoom: 13,
        },
      },
      images: [],
      title: `Loft Studio in the Central Area`,
      rating: 3.6,
      type: `apartment`,
      bedrooms: 3,
      price: 271,
      goods: [
        `Laptop friendly workspace`,
        `Washer`,
        `Breakfast`,
        `Air conditioning`,
      ],
      host: {
        id: 25,
        name: `Angelina`,
        avatarUrl: `img/avatar-angelina.jpg`,
        isPro: true,
      },
      description: `Discover daily local life in city center, friendly neighborhood, clandestine casino, karaoke, old-style artisans, art gallery and artist studio downstairs.`,
      location: {
        latitude: 52.388540000000006,
        longitude: 4.899976,
        zoom: 16,
      },
      id: 2,
      isFavorite: false,
      isPremium: false,
      previewImage: `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/6.jpg`,
      maxAdults: 8,
    },
    {
      city: {
        name: `Paris`,
        location: {
          latitude: 48.85661,
          longitude: 2.351499,
          zoom: 13,
        },
      },
      images: [],
      title: `Tile House`,
      rating: 4.6,
      type: `house`,
      bedrooms: 2,
      price: 865,
      goods: [`Laptop friendly workspace`, `Breakfast`],
      host: {
        id: 25,
        name: `Angelina`,
        avatarUrl: `img/avatar-angelina.jpg`,
        isPro: true,
      },
      description: `Discover daily local life in city center, friendly neighborhood, clandestine casino, karaoke, old-style artisans, art gallery and artist studio downstairs.`,
      location: {
        latitude: 48.83861,
        longitude: 2.350499,
        zoom: 16,
      },
      id: 3,
      isFavorite: true,
      isPremium: false,
      previewImage: `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/6.jpg`,
      maxAdults: 8,
    },
  ]
};

export const comments = {
  api: [
    {
      "comment": `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
      "date": `2019-05-08T14:13:56.569Z`,
      "id": 1,
      "rating": 4,
      "user": {
        "avatar_url": `img/1.png`,
        "id": 4,
        "is_pro": false,
        "name": `Max`
      }
    },
    {
      "comment": `A quiet of Amsterdam.`,
      "date": `2019-06-08T14:13:56.569Z`,
      "id": 2,
      "rating": 3,
      "user": {
        "avatar_url": `img/2.png`,
        "id": 5,
        "is_pro": false,
        "name": `Vadim`
      }
    }
  ],
  adapted: [
    {
      comment: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
      date: `2019-05-08T14:13:56.569Z`,
      id: 1,
      rating: 4,
      user: {
        avatarUrl: `img/1.png`,
        id: 4,
        isPro: false,
        name: `Max`
      }
    },
    {
      comment: `A quiet of Amsterdam.`,
      date: `2019-06-08T14:13:56.569Z`,
      id: 2,
      rating: 3,
      user: {
        avatarUrl: `img/2.png`,
        id: 5,
        isPro: false,
        name: `Vadim`
      }
    }
  ]
};
