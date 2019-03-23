import { combineReducers } from 'redux';


const initialState = {test: true};

function battleReducer(state = initialState, action)
{
    if (typeof state === 'undefined') {
        return initialState;
    }

    return state;
}

const rootReducer = combineReducers({App: battleReducer});

export default rootReducer;