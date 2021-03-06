import React from 'react';
import {render} from '@testing-library/react';
import Test from '../test/test';

import CardsList from './cards-list';
import {cardsFull} from '../../tests-mock';

describe(`CardsList component test`, () => {
  it(`'CardsList component' should render correctly`, () => {
    const type = `main`;

    const {container} = render(
        <Test>
          <CardsList
            cards={cardsFull.adapted}
            cardType={type}
            onChnageActiveCardId={jest.fn()}
            onFavoriteClick={jest.fn()} />
        </Test>
    );

    expect(container).toMatchSnapshot();
  });
});
