// @flow

import React, { useState, Fragment } from 'react';
import type {Army, Maneuver} from '../types';
import Navigation from '../../components/Navigation/Navigation';

import './Maneuvers.css';
import { changePlayerArmy } from '../actions';
import processAfflictions from '../tactician';

type Props = {
    playerArmy: Army,
    computerArmy: Army,
    maneuvers: Array<Maneuver>,
    changeArmy: typeof changePlayerArmy
};

const Maneuvers = (props: Props) => {
    const processTurn = (maneuver: Maneuver) => {
        // Process player Afflictions
        let data = processAfflictions(props.playerArmy, props.computerArmy);
        if (data) {
            props.changeArmy(data[0]);
        }
        // Process player maneuver
    };

    const [currentText, setCurrentText] = useState('');
    const navigationItems = props.maneuvers.map((maneuver) => {
        return {
            label: maneuver.title,
            value: maneuver.contents,
            hoverCallback: () => {setCurrentText(maneuver.contents)},
            clickCallback: () => {processTurn(maneuver)}
        };
    });

    return <Fragment>
        {navigationItems ? <Navigation navigationItems={navigationItems} /> : null}
        <div className="maneuver-description-box">{currentText}</div>
    </Fragment>;
};

export default Maneuvers;