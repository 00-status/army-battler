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
    playerArmy:
        {
            name: 'Guardians',
            desc: '',
            attack: 4,
            discipline: 3,
            morale: 10,
            size: 100,
            currentAfflictions: [{
                turns: 2,
                damageMod: 1.5,
                moraleMod: 0,
                defenseMod: 0,
                sizeMod: 0,
                nameMod: ''
            },
            {
                turns: 4,
                damageMod: 0,
                moraleMod: -2,
                defenseMod: 0,
                sizeMod: 0,
                nameMod: ''
            }]
        }
    ,
    opposingArmy: {
        name: 'Reavers',
        desc: '',
        attack: 6,
        discipline: 2,
        morale: 10,
        size: 80,
        currentAfflictions: []
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
            afflictions: [{
                turns: 0,
                damageMod: 0,
                moraleMod: -2,
                defenseMod: 0,
                sizeMod: 0,
                nameMod: '' 
            }]
        },
        {
            title: 'Army of the Dead',
            contents: 'You see dead people.',
            afflictions: [{
                turns: 1,
                damageMod: 0,
                moraleMod: 0,
                defenseMod: 0,
                sizeMod: 0,
                nameMod: 'Army of the Dead' 
            }]
        },
        {
            title: 'Champion of Light',
            contents: 'Shining Light.',
            afflictions: [{
                turns: 0,
                damageMod: 0,
                moraleMod: 5,
                defenseMod: 0,
                sizeMod: 0,
                nameMod: '' 
            },
            {
                turns: 4,
                damageMod: 0,
                moraleMod: -2,
                defenseMod: 0,
                sizeMod: 0,
                nameMod: ''
            }]
        }
    ]
};

const battler = (state: State = initialState, action: Actions) =>
{
    let playerArmy = {};
    let opposingArmy = {};
    let affliction = {};
    switch (action.type) {
        case ADD_AFFLICTION:
            affliction = Object.assign({}, action.affliction);
            // Check who we're adding the affliction to
            if (action.onPlayer) {
                playerArmy = Object.assign({}, state.playerArmy);
                playerArmy.currentAfflictions.push(affliction);
                return Object.assign({}, state, {playerArmy: playerArmy});
            }
            opposingArmy = Object.assign({}, state.opposingArmy);
            opposingArmy.currentAfflictions.push(affliction);
            return Object.assign({}, state, {opposingArmy: opposingArmy});
        case PROCESS_AFFLICTIONS:
            if (action.onPlayer) {
                playerArmy = processCurrentAfflictions(state.playerArmy);
                return Object.assign( {}, state, { playerArmy: playerArmy } );
            }
            else {
                opposingArmy = processCurrentAfflictions(state.opposingArmy)
                return Object.assign( {}, state, { opposingArmy: opposingArmy } );
            }
        case PERFORM_AFFLICTION:
            // Check who we're performing the affliction on
            let army = null;
            if (action.onPlayer) {
                // process affliction for player
                army = processAffliction(state.playerArmy, action.affliction)
                return Object.assign( {}, state, { playerArmy: army } );
            }
            else {
                // process affliction for oponnent
                army = processAffliction(state.opposingArmy, action.affliction)
                return Object.assign( {}, state, { opposingArmy: army } );
            }
        default:
            return state;
    }
};

const processAffliction = (army: Army, affliction: Affliction): Army =>
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

    // Remove spent afflictions
    army.currentAfflictions = army.currentAfflictions.filter((affliction: Affliction) => {
        return affliction.turns >= 1;
    });

    army.currentAfflictions.forEach((affliction, index) => {
        // Decrement the current affliction's turns
        affliction.turns--;
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
    });

    return army;
};

export default battler;