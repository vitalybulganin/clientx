import * as types from '../constants/types';
import {isEmpty, isArray} from 'lodash';
import {LocalStorageManager} from '../../../utils';

const initialState = {
    instructors: [],
    skills: [],
    rates: [],
    prices: [],
    error: '',
    loaded: false
};

function instructorsReducer(state = initialState, action)
{
    switch (action.type)
    {
        case types.GET_INSTRUCTORS:
            let instructors = LocalStorageManager.get('instructors');
            let skills = LocalStorageManager.get('skills');
            let rates = LocalStorageManager.get('rates');
            let prices = LocalStorageManager.get('prices');

            if (isEmpty(instructors) !== false || isArray(instructors) !== true) { instructors = []; }
            if (isEmpty(skills) !== false || isArray(skills) !== true) { skills = []; }
            if (isEmpty(rates) !== false || isArray(rates) !== true) { rates = []; }
            if (isEmpty(prices) !== false || isArray(prices) !== true) { prices = []; }

            return Object.assign({}, state, {instructors, skills, rates, prices, loaded: true});

        case types.SAVE_INSTRUCTOR:
            LocalStorageManager.set('instructors', action.instructors);

            return state;

        case types.ADD_INSTRUCTOR:
            const instructor = {
                id: state.instructors.length + 1,
                lastName: action.instructor.lastName,
                firstName: action.instructor.firstName,
                secondName: action.instructor.secondName,
                birthday: action.instructor.birthday,
                gender: action.instructor.gender,
                comment: action.instructor.comment,
                contacts: [],
                skills: [],
                rates: [],
                prices: []
            };
            instructor.contacts.map((contact) => {action.instructor.contacts.push(contact)});
            instructor.skills.map((skill) => {action.instructor.skills.push(skill)});
            instructor.rates.map((rate) => {action.instructor.rates.push(rate)});
            instructor.prices.map((price) => {action.instructor.prices.push(price)});
            // Adding a new client.
            state.instructors.push(instructor);

            return Object.assign({}, state, {instructors: state.instructors, instructor});

        case types.UPDATE_INSTRUCTOR:
            const index = state.instructors.findIndex(instructor => instructor.id === action.instructor.id);

            if (index !== -1)
            {
                const {instructors} = state;
                // Updating the client in the lit.
                instructors[index] = action.instructor;

                return Object.assign({}, state, {instructors, instructor: action.instructor});
            }
            else
            {
                console.log('No one instructor found by ', action.instructor.id);
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
