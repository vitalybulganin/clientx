import * as types from '../constants/types';
import {LocalStorageManager} from '../../../utils';

export function getInstructors() {
    console.log('getInstructors action');

    let instructors = LocalStorageManager.get('instructors');

    if (typeof instructors === 'undefined') { instructors = []; }
    return (dispatch) => {dispatch({type: types.GET_INSTRUCTORS, instructors, loaded: false})};
}

export function addInstructor(instructor) {
    console.log('addInstructor action', instructor);

    return {
        type: types.ADD_INSTRUCTOR,
        instructor
    };
}

export function updateInstructor(instructor) {
    console.log('updateInstructor action', instructor);

    return {
        type: types.UPDATE_INSTRUCTOR,
        instructor
    };
}

export function deleteInstructor(instructor) {
    console.log('deleteInstructor action', instructor);

    return {
        type: types.DELETE_INSTRUCTOR,
        instructor
    };
}

export function saveInstructors(instructors) {
    console.log('saveInstructors action');

    return (dispatch) => {dispatch({type: types.SAVE_INSTRUCTOR, instructors})};
}

export function findInstructor(filter) {
    console.log('findInstructor action', filter);

    return {
        type: types.FIND_INSTRUCTOR,
        filter
    };
}
