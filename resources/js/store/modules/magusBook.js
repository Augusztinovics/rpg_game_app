const state = {
    let_szabalyai: [
        '/magus-book/let-szabalyai/magus-038.png',
        '/magus-book/let-szabalyai/magus-039.png',
        '/magus-book/let-szabalyai/magus-040.png',
        '/magus-book/let-szabalyai/magus-041.png'
    ],
    harcrendszer: [
        '/magus-book/let-szabalyai/magus-041.png',
        '/magus-book/harcrendszer/magus-042.png',
        '/magus-book/harcrendszer/magus-043.png',
        '/magus-book/harcrendszer/magus-044.png',
        '/magus-book/harcrendszer/magus-045.png',
        '/magus-book/harcrendszer/magus-046.png',
    ],
};
const getters = {
    let_szabalyai: () => {
        return state.let_szabalyai;
    },
    harcrendszer: () => {
        return state.harcrendszer;
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
