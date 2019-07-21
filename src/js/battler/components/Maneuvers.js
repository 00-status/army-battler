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
    const processTurn = (maneuver: Maneuver) =>
    {
        // Player's Turn
        handleManeuver(maneuver, false)
        // Process afflictions for opponent
        props.processAfflictions(false);

        // Opponent's turn
        // Randomly select a maneuver
        const maneuverIndex = Math.floor(Math.random() * props.maneuvers.length);
        handleManeuver(props.maneuvers[maneuverIndex], true);
        // Process afflictions for the player
        props.processAfflictions(true);
    };

    const handleManeuver = (maneuver: Maneuver, onPlayer: boolean) => {
        for (const key in maneuver.afflictions) {
            const currentAffliction = maneuver.afflictions[key]; 
            if (currentAffliction.turns <= 0) {
                props.performAffliction(onPlayer, key, currentAffliction);
            }
            else {
                props.addAffliction(onPlayer, key, currentAffliction);
            }
        }
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