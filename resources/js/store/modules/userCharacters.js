const state = {
    magusCharacters: [],
};
const getters = {
    magusCharacters: (state) => {
        return state.magusCharacters;
    }
};
const mutations = {
    setMagusCharacters(state, characters) {
        state.magusCharacters = characters;
    },
};
const actions = {
    loadMagusCharacters(context) {
        axios.get('/character/game-characters/MAGUS')
        .then( (response) => {
            context.commit('setMagusCharacters', response.data);
        })
        .catch( (error) => {
            console.log(error);
        });
    },
};

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions,
}