import React from 'react';
import ReactDOM from 'react-dom';
import {Router, browserHistory} from 'react-router';
import {Provider} from 'react-redux';
import {syncHistoryWithStore} from 'react-router-redux';
// using ES6 modules.
//<???> import {createBrowserHistory} from 'history';
// Internal components.
import configureStore from './store';
import routes from './routes';

// Creating a store.
const store = configureStore();
// Creating a history.
const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            { routes }
        </Router>
    </Provider>,
    document.getElementById('root'));
