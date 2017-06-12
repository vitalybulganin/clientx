import * as types from '../../../../constants/action-types';

export function openModal(options)
{
    const { title, content } = options;

    return {
        type: types.OPEN_MODAL,
        title,
        content
    };
}

export function closeModal()
{
    return {
        type: types.CLOSE_MODAL
    };
}

