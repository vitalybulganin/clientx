import * as types from '../constants/types';

export function openClientForm(client) {
    console.log('openClientForm action', client);

    return {
        type: types.OPEN_CLIENT_FORM,
        client
    };
}

export function closeClientForm() {
    console.log('closeClientForm action');

    return {type: types.CLOSE_CLIENT_FORM};
}

export function addContact(contact) {
    console.log('addContact action', contact);

    return {type: types.ADD_CONTACT, contact};
}

export function updateContact(contact) {
    console.log('updateContact action', contact);

    return {type: types.UPDATE_CONTACT, contact};
}

export function deleteContact(contact) {
    console.log('deleteContact action');

    return {type: types.DELETE_CONTACT, contact};
}
