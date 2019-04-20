// @flow
import React from 'react';
import type {NavigationItem} from './types';

type Props = {
    navigationItems: Array<NavigationItem>
};

const Navigation = (props: Props) => {
    return <div>
        {renderNavigationItems(props.navigationItems)}
    </div>
};

const renderNavigationItems = (navigationItems: Array<NavigationItem>) => {
    return navigationItems.map((navigationItem) => (
        <div key={navigationItem.value} onClick={navigationItem.callback}>
            {navigationItem.label}
        </div>
    ));
};

export default Navigation;