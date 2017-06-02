import {createStore, compose, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import baseReducer from '../reducers/clients-reducer';

export default function configureStore(initialState) {
    const finalCreateStore = compose(
        applyMiddleware(thunk),
        (window && window.devToolsExtension) ? window.devToolsExtension() : f => f
    )(createStore);

    return finalCreateStore(baseReducer, initialState);
}