/**-------------------------------------------
 * 
 * STORE FOR MAGUS PSI SLAN
 * 
 * -------------------------------------------
 */
 const state = {
    slanPsi: [
        {
            name: '',
            psiPoint: 1,
            psiPointText: '',
            ME: '',
            medTime: '',
            activeTime: '',
            description: '',
        },
        {
            name: '',
            psiPoint: 1,
            psiPointText: '',
            ME: '',
            medTime: '',
            activeTime: '',
            description: '',
        },
        {
            name: '',
            psiPoint: 1,
            psiPointText: '',
            ME: '',
            medTime: '',
            activeTime: '',
            description: '',
        },
        {
            name: '',
            psiPoint: 1,
            psiPointText: '',
            ME: '',
            medTime: '',
            activeTime: '',
            description: '',
        },
        {
            name: '',
            psiPoint: 1,
            psiPointText: '',
            ME: '',
            medTime: '',
            activeTime: '',
            description: '',
        },
        {
            name: '',
            psiPoint: 1,
            psiPointText: '',
            ME: '',
            medTime: '',
            activeTime: '',
            description: '',
        },
        {
            name: '',
            psiPoint: 1,
            psiPointText: '',
            ME: '',
            medTime: '',
            activeTime: '',
            description: '',
        },
        {
            name: '',
            psiPoint: 1,
            psiPointText: '',
            ME: '',
            medTime: '',
            activeTime: '',
            description: '',
        },
        {
            name: '',
            psiPoint: 1,
            psiPointText: '',
            ME: '',
            medTime: '',
            activeTime: '',
            description: '',
        },
        {
            name: '',
            psiPoint: 1,
            psiPointText: '',
            ME: '',
            medTime: '',
            activeTime: '',
            description: '',
        },
        {
            name: '',
            psiPoint: 1,
            psiPointText: '',
            ME: '',
            medTime: '',
            activeTime: '',
            description: '',
        },
    ],
};
const getters = {
    slanPsi: () => {
        return state.slanPsi;
    },
    availableSlanPsi: (state) => (psi) => {
        return state.slanPsi.filter(s => s.psiPoint <= psi);
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