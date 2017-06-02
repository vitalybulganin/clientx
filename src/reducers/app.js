import * as types from "../constants/action-types";
import clients from '../mock/clients';

const initialState =
{
	viewType: 'Представление',
	userName: ''
};

export default function(state = initialState, action)
{
    console.log(action);

	switch (action.type)
    {	
        case types.VIEW_TYPE:
			return [
                ...state,
                action.viewType
            ];
			
		case types.USER_LOGGED:
			return [
				...state,
				action.client
			];

        default:
            return state;
    }
    return state;
};
