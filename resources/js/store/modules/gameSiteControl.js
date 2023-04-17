const state = {
    openCharacterSheet: false,
};
const getters = {
    openCharacterSheet: () => {
        return state.openCharacterSheet;
    }
};
const mutations = {
    updateOpenCharacterSheet(state, showCharacterSheet) {
        state.openCharacterSheet = showCharacterSheet;
    }
};
const actions = {};

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions,
}