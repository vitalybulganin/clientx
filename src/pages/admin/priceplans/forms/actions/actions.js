import * as types from '../constants';

export function openPriceForm(price)
{
    return {
        type: types.OPEN_PRICEPLAN_FORM,
        price
    };
}

export function closePriceForm()
{
    return {
        type: types.CLOSE_PRICEPLAN_FORM,
        price: {}
    };
}

export function editPriceForm(price)
{
    return {
        type: types.EDIT_PRICEPLAN_FORM,
        price
    };
}
