//@flow
import React from 'react';
import './ArmyStats.css';

type Props = {
    name: string,
    morale: number,
    attack: number,
    discipline: number,
    size: number
};

const ArmyStats = (props: Props) => {
    return <div className="army_stats">
        <div className="army_stats__title-box army_stats--center-text">
            <h2 className="army_stats__title">{props.name}</h2>
            <p>{props.size}</p>
        </div>
        <div className="army_stats--center-text">
            <h4>Morale</h4>
            <p>{props.morale}</p>
        </div>
        <div className="army_stats--center-text">
            <h4>Discipline</h4>
            <p>{props.discipline}</p>
        </div>
        <div className="army_stats--center-text">
            <h4>Attack</h4>
            <p>{props.attack}</p>
        </div>
    </div>
};

export default ArmyStats;