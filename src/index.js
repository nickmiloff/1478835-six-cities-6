import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import {cards} from './mock';

ReactDOM.render(
    <App cards={cards} />,
    document.getElementById(`root`)
);
