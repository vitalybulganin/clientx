import * as types from '../constants';

export function getClients() {
    return (dispatch) => {dispatch({type: types.GET_CLIENTS, loaded: false})};
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
