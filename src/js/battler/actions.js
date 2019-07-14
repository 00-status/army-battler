// @flow
import type { Affliction } from './types'
import processTurn from './tactician';

export const PROCESS_AFFLICTIONS: 'PROCESS_AFFLICTIONS' = 'PROCESS_AFFLICTIONS';
export type ProcessAfflictions = {
    type: typeof PROCESS_AFFLICTIONS,
    onPlayer: boolean
};
export const processAfflictions = (onPlayer: boolean): ProcessAfflictions =>
{
    return { type: PROCESS_AFFLICTIONS, onPlayer };
};

export const PERFORM_AFFLICTION: 'PERFORM_AFFLICTION' = 'PERFORM_AFFLICTION';
export type PerformAffliction = {
    type: typeof PERFORM_AFFLICTION,
    onPlayer: boolean,
    afflictionKey: string,
    affliction: Affliction
};
export const performAffliction = (
    onPlayer: boolean,
    afflictionKey: string,
    affliction: Affliction
    ): PerformAffliction =>
{
    return { type: PERFORM_AFFLICTION, onPlayer, afflictionKey, affliction };
};

export const ADD_AFFLICTION: 'ADD_AFFLICTION' = 'ADD_AFFLICTION';
export type AddAffliction = {
    type: typeof ADD_AFFLICTION,
    onPlayer: boolean,
    afflictionKey: string,
    affliction: Affliction
};
export const addAffliction = (
    onPlayer: boolean,
    afflictionKey: string,
    affliction: Affliction
    ): AddAffliction =>
{
    return { type: ADD_AFFLICTION, onPlayer, afflictionKey, affliction };
}

export type Actions = ProcessAfflictions |
AddAffliction |
PerformAffliction;