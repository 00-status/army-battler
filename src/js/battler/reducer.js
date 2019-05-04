// @flow

import type {Army, Message, Maneuver} from './types';
import { type Actions, CHANGE_PLAYER_ARMY } from './actions'

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
                turns: 0,
                damageMod: 1.5,
                moraleMod: 0,
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
                damageMod: 4,
                moraleMod: 0,
                defenseMod: 0,
                sizeMod: 0,
                nameMod: '' 
            }]
        },
        {
            title: 'Army of the Dead',
            contents: 'You see dead people.',
            afflictions: [{
                turns: 0,
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
                damageMod: 2,
                moraleMod: 0,
                defenseMod: 0,
                sizeMod: 0,
                nameMod: ''
            }]
        }
    ]
};

const battler = (state: State = initialState, action: Actions) => {
    switch (action.type) {
        case CHANGE_PLAYER_ARMY:
            let playerArmy = Object.assign({}, state.playerArmy)
            playerArmy.morale -= action.data.damageMod;
            return Object.assign({}, state, {playerArmy: playerArmy});
        default:
            return state;
    }
};

export default battler;