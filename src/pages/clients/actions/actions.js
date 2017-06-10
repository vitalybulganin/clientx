import * as types from '../../../constants/action-types';
import {LocalStorageManager} from '../../../utils';

export function getClients() {
    console.log('getClients action');

    let clients = LocalStorageManager.get('clients');

    if (typeof clients.length === 'undefined') { clients = []; }
    return (dispatch) => {dispatch({type: types.GET_CLIENTS, clients, loaded: false})};
}

export function saveClients(clients) {
    console.log('saveClients action');

    return (dispatch) => {dispatch({type: types.SAVE_CLIENTS, clients})};
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
