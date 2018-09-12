import * as types from '../actions/types.js';
const initialState = {
    currLocale: 'zh'
};

function Home(state = initialState, action) {
    switch (action.type) {
        case types.SWITCH_LOCALEN:
            return {
                ...state,
                currLocale: action.data,
            };
        default:
            return state;
    }
}

export default Home;
