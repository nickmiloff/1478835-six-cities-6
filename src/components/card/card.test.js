import React from 'react';
import {render} from '@testing-library/react';
import Test from '../test/test';

import Card from './card';
import {cardsFull} from '../../tests-mock';

describe(`Card component test`, () => {
  it(`'Card component' should render correctly`, () => {
    const type = `main`;

    const {container} = render(
        <Test>
          <Card
            cardType={type}
            onChnageActiveCardId={jest.fn()}
            onFavoriteClick={jest.fn()}
            {...cardsFull.adapted[0]} />
        </Test>
    );

    expect(container).toMatchSnapshot();
  });
});
