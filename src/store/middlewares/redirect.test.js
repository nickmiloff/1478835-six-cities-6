import {redirect} from './redirect';
import * as actions from './actions';

const mockRedux = () => {
  const store = {
    getState: jest.fn(() => ({})),
    dispatch: jest.fn(),
  };

  const next = jest.fn();
  const invoke = (action) => redirect(store)(next)(action);
  return {store, next, invoke};
};

const fakeHistory = {
  location: {pathname: ``},
  push(path) {
    this.location.pathname = path;
  }
};

jest.mock(`../../browser-history`, () => fakeHistory);

describe(`Redirect async operation work correctly`, () => {
  it(`Should correctly pass to next middleware`, () => {
    const {invoke, next} = mockRedux();

    const action = actions.redirectToRoute(`/`);

    invoke(action);
    expect(next).toHaveBeenCalledWith(action);
  });

  it(`Should correctly add route to fakeHistory`, () => {
    const {invoke} = mockRedux();
    const url = `/url`;

    const action = actions.redirectToRoute(url);

    invoke(action);
    expect(fakeHistory.location.pathname).toBe(url);
  });

  it(`Shouldn't redirect because bad action`, () => {
    const {invoke} = mockRedux();
    const url = `/bad-url`;

    const incorrectAction = {type: ``, payload: url};

    invoke(incorrectAction);
    expect(fakeHistory.location.pathname).not.toBe(url);
  });
});
