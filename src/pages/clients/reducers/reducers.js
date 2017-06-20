import * as types from '../constants';
import {LocalStorageManager} from '../../../utils';

const initialState = {
    clients: [],
    error: '',
    loaded: false
};

function clientsReducer(state = initialState, action)
{
    switch (action.type)
    {
        case types.GET_CLIENTS:
            let objects = LocalStorageManager.get('clients');

            if (typeof objects === 'undefined' || typeof objects.length === 'undefined') { objects = []; }
            return Object.assign({}, state, {clients: objects, loaded: true});

        case types.SAVE_CLIENTS:
            LocalStorageManager.set('clients', action.clients);

            return state;

        case types.ADD_CLIENT:
            const newClient = {
                id: state.clients.length + 1,
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
            action.client.contacts.map((contact) => {newClient.contacts.push(contact);});
            // Adding a new client.
            state.clients.push(newClient);

            return Object.assign({}, state, {clients: state.clients});

        case types.UPDATE_CLIENT:
            const index = state.clients.findIndex(client => client.id === action.client.id);

            if (index !== -1)
            {
                const {clients} = state;
                // Updating the client in the lit.
                clients[index] = action.client;

                return Object.assign({}, state, {clients, client: action.client});
            }
            return state;

        case types.DELETE_CLIENT:
            const filteredClients = state.clients.filter(client => client.id !== action.client.id);
            // Updating the client in the list.
            return Object.assign({}, state, {clients: filteredClients});

        case types.FIND_CLIENT:
            const clients = state.clients.filter(client =>  (client.firstName.toLowerCase().indexOf(action.filter) !== -1) ||
                                                            (client.lastName.toLowerCase().indexOf(action.filter) !== -1) ||
                                                            (client.secondName.toLowerCase().indexOf(action.filter) !== -1) ||
                                                            (client.birthday.toLowerCase().indexOf(action.filter) !== -1));
            // Updating the client in the list.
            return Object.assign({}, state, {clients});

        default:
            return state;
    }
}

export const ClientsReducer = {
    clients: clientsReducer
};
