//@flow
import React, { Component } from 'react';
import ArmyStats from '../components/ArmyStats';
import Message from '../components/Message';

type Props = {};

class BattleContainer extends Component<Props>
{
    render()
    {
        return <div>
            <ArmyStats
                name="Guardians"
                size={1000}
                morale={100}
                discipline={5}
                attack={15}
            />
            <div>
                <Message
                    title='It has begun...'
                    contents="For the first time in many years."
                />
            </div>
            <ArmyStats
                name="Reavers"
                size={800}
                morale={100}
                discipline={2}
                attack={118}
            />
        </div>
    }
}

export default BattleContainer;