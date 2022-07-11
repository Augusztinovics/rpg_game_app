<template>
    <div>
        <!-- Kp left show and control -->
        <div>
            <h4 class="text-center mt-2 pb-3 border-bottom border-secondary">Képzetségek</h4>
            <div class="row pb-3 border-bottom border-secondary">
                <div class="col border-end border-secondary">
                    <p>Képzetség pontok</p>
                    <p>{{ kpLeft }}</p>
                </div>
                <div class="col border-end border-secondary">
                    <p>Képzetség százalék</p>
                    <p>{{ kpPrecentLeft }}%</p>
                </div>
                <div class="col">
                    <p>KP/szint</p>
                    <p>{{ KpSzint }}</p>
                </div>
                <div class="col">
                    <button v-if="kpLeft > 0" class="btn btn-success my-3" type="button" data-bs-toggle="modal" data-bs-target="#newSkillModal">Új képzettség tanulása</button>
                </div>
            </div>
        </div>

        <!-- kepzetseg tablazatok -->
        <div  class="row mt-3">
            <!-- tanult kepzetsegek -->
            <div class="col pb-3 border-bottom border-end border-secondary">
                <h4 class="text-center mt-2 pb-3 border-bottom border-secondary">Képzetség Tábla</h4>
                <table class="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col-8">Képzettség</th>
                            <th scope="col">KP</th>
                            <th scope="col">Szint</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="charSkill, index in characterSkills" :key="'S' + index">
                            <td>{{ charSkill.skillName }}<button type="button" @click="skillInfo(charSkill.id)" class="btn btn-outline-success btn-sm ms-2" data-bs-toggle="modal" data-bs-target="#skillModal">i</button></td>
                            <td>{{ charSkill.kp }}</td>
                            <td>{{ charSkill.level }}</td>
                        </tr>
                    </tbody>
                </table> 
            </div>
            <!-- szazalekos kepzetsegek -->
            <div class="col pb-3 border-bottom border-end border-secondary">
                <h4 class="text-center mt-2 pb-3 border-bottom border-secondary">Százalékos Képzetség Tábla</h4>
                <table class="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col-6">Képzettség</th>
                            <th scope="col">Ráfektetett KP</th>
                            <th scope="col">Ráfektetett %</th>
                            <th scope="col">Összesen %</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="precSkill, key in charactersPrecentSkills" :key="key">
                            <td>{{ skillPrecent(key).name }}<button type="button" @click="skillPrecInfo(key)" class="btn btn-outline-success btn-sm ms-2" data-bs-toggle="modal" data-bs-target="#skillpModal">i</button></td>
                            <td>{{ precSkill.kpAdded }}<button v-if="kpLeft > 0" type="button" @click="addKpToPrecentSkill(key)" class="btn btn-outline-success btn-sm ms-2">+</button></td>
                            <td>{{ precSkill.precentAdded }}<button v-if="kpPrecentLeft > 0" type="button" @click="addPrecentToPrecentSkill(key)" class="btn btn-outline-success btn-sm ms-2">+</button></td>
                            <td>{{ sumSkillPrecent(precSkill.precent) }}</td>
                        </tr>
                    </tbody>
                </table> 
            </div>
        </div>
        <!-- new skill modal -->
        <div class="modal fade" id="newSkillModal" tabindex="-1" aria-labelledby="newSkillModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-xl">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="newSkillModalLabel">Új képzetség tanulása</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <magus-learn-skill />
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>

          <!-- -----Info Modals------- -->

          <!-- Skills -->
        <div class="modal fade" id="skillModal" tabindex="-1" aria-labelledby="skillModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="skillModalLabel">{{ skill(infoSkillId).name }}</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <p>{{ skill(infoSkillId).description }}</p>
                        <p>Alapfok:</p>
                        <p>{{ skill(infoSkillId).Af }}</p>
                        <p>Mesterfok:</p>
                        <p>{{ skill(infoSkillId).Mf }}</p>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>

          <!-- Skill Precent -->
        <div class="modal fade" id="skillpModal" tabindex="-1" aria-labelledby="skillpModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="skillpModalLabel">{{ skillPrecent(infoSkillPrecId).name }}</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <p>{{ skillPrecent(infoSkillPrecId).description }}</p>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from 'vuex';
import MagusLearnSkill from './MagusLearnSkill.vue';
export default {
    components: {
        MagusLearnSkill
    },
    data() {
            return {
               infoSkillId: 'FEGYVER_HASZNALAT',
               infoSkillPrecId: 'maszas',
            }
        },
    computed: {
        ...mapGetters('currentCharacter', {
            magusCharacter: 'magusCharacter',
            haveLearnedSkill: 'haveLearnedSkill',
        }),
        ...mapGetters('magusClasses', {
            magusKaszt: 'magusClass'
        }),
         ...mapGetters('magusRaces', {
            race: 'race'
        }),
        ...mapGetters('magusSkills', {
            skill: 'skill',
            skillPrecent: 'skillPrecent',
        }),
        ...mapGetters('magusWeapons', {
            weapon: 'weapon',
            rangedWeapon: 'rangedWeapon',
        }),
        Faj() {
            let race = 'HUMAN';
            if (this.magusCharacter) {
                race = this.magusCharacter.Faj;
            }
            return this.race(race);
        },
        ugyesseg() {
            return this.magusCharacter.UGY + this.Faj.UGY + this.magusCharacter.ugyMod - this.magusCharacter.MgtMod;
        },
        ugyessegModosito() {
            let ugyMod = 0;
            if (this.ugyesseg > 10) {
                ugyMod = this.ugyesseg - 10;
            }
            return ugyMod;
        },
        KpSzint() {
            return this.magusKaszt(this.magusCharacter.Kaszt).KpSzint;
        },
        kpLeft() {
            return this.magusCharacter.KpLeft;
        },
        kpPrecentLeft() {
            return this.magusCharacter.KpPrecentLeft;
        },
        charactersPrecentSkills() {
            return this.magusCharacter.szazalekosKepzetsegek;
        },
        characterSkills() {
            let skillSet = [];
            //fegyverhasznalat af
            if (this.magusCharacter.FegyverhasznalatAlap.length > 0) {
                let fegyverekAf = [];
                this.magusCharacter.FegyverhasznalatAlap.forEach(fegyverAf => {
                    if (!this.magusCharacter.FegyverhasznalatMester.includes(fegyverAf)) {
                        if (this.weapon(fegyverAf)) {
                            fegyverekAf.push(this.weapon(fegyverAf).name);
                        }
                        else if (this.rangedWeapon(fegyverAf)) {
                            fegyverekAf.push(this.rangedWeapon(fegyverAf).name);
                        }
                    }
                });
                if (fegyverekAf.length > 0) {
                    let afWeaponSkillName = fegyverekAf.length + " Fegyverhasználat ( " + fegyverekAf.join(", ") + " )";
                    let afWeaponSkill = {id: 'FEGYVER_HASZNALAT', skillName: afWeaponSkillName, kp: '3', level: 'Af'};
                    skillSet.push(afWeaponSkill);
                }    
            }
            //fegyverhasznalat mf
            if (this.magusCharacter.FegyverhasznalatMester.length > 0) {
                let fegyverekMf = [];
                this.magusCharacter.FegyverhasznalatMester.forEach(fegyverMf => {
                    if (this.weapon(fegyverMf)) {
                        fegyverekMf.push(this.weapon(fegyverMf).name);
                    }
                    else if (this.rangedWeapon(fegyverMf)) {
                        fegyverekMf.push(this.rangedWeapon(fegyverMf).name);
                    }          
                });
                if (fegyverekMf.length > 0) {
                    let mfWeaponSkillName = fegyverekMf.length + " Fegyverhasználat ( " + fegyverekMf.join(", ") + " )";
                    let mfWeaponSkill = {id: 'FEGYVER_HASZNALAT', skillName: mfWeaponSkillName, kp: '30', level: 'Mf'};
                    skillSet.push(mfWeaponSkill);
                }    
            }
            //fegyverdobas af
            if (this.magusCharacter.FegyverdobasAlap.length > 0) {
                let fegyveredkAf = [];
                this.magusCharacter.FegyverdobasAlap.forEach(fegyverdAf => {
                    if (!this.magusCharacter.FegyverdobasMester.includes(fegyverdAf)) {
                        if (this.weapon(fegyverdAf)) {
                            fegyveredkAf.push(this.weapon(fegyverdAf).name);
                        }
                    }
                });
                if (fegyveredkAf.length > 0) {
                    let afWeapondSkillName = fegyveredkAf.length + " Fegyver dobása ( " + fegyveredkAf.join(", ") + " )";
                    let afWeapondSkill = {id: 'FEGYVER_DOBAS', skillName: afWeapondSkillName, kp: '4', level: 'Af'};
                    skillSet.push(afWeapondSkill);
                }    
            }
            //fegyverdobas mf
            if (this.magusCharacter.FegyverdobasMester.length > 0) {
                let fegyverekdMf = [];
                this.magusCharacter.FegyverdobasMester.forEach(fegyverdMf => {
                    if (this.weapon(fegyverdMf)) {
                        fegyverekdMf.push(this.weapon(fegyverdMf).name);
                    }   
                });
                if (fegyverekdMf.length > 0) {
                    let mfWeapondSkillName = fegyverekdMf.length + " Fegyver dobása ( " + fegyverekdMf.join(", ") + " )";
                    let mfWeapondSkill = {id: 'FEGYVER_DOBAS', skillName: mfWeapondSkillName, kp: '40', level: 'Mf'};
                    skillSet.push(mfWeapondSkill);
                }    
            }
            //nyelv af
            if (this.magusCharacter.NyelvismeretAf.length > 0) {
                let nyelvAfName = this.magusCharacter.NyelvismeretAf.length + "Nyelvismeret ( " + this.magusCharacter.NyelvismeretAf.join(", ") + " )";
                let nyelvSkillAf = {id: 'NYELVISMERET', skillName: nyelvAfName, kp: '1-5', level: 'Af'}
                skillSet.push(nyelvSkillAf);
            }
            //nyelv mf
            if (this.magusCharacter.NyelvismeretMf.length > 0) {
                let nyelvMfName = this.magusCharacter.NyelvismeretMf.length + "Nyelvismeret ( " + this.magusCharacter.NyelvismeretMf.join(", ") + " )";
                let nyelvSkillMf = {id: 'NYELVISMERET', skillName: nyelvMfName, kp: '20', level: 'Mf'}
                skillSet.push(nyelvSkillMf);
            }
            //szakma af
            if (this.magusCharacter.SzakmaAf.length > 0) {
                let szakmaAfName = this.magusCharacter.SzakmaAf.length + "Szakma ( " + this.magusCharacter.SzakmaAf.join(", ") + " )";
                let szakmaSkillAf = {id: 'SZAKMA', skillName: szakmaAfName, kp: '2', level: 'Af'}
                skillSet.push(szakmaSkillAf);
            }
            //szakma mf
            if (this.magusCharacter.SzakmaMf.length > 0) {
                let szakmaMfName = this.magusCharacter.SzakmaMf.length + "Szakma ( " + this.magusCharacter.SzakmaMf.join(", ") + " )";
                let szakmaSkillMf = {id: 'SZAKMA', skillName: szakmaMfName, kp: '15', level: 'Mf'}
                skillSet.push(szakmaSkillMf);
            }
            //az osszes tobbi af
            if ( this.magusCharacter.LearnedSkills.af.length > 0) {
                this.magusCharacter.LearnedSkills.af.forEach(currentSkill => {
                    let theSkill = this.skill(currentSkill);
                    if (theSkill) {
                        let skillData = {id: currentSkill, skillName: theSkill.name, kp: theSkill.KpAf, level: 'Af'};
                        skillSet.push(skillData);
                    }
                });
            }
            //az osszes tobbi mf
            if ( this.magusCharacter.LearnedSkills.mf.length > 0) {
                this.magusCharacter.LearnedSkills.mf.forEach(currentSkill => {
                    let theSkill = this.skill(currentSkill);
                    if (theSkill) {
                        let skillData = {id: currentSkill, skillName: theSkill.name, kp: theSkill.KpMf, level: 'Mf'};
                        skillSet.push(skillData);
                    }
                });
            }

            return skillSet;
        },
    },
    methods: {
        ...mapMutations('currentCharacter', {
            updateKpLeftDown: 'updateKpLeftDown',
            updateKpPrecLeftDown: 'updateKpPrecLeftDown',
            updatePrecentSkills: 'updatePrecentSkills'
        }),
        ...mapActions('currentCharacter', {
                save: 'save'
        }),
        sumSkillPrecent(prec) {
            return this.ugyessegModosito + prec;
        },
        skillInfo(id) {
            this.infoSkillId = id;
        },
        skillPrecInfo(id) {
            this.infoSkillPrecId = id;
        },
        addKpToPrecentSkill(key) {
            let precentSkillSet = this.charactersPrecentSkills;
            precentSkillSet[key].precent += 3;
            precentSkillSet[key].kpAdded += 1;
            this.updateKpLeftDown(1);
            this.updatePrecentSkills(precentSkillSet);
            this.save();
        },
        addPrecentToPrecentSkill(key) {
            let precentSkillSet = this.charactersPrecentSkills;
            precentSkillSet[key].precent += 1;
            precentSkillSet[key].precentAdded += 1;
            this.updateKpPrecLeftDown(1);
            this.updatePrecentSkills(precentSkillSet);
            this.save();
        },
    },
}
</script>