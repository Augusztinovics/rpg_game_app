/**-------------------------------------------
 * 
 * STORE FOR CURRENT MAGUS CHARACTER
 * 
 * -------------------------------------------
 */
 const state = {
    loading: false,
    id: 1,
    magusCharacter: {
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
        SpMod: 0,
        MgtMod: 0,
        Nev: 'A karakter neve',
        Kaszt: 'HARCOS',
        Faj: 'ELF',
        Jellem: 'R',
        Vallas: '',
        Szimbolum: 'Hold',
        Szulofold: 'Gorvick',
        Iskola: 'Zsoldos',
        Szint: 1,
        Tp: 0,
        FpSzint: 10,
        AktEp: 6,
        AktFp: 12,
        KeSzint: 1,
        TeSzint: 2,
        VeSzint: 2,
        CeSzint: 0,
        KeMod: 0,
        TeMod: 0,
        VeMod: 20,
        CeMod: 0,
        HmLeft: 5,
        KpLeft: 100,
        KpPrecentLeft: 3,
        FreeFegyverhasznalatAlap: 0,
        FegyverhasznalatAlap: ['KARD_HOSSZU'],
        FreeFegyverhasznalatMester: 0,
        FegyverhasznalatMester: [],
        FreeFegyverdobasAlap: 0,
        FegyverdobasAlap: [],
        FreeFegyverdobasMester: 0,
        FegyverdobasMester: [],
        FreeNyelvismeretAf: 0,
        NyelvismeretAf: [],
        FreeNyelvismeretMf: 0,
        NyelvismeretMf: [],
        FreeSzakmaAf: 0,
        SzakmaAf: ['suszter'],
        FreeSzakmaMf: 0,
        SzakmaMf: [],
        Pszi: {
            learned: false,
            atlevel: 0,
            level: '',
            maxPszi: 0,
            psziPointLevel: 0,
            currentPszi: 0,
            school: '',
            staticAsztral: 0,
            staticMental: 0,
            dinamicAsztarl: 0,
            dinamicMental: 0,
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
        LearnedSkills:{
            af: ['FUTAS', 'HANGUTANZAS'],
            mf: ['TANC']
        },
        Pancel: {
            id: 'BOR_SZEGECSELT',
            equipped: false,
            currentSfe: 1,
        },
        Pajzs: {
            id: 'PAJZS_KICSI',
            equipped: true,
        },
        FegyverekKozelharci: [
            'KARD_HOSSZU',   
        ],
        FegyverekTavolsagi: [
            'IJ_ROVID',  
        ],
        LeftHand:'PAJZS_KICSI',
        RightHand: '',
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
        description: '',
        notes: [],
        Magia: {
            maxMp: 0,
            aktMp: 0,
        },
    }
};
const getters = {
    loadingState: (state) => {
        return state.loading;
    },
    magusCharacter: (state) => {
        return state.magusCharacter;
    },
    haveLearnedSkill: (state) => (skillId) => {
        let have = false;
        let level = 'nincs megtanulva';
        if (state.magusCharacter.LearnedSkills.af.includes(skillId)) {
            have = true;
            level = 'Af';
        }
        if (state.magusCharacter.LearnedSkills.mf.includes(skillId)) {
            have = true;
            level = 'Mf';
        }
        return {
            have: have,
            level: level
        }
    },
    weaponSkillLevel: (state) => (weaponId) => {
        let level = 'Na';
        if (state.magusCharacter.FegyverhasznalatAlap.includes(weaponId)) {
            level = 'Af';
        }
        if (state.magusCharacter.FegyverhasznalatMester.includes(weaponId)) {
            level = 'Mf';
        }
        return level;
    },
    throwWeaponSkillLevel: (state) => (weaponId) => {
        let level = 'Na';
        if (state.magusCharacter.FegyverdobasAlap.includes(weaponId)) {
            level = 'Af';
        }
        if (state.magusCharacter.FegyverdobasMester.includes(weaponId)) {
            level = 'Mf';
        }
        return level;
    },
};
const mutations = {
    addCharacter(state, character) {
        state.id = character.id;
        state.magusCharacter = character.characterData;
    },
    updateTp(state, tp) {
        state.magusCharacter.Tp += tp;
    },
    levelUp(state, levelData) {
        state.magusCharacter.Szint = levelData.level;
        state.magusCharacter.FpSzint += levelData.fp;
        state.magusCharacter.HmLeft += levelData.hm;
        state.magusCharacter.KpLeft += levelData.kp;
        state.magusCharacter.KpPrecentLeft += levelData.kpPrec;
        state.magusCharacter.FreeFegyverhasznalatAlap += levelData.fegyverAf;
        state.magusCharacter.FreeFegyverhasznalatMester += levelData.fegyverMf;
        state.magusCharacter.FreeFegyverdobasAlap += levelData.fegyverDAf;
        state.magusCharacter.FreeFegyverdobasMester += levelData.fegyverDMf;
        state.magusCharacter.FreeNyelvismeretAf += levelData.nyelvAf;
        state.magusCharacter.FreeNyelvismeretMf += levelData.nyelvMf;
        state.magusCharacter.FreeSzakmaAf += levelData.szakmaAf;
        state.magusCharacter.FreeSzakmaMf += levelData.szakmaMf;
        state.magusCharacter.Pszi.maxPszi += state.magusCharacter.Pszi.psziPointLevel;
        state.magusCharacter.Magia.maxMp += levelData.mana;
    },
    decressFreeFegyverhasznalatAlap(state) {
        state.magusCharacter.FreeFegyverhasznalatAlap--;
    },
    updateFreeFegyverhasznalatAlap(state, num) {
        state.magusCharacter.FreeFegyverhasznalatAlap += num;
    },
    decressFreeFegyverhasznalatMester(state) {
        state.magusCharacter.FreeFegyverhasznalatMester--;
    },
    updateFreeFegyverhasznalatMester(state, num) {
        state.magusCharacter.FreeFegyverhasznalatMester += num;
    },
    decressFreeFegyverdobasAlap(state) {
        state.magusCharacter.FreeFegyverdobasAlap--;
    },
    updateFreeFegyverdobasAlap(state, num) {
        state.magusCharacter.FreeFegyverdobasAlap += num;
    },
    decressFreeFegyverdobasMester(state) {
        state.magusCharacter.FreeFegyverdobasMester--;
    },
    updateFreeFegyverdobasMester(state, num) {
        state.magusCharacter.FreeFegyverdobasMester += num;
    },
    decressFreeNyelvismeretAf(state) {
        state.magusCharacter.FreeNyelvismeretAf--;
    },
    updateFreeNyelvismeretAf(state, num) {
        state.magusCharacter.FreeNyelvismeretAf += num;
    },
    decressFreeNyelvismeretMf(state) {
        state.magusCharacter.FreeNyelvismeretMf--;
    },
    updateFreeNyelvismeretMf(state, num) {
        state.magusCharacter.FreeNyelvismeretMf += num;
    },
    decressFreeSzakmaAf(state) {
        state.magusCharacter.FreeSzakmaAf--;
    },
    updateFreeSzakmaAf(state, num) {
        state.magusCharacter.FreeSzakmaAf += num;
    },
    decressFreeSzakmaMf(state) {
        state.magusCharacter.FreeSzakmaMf--;
    },
    updateFreeSzakmaMf(state, num) {
        state.magusCharacter.FreeSzakmaMf += num;
    },
    updateNotes(state, note) {
        state.magusCharacter.notes = note;
    },
    updateDescription(state, des) {
        state.magusCharacter.description = des;
    },
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
    updateSp(state, sp) {
        state.magusCharacter.SpMod = sp;
    },
    updateMgtMod(state, mgt) {
        state.magusCharacter.MgtMod += mgt;
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
    },
    updateShieldType(state, shieldId) {
        state.magusCharacter.Pajzs.id = shieldId;
    },
    updateShieldEquip(state, equipped) {
        state.magusCharacter.Pajzs.equipped = equipped;
    },
    updateKeMod(state, ke) {
        state.magusCharacter.KeMod += ke;
    },
    updateTeMod(state, te) {
        state.magusCharacter.TeMod += te;
    },
    updateVeMod(state, ve) {
        state.magusCharacter.VeMod += ve;
    },
    updateCeMod(state, ce) {
        state.magusCharacter.CeMod += ce;
    },
    updateArmorType(state, armorId) {
        state.magusCharacter.Pancel.id = armorId;
    },
    updateArmorEquip(state, equipped) {
        state.magusCharacter.Pancel.equipped = equipped;
    },
    updateCurrentSfe(state, sfe) {
        state.magusCharacter.Pancel.currentSfe = sfe;
    },
    updateSfeDamage(state) {
        if (state.magusCharacter.Pancel.currentSfe > 0) {
            state.magusCharacter.Pancel.currentSfe --;
        }
    },
    updateLeftHand(state, equipment) {
        state.magusCharacter.LeftHand = equipment;
    },
    updateRightHand(state, equipment) {
        state.magusCharacter.RightHand = equipment;
    },
    updateWeapons(state, weapons) {
        state.magusCharacter.FegyverekKozelharci = weapons;
    },
    updateRangedWeapons(state, ranged) {
        state.magusCharacter.FegyverekTavolsagi = ranged;
    },
    updateKpLeftDown(state, kp) {
        state.magusCharacter.KpLeft -= kp;
    },
    updateKpPrecLeftDown(state, kpprec) {
        state.magusCharacter.KpPrecentLeft -= kpprec;
    },
    updatePrecentSkills(state, precSkills) {
        state.magusCharacter.szazalekosKepzetsegek = precSkills;
    }, 
    updateWeaposAf(state, weaponsAf) {
        state.magusCharacter.FegyverhasznalatAlap = weaponsAf;
    },
    updateWeaposMf(state, weaponsMf) {
        state.magusCharacter.FegyverhasznalatMester = weaponsMf;
    },
    updateThrowWeaposAf(state, weaponsThrowAf) {
        state.magusCharacter.FegyverdobasAlap = weaponsThrowAf;
    },
    updateThrowWeaposMf(state, weaponsThrowMf) {
        state.magusCharacter.FegyverdobasMester = weaponsThrowMf;
    },
    updateLanguageAf(state, languageAf) {
        state.magusCharacter.NyelvismeretAf = languageAf;
    },
    updateLanguageMf(state, languageMf) {
        state.magusCharacter.NyelvismeretMf = languageMf;
    },
    updateCraftAf(state, craftAf) {
        state.magusCharacter.SzakmaAf = craftAf;
    },
    updateCraftMf(state, craftMf) {
        state.magusCharacter.SzakmaMf = craftMf;
    },
    updateSkillsAf(state, skillsAf) {
        state.magusCharacter.LearnedSkills.af = skillsAf;
    },
    updateSkillsMf(state, skillsMf) {
        state.magusCharacter.LearnedSkills.mf = skillsMf;
    },
    updatePszi(state, pszi) {
        state.magusCharacter.Pszi = pszi;
    },
    updateCurrentPsiPoint(state, psiPoint) {
        state.magusCharacter.Pszi.currentPszi = psiPoint;
    },
    updateStaticAsztral(state, saszt) {
        state.magusCharacter.Pszi.staticAsztral = saszt;
    },
    updateStaticMental(state, sment) {
        state.magusCharacter.Pszi.staticMental = sment;
    },
    updateDinamicAsztral(state, daszt) {
        state.magusCharacter.Pszi.dinamicAsztarl = daszt;
    },
    updateDinamicMental(state, dment) {
        state.magusCharacter.Pszi.dinamicMental = dment;
    },
    updateHmLeft(state) {
        state.magusCharacter.HmLeft --;
    },
    updateKeSzint(state) {
        state.magusCharacter.KeSzint ++;
    },
    updateTeSzint(state) {
        state.magusCharacter.TeSzint ++;
    },
    updateVeSzint(state) {
        state.magusCharacter.VeSzint ++;
    },
    updateCeSzint(state) {
        state.magusCharacter.CeSzint ++;
    },
    updateName(state, nev) {
        state.magusCharacter.Nev = nev;
    },
    updateJellem(state, jellemId) {
        state.magusCharacter.Jellem = jellemId;
    },
    updateVallas(state, vallas) {
        state.magusCharacter.Vallas = vallas;
    },
    updateSzulofold(state, szulofold) {
        state.magusCharacter.Szulofold = szulofold;
    },
    updateIskola(state, iskola) {
        state.magusCharacter.Iskola = iskola;
    },
    updateSzimbolum(state, szimbolum) {
        state.magusCharacter.Szimbolum = szimbolum;
    },
    updateMaxMp(state, maxMp) {
        state.magusCharacter.Magia.maxMp += maxMp;
    },
    updateAktMp(state, aktMp) {
        state.magusCharacter.Magia.aktMp = aktMp;
    },
    updateLoad(state, load) {
        state.loading = load;
    }
};
const actions = {
    save(context) {
        context.commit('updateLoad', true);
        axios.post('/character/update/' + context.state.id, {
            characterData: context.state.magusCharacter,
        })
        .then( (response) => {
            context.commit('updateLoad', false);
        })
        .catch( (error) => {
            context.commit('updateLoad', false);
        });
    }
};

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions,
}