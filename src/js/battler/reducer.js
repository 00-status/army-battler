// @flow

import type {Army, Message, Maneuver, Affliction} from './types';
import {
    type Actions,
    PROCESS_AFFLICTIONS,
    ADD_AFFLICTION,
    PERFORM_AFFLICTION
 } from './actions'

export type State = {
    playerArmy: Army,
    opposingArmy: Army,
    messages: Array<Message>,
    maneuvers: Array<Maneuver>
}
const initialState: State = {
    playerArmy: {
        name: 'Guardians',
        desc: '',
        attack: 4,
        discipline: 3,
        morale: 10,
        size: 100,
        currentAfflictions: {}
    },
    opposingArmy: {
        name: 'Reavers',
        desc: '',
        attack: 6,
        discipline: 2,
        morale: 10,
        size: 80,
        currentAfflictions: {}
    },
    messages: [
        {
            key: 0,
            title: 'message1',
            text: 'test'
        },
        {
            key: 1,
            title: 'message2',
            text: 'test'
        }
    ],
    maneuvers: [
        {
            title: 'Charge!',
            contents: 'To hell and high water!',
            afflictions: {
                'charge': {turns: 0, damageMod: 0, moraleMod: -2, defenseMod: 0, sizeMod: 0, nameMod: ''}
            }
        },
        {
            title: 'Bellowing Shout',
            contents: 'A battle cry rings across the field!',
            afflictions: {
                'Bellowing Shout': {turns: 1, damageMod: -2, moraleMod: 0, defenseMod: 0, sizeMod: 0, nameMod: ''}
            }
        },
        {
            title: 'Champion of Light',
            contents: 'Shining Light.',
            afflictions: {
                'light-heal-5': {turns: 4, damageMod: 0, moraleMod: -1, defenseMod: 0, sizeMod: 0, nameMod: ''},
                'light-harm-2': {turns: 0, damageMod: -1, moraleMod: 0, defenseMod: 0, sizeMod: 0, nameMod: ''}
            }
        }
    ]
};

const battler = (state: State = initialState, action: Actions) =>
{
    switch (action.type) {
        case ADD_AFFLICTION:
            const afflictionKey = action.afflictionKey;
            let affliction = action.affliction;
            if (action.onPlayer) {
                let currentAfflictions = Object.assign({}, state.playerArmy.currentAfflictions);
                currentAfflictions[afflictionKey] = affliction;
                return Object.assign({}, state, {
                    playerArmy: Object.assign({}, state.playerArmy, {
                        currentAfflictions: currentAfflictions
                    })
                });
            }
            let currentAfflictions = Object.assign({}, state.opposingArmy.currentAfflictions);
            currentAfflictions[afflictionKey] = affliction;
            return Object.assign({}, state, {
                opposingArmy: Object.assign({}, state.opposingArmy, {
                    currentAfflictions: currentAfflictions
                })
            });
        case PROCESS_AFFLICTIONS:
            if (action.onPlayer) {
                return Object.assign({}, state, {
                    playerArmy: processCurrentAfflictions(state.playerArmy)
                });
            }
            else {
                return Object.assign({}, state, {
                    opposingArmy: processCurrentAfflictions(state.opposingArmy)
                });
            }
        case PERFORM_AFFLICTION:
            if (action.onPlayer) {
                // process affliction for player
                return Object.assign( {}, state, {
                    playerArmy: performAffliction(state.playerArmy, action.affliction)
                });
            }
            else {
                // process affliction for opponent
                return Object.assign({}, state, {
                    opposingArmy: performAffliction(state.opposingArmy, action.affliction)
                });
            }
        default:
            return state;
    }
};

const performAffliction = (army: Army, affliction: Affliction): Army =>
{
    army = Object.assign({}, army);
    // Change the army's morale
    army.morale += affliction.moraleMod;
    // Change the army's damage
    army.attack += affliction.damageMod; 
    // Change the army's defense
    army.discipline += affliction.defenseMod;
    // Change the army's size
    army.size += affliction.sizeMod;
    // Change the army's name
    army.name = affliction.nameMod !== '' ? affliction.nameMod : army.name

    return army;
};

const processCurrentAfflictions = (army: Army): Army =>
{
    army = Object.assign({}, army);

    let remainingAfflictions = {};

    // Remove spent afflictions
    for (const key in army.currentAfflictions) {
        let currentAffliction = army.currentAfflictions[key];
        if (currentAffliction.turns >= 1) {
            remainingAfflictions[key] = currentAffliction;
        }
        else {
            continue;
        }

        // Decrement the current affliction's turns
        currentAffliction.turns--;
        // Change the army's morale
        army.morale += currentAffliction.moraleMod;
        // Change the army's damage
        army.attack += currentAffliction.damageMod; 
        // Change the army's defense
        army.discipline += currentAffliction.defenseMod;
        // Change the army's size
        army.size += currentAffliction.sizeMod;
        // Change the army's name
        army.name = currentAffliction.nameMod !== '' ? currentAffliction.nameMod : army.name;
    }
    army.currentAfflictions = remainingAfflictions;

    return army;
};

export default battler;