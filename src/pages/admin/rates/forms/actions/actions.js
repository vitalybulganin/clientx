import * as types from '../constants';

export function openRateForm(rate)
{
    return {
        type: types.OPEN_RATE_FORM,
        rate
    };
}

export function closeRateForm()
{
    return {
        type: types.CLOSE_RATE_FORM
    };
}

export function editRateForm(rate)
{
    return {
        type: types.EDIT_RATE_FORM,
        rate
    };
}
