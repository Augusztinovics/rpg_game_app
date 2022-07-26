/**-------------------------------------------
 * 
 * STORE FOR MAGUS RELIGIONS
 * 
 * -------------------------------------------
 */
 const state = {
    //vallasok
    //Szferak:
    // E - elet
    // H - halal
    // L - lelek
    // T - termeszet
    religions: [
       {
           id: 'DOMVIK',
           name: 'Domvik',
           sfera: ['E', 'L', 'T'],
           sferaText: 'Élet, Lélek, Természet',
           description: [
               'Domvik egyisten. Vallása a becsületességet, erényességet, az embertársi szeretetet oktatja. Legelterjedtebb a Shadoni Birodalomban.',
           ],
       },
       {
            id: 'RANAGOL',
            name: 'Ranagol',
            sfera: ['H', 'L', 'T'],
            sferaText: 'Halál, Lélek, Természet',
            description: [
                'Az erkölcstől mentes gondolkodást és a hűvös logikát részesiti előnybe. Az egyén kiemelkedhet és mások fölé kerülhet. Gorvick és Krán államvallása.',
            ],
        },
        {
            id: 'ALDRON',
            name: 'Aldron',
            sfera: ['E', 'L'],
            sferaText: 'Élet, Lélek',
            description: [
                'A Pyarroni Istencsalád egyik Istene. Hatalmának területe: Varázslás és Fény',
            ],
        },
        {
            id: 'ALBORNE',
            name: 'Alborne',
            sfera: ['E', 'L'],
            sferaText: 'Élet, Lélek',
            description: [
                'A Pyarroni Istencsalád egyik Istene. Hatalmának területe: Zene, Legendák, Ünnepek',
            ],
        },
        {
            id: 'ANTOH',
            name: 'Antoh',
            sfera: ['T', 'E'],
            sferaText: 'Természet, Élet',
            description: [
                'A Pyarroni Istencsalád egyik Istene. Hatalmának területe: Vizek, Tengerek, Viharok',
            ],
        },
        {
            id: 'AREL',
            name: 'Arel',
            sfera: ['T', 'E', 'L'],
            sferaText: 'Természet, Élet, Lélek',
            description: [
                'A Pyarroni Istencsalád egyik Istene. Hatalmának területe: Harc, Természet, Vakmerőség, Makacsság',
            ],
        },
        {
            id: 'DARTON',
            name: 'Darton',
            sfera: ['H', 'L'],
            sferaText: 'Halál, Lélek',
            description: [
                'A Pyarroni Istencsalád egyik Istene. Hatalmának területe: Halál, Halottak, Humor, Túlvilág',
            ],
        },
        {
            id: 'DELLA',
            name: 'Della',
            sfera: ['L'],
            sferaText: 'Lélek',
            description: [
                'A Pyarroni Istencsalád egyik Istene. Hatalmának területe: Művészetek',
            ],
        },
        {
            id: 'DREINA',
            name: 'Dreina',
            sfera: ['E', 'H'],
            sferaText: 'Élet, Halál',
            description: [
                'A Pyarroni Istencsalád egyik Istene. Hatalmának területe: Hatalom, Rend, Gazdaság, Hűség',
            ],
        },
        {
            id: 'ELLANA',
            name: 'Ellana',
            sfera: ['E', 'L'],
            sferaText: 'Élet, Lélek',
            description: [
                'A Pyarroni Istencsalád egyik Istene. Hatalmának területe: Szerelem, Szépség, Kéj, Léhaság, Hűtlenség',
            ],
        },
        {
            id: 'GILRON',
            name: 'Gilron',
            sfera: ['E', 'T'],
            sferaText: 'Élet, Természet',
            description: [
                'A Pyarroni Istencsalád egyik Istene. Hatalmának területe: Kovácsok, Mesterségek',
            ],
        },
        {
            id: 'KRAD',
            name: 'Krad',
            sfera: ['É', 'L'],
            sferaText: 'Élet, Lélek',
            description: [
                'A Pyarroni Istencsalád egyik Istene. Hatalmának területe: Tudományok, Felfedezők, Utazók',
            ],
        },
        {
            id: 'KYEL',
            name: 'Kyel',
            sfera: ['E', 'H', 'L'],
            sferaText: 'Élet, Halál, Lélek',
            description: [
                'A Pyarroni Istencsalád egyik Istene. Hatalmának területe: Teremtés, Pusztitás, Sors',
            ],
        },
        {
            id: 'NOIR',
            name: 'Noir',
            sfera: ['L', 'H'],
            sferaText: 'Lélek, Halál',
            description: [
                'A Pyarroni Istencsalád egyik Istene. Hatalmának területe: Álmok, Csalás, Játékok, Fogadások',
            ],
        },
        {
            id: 'ORWELLA',
            name: 'Orwella',
            sfera: ['H'],
            sferaText: 'Halál',
            description: [
                'A Pyarroni Istencsalád egyik Istene. Hatalmának területe: Betegségek, Rontás, Átkok',
            ],
        },
        {
            id: 'UWEL',
            name: 'Uwel',
            sfera: ['E', 'H', 'L'],
            sferaText: 'Élet, Halál, Lélek',
            description: [
                'A Pyarroni Istencsalád egyik Istene. Hatalmának területe: Bosszú, Igazság, Fájdalom',
            ],
        },
        {
            id: 'SOGRON',
            name: 'Sogron, a Tűzkobra',
            sfera: ['E', 'T', 'L'],
            sferaText: 'Élet, Természet, Lélek',
            description: [
                'A Tudás és a tudást szomjazók istene, az örök újitó.A tűz Őrzője.',
            ],
        },
        {
            id: 'THARR',
            name: 'Tharr, a Háromfejű',
            sfera: ['L', 'H'],
            sferaText: 'Lélek, Halál',
            description: [
                'A Káosz, a Sötétség és a Pusztitás Istene.',
            ],
        },
        {
            id: 'ATE',
            name: 'Nem követ egyetlen Istent sem',
            sfera: [],
            sferaText: '',
            description: [
                'Nem követ, vagy szolgál egyetlen meghatározott Istent sem.',
            ],
        },
    ]
};
const getters = {
    religions: (state) => {
        return state.religions;
    },
    religion: (state) => (id) => {
        return state.religions.find(r => r.id === id);
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