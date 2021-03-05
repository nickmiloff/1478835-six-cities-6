import React from 'react';
import {render} from '@testing-library/react';
import {TestStore as Test} from '../test/test';

import PlacesSorting from './places-sorting';

describe(`PlacesSorting component test`, () => {
  it(`PlacesSorting component' should render correctly`, () => {
    const ACTIVE_OPTION = `Popular`;

    const {container} = render(
        <Test>
          <PlacesSorting activeOption={ACTIVE_OPTION} onChangeOption={() => {}} />
        </Test>
    );

    expect(container).toMatchSnapshot();
  });
});
