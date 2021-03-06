import React from 'react';
import {render} from '@testing-library/react';

import FavoritesEmpty from './favorites-empty';

describe(`FavoritesEmpty component test`, () => {
  it(`'FavoritesEmpty component' should render correctly`, () => {
    const {container} = render(<FavoritesEmpty />);

    expect(container).toMatchSnapshot();
  });
});
