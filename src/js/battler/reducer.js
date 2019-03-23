// @flow
import { type State } from './types';

const initialState: State = {
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
    ]
};

const battler = (state: State = initialState, action: any) => {
    switch (action.type) {
        default:
        return state;
    }
};

export default battler;