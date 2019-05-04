// @flow
import type {Affliction} from './types';
import processTurn from "./tactician";

export const CHANGE_PLAYER_ARMY: 'CHANGE_PLAYER_ARMY' = 'CHANGE_PLAYER_ARMY';
export type ChangePlayerArmy = {
    type: typeof CHANGE_PLAYER_ARMY,
    data: Affliction
};
export const changePlayerArmy = (data: Affliction) =>
{
    return { type: CHANGE_PLAYER_ARMY, data: data };
};

export type Actions = ChangePlayerArmy;