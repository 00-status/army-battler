// @flow

import React, { useState, Fragment } from 'react';
import * as types from '../types';
import Navigation from '../../components/Navigation/Navigation';

import './Maneuvers.css';

type Props = {
    playerArmy: types.Army,
    computerArmy: types.Army,
    maneuvers: Array<types.ManeuverType>
};

const Maneuvers = (props: Props) => {
    const [currentText, setCurrentText] = useState('');
    const navigationItems = props.maneuvers.map((maneuver) => {
        return {
            label: maneuver.title,
            value: maneuver.contents,
            hoverCallback: () => {setCurrentText(maneuver.contents)},
            clickCallback: () => {alert(props.playerArmy.name)}
        };
    });

    return <Fragment>
        {navigationItems ? <Navigation navigationItems={navigationItems} /> : null}
        <div className="maneuver-description-box">{currentText}</div>
    </Fragment>;
};

export default Maneuvers;