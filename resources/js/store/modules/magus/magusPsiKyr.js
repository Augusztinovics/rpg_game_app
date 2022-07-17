/**-------------------------------------------
 * 
 * STORE FOR MAGUS PSI KYR
 * 
 * -------------------------------------------
 */
 const state = {
    kyrPsi: [
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
    kyrPsi: () => {
        return state.kyrPsi;
    },
    availableKyrPsi: (state) => (psi) => {
        return state.kyrPsi.filter(s => s.psiPoint <= psi);
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