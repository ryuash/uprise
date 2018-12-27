import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import './styles/index.css';

ReactDOM.render(
    <Provider store={store}>
        <Router>
            {/* <Main /> */}
            <h1>Hello world</h1>
        </Router>
    </Provider>,
    document.getElementById('app')
);
