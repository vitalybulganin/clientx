import * as types from '../constants';

import {LocalStorageManager} from '../../../../utils';

const initialState = {
    skills: [],
    error: '',
    loaded: false
};

function skillsReducer(state = initialState, action)
{
    switch (action.type)
    {
        case types.GET_SKILLS:
            let skills = LocalStorageManager.get('skills');

            if (typeof skills === 'undefined') { skills = []; }
            if (typeof skills.length === 'undefined') { skills = []; }
            return Object.assign({}, state, {skills, loaded: true});

        case types.SAVE_SKILLS:
            // Saving a list of skills.
            LocalStorageManager.set('skills', action.skills);

            return state;

        case types.ADD_SKILL:
            const skill = {
                id: state.skills.length + 1,
                name: action.skill.name,
                comment: action.skill.comment
            };
            // Adding a new skill.
            state.skills.push(skill);

            return Object.assign({}, state, {skills: state.skills});

        case types.UPDATE_SKILL:
            const skillIndex = state.skills.findIndex(skill => skill.id === action.skill.id);

            if (skillIndex !== -1)
            {
                const {skills} = state;
                // Updating the skill in the list.
                skills[skillIndex] = action.skill;

                return Object.assign({}, state, {skills, skill: action.skill});
            }
            else
            {
                console.log('No one skill found by ', action.skill.id);
            }
            return state;

        case types.DELETE_SKILL:
            const filtered = state.skills.filter(skill => skill.id !== action.skill.id);
            // Updating the skill in the list.
            return Object.assign({}, state, {skills: filtered});

        case types.FIND_SKILL:
            return state;

        default:
            return state;
    }
}

export const SkillsReducer = {
    skills: skillsReducer
};
