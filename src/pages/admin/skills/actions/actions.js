import * as types from '../constants';
import {LocalStorageManager} from '../../../../utils';

export function getSkills()
{
    return (dispatch) => {dispatch({type: types.GET_SKILLS, skills: [], loaded: false})};
}

export function saveSkills(skills) {
    console.log('saveSkills action');

    return (dispatch) => {dispatch({type: types.SAVE_SKILLS, skills})};
}

export function addSkill(skill)
{
    return {
        type: types.ADD_SKILL,
        skill
    };
}

export function updateSkill(skill)
{
    return {
        type: types.UPDATE_SKILL,
        skill
    };
}

export function deleteSkill(skill)
{
    return {
        type: types.DELETE_SKILL,
        skill
    };
}

export function findSkill(skill)
{
    return {
        type: types.FIND_SKILL,
        skill
    };
}
