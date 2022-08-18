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
                                        <button type="button" class="btn btn-primary" @click="inputJellem=jellem.id; nextStep();">Választ</button>
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
                                        <button type="button" class="btn btn-primary" @click="inputFaj=faj.id; nextStep();">Választ</button>
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
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Bezár</button>
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
                                        <button type="button" class="btn btn-primary" @click="inputVallas=val.id; nextStep();">Választ</button>
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
                                        <button type="button" class="btn btn-primary" @click="inputKaszt=kaszLehetoseg.id; nextStep();">Választ</button>
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
            <div>
                 <div class="text-center mb-4 pt-3 border-top border-secondary">
                    <h2 class="fw-bold">Karakter Tulajdonságainak kidobása</h2>
                    <p>Amennyiben karakterének bizonyos tulajdonságaihoz megvan a különleges felkészités lehetőségének feltétele, és szeretne különleges felkészitest tenni, kattintson a kf nevű gombra a tulajdonság mellett ( a kf magábafoglal bizonyos veszélyeket, igy előfordulhat, hogy a tulajdonság csökken )</p>
                    <p>A generálás gomb az interaktiv karakterlaphoz vezett, ahol a további HM-ek szétoszthatók, képzetségek tanulhatók, előtörténet megirható, és a felszerelés, fegyverzet megadható.</p>
                </div>
                <div>
                    <p class="fs-4"><b>Erő: </b>{{ eroDobas }} <button v-if="eroKf" type="button" @click="kulonlegesFelkeszites('ERO')" class="btn btn-outline-success btn-sm ms-2">kf</button></p>
                    <p class="fs-4"><b>Gyorsaság: </b>{{ gyorsDobas }} <button v-if="gyorsKf" type="button" @click="kulonlegesFelkeszites('GYORS')" class="btn btn-outline-success btn-sm ms-2">kf</button></p>
                    <p class="fs-4"><b>Ügyesség: </b>{{ ugyDobas }} <button v-if="ugyKf" type="button" @click="kulonlegesFelkeszites('UGY')" class="btn btn-outline-success btn-sm ms-2">kf</button></p>
                    <p class="fs-4"><b>Állóképesség: </b>{{ alloDobas }} <button v-if="alloKf" type="button" @click="kulonlegesFelkeszites('ALLO')" class="btn btn-outline-success btn-sm ms-2">kf</button></p>
                    <p class="fs-4"><b>Egészség: </b>{{ egDobas }} <button v-if="egKf" type="button" @click="kulonlegesFelkeszites('EG')" class="btn btn-outline-success btn-sm ms-2">kf</button></p>
                    <p class="fs-4"><b>Szépség: </b>{{ szepDobas }} <button v-if="szepKf" type="button" @click="kulonlegesFelkeszites('SZEP')" class="btn btn-outline-success btn-sm ms-2">kf</button></p>
                    <p class="fs-4"><b>Inteligencia: </b>{{ intDobas }} <button v-if="intKf" type="button" @click="kulonlegesFelkeszites('INT')" class="btn btn-outline-success btn-sm ms-2">kf</button></p>
                    <p class="fs-4"><b>Akaraterő: </b>{{ akDobas }} <button v-if="akKf" type="button" @click="kulonlegesFelkeszites('AK')" class="btn btn-outline-success btn-sm ms-2">kf</button></p>
                    <p class="fs-4"><b>Asztrál: </b>{{ asztDobas }} <button v-if="asztKf" type="button" @click="kulonlegesFelkeszites('ASZT')" class="btn btn-outline-success btn-sm ms-2">kf</button></p>
                </div>
                <div class="d-grid text-center">
                    <button type="button" class="btn btn-primary btn-lg" @click="createCharacter">Generálás...</button>
                </div>
            </div>
        </div>
        <div v-else-if="step==7">
            <magus-character-sheet />
        </div>
    </div>
</template>

<script>
    import MagusCharacterSheet from './magus/MagusCharacterSheet.vue';
    import MagusKasztPreview from './magus/MagusKasztPreview.vue';
    import { mapGetters, mapMutations } from 'vuex';
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
                eroDobas: 0,
                eroKf: false,
                gyorsDobas: 0,
                gyorsKf: false,
                ugyDobas: 0,
                ugyKf: false,
                alloDobas: 0,
                alloKf: false,
                egDobas: 0,
                egKf: false,
                szepDobas: 0,
                szepKf: false,
                intDobas: 0,
                intKf: false,
                akDobas: 0,
                akKf: false,
                asztDobas: 0,
                asztKf: false,
                loading: false,
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
            ...mapMutations('currentCharacter', {
                 addCharacter: 'addCharacter',
            }),
            back() {
                if (this.step <= 1 || this.step >= 7) {
                    this.$emit('back');      
                } else {
                    this.step--;
                }
            },
            nextStep() {
                if (this.step == 5) {
                    this.throwAbilities();
                }
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
            throwAbilities() {
                let karakter = this.magusKaszt(this.inputKaszt);
                //Ero dobas
                if (karakter.ERO.sp[2] == 2) {
                    let dob1 = this.randomThrow(karakter.ERO.sp[0], karakter.ERO.sp[1]);
                    let dob2 = this.randomThrow(karakter.ERO.sp[0], karakter.ERO.sp[1]);
                    if (dob1 > dob2) {
                        this.eroDobas = dob1 + this.Faj.ERO;
                    } else {
                        this.eroDobas = dob2 + this.Faj.ERO;
                    }
                } else {
                    this.eroKf = false;
                    this.eroDobas = (this.randomThrow(karakter.ERO.sp[0], karakter.ERO.sp[1])) + this.Faj.ERO;
                    if (karakter.ERO.sp[2] == 1) {
                        if (this.eroDobas > 15) {
                            this.eroKf = true;
                        }
                    }
                }
                //Gyorsasag dobas
                if (karakter.GYORS.sp[2] == 2) {
                    let dob1 = this.randomThrow(karakter.GYORS.sp[0], karakter.GYORS.sp[1]);
                    let dob2 = this.randomThrow(karakter.GYORS.sp[0], karakter.GYORS.sp[1]);
                    if (dob1 > dob2) {
                        this.gyorsDobas = dob1 + this.Faj.GYORS;
                    } else {
                        this.gyorsDobas = dob2 + this.Faj.GYORS;
                    }
                } else {
                    this.gyorsKf = false;
                    this.gyorsDobas = (this.randomThrow(karakter.GYORS.sp[0], karakter.GYORS.sp[1])) + this.Faj.GYORS;
                    if (karakter.GYORS.sp[2] == 1) {
                        if (this.gyorsDobas > 15) {
                            this.gyorsKf = true;
                        }
                    }
                }
                //Ugyesseg dobas
                if (karakter.UGY.sp[2] == 2) {
                    let dob1 = this.randomThrow(karakter.UGY.sp[0], karakter.UGY.sp[1]);
                    let dob2 = this.randomThrow(karakter.UGY.sp[0], karakter.UGY.sp[1]);
                    if (dob1 > dob2) {
                        this.ugyDobas = dob1 + this.Faj.UGY;
                    } else {
                        this.ugyDobas = dob2 + this.Faj.UGY;
                    }
                } else {
                    this.ugyKf = false;
                    this.ugyDobas = (this.randomThrow(karakter.UGY.sp[0], karakter.UGY.sp[1])) + this.Faj.UGY;
                    if (karakter.UGY.sp[2] == 1) {
                        if (this.ugyDobas > 15) {
                            this.ugyKf = true;
                        }
                    }
                }
                //Allokepesseg dobas
                if (karakter.ALLO.sp[2] == 2) {
                    let dob1 = this.randomThrow(karakter.ALLO.sp[0], karakter.ALLO.sp[1]);
                    let dob2 = this.randomThrow(karakter.ALLO.sp[0], karakter.ALLO.sp[1]);
                    if (dob1 > dob2) {
                        this.alloDobas = dob1 + this.Faj.ALLO;
                    } else {
                        this.alloDobas = dob2 + this.Faj.ALLO;
                    }
                } else {
                    this.alloKf = false;
                    this.alloDobas = (this.randomThrow(karakter.ALLO.sp[0], karakter.ALLO.sp[1])) + this.Faj.ALLO;
                    if (karakter.ALLO.sp[2] == 1) {
                        if (this.alloDobas > 15) {
                            this.alloKf = true;
                        }
                    }
                }
                //Egeszseg dobas
                if (karakter.EG.sp[2] == 2) {
                    let dob1 = this.randomThrow(karakter.EG.sp[0], karakter.EG.sp[1]);
                    let dob2 = this.randomThrow(karakter.EG.sp[0], karakter.EG.sp[1]);
                    if (dob1 > dob2) {
                        this.egDobas = dob1 + this.Faj.EG;
                    } else {
                        this.egDobas = dob2 + this.Faj.EG;
                    }
                } else {
                    this.egKf = false;
                    this.egDobas = (this.randomThrow(karakter.EG.sp[0], karakter.EG.sp[1])) + this.Faj.EG;
                    if (karakter.EG.sp[2] == 1) {
                        if (this.egDobas > 15) {
                            this.egKf = true;
                        }
                    }
                }
                //Szepseg dobas
                if (karakter.SZEP.sp[2] == 2) {
                    let dob1 = this.randomThrow(karakter.SZEP.sp[0], karakter.SZEP.sp[1]);
                    let dob2 = this.randomThrow(karakter.SZEP.sp[0], karakter.SZEP.sp[1]);
                    if (dob1 > dob2) {
                        this.szepDobas = dob1 + this.Faj.SZEP;
                    } else {
                        this.szepDobas = dob2 + this.Faj.SZEP;
                    }
                } else {
                    this.szepKf = false;
                    this.szepDobas = (this.randomThrow(karakter.SZEP.sp[0], karakter.SZEP.sp[1])) + this.Faj.SZEP;
                    if (karakter.SZEP.sp[2] == 1) {
                        if (this.szepDobas > 15) {
                            this.szepKf = true;
                        }
                    }
                }
                //Inteligencia dobas
                if (karakter.INT.sp[2] == 2) {
                    let dob1 = this.randomThrow(karakter.INT.sp[0], karakter.INT.sp[1]);
                    let dob2 = this.randomThrow(karakter.INT.sp[0], karakter.INT.sp[1]);
                    if (dob1 > dob2) {
                        this.intDobas = dob1 + this.Faj.INT;
                    } else {
                        this.intDobas = dob2 + this.Faj.INT;
                    }
                } else {
                    this.intKf = false;
                    this.intDobas = (this.randomThrow(karakter.INT.sp[0], karakter.INT.sp[1])) + this.Faj.INT;
                    if (karakter.INT.sp[2] == 1) {
                        if (this.intDobas > 15) {
                            this.intKf = true;
                        }
                    }
                }
                //Akaratero dobas
                if (karakter.AK.sp[2] == 2) {
                    let dob1 = this.randomThrow(karakter.AK.sp[0], karakter.AK.sp[1]);
                    let dob2 = this.randomThrow(karakter.AK.sp[0], karakter.AK.sp[1]);
                    if (dob1 > dob2) {
                        this.akDobas = dob1 + this.Faj.AK;
                    } else {
                        this.akDobas = dob2 + this.Faj.AK;
                    }
                } else {
                    this.akKf = false;
                    this.akDobas = (this.randomThrow(karakter.AK.sp[0], karakter.AK.sp[1])) + this.Faj.AK;
                    if (karakter.AK.sp[2] == 1) {
                        if (this.akDobas > 15) {
                            this.akKf = true;
                        }
                    }
                }
                //Asztral dobas
                if (karakter.ASZT.sp[2] == 2) {
                    let dob1 = this.randomThrow(karakter.ASZT.sp[0], karakter.ASZT.sp[1]);
                    let dob2 = this.randomThrow(karakter.ASZT.sp[0], karakter.ASZT.sp[1]);
                    if (dob1 > dob2) {
                        this.asztDobas = dob1 + this.Faj.ASZT;
                    } else {
                        this.asztDobas = dob2 + this.Faj.ASZT;
                    }
                } else {
                    this.asztKf = false;
                    this.asztDobas = (this.randomThrow(karakter.ASZT.sp[0], karakter.ASZT.sp[1])) + this.Faj.ASZT;
                    if (karakter.ASZT.sp[2] == 1) {
                        if (this.asztDobas > 15) {
                            this.asztKf = true;
                        }
                    }
                }
            },
            randomThrow(min, max) {
                return Math.floor(Math.random() * (max - min + 1) ) + min;
            },
            kulonlegesFelkeszites(tul) {
                let result = this.randomThrow(1, 100);
                let mod = 0;
                if (result < 21) {
                    mod = 14;
                } 
                if (result >=21 && result < 51) {
                    mod = 17;
                }
                if (result >=51 && result < 76) {
                    mod = 18;
                }
                if (result >=76 && result < 96) {
                    mod = 19;
                }
                if (result > 95) {
                    mod = 20;
                } 
                switch(tul) {
                    case 'ERO':
                        this.eroDobas = mod + this.Faj.ERO;
                        this.eroKf = false;
                        break;
                    case 'GYORS':
                        this.gyorsDobas = mod + this.Faj.GYORS;
                        this.gyorsKf = false;
                        break;
                    case 'UGY':
                        this.ugyDobas = mod + this.Faj.UGY;
                        this.ugyKf = false;
                        break;
                    case 'ALLO':
                        this.alloDobas = mod + this.Faj.ALLO;
                        this.alloKf = false;
                        break;
                    case 'EG':
                        this.egDobas = mod + this.Faj.EG;
                        this.egKf = false;
                        break;
                    case 'SZEP':
                        this.szepDobas = mod + this.Faj.SZEP;
                        this.szepKf = false;
                        break;
                    case 'INT':
                        this.intDobas = mod + this.Faj.INT;
                        this.intKf = false;
                        break;
                    case 'AK':
                        this.akDobas = mod + this.Faj.AK;
                        this.akKf = false;
                        break;
                    case 'ASZT':
                        this.asztDobas = mod + this.Faj.ASZT;
                        this.asztKf = false;
                        break;
                    default:
                        // code block
                }
            },
            createCharacter() {
                let karakter = this.magusKaszt(this.inputKaszt);
                let epKezdo = karakter.Epalap;
                if (this.egDobas > 10) {
                    epKezdo += this.egDobas - 10;
                }
                let fpKezdo = karakter.Fpalap + karakter.FpSzint.sp[1];
                if (this.akDobas > 10) {
                    fpKezdo += this.akDobas - 10;
                }
                if (this.alloDobas > 10) {
                    fpKezdo += this.alloDobas - 10;
                }
                let kpKezdo = karakter.Kpalap + karakter.KpSzint;
                let kpPrecKezdo = karakter.KpPrecent;
                if (this.ugyDobas > 10) {
                    kpKezdo += this.ugyDobas - 10;
                    kpPrecKezdo += this.ugyDobas - 10;
                }
                if (this.intDobas > 10) {
                    kpKezdo += this.intDobas - 10;
                }
                let skillsFilterAf = karakter.skillsFirstLevel.af.filter(s => !this.Faj.skills.mf.includes(s));
                let skillsFilterMf = karakter.skillsFirstLevel.mf.filter(s => !this.Faj.skills.mf.includes(s));
                let skillsKezdoAf = skillsFilterAf.concat(this.Faj.skills.mf);
                let skillsKezdoMf = skillsFilterMf.concat(this.Faj.skills.mf);
                let mpKezdo = karakter.mpLevel.range[1];
                if (this.inputKaszt == 'BARD') {
                    if (this.intDobas > 10) {
                        mpKezdo = this.intDobas - 10;
                    }
                }

                let characterData = {
                    ERO: this.eroDobas,
                    GYORS: this.gyorsDobas,
                    UGY: this.ugyDobas,
                    ALLO: this.alloDobas,
                    EG: this.egDobas,
                    SZEP: this.szepDobas,
                    INT: this.intDobas,
                    AK: this.akDobas,
                    ASZT: this.asztDobas,
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
                    Nev: this.inputName,
                    Kaszt: this.inputKaszt,
                    Faj: this.inputFaj,
                    Jellem: this.inputJellem,
                    Vallas: this.inputVallas,
                    Szimbolum: this.inputSzimbolum,
                    Szulofold: this.inputSzulofold,
                    Iskola: this.inputIskola,
                    Szint: 1,
                    Tp: 0,
                    FpSzint: karakter.FpSzint.sp[1],
                    AktEp: epKezdo,
                    AktFp: fpKezdo,
                    KeSzint: 0,
                    TeSzint: 0,
                    VeSzint: 0,
                    CeSzint: 0,
                    KeMod: 0,
                    TeMod: 0,
                    VeMod: 0,
                    CeMod: 0,
                    HmLeft: karakter.HmSzint,
                    KpLeft: kpKezdo,
                    KpPrecentLeft: kpPrecKezdo,
                    FreeFegyverhasznalatAlap: karakter.skillsFirstLevel.FegyverhasznalatAlap,
                    FegyverhasznalatAlap: [],
                    FreeFegyverhasznalatMester: karakter.skillsFirstLevel.FegyverhasznalatMester,
                    FegyverhasznalatMester: [],
                    FreeFegyverdobasAlap: karakter.skillsFirstLevel.FegyverdobasAlap,
                    FegyverdobasAlap: [],
                    FreeFegyverdobasMester: karakter.skillsFirstLevel.FegyverdobasMester,
                    FegyverdobasMester: [],
                    FreeNyelvismeretAf: karakter.skillsFirstLevel.NyelvismeretAf,
                    NyelvismeretAf: [],
                    FreeNyelvismeretMf: karakter.skillsFirstLevel.NyelvismeretMf,
                    NyelvismeretMf: [],
                    FreeSzakmaAf: karakter.skillsFirstLevel.SzakmaAf,
                    SzakmaAf: [],
                    FreeSzakmaMf: karakter.skillsFirstLevel.SzakmaMf,
                    SzakmaMf: [],
                    Pszi: {
                        learned: karakter.Pszi.learned,
                        atlevel: karakter.Pszi.atlevel,
                        level: karakter.Pszi.level,
                        maxPszi: karakter.Pszi.maxPszi,
                        psziPointLevel: karakter.Pszi.psziPointLevel,
                        currentPszi: karakter.Pszi.currentPszi,
                        school: karakter.Pszi.school,
                        staticAsztral: 0,
                        staticMental: 0,
                        dinamicAsztarl: 0,
                        dinamicMental: 0,
                    },
                    szazalekosKepzetsegek: {
                        maszas: {
                            precent: karakter.skillsFirstLevel.precent.maszas + this.Faj.skills.precent.maszas,
                            precentAdded: 0,
                            kpAdded: 0,
                        },
                        eses: {
                            precent: karakter.skillsFirstLevel.precent.eses + this.Faj.skills.precent.eses,
                            precentAdded: 0,
                            kpAdded: 0,
                        },
                        ugras: {
                            precent: karakter.skillsFirstLevel.precent.ugras + this.Faj.skills.precent.ugras,
                            precentAdded: 0,
                            kpAdded: 0,
                        },
                        lopakodas: {
                            precent: karakter.skillsFirstLevel.precent.lopakodas + this.Faj.skills.precent.lopakodas,
                            precentAdded: 0,
                            kpAdded: 0,
                        },
                        rejtozes: {
                            precent: karakter.skillsFirstLevel.precent.rejtozes + this.Faj.skills.precent.rejtozes,
                            precentAdded: 0,
                            kpAdded: 0,
                        },
                        koteltanc: {
                            precent: karakter.skillsFirstLevel.precent.koteltanc + this.Faj.skills.precent.koteltanc,
                            precentAdded: 0,
                            kpAdded: 0,
                        },
                        zsebmetszes: {
                            precent: karakter.skillsFirstLevel.precent.zsebmetszes + this.Faj.skills.precent.zsebmetszes,
                            precentAdded: 0,
                            kpAdded: 0,
                        },
                        csabdafelfedezes: {
                            precent: karakter.skillsFirstLevel.precent.csabdafelfedezes + this.Faj.skills.precent.csabdafelfedezes,
                            precentAdded: 0,
                            kpAdded: 0,
                        },
                        zarnyitas: {
                            precent: karakter.skillsFirstLevel.precent.zarnyitas + this.Faj.skills.precent.zarnyitas,
                            precentAdded: 0,
                            kpAdded: 0,
                        },
                        titkosajto: {
                            precent: karakter.skillsFirstLevel.precent.titkosajto + this.Faj.skills.precent.titkosajto,
                            precentAdded: 0,
                            kpAdded: 0,
                        },
                    },
                    LearnedSkills:{
                        af: skillsKezdoAf,
                        mf: skillsKezdoMf,
                    },
                    Pancel: {
                        id: 'NON',
                        equipped: false,
                        currentSfe: 0,
                    },
                    Pajzs: {
                        id: 'NON',
                        equipped: false,
                    },
                    FegyverekKozelharci: [],
                    FegyverekTavolsagi: [],
                    LeftHand:'',
                    RightHand: '',
                    Kincsek: {
                        rez: 10,
                        ezust: 2,
                        arany: 6,
                        mithrill: 0,
                        dragako: 0,
                        egyebb: [],
                    },
                    Felszereles: { 
                        felszereles: []
                    },
                    description: '',
                    notes: [],
                    Magia: {
                        maxMp: mpKezdo,
                        aktMp: mpKezdo,
                    },
                };

                axios.post('/character/create', {
                    game: 'MAGUS',
                    characterData: characterData,
                })
                .then( (response) => {
                    this.addCharacter({
                        id: response.data.id,
                        characterData: response.data.character_data,
                    });
                    this.nextStep();
                })
                .catch( (error) => {
                    console.log(error);
                    this.back();
                });
            },
        },
    }
</script>