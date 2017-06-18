import * as types from '../constants/types';

const initialState = {
    contact: {
        id: -1,
        type: 'Мобильный',
        value: '',
        comment: ''
    },
    parent: {},
    error: '',
    showForm: false
};

function contactReducer(state = initialState, action)
{
    switch (action.type)
    {
        case types.OPEN_CONTACT:
            return Object.assign({}, state, {contact: action.contact, showForm: true});

        case types.CLOSE_CONTACT:
            return Object.assign({}, state, {showForm: false});

        case types.ADD_CONTACT:
            action.parent.contacts.push(action.contact);

            return Object.assign({}, state, {parent: action.parent, showForm: false});

        case types.UPDATE_CONTACT:
            return Object.assign({}, state, {contact: action.contact, showForm: false});

        case types.DELETE_CONTACT:
            const parent = action.parent;
            const filtered = parent.contacts.filter(contact => contact.id !== action.contact.id);

            parent.contacts = [];
            filtered.map(contact => parent.contacts.push(contact));

            return Object.assign({}, state, {parent, showForm: false});

        case types.EDIT_CONTACT:
            return Object.assign({}, state, {contact: action.contact, showForm: false});

        default:
            return state;
    }
}

export const ContactFormReducer = {
    contact: contactReducer
};
