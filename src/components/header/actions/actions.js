import * as types from '../constants/types';

export function findItem(search) {
    console.log('findItem action', search);

    return {
        type: types.FIND_ITEM,
        search
    };
}

export function addItem(item) {
    console.log('addItem action', item);

    return {
        type: types.ADD_ITEM,
        item
    };
}
