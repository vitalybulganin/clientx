import * as types from '../constants';

const initialState = {
    user: {}
};

function loginReducer(state = initialState, action)
{
    switch (action.type)
    {
        case types.LOGIN:
            return Object.assign({}, state, {user: action.user});

        default:
            return state;
    }
}

const LoginReducer = {
    login: loginReducer
};
export default LoginReducer;
