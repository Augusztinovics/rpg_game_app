<template>
    <div>
        <div class="border-bottom border-secondary mb-3">
            <h4 class="text-center mt-2">Pszi képzetség</h4>
            <div v-if="psiSkill.learned" class="d-grid text-center mb-3">
                <button class="btn btn-success ms-2 mt-2 bg-green-leather costum-btn" type="button" data-bs-toggle="modal" data-bs-target="#pyarroniModal">Álltalános Diszciplinák</button>
                <button v-if="IsSlan" class="btn btn-success ms-2 mt-2 bg-green-leather costum-btn" type="button" data-bs-toggle="modal" data-bs-target="#slanModal">Slan Diszciplinák</button>
                <button v-if="IsKyr" class="btn btn-success ms-2 mt-2 bg-green-leather costum-btn" type="button" data-bs-toggle="modal" data-bs-target="#kyrModal">Kyr Diszciplinák</button>
            </div>
            <p>Iskola tipusa: <span>{{ psiSkill.school }}</span></p>
            <p>Használat foka: <span>{{ psiSkill.level }}</span></p>
            <p>Használat szintje: <span>{{ levelOfUse }}</span></p>
            <div class="row">
                <div class="col  border-end border-secondary">
                    <p>Pszi/szint</p>
                    <p>{{ psiSkill.psziPointLevel }}</p>
                </div>
                <div class="col">
                    <p>Max pszi pont</p>
                    <p>{{ psiSkill.maxPszi }}</p>
                </div>
            </div>
            <p class="border-top border-secondary">Akt pszi pont</p>
            <p>{{ psiSkill.currentPszi }} <span v-if="psiSkill.learned"><button v-if="psiSkill.currentPszi > 0" class="btn btn-outline-danger btn-sm ms-2" type="button" @click="changeCurrentPsi(-1)">-1 Pszi Pont</button> <button v-if="psiSkill.currentPszi < availablePsi" class="btn btn-outline-success btn-sm ms-2" type="button" @click="changeCurrentPsi(1)">+1 Pszi Pont</button></span></p>
            <div v-if="psiSkill.learned" class="d-grid text-center mb-3">
                <button v-if="psiSkill.currentPszi > 0" class="btn btn-danger ms-2 bg-red-leather costum-btn" type="button" data-bs-toggle="modal" data-bs-target="#psiUseModal">Pszi Pontok Használata</button>
                <button v-if="psiSkill.currentPszi < availablePsi" class="btn btn-success ms-2 mt-2 bg-green-leather costum-btn" type="button" @click="refreshPsi">Pszi Pontok Teljes Feltöltése</button>
            </div>
        </div>

        <!-- Psi use input modal -->
        <div class="modal fade" id="psiUseModal" tabindex="-1" aria-labelledby="psiUseModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="psiUseModalLabel">Pszi használata</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                <div class="modal-body">
                    <p>Rendelkezésre álló pszi pontok: {{ availablePsi }}</p>
                    <label for="psiInput">Elhasználni kivánt pszi pontok mennyisége:</label>
                    <input type="number" class="form-control" id="psiInput" min="1" :max="availablePsi" v-model="inputPsiUse">
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary bg-blue-leather costum-btn" data-bs-dismiss="modal">Bezár</button>
                    <button type="button" class="btn btn-primary bg-red-leather costum-btn"  @click="submitPsiUse" data-bs-dismiss="modal">Elment</button>
                </div>
                </div>
            </div>
        </div>

        <!-- Pszi pajzsok -->
        <div>
            <h4 class="text-center mt-2">Pszi pajzok</h4>
            <div class="row">
                <div class="col border-end border-secondary">
                    <p>ASZTRÁL</p>
                    <p>Statikus</p>
                    <p v-if="psiSkill.learned"><button v-if="psiSkill.staticAsztral > 0" class="btn btn-danger ms-2 mt-2 bg-red-leather costum-btn" type="button" @click="destroyStaticAsztral">Lebont</button></p>
                    <p v-if="psiSkill.learned"><button v-if="psiSkill.staticAsztral < psiSkill.maxPszi" class="btn btn-success ms-2 mt-2 bg-green-leather costum-btn" type="button" @click="buildStaticAsztral">Felépit</button></p>
                    <p class="border-bottom border-secondary">{{ psiSkill.staticAsztral }}</p>
                    <p>Dinamikus</p>
                    <div v-if="psiSkill.learned">
                        <button v-if="psiSkill.currentPszi > 0" class="btn btn-success ms-2 mt-2 bg-green-leather costum-btn" type="button" @click="setDinamicType('add_aszt')" data-bs-toggle="modal" data-bs-target="#dinamicModal">Erősités</button>
                        <button v-if="psiSkill.currentPszi < psiSkill.maxPszi && psiSkill.dinamicAsztarl > 0" class="btn btn-primary ms-2 mt-2 bg-blue-leather costum-btn" type="button" @click="setDinamicType('ret_aszt')" data-bs-toggle="modal" data-bs-target="#dinamicModal">Kivonás</button>
                        <button v-if="psiSkill.dinamicAsztarl > 0" class="btn btn-danger ms-2 mt-2 bg-red-leather costum-btn" type="button" @click="setDinamicType('des_aszt')" data-bs-toggle="modal" data-bs-target="#dinamicModal">Bontás</button>
                    </div>
                   
                    <p class="border-bottom border-secondary">{{ psiSkill.dinamicAsztarl }}</p>
                    <p>ME</p>
                    <p>{{ AME }}</p>
                </div>
                <div class="col">
                    <p>MENTÁL</p>
                    <p>Statikus</p>
                    <p v-if="psiSkill.learned"><button v-if="psiSkill.staticMental > 0" class="btn btn-danger ms-2 mt-2 bg-red-leather costum-btn" type="button" @click="destroyStaticMental">Lebont</button></p>
                    <p v-if="psiSkill.learned"><button v-if="psiSkill.staticMental < psiSkill.maxPszi" class="btn btn-success ms-2 mt-2 bg-green-leather costum-btn" type="button" @click="buildStaticMental">Felépit</button></p>
                    <p class="border-bottom border-secondary">{{ psiSkill.staticMental }}</p>
                    <p>Dinamikus</p>
                    <div v-if="psiSkill.learned">
                        <button v-if="psiSkill.currentPszi > 0" class="btn btn-success ms-2 mt-2 bg-green-leather costum-btn" type="button" @click="setDinamicType('add_ment')" data-bs-toggle="modal" data-bs-target="#dinamicModal">Erősités</button>
                        <button v-if="psiSkill.currentPszi < psiSkill.maxPszi && psiSkill.dinamicMental > 0" class="btn btn-primary ms-2 mt-2 bg-blue-leather costum-btn" type="button" @click="setDinamicType('ret_ment')" data-bs-toggle="modal" data-bs-target="#dinamicModal">Kivonás</button>
                        <button v-if="psiSkill.dinamicMental > 0" class="btn btn-danger ms-2 mt-2 bg-red-leather costum-btn" type="button" @click="setDinamicType('des_ment')" data-bs-toggle="modal" data-bs-target="#dinamicModal">Bontás</button>
                    </div>
                    <p class="border-bottom border-secondary">{{ psiSkill.dinamicMental }}</p>
                    <p>ME</p>
                    <p>{{ MME }}</p>
                </div>
            </div>          
        </div>

        <!-- Dinamic input modal -->
         <div class="modal fade" id="dinamicModal" tabindex="-1" aria-labelledby="dinamicModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="dinamicModalLabel">{{ dinamicModalTitle }}</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                <div class="modal-body">
                    <p>Rendelkezésre álló pszi pontok: {{ availablePsi }}</p>
                    <label for="inputDinamic">Módositani kivánt pajzs erőssége:</label>
                    <input type="number" class="form-control" id="inputDinamic" min="1" :max="availablePsi" v-model="inputDinamic">
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary bg-blue-leather costum-btn" data-bs-dismiss="modal">Bezár</button>
                    <button type="button" class="btn btn-primary bg-green-leather costum-btn"  @click="switchUpdateDinamic" data-bs-dismiss="modal">Elment</button>
                </div>
                </div>
            </div>
        </div>

        <!-- Psi view modals -->
        <!-- Pyarroni -->
        <div class="modal fade" id="pyarroniModal" tabindex="-1" aria-labelledby="pyarroniModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-xl">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="pyarroniModalLabel">Pyarroni Pszi</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <div class="p-3 border border-secondary rounded mb-2">
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" v-model="allPyarroni" id="pyarroni_checkbox">
                                <label class="form-check-label" for="pyarroni_checkbox">
                                    Összes diszciplina mutatása
                                </label>
                            </div>
                        </div>
                        
                        <div class="accordion" id="accordionPanelsStayOpenExample">
                            <div v-for="pyarroni, index in pyarroniPsiList" :key="'Pyarroni' + index" class="accordion-item">
                                <h2 class="accordion-header" :id="'Pyarroni' + index + '-heading'">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" :data-bs-target="'#' + 'Pyarroni' + index" aria-expanded="false" :aria-controls="'Pyarroni' + index">
                                        {{ pyarroni.name }}
                                    </button>
                                </h2>
                                <div :id="'Pyarroni' + index" class="accordion-collapse collapse" :aria-labelledby="'Pyarroni' + index + '-heading'">
                                    <div class="accordion-body">
                                        <p><b>{{ pyarroni.psiPointText }}</b></p>
                                        <p><b>ME: {{ pyarroni.ME }}</b></p>
                                        <p><b>A Meditáció Ideje: {{ pyarroni.medTime }}</b></p>
                                        <p><b>Időtartam: {{ pyarroni.activeTime }}</b></p>
                                        <p><b>Leirás:</b></p>
                                        <p>{{ pyarroni.description }}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary bg-blue-leather costum-btn" data-bs-dismiss="modal">Bezár</button>
                    </div>
                </div>
            </div>
        </div>

        <!-- Slan -->
        <div class="modal fade" id="slanModal" tabindex="-1" aria-labelledby="slanModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-xl">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="slanModalLabel">Slan-út Pszi Diszciplinák</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <div class="p-3 border border-secondary rounded mb-2">
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" v-model="allSlan" id="slan_checkbox">
                                <label class="form-check-label" for="slan_checkbox">
                                    Összes diszciplina mutatása
                                </label>
                            </div>
                        </div>
                        
                        <div class="accordion" id="accordionPanelsStayOpenExample">
                            <div v-for="slan, index in slanPsiList" :key="'Slan' + index" class="accordion-item">
                                <h2 class="accordion-header" :id="'Slan' + index + '-heading'">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" :data-bs-target="'#' + 'Slan' + index" aria-expanded="false" :aria-controls="'Slan' + index">
                                        {{ slan.name }}
                                    </button>
                                </h2>
                                <div :id="'Slan' + index" class="accordion-collapse collapse" :aria-labelledby="'Slan' + index + '-heading'">
                                    <div class="accordion-body">
                                        <p><b>{{ slan.psiPointText }}</b></p>
                                        <p><b>ME: {{ slan.ME }}</b></p>
                                        <p><b>A Meditáció Ideje: {{ slan.medTime }}</b></p>
                                        <p><b>Időtartam: {{ slan.activeTime }}</b></p>
                                        <p><b>Leirás:</b></p>
                                        <p>{{ slan.description }}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary bg-blue-leather costum-btn" data-bs-dismiss="modal">Bezár</button>
                    </div>
                </div>
            </div>
        </div>

         <!-- Kyr -->
        <div class="modal fade" id="kyrModal" tabindex="-1" aria-labelledby="kyrModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-xl">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="kyrModalLabel">Kyr-metódus Diszciplinái</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <div class="p-3 border border-secondary rounded mb-2">
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" v-model="allKyr" id="kyr_checkbox">
                                <label class="form-check-label" for="kyr_checkbox">
                                    Összes diszciplina mutatása
                                </label>
                            </div>
                        </div>
                        
                        <div class="accordion" id="accordionPanelsStayOpenExample">
                            <div v-for="kyr, index in kyrPsiList" :key="'Kyr' + index" class="accordion-item">
                                <h2 class="accordion-header" :id="'Kyr' + index + '-heading'">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" :data-bs-target="'#' + 'Kyr' + index" aria-expanded="false" :aria-controls="'Kyr' + index">
                                        {{ kyr.name }}
                                    </button>
                                </h2>
                                <div :id="'Kyr' + index" class="accordion-collapse collapse" :aria-labelledby="'Kyr' + index + '-heading'">
                                    <div class="accordion-body">
                                        <p><b>{{ kyr.psiPointText }}</b></p>
                                        <p><b>ME: {{ kyr.ME }}</b></p>
                                        <p><b>A Meditáció Ideje: {{ kyr.medTime }}</b></p>
                                        <p><b>Időtartam: {{ kyr.activeTime }}</b></p>
                                        <p><b>Leirás:</b></p>
                                        <p v-for="des, index in kyr.description" :key="'Des' + index">{{ des }}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary bg-blue-leather costum-btn" data-bs-dismiss="modal">Bezár</button>
                    </div>
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
            inputPsiUse: 0,
            inputDinamic: 1,
            dinamicType: '',
            dinamicModalTitle: '',
            allPyarroni: false,
            allSlan: false,
            allKyr: false,
        }
    },
    computed: {
        ...mapGetters('currentCharacter', {
            magusCharacter: 'magusCharacter',
        }),
        ...mapGetters('magusRaces', {
            race: 'race'
        }),
        ...mapGetters('magusPsiPyarroni', {
            pyarronPsi: 'pyarronPsi',
            availablePyarronPsi: 'availablePyarronPsi',
        }),
        ...mapGetters('magusPsiSlan', {
            slanPsi: 'slanPsi',
            availableSlanPsi: 'availableSlanPsi',
        }),
        ...mapGetters('magusPsiKyr', {
            kyrPsi: 'kyrPsi',
            availableKyrPsi: 'availableKyrPsi',
        }),
        Faj() {
            let race = 'HUMAN';
            if (this.magusCharacter) {
                race = this.magusCharacter.Faj;
            }
            return this.race(race);
        },
        KasztId() { 
            return this.magusCharacter.Kaszt;  
        },
        IsSlan() {
            if (this.KasztId == 'HARCMUVESZ' || this.KasztId =='KARDMUVESZ') {
                return true;
            } else {
                return false;
            }
        },
        IsKyr() {
            if (this.KasztId == 'VARAZSLO') {
                return true;
            } else {
                return false;
            }
        },
        psiSkill() {
            return this.magusCharacter.Pszi;
        },
        levelOfUse() {
            if (this.psiSkill.learned) {
                let tsz = this.magusCharacter.Szint;
                let psiTsz = this.psiSkill.atlevel;
                return tsz - psiTsz + 1;
            } else {
                return 0;
            }
        },
        AME() {
            return this.psiSkill.staticAsztral + this.psiSkill.dinamicAsztarl + this.asztralBase;
        },
        MME() {
            return this.psiSkill.staticMental + this.psiSkill.dinamicMental + this.mentalBase;
        },
        akarat() {
            return this.magusCharacter.AK + this.Faj.AK + this.magusCharacter.akMod;
        },
        mentalBase() {
            let mmod = 0;
            if (this.akarat > 10) {
                mmod = this.akarat - 10;
            }
            return mmod;
        },
        asztral() {
            return this.magusCharacter.ASZT + this.Faj.ASZT + this.magusCharacter.asztMod;
        },
        asztralBase() {
            let amod = 0;
            if (this.asztral > 10) {
                amod = this.asztral - 10;
            }
            return amod;
        },
        availablePsi() {
            let dinamicPsi = this.psiSkill.dinamicAsztarl + this.psiSkill.dinamicMental;
            return this.psiSkill.maxPszi - dinamicPsi;
        },
        pyarroniPsiList() {
            if (this.allPyarroni) {
                return this.pyarronPsi;
            } else {
                return this.availablePyarronPsi(this.psiSkill.currentPszi);
            }
        },
        slanPsiList() {
            if (this.allSlan) {
                return this.slanPsi;
            } else {
                return this.availableSlanPsi(this.psiSkill.currentPszi);
            }
        },
        kyrPsiList() {
            if (this.allKyr) {
                return this.kyrPsi;
            } else {
                return this.availableKyrPsi(this.psiSkill.currentPszi);
            }
        },
    },
    methods: {
        ...mapMutations('currentCharacter', {
            updateCurrentPsiPoint: 'updateCurrentPsiPoint',
            updateStaticAsztral: 'updateStaticAsztral',
            updateStaticMental: 'updateStaticMental',
            updateDinamicAsztral: 'updateDinamicAsztral',
            updateDinamicMental: 'updateDinamicMental',
        }),
        ...mapActions('currentCharacter', {
            save: 'save'
        }),
        changeCurrentPsi(value) {
            let maxPsi = this.availablePsi;
            let curPsi = this.psiSkill.currentPszi;
            let changedPsi = curPsi + value;
            if (changedPsi >= 0 && changedPsi <= maxPsi) {
                this.updateCurrentPsiPoint(changedPsi);
                this.save();
            }
        },
        refreshPsi() {
            this.updateCurrentPsiPoint(this.availablePsi);
            this.save();
            let msg = this.magusCharacter.Nev + ' Feltöltötte Pszi pontjait!';
            this.$root.$emit('CharacterChangedEvent', msg);
        },
        submitPsiUse() {
            if (parseInt(this.inputPsiUse) <= this.availablePsi && parseInt(this.inputPsiUse) > 0) {
                let updatedPsi = this.availablePsi - parseInt(this.inputPsiUse);
                let msg = this.magusCharacter.Nev + ' Pszit használt! Mennyiség: ' + this.inputPsiUse + 'Pszi';
                this.$root.$emit('CharacterChangedEvent', msg);
                this.inputPsiUse = 0;
                this.updateCurrentPsiPoint(updatedPsi);
                this.save();
            }
        },
        buildStaticAsztral() {
            let msg = this.magusCharacter.Nev + ' Újraépítette a Statikus Asztrál pajzsát!';
            this.$root.$emit('CharacterChangedEvent', msg);
            this.updateStaticAsztral(this.psiSkill.maxPszi);
            this.save();
        },
        buildStaticMental() {
            let msg = this.magusCharacter.Nev + ' Újraépítette a Statikus Mentál pajzsát!';
            this.$root.$emit('CharacterChangedEvent', msg);
            this.updateStaticMental(this.psiSkill.maxPszi);
            this.save();
        },
        destroyStaticAsztral() {
            let msg = this.magusCharacter.Nev + ' Összeomlott a Statikus Asztrál pajzsa!';
            this.$root.$emit('CharacterChangedEvent', msg);
            this.updateStaticAsztral(0);
            this.save();
        },
        destroyStaticMental() {
            let msg = this.magusCharacter.Nev + ' Összeomlott a Statikus Mentál pajzsa!';
            this.$root.$emit('CharacterChangedEvent', msg);
            this.updateStaticMental(0);
            this.save();
        },
        buildDinamicAsztral() {
            if ( parseInt(this.inputDinamic) > 0 && parseInt(this.inputDinamic) <= this.psiSkill.currentPszi) {
                let newSkillPoint = this.psiSkill.currentPszi - parseInt(this.inputDinamic);
                let currentDinamicE = this.psiSkill.dinamicAsztarl;
                let updatedDinamic = currentDinamicE + parseInt(this.inputDinamic);
                this.updateCurrentPsiPoint(newSkillPoint);
                this.updateDinamicAsztral(updatedDinamic);
                this.save();
                let msg = this.magusCharacter.Nev + ' Erősítette Dinamikus Asztrál pajzsát! Erősség: ' + this.inputDinamic + 'Pszi';
                this.$root.$emit('CharacterChangedEvent', msg);
                this.inputDinamic = 1;
            }
        },
        buildDinamicMental() {
            if (parseInt(this.inputDinamic) > 0 && parseInt(this.inputDinamic) <= this.psiSkill.currentPszi) {
                let newSkillPoint = this.psiSkill.currentPszi - parseInt(this.inputDinamic);
                let currentDinamicE = this.psiSkill.dinamicMental;
                let updatedDinamic = currentDinamicE + parseInt(this.inputDinamic);
                this.updateCurrentPsiPoint(newSkillPoint);
                this.updateDinamicMental(updatedDinamic);
                this.save();
                let msg = this.magusCharacter.Nev + ' Erősítette Dinamikus Mentál pajzsát! Erősség: ' + this.inputDinamic + 'Pszi';
                this.$root.$emit('CharacterChangedEvent', msg);
                this.inputDinamic = 1;
            }
        },
        retriveDinamicAsztral() {
            if (parseInt(this.inputDinamic) > 0 && parseInt(this.inputDinamic) <= this.psiSkill.dinamicAsztarl) {
                let newSkillPoint = this.psiSkill.currentPszi + parseInt(this.inputDinamic);
                let currentDinamicE = this.psiSkill.dinamicAsztarl;
                let updatedDinamic = currentDinamicE - parseInt(this.inputDinamic);
                this.updateCurrentPsiPoint(newSkillPoint);
                this.updateDinamicAsztral(updatedDinamic);
                this.save();
                let msg = this.magusCharacter.Nev + ' Kivont pszit a  Dinamikus Asztrál pajzsából! Kivont mennyiség: ' + this.inputDinamic + 'Pszi';
                this.$root.$emit('CharacterChangedEvent', msg);
                this.inputDinamic = 1;
            }
        },
        retriveDinamicMental() {
            if (parseInt(this.inputDinamic) > 0 && parseInt(this.inputDinamic) <= this.psiSkill.dinamicMental) {
                let newSkillPoint = this.psiSkill.currentPszi + parseInt(this.inputDinamic);
                let currentDinamicE = this.psiSkill.dinamicMental;
                let updatedDinamic = currentDinamicE - parseInt(this.inputDinamic);
                this.updateCurrentPsiPoint(newSkillPoint);
                this.updateDinamicMental(updatedDinamic);
                this.save();
                let msg = this.magusCharacter.Nev + ' Kivont pszit a  Dinamikus Mentál pajzsából! Kivont mennyiség: ' + this.inputDinamic + 'Pszi';
                this.$root.$emit('CharacterChangedEvent', msg);
                this.inputDinamic = 1;
            }
        },
        destroyDinamicAsztral() {
             if (parseInt(this.inputDinamic) > 0 && parseInt(this.inputDinamic) <= this.psiSkill.dinamicAsztarl) {
                let currentDinamicE = this.psiSkill.dinamicAsztarl;
                let updatedDinamic = currentDinamicE - parseInt(this.inputDinamic);
                this.updateDinamicAsztral(updatedDinamic);
                this.save();
                let msg = this.magusCharacter.Nev + ' Bomlasztották a Dinamikus Asztrál pajzsát! Bomlasztott mennyiség: ' + this.inputDinamic + 'Pszi';
                this.$root.$emit('CharacterChangedEvent', msg);
                this.inputDinamic = 1;
            }
        },
        destroyDinamicMental() {
            if (parseInt(this.inputDinamic) > 0 && parseInt(this.inputDinamic) <= this.psiSkill.dinamicMental) {
                let currentDinamicE = this.psiSkill.dinamicMental;
                let updatedDinamic = currentDinamicE - parseInt(this.inputDinamic);
                this.updateDinamicMental(updatedDinamic);
                this.save();
                let msg = this.magusCharacter.Nev + ' Bomlasztották a Dinamikus Mentál pajzsát! Bomlasztott mennyiség: ' + this.inputDinamic + 'Pszi';
                this.$root.$emit('CharacterChangedEvent', msg);
                this.inputDinamic = 1;
            }
        },
        switchUpdateDinamic() {
            switch(this.dinamicType) {
                case 'add_aszt':
                    this.buildDinamicAsztral();
                    this.dinamicType = '';
                    break;
                case 'ret_aszt':
                    this.retriveDinamicAsztral();
                    this.dinamicType = '';
                    break;
                case 'des_aszt':
                    this.destroyDinamicAsztral();
                    this.dinamicType = '';
                    break;
                case 'add_ment':
                    this.buildDinamicMental();
                    this.dinamicType = '';
                    break;
                case 'ret_ment':
                    this.retriveDinamicMental();
                    this.dinamicType = '';
                    break;
                case 'des_ment':
                    this.destroyDinamicMental();
                    this.dinamicType = '';
                    break;
                default:
                    // code block
            }
        },
        setDinamicType(type) {
            this.dinamicType = type;
            switch(type) {
                case 'add_aszt':
                    this.dinamicModalTitle = 'Dinamikus Asztrál Pajzs Erősitése';
                    break;
                case 'ret_aszt':
                    this.dinamicModalTitle = 'Dinamikus Asztrál Pajzsból való Pszi-pont kivonása';
                    break;
                case 'des_aszt':
                    this.dinamicModalTitle = 'Dinamikus Asztrál Pajzs Bontása';
                    break;
                case 'add_ment':
                    this.dinamicModalTitle = 'Dinamikus Mentál Pajzs Erősitése';
                    break;
                case 'ret_ment':
                    this.dinamicModalTitle = 'Dinamikus Mentál Pajzsból való Pszi-pont kivonása';
                    break;
                case 'des_ment':
                    this.dinamicModalTitle = 'Dinamikus Mentál Pajzs Bontása';
                    break;
                default:
                    this.dinamicModalTitle = '';
            }
        },
    },
}
</script>