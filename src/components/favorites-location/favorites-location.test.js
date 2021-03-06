import React from 'react';
import {render} from '@testing-library/react';
import Test from '../test/test';

import FavoritesLocation from './favorites-location';
import {cardsFull} from '../../tests-mock';

describe(`FavoritesLocation component test`, () => {
  it(`'FavoritesLocation component' should render correctly`, () => {
    const CITY = `Paris`;
    const CARDS = cardsFull.adapted;

    const {container} = render(
        <Test>
          <FavoritesLocation
            city={CITY}
            cards={CARDS} />
        </Test>
    );

    expect(container).toMatchSnapshot();
  });
});
