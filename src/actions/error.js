import * as types from '../constants/action-types';
import {createSimpleAction, PREFIX} from '../util/index';

export const showError = createSimpleAction(types.ERROR);
