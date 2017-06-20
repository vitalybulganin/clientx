import * as types from '../constants';

const initialState = {
    skill: {
        id: -1,
        name: '',
        comment: ''
    },
    error: '',
    showForm: false
};

function skillFormReducer(state = initialState, action)
{
    switch (action.type)
    {
        case types.OPEN_SKILL_FORM:
            let error = action.error;
            if (typeof action.skill === 'undefined') { action.skill = initialState.skill; }
            if (action.skill.id !== -1 && action.skill.name === '') { error = 'Наименование не можеть быть пустым';  }

            return Object.assign({}, state, {error, skill: action.skill, showForm: true});

        case types.CLOSE_SKILL_FORM:
            return Object.assign({}, state, {skill: {}, showForm: false});

        default:
            return state;
    }
}

export const SkillFormReducer = {
    skill: skillFormReducer
};

