import { createStore, applyMiddleware, combineReducers } from 'redux';
import createHistory from 'history/createBrowserHistory';
import {routerReducer, routerMiddleware} from 'react-router-redux';
import * as reducers from '../reducers/clients-reducer';

// Creating a history for browser.
const history = createHistory();
// Creating middleware for catching and sending actions.
const middleware = routerMiddleware(history);
// Adding reducers into storage by router key and applying middleware for navigation.
const store = createStore(
				combineReducers({
					...reducers,
					router: routerReducer}),
				applyMiddleware(middleware));

export {store};				
export {history};