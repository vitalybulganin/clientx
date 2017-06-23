import * as types from '../constants/types';

export function findItem(search) {
    return {
        type: types.FIND_ITEM,
        search
    };
}

export function addItem(item) {
    return {
        type: types.ADD_ITEM,
        item
    };
}
