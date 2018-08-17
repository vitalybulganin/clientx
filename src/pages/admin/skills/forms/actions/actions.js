import * as types from '../constants';

export function openSkillForm(skill)
{
    return {
        type: types.OPEN_SKILL_FORM,
        skill
    };
}

export function closeSkillForm()
{
    return {
        type: types.CLOSE_SKILL_FORM
    };
}
