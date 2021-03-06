import React from 'react';
import {fireEvent, render} from '@testing-library/react';
import Test from '../test/test';

import Card from './card';
import {cardsFull} from '../../tests-mock';

describe(`Card component e2e test`, () => {
  const type = `main`;
  const card = cardsFull.adapted[0];

  it(`'Card component' should call callback when mouse enter component`, () => {
    const handlerMouseEnter = jest.fn();

    const {container} = render(
        <Test>
          <Card
            cardType={type}
            onChnageActiveCardId={handlerMouseEnter}
            onFavoriteClick={jest.fn()}
            {...card} />
        </Test>
    );

    fireEvent.mouseEnter(container.firstChild);
    expect(handlerMouseEnter).toHaveBeenCalled();
  });

  it(`'Card component' should call callback when mouse leave component`, () => {
    const handlerMouseLeave = jest.fn();

    const {container} = render(
        <Test>
          <Card
            cardType={type}
            onChnageActiveCardId={handlerMouseLeave}
            onFavoriteClick={jest.fn()}
            {...card} />
        </Test>
    );

    fireEvent.mouseLeave(container.firstChild);
    expect(handlerMouseLeave).toHaveBeenCalled();
  });

  it(`'Card component' should call callback when click on 'To bookmarks' button`, () => {
    const handlerFavoriteClick = jest.fn();

    const {getByTestId} = render(
        <Test initial={false}>
          <Card
            cardType={type}
            onChnageActiveCardId={jest.fn}
            onFavoriteClick={handlerFavoriteClick}
            {...card} />
        </Test>
    );

    fireEvent.click(getByTestId(`to-bookmarks-button`));
    expect(handlerFavoriteClick).toHaveBeenCalled();
  });
});
