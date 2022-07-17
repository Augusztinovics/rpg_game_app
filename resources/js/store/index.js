import Vue from 'vue';
import Vuex from 'vuex';

import magusAligments from './modules/magus/magusAligments';
import magusRaces from './modules/magus/magusRaces';
import magusClasses from './modules/magus/magusClasses';
import currentCharacter from './modules/magus/currentCharacter';
import magusShields from './modules/magus/magusShields';
import magusArmors from './modules/magus/magusArmors';
import magusWeapons from './modules/magus/magusWeapons';
import magusSkills from './modules/magus/magusSkills';
import magusPsiPyarroni from './modules/magus/magusPsiPyarroni';
import magusPsiSlan from './modules/magus/magusPsiSlan';
import magusPsiKyr from './modules/magus/magusPsiKyr';

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
        magusSkills,
        magusPsiPyarroni,
        magusPsiSlan,
        magusPsiKyr,
    }
})