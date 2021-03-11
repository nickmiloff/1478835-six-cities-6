import '@testing-library/jest-dom';
import React from 'react';
import {render, screen, waitFor, cleanup} from '@testing-library/react';
import Test from '../test/test';

import App, {ROUTES} from './app';

afterEach(cleanup);

describe(`Test routing`, () => {
  const timeout = 1000;

  it(`Render 'Main page' when user navigate to '/' url`, async () => {
    render(
        <Test>
          <App />
        </Test>
    );

    await waitFor(() => expect(screen.getByText(`Cities`)).toBeInTheDocument(), {timeout});
  });

  it(`Render 'Login page' when user navigate to '/login' url`, async () => {
    render(
        <Test pushUrl={ROUTES.login}>
          <App />
        </Test>
    );

    await waitFor(() => expect(!!screen.getAllByText(`Sign in`)).toBe(true), {timeout});
  });

  it(`Render 'Favorites page' when user navigate to '/favorites' url`, async () => {
    render(
        <Test pushUrl={ROUTES.favorites} initial={false}>
          <App />
        </Test>
    );

    await waitFor(() => expect(screen.getByText(`Saved listing`)).toBeInTheDocument(), {timeout});
  });

  it(`Render 'OfferPage page' when user navigate to '/offer/:id' url`, async () => {
    render(
        <Test pushUrl={`${ROUTES.offer}/:id`} initial={false}>
          <App />
        </Test>
    );

    await waitFor(() => {
      expect(screen.getByText(`Tile House`)).toBeInTheDocument();
      expect(screen.getByText(`Discover daily local life in city center, friendly neighborhood, clandestine casino, karaoke, old-style artisans, art gallery and artist studio downstairs.`)).toBeInTheDocument();
    }, {timeout});
  });

  it(`Render 'Not found page' when user navigate to non-existent url`, async () => {
    render(
        <Test pushUrl="/non-existent-url">
          <App />
        </Test>
    );

    await waitFor(() => {
      expect(screen.getByText(`404 Page not found`)).toBeInTheDocument();
      expect(screen.getByText(`Home page`)).toBeInTheDocument();
    }, {timeout});
  });
});
