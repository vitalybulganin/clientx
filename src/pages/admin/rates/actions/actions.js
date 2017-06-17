import * as types from '../constants';

export function getRates()
{
     return (dispatch) => {dispatch({type: types.GET_RATES, rates: [], loaded: false});};
}

export function saveRates(rates)
{
    return (dispatch) => {dispatch({type: types.SAVE_RATES, rates});};
}

export function addRate(rate)
{
    return {
        type: types.ADD_RATE,
        rate
    };
}

export function updateRate(rate)
{
    return {
        type: types.UPDATE_RATE,
        rate
    };
}

export function deleteRate(rate)
{
    return {
        type: types.DELETE_RATE,
        rate
    };
}

export function findRate(rate)
{
    return {
        type: types.FIND_RATE,
        rate
    };
}
