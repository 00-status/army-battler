// @flow
import {type State} from '../store/reducer';

export const selectArmies = (state: State) => {
    return state.battler.armies;
};

export const selectMessages = (state: State) => {
    return state.battler.messages;
};

export const selectManeuvers = (state: State) => {
    return state.battler.maneuvers;
};
