import * as types from '../../../constants/action-types';
import {LocalStorageManager} from '../../../utils';

const initialState = {
    clients: [],
    error: ''
};

function clientsReducer(state = initialState, action)
{
    switch (action.type)
    {
        case types.GET_CLIENTS:
            return Object.assign({}, state, {clients: action.clients});

        case types.SAVE_CLIENTS:
            LocalStorageManager.set('clients', action.clients);

            return state;

        case types.ADD_CLIENT:
            const clients = state.clients;
            const client = {
                id: clients.length + 1,
                lastName: action.client.lastName,
                firstName: action.client.firstName,
                secondName: action.client.secondName,
                mobile: action.client.mobile,
                email: action.client.email,
                birthday: action.client.birthday,
                gender: action.client.gender,
                contacts: [],
                comment: action.client.comment
            };
            action.client.contacts.map((contact, idx) => {client.contacts.push(contact)});

            clients.push(client);

            return Object.assign({}, state, {clients, showForm: true});

        case types.UPDATE_CLIENT:
            const clientIndex = state.clients.findIndex((client) => {client.id === action.client.id});

            if (clientIndex !== -1)
            {
                return Object.assign({}, state, {
                    client: state.clients[clientIndex],
                    showForm: true
                });
            }
            return state;

        case types.DELETE_CLIENT:
            return state;

        default:
            return state;
    }
}

const ClientsReducer = {
    clients: clientsReducer
};

export default ClientsReducer;