import * as types from '../constants';

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
        prices: []
    },
    error: '',
    showForm: false
};

function instructorFormReducer(state = initialState, action)
{
    switch (action.type)
    {
        case types.OPEN_INSTRUCTOR_FORM:
            return Object.assign({}, state, {instructor: action.instructor, showForm: true});

        case types.CLOSE_INSTRUCTOR_FORM:
            const defaultInstructor = {
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
                    prices: []
                }
            };
            return Object.assign({}, state, {instructor: defaultInstructor.instructor, showForm: false});

        case types.EDIT_INSTRUCTOR_FORM:
            return Object.assign({}, state, {instructor: action.instructor});

        default:
            return state;
    }
}

export const InstructorFormReducer = {
    instructor: instructorFormReducer
};
