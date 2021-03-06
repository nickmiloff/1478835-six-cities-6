import React from 'react';
import {fireEvent, render} from '@testing-library/react';
import Test from '../test/test';

import Card from './card';
import {cardsFull} from '../../tests-mock';

describe(`Card component e2e test`, () => {
  it(`'Card component' should call callback when mouse enter component`, () => {
    const CARD_TYPE = `main`;
    const CARD = cardsFull.adapted[0];

    const handlerMouseEnter = jest.fn();

    const {container} = render(
        <Test>
          <Card
            cardType={CARD_TYPE}
            onChnageActiveCardId={handlerMouseEnter}
            onFavoriteClick={jest.fn()}
            {...CARD} />
        </Test>
    );

    fireEvent.mouseEnter(container.firstChild);

    expect(handlerMouseEnter).toHaveBeenCalled();
  });

  it(`'Card component' should call callback when mouse leave component`, () => {
    const CARD_TYPE = `main`;
    const CARD = cardsFull.adapted[0];

    const handlerMouseLeave = jest.fn();

    const {container} = render(
        <Test>
          <Card
            cardType={CARD_TYPE}
            onChnageActiveCardId={handlerMouseLeave}
            onFavoriteClick={jest.fn()}
            {...CARD} />
        </Test>
    );

    fireEvent.mouseEnter(container.firstChild);

    expect(handlerMouseLeave).toHaveBeenCalled();
  });

  it(`'Card component' should call callback when click on 'To bookmarks' button`, () => {
    const CARD_TYPE = `main`;
    const CARD = cardsFull.adapted[0];

    const handlerFavoriteClick = jest.fn();

    const {getByTestId} = render(
        <Test initial={false}>
          <Card
            cardType={CARD_TYPE}
            onChnageActiveCardId={jest.fn}
            onFavoriteClick={handlerFavoriteClick}
            {...CARD} />
        </Test>
    );

    fireEvent.click(getByTestId(`to-bookmarks-button`));

    expect(handlerFavoriteClick).toHaveBeenCalled();
  });
});
