import * as types from '../../../../constants/action-types';

const initialState = {
    client: {
        contact: {
            showForm: false,
            contact: {}
        },
    },
    error: '',
    showForm: false
};

function clientFormReducer(state = initialState, action)
{
    switch (action.type)
    {
        case types.OPEN_FORM:
            let error = action.error;

            if (action.client.lastName === '' && action.client.firstName === '') { error = 'Фамилия и имя клиента обязательные поля';  }
            return Object.assign({}, state, {error, client: action.client, showForm: true});

        case types.CLOSE_FORM:
            return Object.assign({}, state, {client: {}, showForm: false});

        case types.OPEN_CONTACT:
            return Object.assign({}, state, {contact: { showForm: true, contact: action.contact}});

        case types.ADD_CONTACT:

            action.contact.id = (action.contact.id === -1) ? action.contacts.length + 1 : action.contact.id;
            action.contacts.push(action.contact);

            return Object.assign({}, state, {contact: { showForm: false, contact: action.contact}});

        case types.UPDATE_CONTACT:
            return Object.assign({}, state, {contact: { showForm: false, contact: action.contact}});

        case types.CLOSE_CONTACT:
            return Object.assign({}, state, {contact: { showForm: false, contact: {}}});

        default:
            return state;
    }
}

const ClientFormReducer = {
    client: clientFormReducer
};

export default ClientFormReducer;
