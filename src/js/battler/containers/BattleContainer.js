//@flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import ArmyStats from '../components/ArmyStats';
import Message from '../components/Message';
import Maneuvers from '../components/Maneuvers';
import type { MessageType, ManeuverType, Army} from '../types';

import './BattleContainer.css';
import { selectMessages, selectManeuvers, selectArmies } from '../selectors';

type Props = {
    armies: Array<Army>,
    messages: Array<MessageType>,
    maneuvers: Array<ManeuverType>
};

class BattleContainer extends Component<Props>
{
    render()
    {
        const [army1, army2] = this.props.armies;
        return <div className="battle_container">
            <div className="battle_container__top">
            <ArmyStats
                    name={army1.name}
                    size={army1.size}
                    morale={army1.morale}
                    discipline={army1.discipline}
                    attack={army1.attack}
                />
                <div className="army_stats">
                {this.props.messages.map(this.mapMessages)}
                </div>
                <ArmyStats
                    name={army2.name}
                    size={army2.size}
                    morale={army2.morale}
                    discipline={army2.discipline}
                    attack={army2.attack}
                />
            </div>
            <div className="battle_container__bottom">
                <Maneuvers maneuvers={this.props.maneuvers} />
            </div>
        </div>
    }

    mapMessages(message: MessageType) {
        return <Message
            key={message.key}
            title={message.title}
            contents={message.text}
        />
    }
}

const mapStateToProps = (state: any) => {
    return {
        armies: selectArmies(state),
        messages: selectMessages(state),
        maneuvers: selectManeuvers(state)
    }
};

export default connect(mapStateToProps)(BattleContainer);