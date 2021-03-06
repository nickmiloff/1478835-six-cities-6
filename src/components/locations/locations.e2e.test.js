import React from 'react';
import {fireEvent, render} from '@testing-library/react';

import Locations from './locations';

describe(`Locations component e2e test`, () => {
  it(`'Locations component' should call callback when click on 'tab-link' link`, () => {
    const activeLocation = `Paris`;
    const handlerChangeLocation = jest.fn();

    const {getAllByTestId} = render(<Locations activeLocation={activeLocation} changeLocation={handlerChangeLocation} />);

    fireEvent.click(getAllByTestId(`tab-link`)[0]);
    expect(handlerChangeLocation).toHaveBeenCalled();
  });
});
