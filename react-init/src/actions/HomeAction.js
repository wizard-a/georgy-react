import {HOME_MESSAGE} from './types.js';

export function changeMessage (message) {
    return {
        type: HOME_MESSAGE,
        data: message
    };
}
