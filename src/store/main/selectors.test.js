import {selectorsCard as cards} from '../../tests-mock';
import {getCards} from './selectors';

describe(`Main reselector work correctly`, () => {
  const location = `Paris`;

  it(`Selector 'getCards' should return correctly cards list with any type`, () => {
    const type = `Popular`;

    const resultSelector = getCards.resultFunc(location, cards.start, type);

    expect(resultSelector).toEqual(cards.any);
  });

  it(`Selector 'getCards' should return correctly cards list with 'Price: high to low' type`, () => {
    const type = `Price: high to low`;

    const resultSelector = getCards.resultFunc(location, cards.start, type);

    expect(resultSelector).toEqual(cards.byPrice);
  });

  it(`Selector 'getCards' should return correctly cards list with 'Price: low to high' type`, () => {
    const type = `Price: low to high`;

    const resultSelector = getCards.resultFunc(location, cards.start, type);

    expect(resultSelector).toEqual([...cards.byPrice].reverse());
  });

  it(`Selector 'getCards' should return correctly cards list with 'Top rated first' type`, () => {
    const type = `Top rated first`;

    const resultSelector = getCards.resultFunc(location, cards.start, type);

    expect(resultSelector).toEqual(cards.byRating);
  });
});
