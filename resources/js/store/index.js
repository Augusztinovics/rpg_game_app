import Vue from 'vue';
import Vuex from 'vuex';

import magusAligments from './modules/magus/magusAligments';
import magusRaces from './modules/magus/magusRaces';
import magusClasses from './modules/magus/magusClasses';
import currentCharacter from './modules/magus/currentCharacter';
import magusShields from './modules/magus/magusShields';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        magusAligments,
        magusRaces,
        magusClasses,
        currentCharacter,
        magusShields,
    }
})