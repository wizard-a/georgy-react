import * as types from '../actions/types.js';
const initialState = "Hello react starter kit";

function Home(state = initialState, action) {
    switch (action.type) {
        case types.HOME_MESSAGE:
            return action.data;
        default:
            return state;
    }
}

export default Home;
