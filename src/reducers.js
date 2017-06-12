import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';

import {ClientsReducer, ClientFormReducer} from './pages/clients';
import {InstructorsReducer, InstructorFormReducer} from './pages/instructors';
import {ModalReducer, LoginReducer, HeaderReducer} from './components';

export default combineReducers({
    routing: routerReducer,
    ...ClientsReducer,
    ...ClientFormReducer,
    ...InstructorsReducer,
    ...InstructorFormReducer,
    ...ModalReducer,
    ...LoginReducer,
    ...HeaderReducer
});
