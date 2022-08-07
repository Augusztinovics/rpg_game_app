/**-------------------------------------------
 * 
 * STORE FOR MAGUS SHIELDS
 * 
 * -------------------------------------------
 */
const state = {
    shields: [
        {
            id: 'NON',
            name: 'Nem rendelkezik pajzsal',
            TamKor: '',
            Cat: '',
            Ve: 0,
            Mgt: 0,
            Sp: {
                name: '',
                damage: [0, 0]
            },
            weight: '',
            price: '',
            description: '',
        },
        {
            id: 'PAJZS_KICSI',
            name: 'Kis pajzs',
            TamKor: '1',
            Cat: 'S',
            Ve: 20,
            Mgt: 0,
            Sp: {
                name: 'k6',
                damage: [1, 6]
            },
            weight: '1kg',
            price: '6 ezüst',
            description: 'A pjzs ugyan elsősorban a védelmet szolgálja, egyes helyzetekben azonban kiélezik a peremét. A másik, gyakoribb támadási mód a pajzzsal, mikor mikor lapjával megütik, vagy megtaszitják az ellenfelet. Kis pajzsnak nevezzük a hozzávetőleg fél méter átmérőjű, álltalában kerek pajszokat',
        },
        {
            id: 'PAJZS_KOZEPES',
            name: 'Közepes pajzs',
            TamKor: '1',
            Cat: 'S',
            Ve: 35,
            Mgt: 1,
            Sp: {
                name: 'k6',
                damage: [1, 6]
            },
            weight: '3kg',
            price: '1 arany 6 ezüst',
            description: 'A pjzs ugyan elsősorban a védelmet szolgálja, egyes helyzetekben azonban kiélezik a peremét. A másik, gyakoribb támadási mód a pajzzsal, mikor mikor lapjával megütik, vagy megtaszitják az ellenfelet. A közepes pajzsok hosszúkásak és a felsőtestet védik, azaz kb egy méteresek.',
        },
        {
            id: 'PAJZS_NAGY',
            name: 'Nagy pajzs',
            TamKor: '1/2',
            Cat: 'S',
            Ve: 50,
            Mgt: 5,
            Sp: {
                name: 'k6',
                damage: [1, 6]
            },
            weight: '6kg',
            price: '6 arany',
            description: 'A pjzs ugyan elsősorban a védelmet szolgálja, egyes helyzetekben azonban kiélezik a peremét. A másik, gyakoribb támadási mód a pajzzsal, mikor mikor lapjával megütik, vagy megtaszitják az ellenfelet. A nagy pajzsok embermagasak és a nehézvértezetű lovagok felszereléséhez tartoznak. Gyakran használnak ilyet a számszerijászok is fedezékként.',
        }
    ],
};
const getters = {
    shields: () => {
        return state.shields;
    },
    shield: (state) => (id) => {
        return state.shields.find(s => s.id === id);
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