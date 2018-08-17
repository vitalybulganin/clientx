import * as types from '../constants';

const initialState = {
    price: {
        id: -1,
        name: '',
        begin: new Date().toLocaleDateString(),
        end: null,
        checked: true,
        count: 8,
        duration: 60,
        rate: 1600,
        comment: ''
    },
    error: '',
    showForm: false
};

function priceFormReducer(state = initialState, action)
{
    switch (action.type)
    {
        case types.OPEN_PRICEPLAN_FORM:
            let error = action.error;

            if (typeof action.price === 'undefined' || typeof action.price.id === 'undefined') { action.price = initialState.price; }
            if (action.price.id !== -1 && action.price.name === '') { error = 'Наименование не можеть быть пустым';  }

            return Object.assign({}, state, {error, price: action.price, showForm: true});

        case types.CLOSE_PRICEPLAN_FORM:
            return Object.assign({}, state, {price: action.price, showForm: false});

        case types.EDIT_PRICEPLAN_FORM:
            return Object.assign({}, state, {price: action.price});

        default:
            return state;
    }
}

export const PriceFormReducer = {
    price: priceFormReducer
};

