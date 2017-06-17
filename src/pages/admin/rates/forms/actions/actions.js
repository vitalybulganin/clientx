import * as types from '../constants';

export function openRateForm(rate)
{
    return {
        type: types.OPEN_RATE_FORM,
        rate
    };
}

export function closeSkillForm()
{
    return {
        type: types.CLOSE_RATE_FORM
    };
}

export function editSkillForm(rate)
{
    return {
        type: types.RATE_RATE_FORM,
        rate
    };
}
