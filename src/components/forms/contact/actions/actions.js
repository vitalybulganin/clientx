import * as types from '../constants';

export function openContactForm(contact) {
    return {type: types.OPEN_CONTACT, contact};
}

export function closeContactForm() {
    return {type: types.CLOSE_CONTACT};
}

export function addContact(parent, contact) {
    return {type: types.ADD_CONTACT, parent, contact};
}

export function updateContact(parent, contact) {
    return {type: types.UPDATE_CONTACT, parent, contact};
}

export function deleteContact(parent, contact) {
    return {type: types.DELETE_CONTACT, parent, contact};
}

export function editContact(contact) {
    return {type: types.EDIT_CONTACT, contact};
}
