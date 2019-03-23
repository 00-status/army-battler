//@flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import ArmyStats from '../components/ArmyStats';
import Message from '../components/Message';
import { type Message as message} from '../types';
import '../../../css/BattleContainer/BattleContainer.css';
import { selectMessages } from '../selectors';

type Props = {
    messages: Array<message>
};

class BattleContainer extends Component<Props>
{
    render()
    {
        return <div className="battle_container">
            <div className="battle_container__top">
            <ArmyStats
                    name="Guardians"
                    size={1000}
                    morale={100}
                    discipline={5}
                    attack={15}
                />
                <div className="army_stats">
                {this.props.messages.map(this.mapMessages)}
                </div>
                <ArmyStats
                    name="Reavers"
                    size={800}
                    morale={100}
                    discipline={2}
                    attack={118}
                />
            </div>
        </div>
    }

    mapMessages(message: message) {
        return <Message
            key={message.key}
            title={message.title}
            contents={message.text}
        />
    }
}

const mapStateToProps = (state: any) => {
    return {
        messages: selectMessages(state)
    }
};

export default connect(mapStateToProps)(BattleContainer);