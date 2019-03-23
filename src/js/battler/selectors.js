// #flow
import State from './types';

export const selectMessages = (state: State) => {
    return state.battler.messages;
};
