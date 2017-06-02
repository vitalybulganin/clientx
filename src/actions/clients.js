import * as types from '../constants/action-types';
import {createSimpleAction, PREFIX} from '../util/index';

import mockClients from '../mock/clients';

var client = {
};

/**
  *
  * @returns {function()}
  */
export const getClients = () => dispatch => {
	setTimeout(() => {
		console.log('Getting a list of clients');
		dispatch({type: types.GET_CLIENTS, payload: {mockClients}})
	}, 1000);
};

export const addClient = (client) => dispatch => {
    setTimeout(() => {
        console.log('Adding a new client.');
        dispatch({type: types.ADD_CLIENTS, client: {client}})
    }, 1000);
};

export const removeClient = (client) => dispatch => {
    setTimeout(() => {
        console.log('Removing a new client.');
        dispatch({type: types.DELETE_CLIENTS, client: {client}})
    }, 1000);
};

/*
export function getClients()
{
    // noinspection JSUnresolvedVariable
    console.log('prefix: ' + PREFIX);
    // noinspection JSUnresolvedVariable
    let url = PREFIX + 'clients';

    return (dispatch) =>
    {
        callGet(url)
            .then(status)
            .then(response => response.json())
            .then(json => {
                console.log('got json: ', json);
                dispatch(setClients(json))
            })
            .catch(ex => ex.json())
            .then(ex => {
                dispatch(showError(ex))
            });
    }
};
*/

function callPost(url, data) {
    return fetch(url, {
        method: 'post',
        credentials: 'same-origin',
        headers:{'Content-type': 'application/json; charset=utf-8'},
        body: JSON.stringify(data)
    });
}

/**
 *
 * @param url
 * @returns {*}
 */
function callGet(url) {
    return fetch(url, {credentials: 'same-origin'});
}

/**
 *
 * @param response
 * @returns {*}
 */
function status(response) {
    console.debug('status response');
    console.debug(response);

    switch (response.status)
    {
        case 201:
        case 202:
        case 200:
            return Promise.resolve(response);
            break;
        default:
            return Promise.reject(response);
            break;
    }
}
