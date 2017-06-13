import * as types from '../constants/types';

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
    showForm: false,
    contact: {
        id: -1,
        type: 0,
        value: '',
        comment: ''
    }
};

function clientFormReducer(state = initialState, action)
{
    console.log('Action', action);

    switch (action.type)
    {
        case types.OPEN_CLIENT_FORM:
            let error = action.error;

            if (action.client.lastName === '' && action.client.firstName === '') { error = 'Фамилия и имя клиента обязательные поля';  }
            return Object.assign({}, state, {error, client: action.client, showForm: true});

        case types.CLOSE_CLIENT_FORM:
            return Object.assign({}, state, {showForm: false});

        case types.ADD_CONTACT:
            const {client} = state;

            action.contact.id = (action.contact.id === -1) ? client.contacts.length + 1 : action.contact.id;
            client.contacts.push(action.contact);

            return Object.assign({}, state, {client, contact: {}});

        case types.UPDATE_CONTACT:
            return Object.assign({}, state, {contact: action.contact, contact: {}});

        case types.DELETE_CONTACT:
            const filteredContacts = state.client.contacts.filter(contact => contact.id !== action.contact.id);

            return Object.assign({}, state, {client: {contacts: filteredContacts}});

        default:
            return state;
    }
}

export const ClientFormReducer = {
    client: clientFormReducer
};
