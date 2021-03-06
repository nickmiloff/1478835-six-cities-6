import * as React from 'react';
import {render} from '@testing-library/react';
import Test from '../../test/test';

import FavoritesPage from './favorites-page';

describe(`FavoritesPage component test`, () => {
  it(`'FavoritesPage component' should render correctly with no cards`, () => {
    const {container} = render(
        <Test>
          <FavoritesPage />
        </Test>
    );

    expect(container).toMatchSnapshot();
  });

  it(`'FavoritesPage component' should render correctly with cards`, () => {
    const {container} = render(
        <Test initial={false}>
          <FavoritesPage />
        </Test>
    );

    expect(container).toMatchSnapshot();
  });
});
