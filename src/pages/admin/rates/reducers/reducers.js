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
            return Object.assign({}, state, {rates: action.rates, loaded: true});

        case types.SAVE_SKILLS:
            // Saving a list of skills.
            LocalStorageManager.set('rates', action.rates);

            return state;

        case types.ADD_SKILL:
            const skill = {
                id: state.rates.length + 1,
                name: action.rate.name,
                comment: action.skill.comment
            };
            // Adding a new skill.
            state.rates.push(skill);

            return Object.assign({}, state, {skills: state.rates});

        case types.UPDATE_SKILL:
            const skillIndex = state.rates.findIndex(rate => skill.id === action.skill.id);

            if (skillIndex !== -1)
            {
                const {rates} = state;
                // Updating the skill in the list.
                skills[skillIndex] = action.rate;

                return Object.assign({}, state, {rates, skill: action.rate});
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
