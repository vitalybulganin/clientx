import * as types from '../constants';

import {LocalStorageManager} from '../../../../utils';

const initialState = {
    prices: [],
    error: '',
    loaded: false
};

function pricesReducer(state = initialState, action)
{
    switch (action.type)
    {
        case types.GET_PRICEPLANS:
            // Getting a list of prices.
            let prices = LocalStorageManager.get('prices');

            if (typeof prices === 'undefined' || typeof prices.length === 'undefined') { prices = []; }
            return Object.assign({}, state, {prices, loaded: true});

        case types.SAVE_PRICEPLANS:
            // Saving a list of skills.
            LocalStorageManager.set('prices', action.prices);

            return state;

        case types.ADD_PRICEPLAN:
            const price = {
                id: state.prices.length + 1,
                name: action.price.name,
                begin: action.price.begin,
                end: action.price.end,
                checked: action.price.checked,
                count: action.price.count,
                duration: action.price.duration,
                rate: action.price.rate,
                comment: action.price.comment
            };
            // Adding a new skill.
            state.prices.push(price);

            return Object.assign({}, state, {prices: state.prices});

        case types.UPDATE_PRICEPLAN:
            const index = state.prices.findIndex(price => price.id === action.price.id);

            if (index !== -1)
            {
                const {prices} = state;
                // Updating the skill in the list.
                prices[index] = action.price;

                return Object.assign({}, state, {prices, price: action.price});
            }
            else
            {
                console.log('No one price plan found by ', action.price.id);
            }
            return state;

        case types.DELETE_PRICEPLAN:
            const filtered = state.prices.filter(price => price.id !== action.price.id);
            // Updating the skill in the list.
            return Object.assign({}, state, {prices: filtered});

        case types.FIND_PRICEPLAN:
            return state;

        default:
            return state;
    }
}

export const PricesReducer = {
    prices: pricesReducer
};
