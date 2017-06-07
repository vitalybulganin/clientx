import * as types from '../../../constants/action-types';

export function getClients(clients) {
    console.log('getClients action', clients);

    return {
        type: types.GET_CLIENTS,
        clients
    };
}

export function addClient(client) {
    console.log('addClient action', client);

    return {
        type: types.ADD_CLIENT,
        client
    };
}

export function updateClient(client) {
    console.log('updateClient action', client);

    return {
        type: types.UPDATE_CLIENT,
        client
    };
}

export function deleteClient(id) {
    console.log('deleteClient action', id);

    return {
        type: types.DELETE_CLIENT,
        id
    };
}
