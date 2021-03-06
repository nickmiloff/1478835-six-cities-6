import React from 'react';
import {render} from '@testing-library/react';
import Test from '../test/test';

import Favorites from './favorites';
import {cardsFull} from '../../tests-mock';

describe(`Favorites component test`, () => {
  it(`'Favorites component' should render correctly`, () => {
    const {container} = render(
        <Test>
          <Favorites cards={cardsFull.adapted} />
        </Test>
    );

    expect(container).toMatchSnapshot();
  });
});
