import * as types from '../constants';

export function login2server(user)
{
    return {
        type: types.LOGIN_TO_SERVER,
        user
    };
}

export function openLoginForm(user)
{
    return {
        type: types.OPEN_LOGIN_FORM,
        user
    };
}

export function closeLoginForm()
{
    return {
        type: types.CLOSE_LOGIN_FORM
    };
}

export function editLoginForm(user)
{
    return {
        type: types.EDIT_LOGIN_FORM,
        user
    };
}
