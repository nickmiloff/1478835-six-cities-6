import React from 'react';
import {render} from '@testing-library/react';
import {TestStore as Test} from '../test/test';

import PlacesSorting from './places-sorting';

describe(`PlacesSorting component test`, () => {
  it(`PlacesSorting component' should render correctly`, () => {
    const {container} = render(
        <Test>
          <PlacesSorting />
        </Test>
    );

    expect(container).toMatchSnapshot();
  });
});
