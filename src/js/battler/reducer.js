// @flow

import * as types from './types';

export type State = {
    armies: Array<types.Army>,
    messages: Array<types.MessageType>,
    maneuvers: Array<types.ManeuverType>
}

const initialState: State = {
    armies: [
        {
            name: 'Guardians',
            desc: '',
            attack: 4,
            discipline: 3,
            morale: 10,
            size: 100
        },
        {
            name: 'Reavers',
            desc: '',
            attack: 7,
            discipline: 2,
            morale: 10,
            size: 80
        }
    ],
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
            title: 'Army of the Dead',
            contents: 'You see dead people.',
            damageMod: 1,
            moraleMod: 1,
            defenseMod: 1,
            sizeMod: 1,
            nameMod: ''
        },
        {
            title: 'Volley',
            contents: 'Fight in the shade.',
            damageMod: 1,
            moraleMod: 1,
            defenseMod: 3,
            sizeMod: 1,
            nameMod: ''
        },
        {
            title: 'Charge',
            contents: 'Your forces pull forward',
            damageMod: 2,
            moraleMod: 1,
            defenseMod: 1,
            sizeMod: 1,
            nameMod: ''
        }
    ]
};

const battler = (state: State = initialState, action: any) => {
    switch (action.type) {
        default:
        return state;
    }
};

export default battler;