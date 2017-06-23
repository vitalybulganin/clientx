import * as types from '../constants/types';

export function getInstructors() {
    return (dispatch) => {dispatch({type: types.GET_INSTRUCTORS, instructors: [], loaded: false})};
}

export function addInstructor(instructor) {
    return {
        type: types.ADD_INSTRUCTOR,
        instructor
    };
}

export function updateInstructor(instructor) {
    return {
        type: types.UPDATE_INSTRUCTOR,
        instructor
    };
}

export function deleteInstructor(instructor) {
    return {
        type: types.DELETE_INSTRUCTOR,
        instructor
    };
}

export function saveInstructors(instructors) {
    if (typeof instructors === 'undefined' || typeof instructors === 'Object') { instructors = []; }

    return (dispatch) => {dispatch({type: types.SAVE_INSTRUCTOR, instructors})};
}

export function findInstructor(filter) {
    return {
        type: types.FIND_INSTRUCTOR,
        filter
    };
}
