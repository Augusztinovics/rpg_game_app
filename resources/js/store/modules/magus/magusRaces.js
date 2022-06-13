/**-------------------------------------------
 * 
 * STORE FOR MAGUS RACES
 * 
 * -------------------------------------------
 */
 const state = {
    //fajok
    races: [
        {
            id: 'HUMAN',
            name: 'Ember',
            ERO: 0,
            GYORS: 0,
            UGY: 0,
            ALLO: 0,
            EG: 0,
            SZEP: 0,
            INT: 0,
            AK: 0,
            ASZT: 0,
            forbittenClasses: [],
            CE: 0,
            specials: [],
            skills: [],
            description: 'Az emberek Ynev legelterjetebb népe. Nem rendelkeznek semilyen különleges képességgel, a kasztok és leirások átlaga rájuk vonatkozik. Étlag életkoruk ugy 60-70 év.'
        },
        {
            id: 'ELF',
            name: 'Elf',
            ERO: -2,
            GYORS: 1,
            UGY: 1,
            ALLO: -1,
            EG: 0,
            SZEP: 1,
            INT: 0,
            AK: 0,
            ASZT: 0,
            forbittenClasses: ['LOVAG', 'TOLVAJ', 'PAP', 'PAPLOVAG', 'HARCMUVESZ', 'KARDMUVESZ', 'BOSZORKANY', 'BOSZORKANYMESTER', 'TUZVARAZSLO'],
            CE: 20,
            specials: ['Kétszer jobb hallás', 'Két és félszer jobb látás', 'Infralátás 50 méterig', 'Nekromancia érzékenység -8'],
            skills: [
                {
                    name: 'Lovaglás',
                    level: 'MF',
                    kp: 0,
                },
                {
                    name: 'Erdőjárás',
                    level: 'MF',
                    kp: 0,
                },
                {
                    name: 'Idomitás',
                    level: 'MF',
                    kp: 0,
                }
            ],
            description: ''
        },
        {
            id: 'HALF_ELF',
            name: 'Félelf',
            ERO: -1,
            GYORS: 1,
            UGY: 0,
            ALLO: 0,
            EG: 0,
            SZEP: 0,
            INT: 0,
            AK: 0,
            ASZT: 0,
            forbittenClasses: ['PAP', 'PAPLOVAG', 'TUZVARAZSLO'],
            CE: 10,
            specials: ['Másfélszer jobb hallás', 'Kiváló futó', 'Infralátás 10 méterig', 'Nekromancia érzékenység -6'],
            skills: [
                {
                    name: 'Lovaglás',
                    level: 'MF',
                    kp: 0,
                },
                {
                    name: 'Idomitás',
                    level: 'MF',
                    kp: 0,
                }
            ],
            description: ''
        },
        {
            id: 'TORPE',
            name: 'Törpe',
            ERO: 1,
            GYORS: 0,
            UGY: 0,
            ALLO: 1,
            EG: 1,
            SZEP: -2,
            INT: -1,
            AK: 0,
            ASZT: -1,
            forbittenClasses: ['FEJVADASZ', 'LOVAG', 'BARD', 'PAPLOVAG', 'HARCMUVESZ', 'KARDMUVESZ', 'BOSZORKANY', 'BOSZORKANYMESTER', 'TUZVARAZSLO'],
            CE: 0,
            specials: ['Infralátás 30 méter', 'Kiválló időérzék', 'Föld alatt mélységérzett - 2 méter pontosság', '+-5 év pontossággal meghatározza egy épület korát'],
            skills: [
                {
                    name: 'Csabdafelfedezés',
                    level: '35%',
                    kp: 0,
                },
                {
                    name: 'Titkosajtó keresés',
                    level: '30%',
                    kp: 0,
                }
            ],
            description: ''
        },
        {
            id: 'HALF_ORK',
            name: 'Udvari Ork',
            ERO: 2,
            GYORS: 0,
            UGY: 0,
            ALLO: 1,
            EG: 2,
            SZEP: -3,
            INT: -1,
            AK: 0,
            ASZT: -3,
            forbittenClasses: ['LOVAG', 'BARD', 'PAPLOVAG', 'HARCMUVESZ', 'KARDMUVESZ', 'BOSZORKANY', 'TUZVARAZSLO', 'VARAZSLO'],
            CE: 0,
            specials: ['Infralátás 15 méterig', 'Föld alatti mélységérzett - 4 méter pontosság', 'Ötször jobb szaglás'],
            skills: [
                {
                    name: 'Csabdafelfedezés',
                    level: '20%',
                    kp: 0,
                },
                {
                    name: 'Titkosajtó keresés',
                    level: '10%',
                    kp: 0,
                }
            ],
            description: ''
        }
    ]
};
const getters = {
    races: (state) => {
        return state.races;
    },
    race: (state) => (id) => {
        return state.races.find(r => r.id === id) ?? state.races[0];
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