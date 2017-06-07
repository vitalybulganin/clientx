import * as types from '../../../../constants/action-types';

export function openForm(client) {
    console.log('openForm action', client);

    return {
        type: types.OPEN_FORM,
        client
    };
}

export function closeForm() {
    console.log('closeForm action');

    return {type: types.CLOSE_FORM};
}

export function addContact(contacts, contact) {
    console.log('addContact action');

    return {type: types.ADD_CONTACT, contacts, contact};
}

export function updateContact(contact) {
    console.log('updateContact action');

    return {type: types.UPDATE_CONTACT, contact};
}

export function openContact(contact) {
    console.log('openContact action');

    return {type: types.OPEN_CONTACT, contact};
}

export function deleteContact(contacts, contact) {
    console.log('deleteContact action');

    return {type: types.DELETE_CONTACT, contacts, contact};
}

export function closeContact() {
    console.log('closeContact action');

    return {type: types.CLOSE_CONTACT};
}
