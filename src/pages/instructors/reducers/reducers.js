import * as types from '../constants/types';
import {LocalStorageManager} from '../../../utils';

const initialState = {
    instructors: [],
    error: '',
    loaded: false
};

function instructorsReducer(state = initialState, action)
{
    console.log('Action reducer', action);

    switch (action.type)
    {
        case types.GET_INSTRUCTORS:
            const instructors = action.instructors;

            return Object.assign({}, state, {instructors, loaded: true});

        case types.SAVE_INSTRUCTOR:
            LocalStorageManager.set('instructors', action.instructors);

            return state;

        case types.ADD_INSTRUCTOR:
            action.instructors.contacts.map((contact) => {client.contacts.push(contact)});
            // Adding a new client.
            state.instructor.push(client);

            return Object.assign({}, state, {instructors: state.instructors});

        case types.UPDATE_INSTRUCTOR:
            const clientIndex = state.instructor.findIndex((instructor) => {instructor.id === action.instructor.id});

            if (clientIndex !== -1)
            {
                // Updating the client in the lit.
                state.instructors[clientIndex] = action.instructor;

                return Object.assign({}, state, {instructors: state.instructors});
            }
            return state;

        case types.DELETE_INSTRUCTOR:
            const filteredClients = state.instructors.filter(instructor => instructor.id !== action.instructor.id);
            // Updating the client in the list.
            return Object.assign({}, state, {instructors: filteredClients});

        case types.FIND_INSTRUCTOR:
            const filteredInstructors = state.instructors.filter(instructor =>  (instructor.firstName.toLowerCase().indexOf(action.filter) !== -1) ||
                                                                                (instructor.lastName.toLowerCase().indexOf(action.filter) !== -1) ||
                                                                                (instructor.secondName.toLowerCase().indexOf(action.filter) !== -1) ||
                                                                                (instructor.birthday.toLowerCase().indexOf(action.filter) !== -1));
            // Updating the client in the list.
            return Object.assign({}, state, {instructors: filteredInstructors});

        default:
            return state;
    }
}

export const InstructorsReducer = {
    instructors: instructorsReducer
};
