import React from 'react';
import {fireEvent, render} from '@testing-library/react';
import Test from '../test/test';

import {SemiPureOfferInfo as OfferInfo} from './offer-info';
import {cardsFull, comments} from '../../tests-mock';

describe(`OfferInfo component e2e test`, () => {
  it(`OfferInfo component' should call callback when click on 'to-bookmarks' button`, () => {
    const handlerFavoriteClick = jest.fn();

    const {getByTestId} = render(
        <Test initial={false}>
          <OfferInfo
            offer={cardsFull.adapted[0]}
            reviews={comments.adapted}
            mapPlaces={cardsFull.adapted}
            onFavoriteClick={handlerFavoriteClick} />
        </Test>
    );

    fireEvent.click(getByTestId(`to-bookmarks`));
    expect(handlerFavoriteClick).toHaveBeenCalled();
  });
});

