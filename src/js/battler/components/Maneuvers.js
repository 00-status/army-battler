// @flow

import React from 'react';
import * as types from '../types';
import Navigation from '../../components/Navigation/Navigation';

type Props = {
    maneuvers: types.ManeuverType[]
};

const Maneuvers = (props: Props) => {
    const navigationItems = props.maneuvers.map((maneuver) => {
        return {label: maneuver.title, value: maneuver.contents, callback: alert};
    });

    return <Navigation navigationItems={navigationItems} />;
};

export default Maneuvers;