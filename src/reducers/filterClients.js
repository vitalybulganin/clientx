import * as types from '../constants/action-types';

const initialState = '';

export default function filterClients(state = initialState, action) 
{
	switch (action.type)
	{
		case types.FIND_CLIENT:
			return action.payload;
	}
	return state;
};

