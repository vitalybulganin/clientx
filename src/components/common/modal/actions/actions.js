import * as types from '../../../../constants/action-types';

export function openModal(options)
{
    const { title, btnText, content } = options;

    return {
        type: OPEN_MODAL,
        title, btnText, content
    };
}

export function closeModal()
{
    return {
        type: types.CLOSE_MODAL
    };
}

