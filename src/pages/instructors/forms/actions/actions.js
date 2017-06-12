import * as types from '../constants/types';

export function openForm(instructor) {
    console.log('openForm action', instructor);

    return {
        type: types.OPEN_FORM,
        instructor
    };
}

export function closeForm() {
    console.log('closeForm action');

    return {type: types.CLOSE_FORM};
}

export function addContact(contact) {
    console.log('addContact action', contact);

    return {type: types.ADD_CONTACT, contact};
}

export function updateContact(contact) {
    console.log('updateContact action', contact);

    return {type: types.UPDATE_CONTACT, contact};
}

export function openContact(contact) {
    console.log('openContact action');

    return {type: types.OPEN_CONTACT, contact};
}

export function deleteContact(contact) {
    console.log('deleteContact action');

    return {type: types.DELETE_CONTACT, contact};
}

export function closeContact() {
    console.log('closeContact action');

    return {type: types.CLOSE_CONTACT};
}
