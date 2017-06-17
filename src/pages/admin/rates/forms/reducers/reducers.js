import * as types from '../constants';

const initialState = {
    rate: {
        id: -1,
        name: '',
        rate: 600,
        students: 0,
        skill: '',
        wekeends: true,
        comment: ''
    },
    error: '',
    showForm: false
};

function rateFormReducer(state = initialState, action)
{
    switch (action.type)
    {
        case types.OPEN_RATE_FORM:
            let error = action.error;
            if (typeof action.rate === 'undefined') { action.rate = initialState.rate; }
            if (action.rate.id !== -1 && action.rate.name === '') { error = 'Наименование не можеть быть пустым';  }

            return Object.assign({}, state, {error, rate: action.rate, showForm: true});

        case types.CLOSE_RATE_FORM:
            return Object.assign({}, state, {rate: {}, showForm: false});

        case types.EDIT_RATE_FORM:
            return Object.assign({}, state, {rate: action.rate, showForm: false});

        default:
            return state;
    }
}

export const RateFormReducer = {
    rate: rateFormReducer
};

