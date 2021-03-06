import React from 'react';
import {render} from '@testing-library/react';

import Map from './map';
import {cardsFull} from '../../tests-mock';

describe(`Map component test`, () => {
  it(`Map component' should render correctly with 'main' type and 'active card'`, () => {
    const ACTIVE_LOCATION = `Paris`;
    const CARDS = cardsFull.adapted;
    const ACTIVE_CARD_ID = cardsFull.adapted[0].id;
    const TYPE = `main`;

    const {container} = render(
        <Map
          activeLocation={ACTIVE_LOCATION}
          cards={CARDS}
          activeCardId={ACTIVE_CARD_ID}
          type={TYPE} />
    );

    expect(container).toMatchSnapshot();
  });

  it(`Map component' should render correctly with 'offer' type and without 'active card'`, () => {
    const ACTIVE_LOCATION = `Paris`;
    const CARDS = cardsFull.adapted;
    const ACTIVE_CARD_ID = null;
    const TYPE = `offer`;

    const {container} = render(
        <Map
          activeLocation={ACTIVE_LOCATION}
          cards={CARDS}
          activeCardId={ACTIVE_CARD_ID}
          type={TYPE} />
    );

    expect(container).toMatchSnapshot();
  });
});
