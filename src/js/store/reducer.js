// #flow
import { combineReducers } from 'redux';
import battler from '../battler/reducer';

const initialState = {test: true};

function battleReducer(state = initialState, action)
{
    if (typeof state === 'undefined') {
        return initialState;
    }

    return state;
}

const rootReducer = combineReducers({
    App: battleReducer,
    battler: battler
});

export default rootReducer;