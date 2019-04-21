// @flow

import React, { useState, Fragment } from 'react';
import * as types from '../types';
import Navigation from '../../components/Navigation/Navigation';

import '../../../css/BattleContainer/Maneuvers.css';

type Props = {
    maneuvers: Array<types.ManeuverType>
};

const Maneuvers = (props: Props) => {
    const [currentText, setCurrentText] = useState('');
    const navigationItems = props.maneuvers.map((maneuver) => {
        return {
            label: maneuver.title,
            value: maneuver.contents,
            hoverCallback: () => {setCurrentText(maneuver.contents)},
            clickCallback: alert
        };
    });

    return <Fragment>
        {navigationItems ? <Navigation onMouseOver={alert} navigationItems={navigationItems} /> : null}
        <div className="maneuver-description-box">{currentText}</div>
    </Fragment>;
};

export default Maneuvers;