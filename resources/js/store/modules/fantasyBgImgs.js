const state = {
    imgs: [
        'default.jpg',
        'track1.jpg',
        'track2.jpg',
        'track3.jpg',
        'track4.jpg',
        'building1.jpg',
        'building2.jpg',
        'building3.jpg',
        'building4.jpg',
        'building5.jpg',
        'gate1.jpg',
        'gate2.jpg',
        'land1.jpg',
        'land2.jpg',
        'land3.jpg',
        'land4.jpg',
        'ruin1.jpg',
        'ruin2.jpg',
        'ruin3.jpg',
        'ruin4.jpg',
        'town1.jpg',
        'town2.jpg',
        'town3.jpg',
        'town4.jpg',
        'town5.jpg',
        'town6.jpg',
        'town7.jpg',
    ],
};
const getters = {
    imgs: () => {
        return state.imgs;
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