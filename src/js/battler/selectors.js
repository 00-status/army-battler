// @flow
import {type State} from '../store/reducer';

export const selectPlayerArmy = (state: State) => {
    return state.battler.playerArmy;
};

export const selectOpposingArmy = (state: State) => {
    return state.battler.opposingArmy;
};

export const selectMessages = (state: State) => {
    return state.battler.messages;
};

export const selectManeuvers = (state: State) => {
    return state.battler.maneuvers;
};
