<template>
    <div>
        <nav>
            <div class="nav nav-tabs" id="nav-tab" role="tablist">
                <button class="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-af" type="button" role="tab" aria-controls="nav-af" aria-selected="true">Alapfokú képzetség tanulása</button>
                <button class="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-mf" type="button" role="tab" aria-controls="nav-mf" aria-selected="false">Mesterfokre fejlesztés</button>
            </div>
        </nav>
        <div class="tab-content" id="nav-tabContent">
            <!-- uj alapfoku kepzetseg tanulasa tab -->
            <div class="tab-pane fade show active" id="nav-af" role="tabpanel" aria-labelledby="nav-af-tab">
                <div class="accordion" id="accordionPanelsStayOpenExample">
                    <div v-for="skil in availablleSkills" :key="skil.id" class="accordion-item">
                        <h2 class="accordion-header" :id="skil.id + '-heading'">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" :data-bs-target="'#' + skil.id" aria-expanded="false" :aria-controls="skil.id">
                                {{ skil.name }}
                            </button>
                        </h2>
                        <div :id="skil.id" class="accordion-collapse collapse" :aria-labelledby="skil.id + '-heading'">
                            <div class="accordion-body">
                                <p><b>Leirás:</b></p>
                                <p>{{ skil.description }}</p>
                                <p><b>Af </b>Kp: {{skil.KpAf}}</p>
                                <p>{{ skil.Af }}</p>
                                <p><b>Mf </b>Kp: {{skil.KpMf}}</p>
                                <p>{{ skil.Mf }}</p>
                                <!-- a kulonbozo kepzetsegek hozzaadasa -->
                                <div v-if="skil.id == 'FEGYVER_HASZNALAT'">
                                   <div class="card bg-success text-white text-center">
                                        <div class="card-body">
                                            <p class="h3">Új fegyver alapfokú ismeretének elsajátitása {{ skil.KpAf }} KP-ért</p>
                                            <select class="form-select form-select-lg mb-3" v-model="newWeapon" aria-label="weapon-select">
                                                <option selected value="" disabled>Választj fegyvert</option>
                                                <option v-for="weapon in availableWeapons" :key="weapon.id" :value="weapon.id">{{ weapon.name }}</option>
                                                <option v-for="ranged in availableRangedWeapons" :key="ranged.id" :value="ranged.id">{{ ranged.name }}</option>
                                            </select>
                                            <p>Rendelkezésre álló Kp: {{ kpLeft }}</p>
                                            <p><button class="btn btn-primary btn-lg" @click="addNewWeaponSkillAf">Megtanul</button></p>
                                        </div>
                                    </div>
                                </div>
                                <div v-else-if="skil.id == 'FEGYVER_DOBAS'">
                                    <div class="card bg-success text-white text-center">
                                        <div class="card-body">
                                            <p class="h3">Új fegyverdobás alapfokú ismeretének elsajátitása {{ skil.KpAf }} KP-ért</p>
                                            <select class="form-select form-select-lg mb-3" v-model="newThrowWeapon" aria-label="weapon-select">
                                                <option selected value="" disabled>Választj fegyvert</option>
                                                <option v-for="weapon in availableTrowWeapons" :key="'T' + weapon.id" :value="weapon.id">{{ weapon.name }}</option>
                                            </select>
                                            <p>Rendelkezésre álló Kp: {{ kpLeft }}</p>
                                            <p><button class="btn btn-primary btn-lg" @click="addNewWeaponThrowSkillAf">Megtanul</button></p>
                                        </div>
                                    </div>
                                </div>
                                <div v-else-if="skil.id == 'NYELVISMERET'">
                                   <div class="card bg-success text-white text-center">
                                        <div class="card-body">
                                            <p class="h3">Új nyelv tanulása {{ skil.KpAf }} KP-ért</p>
                                            <input class="form-control form-control-lg" v-model="newLanguage" type="text" placeholder="ird be a megtanulni kivánt nyelvet" aria-label="language input">
                                            <p>Rendelkezésre álló Kp: {{ kpLeft }}</p>
                                            <p><button class="btn btn-primary btn-lg mt-2" @click="addNewLanguageAf">Megtanul</button></p>
                                        </div>
                                    </div>
                                </div>
                                <div v-else-if="skil.id == 'SZAKMA'">
                                    <div class="card bg-success text-white text-center">
                                        <div class="card-body">
                                            <p class="h3">Új szakma tanulása {{ skil.KpAf }} KP-ért</p>
                                            <input class="form-control form-control-lg" v-model="newCraft" type="text" placeholder="ird be a megtanulni kivánt szakmát" aria-label="skill input">
                                            <p>Rendelkezésre álló Kp: {{ kpLeft }}</p>
                                            <p><button class="btn btn-primary btn-lg mt-2" @click="addNewCraftAf">Megtanul</button></p>
                                        </div>
                                    </div>
                                </div>
                                <div v-else>
                                    <div class="card bg-success text-white text-center">
                                        <div class="card-body">
                                            <p class="h3">{{ skil.name }} elsajátitása {{ skil.KpAf }} KP-ért</p>
                                            <p>Rendelkezésre álló Kp: {{ kpLeft }}</p>
                                            <p><button class="btn btn-primary btn-lg" @click="addNewSkill(skil.id, skil.KpAf)">Megtanul</button></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- alapfoku kepzetseg mesterfokura fejlesztese tab -->
            <div class="tab-pane fade" id="nav-mf" role="tabpanel" aria-labelledby="nav-mf-tab">
                <div v-if="skillsToUpgrade.length > 0">
                    <div v-for="skilmf in skillsToUpgrade" :key="skilmf.id" class="accordion-item">
                        <h2 class="accordion-header" :id="skilmf.id + '-heading'">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" :data-bs-target="'#' + skilmf.id" aria-expanded="false" :aria-controls="skilmf.id">
                                {{ skilmf.name }}
                            </button>
                        </h2>
                        <div :id="skilmf.id" class="accordion-collapse collapse" :aria-labelledby="skilmf.id + '-heading'">
                            <div class="accordion-body">
                                <p><b>Leirás:</b></p>
                                <p>{{ skilmf.description }}</p>
                                <p><b>Af </b>Kp: {{skilmf.KpAf}}</p>
                                <p>{{ skilmf.Af }}</p>
                                <p><b>Mf </b>Kp: {{skilmf.KpMf}}</p>
                                <p>{{ skilmf.Mf }}</p>
                                <!-- a kulonbozo kepzetsegek hozzaadasa -->
                                <div v-if="skilmf.id == 'FEGYVER_HASZNALAT'">
                                   <div class="card bg-success text-white text-center">
                                        <div class="card-body">
                                            <p class="h3">Fegyverhasználat mesterfokra fejlesztése {{ skilmf.KpMf }} KP-ért</p>
                                            <select class="form-select form-select-lg mb-3" v-model="weaponMf" aria-label="weapon-select">
                                                <option selected value="" disabled>Választj fegyvert</option>
                                                <option v-for="weaponMf in availableWeaponsMf" :key="'MF' + weaponMf.id" :value="weaponMf.id">{{ weaponMf.name }}</option>
                                                <option v-for="rangedMf in availableRangedWeaponsMf" :key="'MF' + rangedMf.id" :value="rangedMf.id">{{ rangedMf.name }}</option>
                                            </select>
                                            <p>Rendelkezésre álló Kp: {{ kpLeft }}</p>
                                            <p><button class="btn btn-primary btn-lg" @click="upgradeWeaponSkillMf">Megtanul</button></p>
                                        </div>
                                    </div>
                                </div>
                                <div v-else-if="skilmf.id == 'FEGYVER_DOBAS'">
                                    <div class="card bg-success text-white text-center">
                                        <div class="card-body">
                                            <p class="h3">Fegyverdobás mesterfokra fejlesztése {{ skilmf.KpMf }} KP-ért</p>
                                            <select class="form-select form-select-lg mb-3" v-model="trowWeaponMf" aria-label="weapon-select">
                                                <option selected value="" disabled>Választj fegyvert</option>
                                                <option v-for="weaponMf in availableTrowWeaponsMf" :key="'TMF' + weaponMf.id" :value="weaponMf.id">{{ weaponMf.name }}</option>
                                            </select>
                                            <p>Rendelkezésre álló Kp: {{ kpLeft }}</p>
                                            <p><button class="btn btn-primary btn-lg" @click="upgradeWeaponThrowSkillMf">Megtanul</button></p>
                                        </div>
                                    </div>
                                </div>
                                <div v-else-if="skilmf.id == 'NYELVISMERET'">
                                   <div class="card bg-success text-white text-center">
                                        <div class="card-body">
                                            <p class="h3">Nyelv tanulása {{ skilmf.KpMf }} KP-ért</p>
                                            <select class="form-select form-select-lg mb-3" v-model="languageMf" aria-label="weapon-select">
                                                <option selected value="" disabled>Választj nyelvet</option>
                                                <option v-for="language, index in learnedLanguages" :key="'L' + index" :value="language">{{ language }}</option>
                                            </select>
                                            <p>Rendelkezésre álló Kp: {{ kpLeft }}</p>
                                            <p><button class="btn btn-primary btn-lg mt-2" @click="upgradeLanguageMf">Megtanul</button></p>
                                        </div>
                                    </div>
                                </div>
                                <div v-else-if="skilmf.id == 'SZAKMA'">
                                    <div class="card bg-success text-white text-center">
                                        <div class="card-body">
                                            <p class="h3">Szakma tanulása {{ skilmf.KpMf }} KP-ért</p>
                                            <select class="form-select form-select-lg mb-3" v-model="craftMf" aria-label="weapon-select">
                                                <option selected value="" disabled>Választj szakmát</option>
                                                <option v-for="craft, index in learnedCrafts" :key="'C' + index" :value="craft">{{ craft }}</option>
                                            </select>
                                            <p>Rendelkezésre álló Kp: {{ kpLeft }}</p>
                                            <p><button class="btn btn-primary btn-lg mt-2" @click="upgradeCraftMf">Megtanul</button></p>
                                        </div>
                                    </div>
                                </div>
                                <div v-else>
                                    <div class="card bg-success text-white text-center">
                                        <div class="card-body">
                                            <p class="h3">{{ skilmf.name }} mesterfokra fejlesztése {{ skilmf.KpMf }} KP-ért</p>
                                            <p>Rendelkezésre álló Kp: {{ kpLeft }}</p>
                                            <p><button class="btn btn-primary btn-lg" @click="upgradeSkillMf(skilmf.id, skilmf.KpMf)">Megtanul</button></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div v-else class="text-center">
                    <p>Nincs elég kp egyetlen képzettség mesterfokre fejlesztésére sem</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from 'vuex';
export default {
    data() {
            return {
               newWeapon: '',
               newThrowWeapon: '',
               newLanguage: '',
               newCraft: '',
               weaponMf: '',
               trowWeaponMf: '',
               languageMf: '',
               craftMf: '',
            }
        },
    computed: {
        ...mapGetters('currentCharacter', {
            magusCharacter: 'magusCharacter',
        }),
        ...mapGetters('magusSkills', {
            skills: 'skills',
        }),
        ...mapGetters('magusWeapons', {
            weapons: 'weapons',
            rangedWeapons: 'rangedWeapons',
        }),
        pszi() {
            return this.magusCharacter.Pszi;
        },
        kpLeft() {
            return this.magusCharacter.KpLeft;
        },
        learnedWeaponsList() {
            return this.magusCharacter.FegyverhasznalatAlap;
        },
        learnedWeaponsListMf() {
            return this.magusCharacter.FegyverhasznalatMester;
        },
        learnedTrowWeaponsList() {
            return this.magusCharacter.FegyverdobasAlap;
        },
        learnedTrowWeaponsListMf() {
            return this.magusCharacter.FegyverdobasMester;
        },
        learnedLanguages() {
            return this.magusCharacter.NyelvismeretAf;
        },
        learnedLanguagesMf() {
            return this.magusCharacter.NyelvismeretMf;
        },
        learnedCrafts() {
            return this.magusCharacter.SzakmaAf;
        },
        learnedCraftsMf() {
            return this.magusCharacter.SzakmaMf;
        },
        learnedSkills() {
            return this.magusCharacter.LearnedSkills.af;
        },
        learnedSkillsMf() {
            return this.magusCharacter.LearnedSkills.mf;
        },
        availablleSkills() {
            return this.skills.filter(s => !this.learnedSkills.includes(s.id) && s.KpAf <= this.kpLeft);
        },
        availableWeapons() {
            return this.weapons.filter(w => !this.learnedWeaponsList.includes(w.id));
        },
        availableRangedWeapons() {
            return this.rangedWeapons.filter(r => !this.learnedWeaponsList.includes(r.id));
        },
        availableTrowWeapons() {
            return this.weapons.filter(w => !this.learnedTrowWeaponsList.includes(w.id));
        },

        availableWeaponsMf() {
            return this.weapons.filter(w => this.learnedWeaponsList.includes(w.id) && !this.learnedWeaponsListMf.includes(w.id));
        },
        availableRangedWeaponsMf() {
            return this.rangedWeapons.filter(r => this.learnedWeaponsList.includes(r.id) && !this.learnedWeaponsListMf.includes(r.id));
        },
        availableTrowWeaponsMf() {
            return this.weapons.filter(w => this.learnedTrowWeaponsList.includes(w.id) && !this.learnedWeaponsListMf.includes(w.id));
        },
        upgradebleLanguages() {
            return this.learnedLanguages.filter(l => !this.learnedLanguagesMf.includes(l));
        },
        upgradebleCraftes() {
            return this.learnedCrafts.filter(c => !this.learnedCraftsMf.includes(c));
        },
        upgradebleSkillsMf() {
            return this.learnedSkills.filter(s => !this.learnedSkillsMf.includes(s));
        },
        skillsToUpgrade() {
            let upgradeableSkills = [];
            if (this.availableWeaponsMf.length > 0 || this.availableRangedWeaponsMf.length > 0) {
                upgradeableSkills.push('FEGYVER_HASZNALAT');
            }
            if (this.availableTrowWeaponsMf.length > 0) {
                upgradeableSkills.push('FEGYVER_DOBAS');
            }
            if (this.upgradebleLanguages.length > 0) {
                upgradeableSkills.push('NYELVISMERET');
            }
            if (this.upgradebleCraftes.length > 0) {
                upgradeableSkills.push('SZAKMA');
            }
            if (this.upgradebleSkillsMf.length > 0) {
                upgradeableSkills = upgradeableSkills.concat(this.upgradebleSkillsMf);
            }
            
            return this.skills.filter(s => upgradeableSkills.includes(s.id) && s.KpMf <= this.kpLeft);
        },
        magia() {
            return this.magusCharacter.Magia;
        },
    },
    methods: {
        ...mapMutations('currentCharacter', {
            updateKpLeftDown: 'updateKpLeftDown',
            updateWeaposAf: 'updateWeaposAf',
            updateWeaposMf: 'updateWeaposMf',
            updateThrowWeaposAf: 'updateThrowWeaposAf',
            updateThrowWeaposMf: 'updateThrowWeaposMf',
            updateLanguageAf: 'updateLanguageAf',
            updateLanguageMf: 'updateLanguageMf',
            updateCraftAf: 'updateCraftAf',
            updateCraftMf: 'updateCraftMf',
            updateSkillsAf: 'updateSkillsAf',
            updateSkillsMf: 'updateSkillsMf',
            updatePszi: 'updatePszi',
            updateMaxMp: 'updateMaxMp',
        }),
        ...mapActions('currentCharacter', {
            save: 'save'
        }),
        addNewWeaponSkillAf() {
            if (this.newWeapon != '') {
                let learnedWeaponList = this.learnedWeaponsList;
                learnedWeaponList.push(this.newWeapon);
                this.updateWeaposAf(learnedWeaponList);
                this.updateKpLeftDown(3);
                this.save();
                this.newWeapon = '';
            }
        },
        addNewWeaponThrowSkillAf() {
            if (this.newThrowWeapon != '') {
                let learnedTrowWeaponList = this.learnedTrowWeaponsList;
                learnedTrowWeaponList.push(this.newThrowWeapon);
                this.updateThrowWeaposAf(learnedTrowWeaponList);
                this.updateKpLeftDown(4);
                this.save();
                this.newThrowWeapon = '';
            }
        },
        addNewLanguageAf() {
            if (this.newLanguage != '') {
                let learnedLanguageList = this.learnedLanguages;
                learnedLanguageList.push(this.newLanguage);
                this.updateLanguageAf(learnedLanguageList);
                this.updateKpLeftDown(3);
                this.save();
                this.newLanguage = '';
            }
        },
        addNewCraftAf() {
            if (this.newCraft != '') {
                let learnedCraftList = this.learnedCrafts;
                learnedCraftList.push(this.newCraft);
                this.updateCraftAf(learnedCraftList);
                this.updateKpLeftDown(2);
                this.save();
                this.newCraft = '';
            }
        },
        addNewSkill(id, kp) {
            let learnedSkillList = this.learnedSkills;
            learnedSkillList.push(id);
            this.updateSkillsAf(learnedSkillList);
            this.updateKpLeftDown(kp);
            if (id == 'PSZI') {
                let psiSkill = this.pszi;
                psiSkill.learned = true;
                psiSkill.atlevel = this.magusCharacter.Szint;
                psiSkill.level = 'Af';
                psiSkill.school = 'Pyarroni';
                psiSkill.maxPszi += 4;
                psiSkill.psziPointLevel = 3;
                psiSkill.currentPszi += 4;
                this.updatePszi(psiSkill); 
            }
            this.save();
        },

        upgradeWeaponSkillMf() {
            if (this.weaponMf != '') {
                let learnedWeaponListMf = this.learnedWeaponsListMf;
                learnedWeaponListMf.push(this.weaponMf);
                this.updateWeaposMf(learnedWeaponListMf);
                this.updateKpLeftDown(30);
                this.save();
                this.weaponMf = '';
            }
        },
        upgradeWeaponThrowSkillMf() {
            if (this.trowWeaponMf != '') {
                let learnedTrowWeaponListMf = this.learnedTrowWeaponsListMf;
                learnedTrowWeaponListMf.push(this.trowWeaponMf);
                this.updateThrowWeaposMf(learnedTrowWeaponListMf);
                this.updateKpLeftDown(40);
                this.save();
                this.trowWeaponMf = '';
            }
        },
        upgradeLanguageMf() {
            if (this.languageMf != '') {
                let learnedLanguageListMf = this.learnedLanguagesMf;
                learnedLanguageListMf.push(this.languageMf);
                this.updateLanguageMf(learnedLanguageListMf);
                this.updateKpLeftDown(20);
                this.save();
                this.languageMf = '';
            }
        },
        upgradeCraftMf() {
            if (this.craftMf != '') {
                let learnedCraftListMf = this.learnedCraftsMf;
                learnedCraftListMf.push(this.craftMf);
                this.updateCraftMf(learnedCraftListMf);
                this.updateKpLeftDown(15);
                this.save();
                this.craftMf = '';
            }
        },
        upgradeSkillMf(id, kp) {
            let learnedSkillListMf = this.learnedSkillsMf;
            learnedSkillListMf.push(id);
            this.updateSkillsMf(learnedSkillListMf);
            this.updateKpLeftDown(kp);
            if (id == 'PSZI') {
                let psiSkill = this.pszi;
                psiSkill.level = 'Mf';
                psiSkill.maxPszi += 5;
                psiSkill.psziPointLevel = 4;
                psiSkill.currentPszi += 5;
                this.updatePszi(psiSkill); 
            }
            if (id == 'MAGIA_HASZNALAT') {
                if (this.magia.maxMp == 0) {
                    this.updateMaxMp(10);
                }
            }
            this.save();
        }
    },
}
</script>