import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import {cards, offer, reviews} from './mock';

ReactDOM.render(
    <App cards={cards} offer={offer} reviews={reviews} />,
    document.getElementById(`root`)
);
