import React from 'react';
import {render} from '@testing-library/react';

import Locations from './locations';

describe(`Locations component test`, () => {
  it(`Locations component' should render correctly`, () => {
    const ACTIVE_LOCATION = `Paris`;

    const {container} = render(<Locations activeLocation={ACTIVE_LOCATION} changeLocation={jest.fn()} />);

    expect(container).toMatchSnapshot();
  });
});
