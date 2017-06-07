import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';

import {ClientsReducer, ClientFormReducer} from './pages/clients';

export default combineReducers({
    routing: routerReducer,
    ...ClientsReducer,
    ...ClientFormReducer
});
