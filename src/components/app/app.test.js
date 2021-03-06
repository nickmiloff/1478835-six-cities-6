import '@testing-library/jest-dom';
import React from 'react';
import {render, screen} from '@testing-library/react';
import Test from '../test/test';

import App, {ROUTES} from './app';

describe(`Test routing`, () => {
  it(`Render 'Main page' when user navigate to '/' url`, () => {
    render(
        <Test>
          <App />
        </Test>
    );

    expect(screen.getByText(`Cities`)).toBeInTheDocument();
  });

  it(`Render 'Login page' when user navigate to '/login' url`, () => {
    render(
        <Test pushUrl={ROUTES.login}>
          <App />
        </Test>
    );

    expect(!!screen.getAllByText(`Sign in`)).toBe(true);
  });

  it(`Render 'Favorites page' when user navigate to '/favorites' url`, () => {
    render(
        <Test pushUrl={ROUTES.favorites} initial={false}>
          <App />
        </Test>
    );

    expect(screen.getByText(`Saved listing`)).toBeInTheDocument();
  });

  it(`Render 'OfferPage page' when user navigate to '/offer/:id' url`, () => {
    render(
        <Test pushUrl={`${ROUTES.offer}/:id`} initial={false}>
          <App />
        </Test>
    );

    expect(screen.getByText(`Tile House`)).toBeInTheDocument();
    expect(screen.getByText(`Discover daily local life in city center, friendly neighborhood, clandestine casino, karaoke, old-style artisans, art gallery and artist studio downstairs.`)).toBeInTheDocument();
  });


  it(`Render 'Not found page' when user navigate to non-existent url`, () => {
    render(
        <Test pushUrl="/non-existent-url">
          <App />
        </Test>
    );

    expect(screen.getByText(`404 Page not found`)).toBeInTheDocument();
    expect(screen.getByText(`Home page`)).toBeInTheDocument();
  });
});
