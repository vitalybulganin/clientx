import * as types from '../constants';

const initialState = {
    client: {
        id: -1,
        lastName: '',
        firstName: '',
        secondName: '',
        birthday: '',
        gender: '',
        comment: '',
        contacts: []
    },
    error: '',
    showForm: false
};

function clientFormReducer(state = initialState, action)
{
    switch (action.type)
    {
        case types.OPEN_CLIENT_FORM:
            return Object.assign({}, state, {client: action.client, showForm: true});

        case types.CLOSE_CLIENT_FORM:
            return Object.assign({}, state, {showForm: false});

        case types.EDIT_CLIENT_FORM:
            return Object.assign({}, state, {client: action.client});

        default:
            return state;
    }
}

export const ClientFormReducer = {
    client: clientFormReducer
};
