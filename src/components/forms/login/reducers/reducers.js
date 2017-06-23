import * as types from '../constants';

const initialState = {
    user: {
        login: '',
        password: '',
        saved: false
    },
    error: '',
    showForm: false
};

function loginReducer(state = initialState, action)
{
    switch (action.type)
    {
        case types.OPEN_LOGIN_FORM:
            return Object.assign({}, state, {user: action.user, showForm: true});

        case types.CLOSE_LOGIN_FORM:
            return Object.assign({}, state, {showForm: false});

        case types.EDIT_LOGIN_FORM:
            return Object.assign({}, state, {user: action.user, showForm: true});

        case types.LOGIN_TO_SERVER:
            return Object.assign({}, state, {user: action.user});

        default:
            return state;
    }
}

export const LoginReducer = {
    login: loginReducer
};
