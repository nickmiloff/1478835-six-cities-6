export const cards = [
  {
    id: 1,
    isFavorite: false,
    isPremium: false,
    previewImage: `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/15.jpg`,
    price: 136,
    rating: 3.5,
    title: `Canal View Prinsengracht`,
    type: `room`,
    city: {
      name: `Hamburg`
    }
  },
  {
    id: 2,
    isFavorite: false,
    isPremium: true,
    previewImage: `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/3.jpg`,
    price: 222,
    rating: 4.3,
    title: `Penthouse, 4-5 rooms + 5 balconies`,
    type: `room`,
    city: {
      name: `Paris`
    }
  },
  {
    id: 3,
    isFavorite: false,
    isPremium: true,
    previewImage: `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/17.jpg`,
    price: 202,
    rating: 3.3,
    title: `he Joshua Tree House`,
    type: `apartment`,
    city: {
      name: `Paris`
    }
  }
];

export const offer = {
  images: [
    `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/8.jpg`,
    `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/4.jpg`,
    `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/7.jpg`,
    `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/19.jpg`,
    `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/9.jpg`,
    `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/17.jpg`,
    `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/18.jpg`,
    `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/10.jpg`,
    `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/2.jpg`,
    `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/15.jpg`,
    `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/11.jpg`,
    `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/16.jpg`,
    `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/12.jpg`,
    `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/1.jpg`
  ],
  isPremium: false,
  title: `Amazing and Extremely Central Flat`,
  isFavorite: false,
  rating: 4,
  type: `house`,
  bedrooms: 2,
  maxAdults: 10,
  price: 970,
  goods: [
    `Air conditioning`,
    `Laptop friendly workspace`,
    `Breakfast`,
    `Washer`,
    `Towels`,
    `Fridge`,
    `Dishwasher`,
    `Baby seat`
  ],
  host: {
    avatarUrl: `img/avatar-angelina.jpg`,
    id: 25,
    isPro: true,
    name: `Angelina`
  },
  description: `Peaceful studio in the most wanted area in town. Quiet house Near of everything. Completely renovated. Lovely neighbourhood, lot of trendy shops, restaurants and bars in a walking distance.`
};

export const reviews = [
  {
    comment: `This villa is perfect in every way: the view on mountains and waterfalls, the hot tub and the villa itself. The evening here became a great continuation of our journeys over country.`,
    date: `2021-01-31T13:15:03.147Z`,
    id: 1,
    rating: 3,
    user: {
      avatarUrl: `https://assets.htmlacademy.ru/intensives/javascript-3/avatar/2.jpg`,
      id: 11,
      isPro: false,
      name: `Jack`
    }
  },
  {
    comment: `Home is amazing. It's like staying in a museum. The rooms, furnishings and artworks are incredible. The views of My Vesuvius`,
    date: `2021-01-31T13:15:03.147Z`,
    id: 2,
    rating: 2,
    user: {
      avatarUrl: `https://assets.htmlacademy.ru/intensives/javascript-3/avatar/9.jpg`,
      id: 18,
      isPro: true,
      name: `Sophie`
    }
  }
];
