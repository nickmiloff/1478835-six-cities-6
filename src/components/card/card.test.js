import React from 'react';
import {render} from '@testing-library/react';
import Test from '../test/test';

import Card from './card';
import {cardsFull} from '../../tests-mock';

describe(`Card component test`, () => {
  it(`'Card component' should render correctly`, () => {
    const CARD_TYPE = `main`;
    const CARD = cardsFull.adapted[0];

    const {container} = render(
        <Test>
          <Card
            cardType={CARD_TYPE}
            onChnageActiveCardId={jest.fn()}
            onFavoriteClick={jest.fn()}
            {...CARD} />
        </Test>
    );

    expect(container).toMatchSnapshot();
  });
});
