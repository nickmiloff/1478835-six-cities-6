import React from 'react';
import {render} from '@testing-library/react';
import Test from '../test/test';

import CardsList from './cards-list';
import {cardsFull} from '../../tests-mock';

describe(`CardsList component test`, () => {
  it(`'CardsList component' should render correctly`, () => {
    const CARDS = cardsFull.adapted;
    const CARD_TYPE = `main`;

    const {container} = render(
        <Test>
          <CardsList
            cards={CARDS}
            cardType={CARD_TYPE}
            onChnageActiveCardId={() => {}}
            onFavoriteClick={() => {}} />
        </Test>
    );

    expect(container).toMatchSnapshot();
  });
});
