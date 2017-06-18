import * as types from '../constants';

export function getPrices()
{
    return (dispatch) => {dispatch({type: types.GET_PRICEPLANS, prices: [], loaded: false});};
}

export function savePrices(prices)
{
    return (dispatch) => {dispatch({type: types.SAVE_PRICEPLANS, prices});};
}

export function addPrice(price)
{
    return {
        type: types.ADD_PRICEPLAN,
        price
    };
}

export function updatePrice(price)
{
    return {
        type: types.UPDATE_PRICEPLAN,
        price
    };
}

export function deletePrice(price)
{
    return {
        type: types.DELETE_PRICEPLAN,
        price
    };
}

export function findPrice(price)
{
    return {
        type: types.FIND_PRICEPLAN,
        price
    };
}
