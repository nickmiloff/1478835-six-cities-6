import React from 'react';
import {render} from '@testing-library/react';

import PlacesEmpty from './places-empty';

describe(`PlacesEmpty component test`, () => {
  it(`PlacesEmpty component' should render correctly`, () => {
    const LOCATION = `Paris`;

    const {container} = render(<PlacesEmpty location={LOCATION} />);

    expect(container).toMatchSnapshot();
  });
});
