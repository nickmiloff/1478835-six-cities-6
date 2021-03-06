import React from 'react';
import {render} from '@testing-library/react';

import Locations from './locations';

describe(`Locations component test`, () => {
  it(`'Locations component' should render correctly`, () => {
    const activeLocation = `Paris`;

    const {container} = render(<Locations activeLocation={activeLocation} changeLocation={jest.fn()} />);

    expect(container).toMatchSnapshot();
  });
});
