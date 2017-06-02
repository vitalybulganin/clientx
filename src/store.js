import {createStore, applyMiddleware, compose} from 'redux';
import rootReducer from './reducers';

import {DevTools} from './utils';

function _applyMiddleware()
{
    const middleware = [

    ];
    return applyMiddleware(...middleware);
}

export default function configureStore(initialState)
{
    const store = compose(_applyMiddleware(), DevTools.instrument())(createStore)(rootReducer, initialState);

    return store;
}
