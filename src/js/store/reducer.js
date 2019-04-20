// @flow
import { combineReducers } from 'redux';
import battler, {type State as Battler} from '../battler/reducer';

export type State = {
    battler: Battler;
};

const rootReducer: State = combineReducers({
    battler: battler
});

export default rootReducer;