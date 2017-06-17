import * as types from '../constants';

import {LocalStorageManager} from '../../../../utils';

const initialState = {
    rates: [],
    error: '',
    loaded: false
};

function ratesReducer(state = initialState, action)
{
    switch (action.type)
    {
        case types.GET_RATES:
            // Getting a list of skills.
            let skills = LocalStorageManager.get('skills');
            // Getting a list of rates.
            let rates = LocalStorageManager.get('rates');

            if (typeof skills === 'undefined') { skills = []; }
            if (typeof skills.length === 'undefined') { skills = []; }
            if (typeof rates === 'undefined') { rates = []; }
            if (typeof rates.length === 'undefined') { rates = []; }
            return Object.assign({}, state, {rates: rates, skills, loaded: true});

        case types.SAVE_RATES:
            // Saving a list of skills.
            LocalStorageManager.set('rates', action.rates);

            return state;

        case types.ADD_RATE:
            const rate = {
                id: state.rates.length + 1,
                name: action.rate.name,
                rate: action.rate.rate,
                students: action.rate.students,
                skill: action.rate.skill,
                weekends: action.rate.weekends,
                comment: action.rate.comment
            };
            // Adding a new skill.
            state.rates.push(rate);

            return Object.assign({}, state, {rates: state.rates});

        case types.UPDATE_RATE:
            const index = state.rates.findIndex(rate => rate.id === action.rate.id);

            if (index !== -1)
            {
                const {rates} = state;
                // Updating the skill in the list.
                rates[index] = action.rate;

                return Object.assign({}, state, {rates, rate: action.rate});
            }
            else
            {
                console.log('No one skill found by ', action.rate.id);
            }
            return state;

        case types.DELETE_SKILL:
            const filtered = state.rates.filter(rate => rate.id !== action.rate.id);
            // Updating the skill in the list.
            return Object.assign({}, state, {rates: filtered});

        case types.FIND_SKILL:
            return state;

        default:
            return state;
    }
}

export const RatesReducer = {
    rates: ratesReducer
};
