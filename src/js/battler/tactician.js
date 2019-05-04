// @flow
import type {Army, Maneuver, Affliction} from './types';

const processAfflictions = (currentArmy: Army, opposingArmy: Army): ?Array<Affliction> =>
{
    // Loop through the current army's afflictions
    return currentArmy.currentAfflictions.map((affliction: Affliction) => {
        return {
            turns: affliction.turns,
            damageMod: opposingArmy.attack * affliction.damageMod,
            moraleMod: affliction.moraleMod,
            defenseMod: affliction.defenseMod,
            sizeMod: affliction.sizeMod,
            nameMod: affliction.nameMod
        };
    });
};

// perform immediate afflictions and add over-time Afflictions to the opposing Army.


export default processAfflictions;