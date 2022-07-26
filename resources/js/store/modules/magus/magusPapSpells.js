/**-------------------------------------------
 * 
 * STORE FOR MAGUS PAP SPELLS
 * 
 * -------------------------------------------
 */
 const state = {
    kisArkanum: [
        {
            name: '',
            sfera: [],
            sferaText: '',
            mana: 0,
            manaText: '',
            strenght: '',
            castTime: '',
            effectTime: '',
            effectRange: '',
            resistans: '',
            description: [
                '',
            ],
        },
    ],
    kisArkanumEgyedi: [
        {
            name: '',
            istenId: '',
            sfera: [],
            sferaText: '',
            mana: 0,
            manaText: '',
            strenght: '',
            castTime: '',
            effectTime: '',
            effectRange: '',
            resistans: '',
            description: [
                '',
            ],
        },
    ],
    nagyArkanum: [
        {
            name: '',
            sfera: [],
            sferaText: '',
            mana: 0,
            manaText: '',
            strenght: '',
            castTime: '',
            effectTime: '',
            effectRange: '',
            resistans: '',
            description: [
                '',
            ],
        },
    ],
    nagyArkanumEgyedi: [
        {
            name: '',
            istenId: '',
            sfera: [],
            sferaText: '',
            mana: 0,
            manaText: '',
            strenght: '',
            castTime: '',
            effectTime: '',
            effectRange: '',
            resistans: '',
            description: [
                '',
            ],
        },
    ],
};
const getters = {
    kisArkanum: () => {
        return state.kisArkanum;
    },
    kisArkanumCurrentAll: (state) => (data) => {
        return state.kisArkanum.filter(s => s.sfera.some(s => data.sfera.includes(s)));
    },
    availableKisArkanum: (state) => (data) => {
        return state.kisArkanum.filter(s => s.mana <= data.mana && s.sfera.some(s => data.sfera.includes(s)));
    },
    nagyArkanum: () => {
        return state.nagyArkanum;
    },
    nagyArkanumCurrentAll: (state) => (data) => {
        return state.nagyArkanum.filter(s => s.sfera.some(s => data.sfera.includes(s)));
    },
    availableNagyArkanum: (state) => (data) => {
        return state.nagyArkanum.filter(s => s.mana <= data.mana && s.sfera.some(s => data.sfera.includes(s)));
    },
    egyediKisArkanum: (state) => (vallasId) => {
        return state.kisArkanumEgyedi.filter(s => s.istenId == vallasId);
    },
    egyediNagyArkanum: (state) => (vallasId) => {
        return state.nagyArkanumEgyedi.filter(s => s.istenId == vallasId);
    },
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