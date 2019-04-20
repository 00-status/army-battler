// @flow

export type Army = {
    name: string,
    desc: string,
    attack: number,
    discipline: number,
    morale: number,
    size: number
};

export type MessageType = {
    key: number,
    title: string,
    text: string
}
export type ManeuverType = {
    title: string,
    contents: string,
    damageMod: number,
    moraleMod: number,
    defenseMod: number,
    sizeMod: number,
    nameMod: string
}