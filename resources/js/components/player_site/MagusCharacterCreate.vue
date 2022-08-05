<template>
    <div class="container-fluid">
        <div>
            <button class="btn btn-lg btn-success m-3" @click="back">Back</button>
        </div>
        <div v-if="step==1">
            <!-- nev, szulofold, iskola, szimbolum input -->
            <div>
                <div class="text-center mb-4 pt-3 border-top border-secondary">
                    <h2 class="fw-bold">A karakter álltalános adatai</h2>
                    <p>Kérem adja meg a karaktere álltalános adatait, ezen adatok később a karakterlapon megváltoztathatók</p>
                </div>
                
                <div class="mb-4">
                    <label for="name" class="form-label text-start fs-4 fw-bold">A karakter neve:</label> <br>
                    <input type="text" class="form-control form-control-lg" id="name" v-model="inputName">
                </div>
                <div class="mb-4">
                    <label for="szulofold" class="form-label text-start fs-4 fw-bold">A karakter szülőföldje:</label> <br>
                    <input type="text" class="form-control form-control-lg" id="szulofold" v-model="inputSzulofold">
                </div>
                <div class="mb-4">
                    <label for="iskola" class="form-label text-start fs-4 fw-bold">A karakter iskolája:</label> <br>
                    <input type="text" class="form-control form-control-lg" id="iskola" v-model="inputIskola">
                </div>
                <div class="mb-5">
                    <label for="szimbolum" class="form-label text-start fs-4 fw-bold">A karakter szimbóluma:</label> <br>
                    <input type="text" class="form-control form-control-lg" id="szimbolum" v-model="inputSzimbolum">
                </div>
                <div class="d-grid text-center">
                    <button type="button" class="btn btn-primary btn-lg" @click="nextStep">Tovább...</button>
                </div>
            </div>
        </div>
        <div v-else-if="step==2">
            <!-- jellem valasztas -->
            <div>
                <div class="text-center mb-4 pt-3 border-top border-secondary">
                    <h2 class="fw-bold">A karakter jelleme</h2>
                    <p>Kérem választjon a karakterének jellemet, ez a választás később a karakterlapon megváltoztathatók</p>
                    <p class="fs-4 fw-bold">A választott jellem: </p>
                    <p class="fs-4 fw-bold p-2 border border-secondary">{{ Jellem.name }}</p>
                </div>
                <div>
                    <div class="accordion" id="accordionPanelsStayOpenExample">
                        <div v-for="jellem, index in aligments" :key="'Jellem' + index" class="accordion-item">
                            <h2 class="accordion-header text-center" :id="'Jellem' + index + '-heading'">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" :data-bs-target="'#' + 'Jellem' + index" aria-expanded="false" :aria-controls="'Jellem' + index">
                                    {{ jellem.name }}
                                </button>
                            </h2>
                            <div :id="'Jellem' + index" class="accordion-collapse collapse" :aria-labelledby="'Jellem' + index + '-heading'">
                                <div class="accordion-body">
                                    <p>{{ jellem.description }}</p>
                                    <div class="d-grid text-center">
                                        <button type="button" class="btn btn-primary" @click="inputJellem=jellem.id">Választ</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="d-grid text-center">
                    <button type="button" class="btn btn-primary btn-lg" @click="nextStep">Tovább...</button>
                </div>
            </div>
        </div>
        <div v-else-if="step==3">
            <!-- faj valasztas -->
            <div>
                <div class="text-center mb-4 pt-3 border-top border-secondary">
                    <h2 class="fw-bold">A Faj</h2>
                    <p>Kérem válassza ki, hogy karaktere melyik fajhoz tartozik, ez a választás később már nem változtatható!!!</p>
                    <p>FIGYELEM egyes fajok csak néhány kaszt képviselői lehetnek</p>
                    <p class="fs-4 fw-bold">A választott faj: </p>
                    <p class="fs-4 fw-bold p-2 border border-secondary">{{ Faj.name }}</p>
                </div>
                <div>
                    <div class="accordion" id="accordionPanelsStayOpenExample">
                        <div v-for="faj, index in races" :key="'Faj' + index" class="accordion-item">
                            <h2 class="accordion-header text-center" :id="'Faj' + index + '-heading'">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" :data-bs-target="'#' + 'Faj' + index" aria-expanded="false" :aria-controls="'Faj' + index">
                                    {{ faj.name }}
                                </button>
                            </h2>
                            <div :id="'Faj' + index" class="accordion-collapse collapse" :aria-labelledby="'Faj' + index + '-heading'">
                                <div class="accordion-body">
                                    <p><b>Tulajdonság módositók:</b></p>
                                    <p><b>Erő: <span v-if="faj.ERO > 0">+</span>{{ faj.ERO }}</b></p>
                                    <p><b>Gyorsaság: <span v-if="faj.GYORS > 0">+</span>{{ faj.GYORS }}</b></p>
                                    <p><b>Ügyesség: <span v-if="faj.UGY > 0">+</span>{{ faj.UGY }}</b></p>
                                    <p><b>Állóképesség: <span v-if="faj.ALLO > 0">+</span>{{ faj.ALLO }}</b></p>
                                    <p><b>Egészség: <span v-if="faj.EG > 0">+</span>{{ faj.EG }}</b></p>
                                    <p><b>Szépség: <span v-if="faj.SZEP > 0">+</span>{{ faj.SZEP }}</b></p>
                                    <p><b>Inteligencia: <span v-if="faj.INT > 0">+</span>{{ faj.INT }}</b></p>
                                    <p><b>Akaraterő: <span v-if="faj.AK > 0">+</span>{{ faj.AK }}</b></p>
                                    <p><b>Asztrál: <span v-if="faj.ASZT > 0">+</span>{{ faj.ASZT }}</b></p>
                                    <p v-if="faj.CE > 0"><b>Célzó érték módositó: {{ faj.CE}}</b></p>
                                    <p><b>Faji képzettségek:</b></p>
                                    <p><b>Mesterfokú:</b></p>
                                    <p v-for="kepzetseg, index in faj.skills.mf" :key="'kp' + index">{{ skill(kepzetseg).name }}<button type="button" @click="skillInfo(kepzetseg)" class="btn btn-outline-success btn-sm ms-2" data-bs-toggle="modal" data-bs-target="#skillModal">i</button></p>
                                    <p><b>Százalékos képzettségek:</b></p>
                                    <p v-for="precSkill, key in faj.skills.precent" :key="key">{{ skillPrecent(key).name }} +{{ precSkill }}% <button type="button" @click="skillPrecInfo(key)" class="btn btn-outline-success btn-sm ms-2" data-bs-toggle="modal" data-bs-target="#skillpModal">i</button></p>
                                    <div v-if="faj.forbittenClasses.length > 0">
                                        <p><b>Tiltott kasztok:</b></p>
                                        <p v-for="tilosKaszt, index in faj.forbittenClasses" :key="'Kaszt' + index">{{ Kaszt(tilosKaszt)}}</p>
                                    </div> 
                                    <p><b>A faj leirása:</b></p>
                                    <p v-for="des, index in faj.description" :key="'D' + index">{{ des }}</p>
                                    <p> <b>Különleges képességek </b></p>
                                    <p v-for="special, index in faj.specials" :key="'S' + index">{{ special }}</p>
                                    <div class="d-grid text-center">
                                        <button type="button" class="btn btn-primary" @click="inputFaj=faj.id">Választ</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="d-grid text-center">
                    <button type="button" class="btn btn-primary btn-lg" @click="nextStep">Tovább...</button>
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
        <div v-else-if="step==4">
            <!-- vallas valasztas -->
            <div>
                <div class="text-center mb-4 pt-3 border-top border-secondary">
                    <h2 class="fw-bold">Vallás választása</h2>
                    <p>Kérem válassza ki, hogy karaktere melyik vallást követi, ez a választás papok és paplovagok esetében később már nem változtatható!!!</p>
                    <p>FIGYELEM papok és paplovagok az itt választott vallás képviselői lesznek</p>
                    <p class="fs-4 fw-bold">A választott vallás: </p>
                    <p class="fs-4 fw-bold p-2 border border-secondary">{{ Vallas.name }}</p>
                </div>
                <div>
                    <div class="accordion" id="accordionPanelsStayOpenExample">
                        <div v-for="val, index in religions" :key="'Vallas' + index" class="accordion-item">
                            <h2 class="accordion-header text-center" :id="'Vallas' + index + '-heading'">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" :data-bs-target="'#' + 'Vallas' + index" aria-expanded="false" :aria-controls="'Vallas' + index">
                                    {{ val.name }}
                                </button>
                            </h2>
                            <div :id="'Vallas' + index" class="accordion-collapse collapse" :aria-labelledby="'Vallas' + index + '-heading'">
                                <div class="accordion-body">
                                    <p><b>Szférák: </b> {{ val.sferaText }}</p>
                                    <p v-for="valDes, index in val.description" :key="val.id + index">{{ valDes }}</p>
                                    <div class="d-grid text-center">
                                        <button type="button" class="btn btn-primary" @click="inputVallas=val.id">Választ</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="d-grid text-center">
                    <button type="button" class="btn btn-primary btn-lg" @click="nextStep">Tovább...</button>
                </div>
            </div>
        </div>
        <div v-else-if="step==5">
            <!-- class valasztas -->
            <div>
                <div class="text-center mb-4 pt-3 border-top border-secondary">
                    <h2 class="fw-bold">Karakter Kaszt választása</h2>
                    <p>Kérem válassza ki, hogy karaktere melyik kasztba tartozik, ez a választás később már nem változtatható!!!</p>
                    <p class="fs-4 fw-bold">A választott kaszt: </p>
                    <p class="fs-4 fw-bold p-2 border border-secondary">{{ Kaszt(inputKaszt) }}</p>
                </div>
                <div>
                    <div class="accordion" id="accordionPanelsStayOpenExample">
                        <div v-for="kaszLehetoseg, index in availableClasses" :key="'Kaszt' + index" class="accordion-item">
                            <h2 class="accordion-header text-center" :id="'Kaszt' + index + '-heading'">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" :data-bs-target="'#' + 'Kaszt' + index" aria-expanded="false" :aria-controls="'Kaszt' + index">
                                    {{ kaszLehetoseg.name }}
                                </button>
                            </h2>
                            <div :id="'Kaszt' + index" class="accordion-collapse collapse" :aria-labelledby="'Kaszt' + index + '-heading'">
                                <div class="accordion-body">
                                    <magus-kaszt-preview :kaszt="kaszLehetoseg" />
                                    <div class="d-grid text-center">
                                        <button type="button" class="btn btn-primary" @click="inputKaszt=kaszLehetoseg.id">Választ</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="d-grid text-center">
                    <button type="button" class="btn btn-primary btn-lg" @click="nextStep">Tovább...</button>
                </div>
            </div>
        </div>
        <div v-else-if="step==6">
            <!-- tulajdonsag dobasok -->
        </div>
        <div v-else-if="step==7">
            <magus-character-sheet />
        </div>
    </div>
</template>

<script>
    import MagusCharacterSheet from './magus/MagusCharacterSheet.vue';
    import MagusKasztPreview from './magus/MagusKasztPreview.vue';
    import { mapGetters } from 'vuex';
    export default {
         components: {
            MagusCharacterSheet,
            MagusKasztPreview,
        },
        data() {
            return {
                step: 1,
                inputName: 'Név',
                inputJellem: 'E',
                inputSzimbolum: 'Semmi',
                inputSzulofold: 'Születet',
                inputIskola: 'Iskola',
                inputFaj: 'HUMAN',
                inputVallas: 'ATE',
                inputKaszt: 'HARCOS',
                infoSkillId: 'FEGYVER_HASZNALAT',
                infoSkillPrecId: 'maszas',
            }
        },
        computed: {
            ...mapGetters('magusAligments', {
                aligment: 'aligment',
                aligments: 'aligments',
            }),
            ...mapGetters('magusRaces', {
                race: 'race',
                races: 'races',
            }),
            ...mapGetters('magusSkills', {
                skill: 'skill',
                skillPrecent: 'skillPrecent',
            }),
            ...mapGetters('magusClasses', {
                magusKaszt: 'magusClass',
                magusClasses: 'magusClasses',
            }),
            ...mapGetters('magusReligions', {
                religions: 'religions',
                religion: 'religion',
            }),
            Jellem() {
                let jellem = this.aligment(this.inputJellem);
                if (jellem) {
                    return jellem
                } else {
                    return {name: 'Not selected', description: 'Not selected'}
                }
            },
            Faj() {  
                return this.race(this.inputFaj);
            },
            Vallas() {
                let vallas = this.religion(this.inputVallas)
                if (vallas) {
                    return vallas;
                } else {
                    return {name: '', description: '', sferaText: ''}
                }
            },
            availableClasses() {
                return this.magusClasses.filter(c => !this.Faj.forbittenClasses.includes(c.id));
            },
        },
        methods: {
            back() {
                if (this.step <= 1 || this.step >= 7) {
                    this.$emit('back');      
                } else {
                    this.step--;
                }
            },
            nextStep() {
                this.step++;
            },
            skillInfo(id) {
                this.infoSkillId = id;
            },
            skillPrecInfo(id) {
                this.infoSkillPrecId = id;
            },
            Kaszt(id) {
                return this.magusKaszt(id).name;
            },
        },
    }
</script>