import * as types from "../constants/action-types";
import clients from '../mock/clients';

const initialState =
{
	clients: []
};

export default function(state = initialState, action)
{
    console.log(action);

	switch (action.type)
    {	
		case types.GET_CLIENTS:
			return state;
			
		case types.ADD_CLIENTS:
			return [
				...state,
				action.client
			]
			
		case types.FIND_CLIENTS:
			return action.client;
			
		case types.DELETE_CLIENTS:
			return state;

        default:
            break;
    }
    return state;
};
