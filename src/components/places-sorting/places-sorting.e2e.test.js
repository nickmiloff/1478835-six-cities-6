import React from 'react';
import {fireEvent, render} from '@testing-library/react';

import {PurePlacesSorting as PlacesSorting} from './places-sorting';

describe(`PlacesSorting component e2e test`, () => {
  it(`PlacesSorting component' should call callback when click on 'option' button`, () => {
    const activeOption = `Popular`;
    const handlerChangeOption = jest.fn();

    const {getAllByTestId} = render(
        <PlacesSorting
          activeOption={activeOption}
          onChangeOption={handlerChangeOption} />
    );

    fireEvent.click(getAllByTestId(`option`)[0]);
    expect(handlerChangeOption).toHaveBeenCalled();
  });

  it(`PlacesSorting component' should change state when click on 'options-button' button`, () => {
    const activeOption = `Popular`;

    const {getByTestId} = render(
        <PlacesSorting
          activeOption={activeOption}
          onChangeOption={jest.fn()} />
    );

    fireEvent.click(getByTestId(`options-button`));
    expect(getByTestId(`options-container`).classList.length).toBe(3);
    fireEvent.click(getByTestId(`options-button`));
    expect(getByTestId(`options-container`).classList.length).toBe(2);
  });
});
