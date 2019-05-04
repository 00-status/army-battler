// @flow

export type Army = {
    name: string,
    desc: string,
    attack: number,
    discipline: number,
    morale: number,
    size: number,
    currentAfflictions: Array<Affliction>
};

export type Message = {
    key: number,
    title: string,
    text: string
}
export type Maneuver = {
    title: string,
    contents: string,
    afflictions: Array<Affliction>
}

export type Affliction = {
    turns: number,
    damageMod: number,
    moraleMod: number,
    defenseMod: number,
    sizeMod: number,
    nameMod: string
};