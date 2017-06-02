import * as types from "../constants/action-types";

const initialState =
{
	versionApp: "No version",
    errorContainer: {
        title: '',
        text: ''
    }
};

export default function(state = initialState, action)
{
    console.log(action);

	switch (action.type)
    {
        case 'ERROR_IN_VERSIONAPP':
            return state;

        case types.ERROR:
            return {...state, errorContainer: action.value};
			
        default:
            break;
    }
    return state;
}
