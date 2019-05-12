// @flow

import React, { useState, Fragment } from 'react';
import type {Army, Maneuver} from '../types';
import Navigation from '../../components/Navigation/Navigation';

import './Maneuvers.css';
import { processAfflictions, performAffliction, addAffliction } from '../actions';

type Props = {
    playerArmy: Army,
    computerArmy: Army,
    maneuvers: Array<Maneuver>,
    processAfflictions: typeof processAfflictions,
    performAffliction: typeof performAffliction,
    addAffliction: typeof addAffliction
};

const Maneuvers = (props: Props) => {
    const processTurn = (maneuver: Maneuver) => {
        // Process current player maneuver
        maneuver.afflictions.forEach(affliction => {
            if (affliction.turns <= 0) {
                props.performAffliction(false, affliction);
            }
            else {
                props.addAffliction(false, affliction);
            }
        });
        // Process afflictions for opponent
        props.processAfflictions(false);

        // Do opponent's turn

        // Process afflictions for the player
        props.processAfflictions(true);
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