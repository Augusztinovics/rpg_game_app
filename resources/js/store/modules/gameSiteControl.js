const state = {
    openCharacterSheet: false,
    openGlobalNotes: false,
    openBestiarium: false,
    openSeeneSelect: false,
};
const getters = {
    openCharacterSheet: () => {
        return state.openCharacterSheet;
    },
    openGlobalNotes: () => {
        return state.openGlobalNotes;
    },
    openBestiarium: () => {
        return state.openBestiarium;
    },
    openSeeneSelect: () => {
        return state.openSeeneSelect;
    },
};
const mutations = {
    updateOpenCharacterSheet(state, showCharacterSheet) {
        state.openCharacterSheet = showCharacterSheet;
    },
    updateOpenGlobalNotes(state, showGlobalNotes) {
        state.openGlobalNotes = showGlobalNotes;
    },
    updateOpenBestiarium(state, showBestiarium) {
        state.openBestiarium = showBestiarium;
    },
    updateOpenSeeneSelect(state, showSeeneSelect) {
        state.openSeeneSelect = showSeeneSelect;
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