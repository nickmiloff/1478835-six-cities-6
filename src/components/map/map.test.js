import React from 'react';
import {render} from '@testing-library/react';

import Map from './map';
import {cardsFull} from '../../tests-mock';

describe(`Map component test`, () => {
  const activeLocation = `Paris`;

  it(`Map component' should render correctly with 'main' type and 'active card'`, () => {
    const type = `main`;

    const {container} = render(
        <Map
          activeLocation={activeLocation}
          cards={cardsFull.adapted}
          activeCardId={cardsFull.adapted[0].id}
          type={type} />
    );

    expect(container).toMatchSnapshot();
  });

  it(`Map component' should render correctly with 'offer' type and without 'active card'`, () => {
    const type = `offer`;

    const {container} = render(
        <Map
          activeLocation={activeLocation}
          cards={cardsFull.adapted}
          activeCardId={null}
          type={type} />
    );

    expect(container).toMatchSnapshot();
  });
});
