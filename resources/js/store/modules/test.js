const state = {
    test: 'test',
};
const getters = {
    test: () => {
        return state.test;
    }
};
const mutations = {};
const actions = {};

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions,
}