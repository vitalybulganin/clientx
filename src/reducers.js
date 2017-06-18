import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';

import {SkillsReducer, SkillFormReducer} from './pages/admin';
import {RatesReducer, RateFormReducer} from './pages/admin';
import {PricesReducer, PriceFormReducer} from './pages/admin';

import {ClientsReducer, ClientFormReducer} from './pages/clients';
import {InstructorsReducer, InstructorFormReducer} from './pages/instructors';
import {LoginReducer, HeaderReducer, ContactFormReducer} from './components';

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
    ...PricesReducer,
    ...PriceFormReducer,
    ...ContactFormReducer,
    ...LoginReducer,
    ...HeaderReducer
});
