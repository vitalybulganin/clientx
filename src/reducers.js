import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';

import {SkillsReducer, SkillFormReducer} from './pages/admin';
import {RatesReducer, RateFormReducer} from './pages/admin';

import {ClientsReducer, ClientFormReducer} from './pages/clients';
import {InstructorsReducer, InstructorFormReducer} from './pages/instructors';
import {ModalReducer, LoginReducer, HeaderReducer, ContactReducer} from './components';

export default combineReducers({
    routing: routerReducer,
    ...ClientsReducer,
    ...ClientFormReducer,
    ...InstructorsReducer,
    ...InstructorFormReducer,
    ...SkillsReducer,
    ...SkillFormReducer,
    ...RatesReducer,
    ...RateFormReducer,
    ...ModalReducer,
    ...LoginReducer,
    ...HeaderReducer
});
