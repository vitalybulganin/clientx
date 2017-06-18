import * as types from '../constants';

export function openClientForm(client) {
    return {
        type: types.OPEN_CLIENT_FORM,
        client
    };
}

export function closeClientForm() {
    return {type: types.CLOSE_CLIENT_FORM};
}

export function editClientForm(client) {
    return {
        type: types.EDIT_CLIENT_FORM,
        client
    };
}
