import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';

import {ClientsReducer} from './pages/clients';

export default combineReducers({
    routing: routerReducer,
    ...ClientsReducer
});
