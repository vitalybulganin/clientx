import * as types from '../constants/types';

export function openInstructorForm(instructor) {
    return {
        type: types.OPEN_INSTRUCTOR_FORM,
        instructor
    };
}

export function closeInstructorForm() {
    return {
        type: types.CLOSE_INSTRUCTOR_FORM
    };
}

export function editInstructorForm(instructor) {
    return {
        type: types.EDIT_INSTRUCTOR_FORM,
        instructor
    };
}
