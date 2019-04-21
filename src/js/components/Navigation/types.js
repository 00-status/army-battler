// @flow

export type NavigationItem = {
    label: string,
    value: number | string,
    hoverCallback: () => any,
    clickCallback: () => any
};