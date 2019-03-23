//@flow
import React from 'react';

type Props = {
    name: string,
    morale: number,
    attack: number,
    discipline: number,
    size: number
};

const ArmyStats = (props: Props) => {
    return <div>
        <div>
            <h2>{props.name}</h2>
            <h4>{props.size}</h4>
        </div>
        <div>
            <h4>Morale</h4>
            <p>{props.morale}</p>
        </div>
        <div>
            <h4>Discipline</h4>
            <p>{props.discipline}</p>
        </div>
        <div>
            <h4>Attack</h4>
            <p>{props.attack}</p>
        </div>>
    </div>;
};

export default ArmyStats;