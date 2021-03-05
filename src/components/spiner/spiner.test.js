import React from 'react';
import {render} from '@testing-library/react';

import Spiner from './spiner';

describe(`Spiner component test`, () => {
  it(`Spiner component' should render correctly`, () => {
    const {container} = render(<Spiner />);

    expect(container).toMatchSnapshot();
  });
});
