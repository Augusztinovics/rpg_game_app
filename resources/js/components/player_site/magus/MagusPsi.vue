<template>
    <div>
        <div class="border-bottom border-secondary mb-3">
            <h4 class="text-center mt-2">Pszi képzetség</h4>
            <div v-if="psiSkill.learned" class="d-grid text-center mb-3">
                <button class="btn btn-success ms-2 mt-2" type="button" data-bs-toggle="modal" data-bs-target="#pyarroniModal">Álltalános Diszciplinák</button>
                
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
                <button v-if="psiSkill.currentPszi > 0" class="btn btn-danger ms-2" type="button" data-bs-toggle="modal" data-bs-target="#psiUseModal">Pszi Pontok Használata</button>
                <button v-if="psiSkill.currentPszi < availablePsi" class="btn btn-success ms-2 mt-2" type="button" @click="refreshPsi">Pszi Pontok Teljes Feltöltése</button>
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
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary"  @click="submitPsiUse" data-bs-dismiss="modal">Save changes</button>
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
                    <p v-if="psiSkill.learned"><button v-if="psiSkill.staticAsztral > 0" class="btn btn-danger ms-2 mt-2" type="button" @click="destroyStaticAsztral">Lebont</button></p>
                    <p v-if="psiSkill.learned"><button v-if="psiSkill.staticAsztral < psiSkill.maxPszi" class="btn btn-success ms-2 mt-2" type="button" @click="buildStaticAsztral">Felépit</button></p>
                    <p class="border-bottom border-secondary">{{ psiSkill.staticAsztral }}</p>
                    <p>Dinamikus</p>
                    <p class="border-bottom border-secondary">{{ psiSkill.dinamicAsztarl }}</p>
                    <p>ME</p>
                    <p>{{ AME }}</p>
                </div>
                <div class="col">
                    <p>MENTÁL</p>
                    <p>Statikus</p>
                    <p v-if="psiSkill.learned"><button v-if="psiSkill.staticMental > 0" class="btn btn-danger ms-2 mt-2" type="button" @click="destroyStaticMental">Lebont</button></p>
                    <p v-if="psiSkill.learned"><button v-if="psiSkill.staticMental < psiSkill.maxPszi" class="btn btn-success ms-2 mt-2" type="button" @click="buildStaticMental">Felépit</button></p>
                    <p class="border-bottom border-secondary">{{ psiSkill.staticMental }}</p>
                    <p>Dinamikus</p>
                    <p class="border-bottom border-secondary">{{ psiSkill.dinamicMental }}</p>
                    <p>ME</p>
                    <p>{{ MME }}</p>
                </div>
            </div>          
        </div>

        <!-- Psi view modals -->
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
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
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
            allPyarroni: false,
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
                return this.availablePyarronPsi(this.availablePsi);
            }
        },
    },
    methods: {
        ...mapMutations('currentCharacter', {
            updateCurrentPsiPoint: 'updateCurrentPsiPoint',
            updateStaticAsztral: 'updateStaticAsztral',
            updateStaticMental: 'updateStaticMental',
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
        },
        submitPsiUse() {
            if (parseInt(this.inputPsiUse) <= this.availablePsi && parseInt(this.inputPsiUse) > 0) {
                let updatedPsi = this.availablePsi - parseInt(this.inputPsiUse);
                this.inputPsiUse = 0;
                this.updateCurrentPsiPoint(updatedPsi);
                this.save();
            }
        },
        buildStaticAsztral() {
            this.updateStaticAsztral(this.psiSkill.maxPszi);
            this.save();
        },
        buildStaticMental() {
            this.updateStaticMental(this.psiSkill.maxPszi);
            this.save();
        },
        destroyStaticAsztral() {
            this.updateStaticAsztral(0);
            this.save();
        },
        destroyStaticMental() {
            this.updateStaticMental(0);
            this.save();
        },
    },
}
</script>