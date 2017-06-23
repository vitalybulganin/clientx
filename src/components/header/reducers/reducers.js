import * as types from '../constants/types';

const initialState = {
    search: {}
};

function headerReducer(state = initialState, action)
{
    switch (action.type)
    {
        case types.FIND_ITEM:
            return Object.assign({}, state, {search});

        default:
            return state;
    }
}

const HeaderReducer = {
    header: headerReducer
};

export default HeaderReducer;
