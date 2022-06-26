import Vue from 'vue';
import Vuex from 'vuex';

import magusAligments from './modules/magus/magusAligments';
import magusRaces from './modules/magus/magusRaces';
import magusClasses from './modules/magus/magusClasses';
import currentCharacter from './modules/magus/currentCharacter';
import magusShields from './modules/magus/magusShields';
import magusArmors from './modules/magus/magusArmors';
import magusWeapons from './modules/magus/magusWeapons';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        magusAligments,
        magusRaces,
        magusClasses,
        currentCharacter,
        magusShields,
        magusArmors,
        magusWeapons,
    }
})