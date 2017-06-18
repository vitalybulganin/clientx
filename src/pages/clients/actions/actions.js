import * as types from '../constants';

export function getClients() {
    let clients = LocalStorageManager.get('clients');

    if (typeof clients === 'undefined' || typeof clients.length === 'undefined') { clients = []; }
    return (dispatch) => {dispatch({type: types.GET_CLIENTS, clients, loaded: false})};
}

export function saveClients(clients) {
    return (dispatch) => {dispatch({type: types.SAVE_CLIENTS, clients})};
}

export function addClient(client) {
    return {
        type: types.ADD_CLIENT,
        client
    };
}

export function updateClient(client) {
    return {
        type: types.UPDATE_CLIENT,
        client
    };
}

export function deleteClient(client) {
    console.log('deleteClient action', client);

    return {
        type: types.DELETE_CLIENT,
        client
    };
}

export function findClient(filter) {
    console.log('findClient action', filter);

    return {
        type: types.FIND_CLIENT,
        filter
    };
}
