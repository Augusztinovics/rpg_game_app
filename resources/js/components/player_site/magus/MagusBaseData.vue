<template>
    <div>
        <h4 class="text-center mt-5 border-bottom border-secondary">Karakter adatai</h4>
        <p class="fs-4 border-bottom border-secondary mt-5"><span class="fw-bolder me-2">Név: </span><span>{{ characterName }}</span><span><button class="btn btn-outline-success btn-sm my-1 d-block" type="button" data-bs-toggle="modal" data-bs-target="#nevModal">Változtat</button></span></p>
        <p class="fs-4 border-bottom border-secondary"><span class="fw-bolder me-2">Kaszt: </span><span>{{ Kaszt.name }}</span><button type="button" class="btn btn-outline-success btn-sm ms-2" data-bs-toggle="modal" data-bs-target="#kasztModal">i</button></p>
        <p class="fs-4 border-bottom border-secondary"><span class="fw-bolder me-2">Faj: </span><span>{{ Faj.name }}</span><button type="button" class="btn btn-outline-success btn-sm ms-2" data-bs-toggle="modal" data-bs-target="#fajModal">i</button></p>
        <p class="fs-4 border-bottom border-secondary"><span class="fw-bolder me-2">Jellem: </span><span>{{ Jellem.name }}</span> <button v-if="Jellem.name !== ''" type="button" class="btn btn-outline-success btn-sm ms-2" data-bs-toggle="modal" data-bs-target="#jellemModal">i</button><span><button class="btn btn-outline-success btn-sm my-1 d-block" type="button" data-bs-toggle="modal" data-bs-target="#jellemUpdateModal">Változtat</button></span></p>
        <p class="fs-4 border-bottom border-secondary"><span class="fw-bolder me-2">Vallás: </span><span>{{ Vallas.name }}</span><span><button v-if="Vallas.name !== ''" type="button" class="btn btn-outline-success btn-sm ms-2" data-bs-toggle="modal" data-bs-target="#vallasInfoModal">i</button><button class="btn btn-outline-success btn-sm my-1 d-block" type="button" data-bs-toggle="modal" data-bs-target="#vallasModal">Változtat</button></span></p>
        <p class="fs-4 border-bottom border-secondary"><span class="fw-bolder me-2">Szimbólum: </span><span>{{ szimbolum }}</span><span><button class="btn btn-outline-success btn-sm my-1 d-block" type="button" data-bs-toggle="modal" data-bs-target="#szimbolumModal">Változtat</button></span></p>
        <p class="fs-4 border-bottom border-secondary"><span class="fw-bolder me-2">Szülőföld: </span><span>{{ szulofold }}</span><span><button class="btn btn-outline-success btn-sm my-1 d-block" type="button" data-bs-toggle="modal" data-bs-target="#szulofoldModal">Változtat</button></span></p>
        <p class="fs-4 border-bottom border-secondary mb-5"><span class="fw-bolder me-2">Iskola: </span><span>{{ iskola }}</span><span><button class="btn btn-outline-success btn-sm my-1 d-block" type="button" data-bs-toggle="modal" data-bs-target="#iskolaModal">Változtat</button></span></p>
        <div class="my-5 text-center">
            <p class="border border-secondary p-3 fs-1 fw-bolder">{{ szint }}</p>
            <p class="fs-3 mt-2">Tapasztalati szint</p>
        </div>

         <!-- -----Info Modals------- -->

        <!-- JELLEM -->
        <div class="modal fade" id="jellemModal" tabindex="-1" aria-labelledby="jellemModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="jellemModalLabel">{{ Jellem.name }}</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        {{ Jellem.description }}
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
        <!-- VALLAS -->
        <div class="modal fade" id="vallasInfoModal" tabindex="-1" aria-labelledby="vallasInfoModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="vallasInfoModalLabel">{{ Vallas.name }}</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <p>Szférák: {{ Vallas.sferaText }}</p>
                        <p v-for="des in Vallas.description" :key="des.id">{{ des }}</p>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>

        <!-- FAJ -->
        <div class="modal fade" id="fajModal" tabindex="-1" aria-labelledby="fajModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="fajModalLabel"><b>{{ Faj.name }}</b></h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                       <p v-for="des, index in Faj.description" :key="'D' + index">{{ des }}</p>
                       <p> <b>Különleges képességek </b></p>
                       <p v-for="special, index in Faj.specials" :key="'S' + index">{{ special }}</p>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>

        <!-- KASZT -->
        <div class="modal fade" id="kasztModal" tabindex="-1" aria-labelledby="kasztModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="kasztModalLabel">{{ Kaszt.name }}</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <magus-kaszt-preview :kaszt="Kaszt" />
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>

        <!-- Update modals -->
        <!-- nev modal -->
        <div class="modal fade" id="nevModal" tabindex="-1" aria-labelledby="nevModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="nevModalLabel">Uj név megadása</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                <div class="modal-body">
                    <input type="text" class="form-control" id="egyebb-text" v-model="inputName">
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary"  @click="updateNewName" data-bs-dismiss="modal">Save changes</button>
                </div>
                </div>
            </div>
        </div>
        <!-- jellem modal -->
        <div class="modal fade" id="jellemUpdateModal" tabindex="-1" aria-labelledby="jellemUpdateModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="jellemUpdateModalLabel">Uj jellem megadása</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                <div class="modal-body">
                    <select class="form-select form-select-lg mb-3" v-model="inputJellem" aria-label="jellem-select">
                        <option v-for="jel in aligments" :key="jel.id" :value="jel.id">{{ jel.name }}</option>
                    </select>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary"  @click="updateNewJellem" data-bs-dismiss="modal">Save changes</button>
                </div>
                </div>
            </div>
        </div>
        <!-- vallas modal -->
        <div class="modal fade" id="vallasModal" tabindex="-1" aria-labelledby="vallasModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="vallasModalLabel">Uj vallás megadása</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                <div class="modal-body">
                     <select class="form-select form-select-lg mb-3" v-model="inputVallas" aria-label="vallas-select">
                        <option v-for="val in religions" :key="val.id" :value="val.id">{{ val.name }}</option>
                    </select>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary"  @click="updateNewVallas" data-bs-dismiss="modal">Save changes</button>
                </div>
                </div>
            </div>
        </div>
        <!-- szimbolum modal -->
        <div class="modal fade" id="szimbolumModal" tabindex="-1" aria-labelledby="szimbolumModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="szimbolumModalLabel">Uj szimbólum megadása</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                <div class="modal-body">
                    <input type="text" class="form-control" id="egyebb-text" v-model="inputSzimbolum">
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary"  @click="updateNewSzimbolum" data-bs-dismiss="modal">Save changes</button>
                </div>
                </div>
            </div>
        </div>
        <!-- szulofold modal -->
        <div class="modal fade" id="szulofoldModal" tabindex="-1" aria-labelledby="szulofoldModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="szulofoldModalLabel">Uj szülőföld megadása</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                <div class="modal-body">
                    <input type="text" class="form-control" id="egyebb-text" v-model="inputSzulofold">
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary"  @click="updateNewSzulofold" data-bs-dismiss="modal">Save changes</button>
                </div>
                </div>
            </div>
        </div>
        <!-- iskola modal -->
        <div class="modal fade" id="iskolaModal" tabindex="-1" aria-labelledby="iskolaModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="iskolaModalLabel">Uj iskola megadása</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                <div class="modal-body">
                    <input type="text" class="form-control" id="egyebb-text" v-model="inputIskola">
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary"  @click="updateNewIskola" data-bs-dismiss="modal">Save changes</button>
                </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from 'vuex';
import MagusKasztPreview from './MagusKasztPreview.vue';
export default {
    components: {
           MagusKasztPreview
    },
    data() {
        return {
            inputName: '',
            inputJellem: '',
            inputVallas: '',
            inputSzimbolum: '',
            inputSzulofold: '',
            inputIskola: '',
        }
    },
    computed: {
        ...mapGetters('currentCharacter', {
            magusCharacter: 'magusCharacter',
        }),
        ...mapGetters('magusAligments', {
                aligment: 'aligment',
                aligments: 'aligments',
        }),
        ...mapGetters('magusRaces', {
            race: 'race'
        }),
        ...mapGetters('magusClasses', {
            magusKaszt: 'magusClass'
        }),
        ...mapGetters('magusReligions', {
            religions: 'religions',
            religion: 'religion',
        }),
        Jellem() {
            let jellem = this.aligment(this.magusCharacter.Jellem);
            if (jellem) {
                return jellem
            } else {
                return {name: 'Not selected', description: 'Not selected'}
            }
        },
        Vallas() {
            let vallas = this.religion(this.magusCharacter.Vallas)
            if (vallas) {
                return vallas;
            } else {
                return {name: '', description: '', sferaText: ''}
            }
        },
        Faj() {  
            return this.race(this.magusCharacter.Faj);
        },
        Kaszt() {
            return this.magusKaszt(this.magusCharacter.Kaszt);
        },
        szint() {
            return this.magusCharacter.Szint;
        },
        characterName() {
            return this.magusCharacter.Nev;
        },
        szimbolum() {
            return this.magusCharacter.Szimbolum;
        },
        szulofold() {
            return this.magusCharacter.Szulofold;
        },
        iskola() {
            return this.magusCharacter.Iskola;
        },
    },
    methods: {
        ...mapMutations('currentCharacter', {
            updateName: 'updateName',
            updateJellem: 'updateJellem',
            updateVallas: 'updateVallas',
            updateSzulofold: 'updateSzulofold',
            updateIskola: 'updateIskola',
            updateSzimbolum: 'updateSzimbolum',
        }),
        ...mapActions('currentCharacter', {
            save: 'save'
        }),
        updateNewName() {
            if (this.inputName != '') {
                this.updateName(this.inputName);
                this.save();
            }
        },
        updateNewJellem() {
            if (this.inputJellem != '') {
                this.updateJellem(this.inputJellem);
                this.save();
            }
        },
        updateNewVallas() {
            if (this.inputVallas != '') {
                this.updateVallas(this.inputVallas);
                this.save();
            }
        },
        updateNewSzulofold() {
            if (this.inputSzulofold != '') {
                this.updateSzulofold(this.inputSzulofold);
                this.save();
            }
        },
        updateNewSzimbolum() {
            if (this.inputSzimbolum != '') {
                this.updateSzimbolum(this.inputSzimbolum);
                this.save();
            }
        },
        updateNewIskola() {
            if (this.inputIskola != '') {
                this.updateIskola(this.inputIskola);
                this.save();
            }
        },
    },
    mounted() {
        this.inputName = this.characterName;
        this.inputJellem = this.Jellem.id;
        this.inputVallas = this.vallas;
        this.inputSzimbolum = this.szimbolum;
        this.inputSzulofold = this.szulofold;
        this.inputIskola = this.iskola;
    },
}
</script>