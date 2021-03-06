import React from 'react';
import {fireEvent, render} from '@testing-library/react';

import {PurePlacesSorting as PlacesSorting} from './places-sorting';

describe(`PlacesSorting component e2e test`, () => {
  it(`PlacesSorting component' should call callback when click on 'option' button`, () => {
    const ACTIVE_OPTION = `Popular`;
    const handlerChangeOption = jest.fn();

    const {getAllByTestId} = render(
        <PlacesSorting
          activeOption={ACTIVE_OPTION}
          onChangeOption={handlerChangeOption} />
    );

    fireEvent.click(getAllByTestId(`option`)[0]);

    expect(handlerChangeOption).toHaveBeenCalled();
  });
});
