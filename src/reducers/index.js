import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';

import version from './version';
import clients from './clients';
import filterClients from './filterClients';
import app from './app';

export default combineReducers(
{
	routing,
	version,
	clients,
	filterClients,
	app
});
