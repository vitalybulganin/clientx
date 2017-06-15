import * as types from '../constants/types';

const initialState = {
    instructor: {
        id: -1,
        lastName: '',
        firstName: '',
        secondName: '',
        birthday: '',
        gender: '',
        comment: '',
        contacts: [],
        skills: [],
        rates: [],
        priceplans: []
    },
    error: '',
    showForm: false,
    contact: {
        id: -1,
        type: '',
        value: '',
        comment: ''
    }
};

function instructorFormReducer(state = initialState, action)
{
    console.log('Action', action);

    switch (action.type)
    {
        case types.OPEN_INSTRUCTOR_FORM:
            let error = action.error;

            if (action.instructor.lastName === '' && action.instructor.firstName === '') { error = 'Фамилия и имя клиента обязательные поля';  }
            return Object.assign({}, state, {error, instructor: action.instructor, showForm: true});

        case types.CLOSE_INSTRUCTOR_FORM:
            return Object.assign({}, state, {showForm: false});

        case types.ADD_CONTACT:
            const {instructor} = state;
            const contact = {
                id: instructor.contacts.length + 1,
                type: action.contact.type,
                value: action.contact.value,
                comment: action.contact.comment
            };
            instructor.contacts.push(contact);

            return Object.assign({}, state, {instructor, contact: {}});

        case types.UPDATE_CONTACT:
            return Object.assign({}, state, {contact: action.contact});

        case types.CLOSE_CONTACT:
            return Object.assign({}, state, {contact: {}});

        case types.DELETE_CONTACT:
            state.instructor.contacts = state.instructor.contacts.filter(contact => contact.id !== action.contact.id);

            return Object.assign({}, state, {instructor: state.instructor});

        default:
            return state;
    }
}

export const InstructorFormReducer = {
    instructor: instructorFormReducer
};
