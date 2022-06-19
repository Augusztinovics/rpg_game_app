/**-------------------------------------------
 * 
 * STORE FOR MAGUS ALIGMENTS
 * 
 * -------------------------------------------
 */
 const state = {
    magusCharacter: {
        id: 1,
        ERO: 17,
        GYORS: 3,
        UGY: 3,
        ALLO: 3,
        EG: 3,
        SZEP: 3,
        INT: 3,
        AK: 3,
        ASZT: 3,
        eroMod: 0,
        gyorsMod: 0,
        ugyMod: 0,
        alloMod: 0,
        egMod: 0,
        szepMod: 0,
        intMod: 0,
        akMod: 0,
        asztMod: 0,
        Nev: 'A karakter neve',
        Kaszt: 'HARCOS',
        Faj: 'ELF',
        Jellem: 'R',
        Vallas: '',
        Szimbolum: 'Hold',
        Szulofold: 'Gorvick',
        Iskola: 'Zsoldos',
        Szint: 1,
        FpSzint: 10,
        AktEp: 6,
        AktFp: 12,
        KeSzint: 1,
        TeSzint: 2,
        VeSzint: 2,
        CeSzint: 0,
        HmLeft: 0,
        KpLeft: 0,
        KpPrecentLeft: 0,
        FegyverhasznalatAlap: [],
        FegyverhasznalatMester: [],
        FegyverdobasAlap: [],
        FegyverdobasMester: [],
        Nyelvismeret: [],
        Szakma: [],
        Pszi: {
            learned: false,
            atlevel: 0,
            level: 'Af',
            maxPszi: 0,
            psziPointLevel: 0,
            currentPszi: 0,
        },
        szazalekosKepzetsegek: {
            maszas: {
                precent: 0,
                precentAdded: 0,
                kpAdded: 0,
            },
             eses: {
                precent: 0,
                precentAdded: 0,
                kpAdded: 0,
            },
             ugras: {
                precent: 0,
                precentAdded: 0,
                kpAdded: 0,
            },
             lopakodas: {
                precent: 0,
                precentAdded: 0,
                kpAdded: 0,
            },
             rejtozes: {
                precent: 0,
                precentAdded: 0,
                kpAdded: 0,
            },
             koteltanc: {
                precent: 0,
                precentAdded: 0,
                kpAdded: 0,
            },
             zsebmetszes: {
                precent: 0,
                precentAdded: 0,
                kpAdded: 0,
            },
             csabdafelfedezes: {
                precent: 0,
                precentAdded: 0,
                kpAdded: 0,
            },
             zarnyitas: {
                precent: 0,
                precentAdded: 0,
                kpAdded: 0,
            },
             titkosajto: {
                precent: 0,
                precentAdded: 0,
                kpAdded: 0,
            },
        },
        LearnedSkills:[],
        Pancel: {
            name: '',
            equipped: false,
            mgt: 0,
            sfe: 0,
            currentSfe: 0,
        },
        Pajzs: {
            name: '',
            eqiupped: false,
            ve: 0,
            mgt: 0,
        },
        Fegyverek: [
            {
                name: 'HOSSZUKARD',
                rightHand: false,
                leftHand: false,
            }
        ],
        Kincsek: {
            rez: 10,
            ezust: 2,
            arany: 0,
            mithrill: 0,
            dragako: 0,
            egyebb: ['ezust serleg', 'disztanyer'],
        },
        Felszereles: { 
            felszereles: [
                {
                    name:'Hálózsák',
                    quantity: 1,
                    where: 'Táska alatt',
                }
            ]
        },
    }
};
const getters = {
    magusCharacter: (state) => {
        return state.magusCharacter;
    },
};
const mutations = {
    updateEletero(state, payload) {
        state.magusCharacter.AktFp = payload.AktFp;
        state.magusCharacter.AktEp = payload.AktEp;
    },
    updateEroMod(state, mod) {
        if (mod === '+') {
            state.magusCharacter.eroMod++;
        };
         if (mod === '-') {
            state.magusCharacter.eroMod--;
        };
         if (mod === '0') {
            state.magusCharacter.eroMod = 0;
        }
    },
    updateGyorsMod(state, mod) {
        if (mod === '+') {
            state.magusCharacter.gyorsMod++;
        };
         if (mod === '-') {
            state.magusCharacter.gyorsMod--;
        };
         if (mod === '0') {
            state.magusCharacter.gyorsMod = 0;
        }
    },
    updateUgyMod(state, mod) {
        if (mod === '+') {
            state.magusCharacter.ugyMod++;
        };
         if (mod === '-') {
            state.magusCharacter.ugyMod--;
        };
         if (mod === '0') {
            state.magusCharacter.ugyMod = 0;
        }
    },
    updateAlloMod(state, mod) {
        if (mod === '+') {
            state.magusCharacter.alloMod++;
        };
         if (mod === '-') {
            state.magusCharacter.alloMod--;
        };
         if (mod === '0') {
            state.magusCharacter.alloMod = 0;
        }
    },
    updateEgMod(state, mod) {
        if (mod === '+') {
            state.magusCharacter.egMod++;
        };
         if (mod === '-') {
            state.magusCharacter.egMod--;
        };
         if (mod === '0') {
            state.magusCharacter.egMod = 0;
        }
    },
    updateSzepMod(state, mod) {
        if (mod === '+') {
            state.magusCharacter.szepMod++;
        };
         if (mod === '-') {
            state.magusCharacter.szepMod--;
        };
         if (mod === '0') {
            state.magusCharacter.szepMod = 0;
        }
    },
    updateIntMod(state, mod) {
        if (mod === '+') {
            state.magusCharacter.intMod++;
        };
         if (mod === '-') {
            state.magusCharacter.intMod--;
        };
         if (mod === '0') {
            state.magusCharacter.intMod = 0;
        }
    },
    updateAkMod(state, mod) {
        if (mod === '+') {
            state.magusCharacter.akMod++;
        };
         if (mod === '-') {
            state.magusCharacter.akMod--;
        };
         if (mod === '0') {
            state.magusCharacter.akMod = 0;
        }
    },
    updateAsztMod(state, mod) {
        if (mod === '+') {
            state.magusCharacter.asztMod++;
        };
         if (mod === '-') {
            state.magusCharacter.asztMod--;
        };
         if (mod === '0') {
            state.magusCharacter.asztMod = 0;
        }
    },
    updateKincsek(state, payload) {
        state.magusCharacter.Kincsek.rez = payload.rez;
        state.magusCharacter.Kincsek.ezust = payload.ezust;
        state.magusCharacter.Kincsek.arany = payload.arany;
        state.magusCharacter.Kincsek.mithrill = payload.mithrill;
        state.magusCharacter.Kincsek.dragako = payload.dragako;
        state.magusCharacter.Kincsek.egyebb = payload.egyebb;
    },
    updateFelszereles(state, felszereles) {
        state.magusCharacter.Felszereles = felszereles;
    }
};
const actions = {
    save(context) {
        console.log('SAVING');
        console.log(context.state.magusCharacter);
    }
};

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions,
}