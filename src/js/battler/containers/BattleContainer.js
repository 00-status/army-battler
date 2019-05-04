// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import ArmyStats from '../components/ArmyStats';
import Message from '../components/Message';
import Maneuvers from '../components/Maneuvers';
import type { Message as MessageType, Maneuver, Army} from '../types';

import './BattleContainer.css';
import { selectMessages, selectManeuvers, selectPlayerArmy, selectOpposingArmy } from '../selectors';
import { changePlayerArmy } from '../actions';

type Props = {
    playerArmy: Army,
    opposingArmy: Army,
    messages: Array<MessageType>,
    maneuvers: Array<Maneuver>,
    changePlayerArmy: typeof changePlayerArmy
};

class BattleContainer extends Component<Props>
{
    render()
    {
        const {playerArmy, opposingArmy} = this.props;
        return <div className="battle_container">
            <div className="battle_container__top">
            <ArmyStats
                    name={playerArmy.name}
                    size={playerArmy.size}
                    morale={playerArmy.morale}
                    discipline={playerArmy.discipline}
                    attack={playerArmy.attack}
                />
                <div className="army_stats">
                {this.props.messages.map(this.mapMessages)}
                </div>
                <ArmyStats
                    name={opposingArmy.name}
                    size={opposingArmy.size}
                    morale={opposingArmy.morale}
                    discipline={opposingArmy.discipline}
                    attack={opposingArmy.attack}
                />
            </div>
            <div className="battle_container__bottom">
                <Maneuvers
                playerArmy={playerArmy}
                computerArmy={this.props.opposingArmy}
                maneuvers={this.props.maneuvers}
                changeArmy={this.props.changePlayerArmy}
                />
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

const mapDispatchToProps = {
    changePlayerArmy
};

const mapStateToProps = (state: any) => {
    return {
        playerArmy: selectPlayerArmy(state),
        opposingArmy: selectOpposingArmy(state),
        messages: selectMessages(state),
        maneuvers: selectManeuvers(state)
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(BattleContainer);