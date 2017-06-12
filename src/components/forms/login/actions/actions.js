import * as types from '../constants';

export function login(user)
{
    return {type: types.LOGIN, user};
}

