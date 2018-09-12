import {SWITCH_LOCALEN} from './types.js';

export function changeLocale (currLocale) {
    return {
        type: SWITCH_LOCALEN,
        data: currLocale
    };
}
