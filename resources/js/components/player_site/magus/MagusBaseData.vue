<template>
    <div>
        <h4 class="text-center mt-5 border-bottom border-secondary">Karakter adatai</h4>
        <p class="fs-4 border-bottom border-secondary mt-5"><span class="fw-bolder me-2">Név: </span><span>{{ magusCharacter.Nev }}</span></p>
        <p class="fs-4 border-bottom border-secondary"><span class="fw-bolder me-2">Kaszt: </span><span>{{ Kaszt.name }}</span><button type="button" class="btn btn-outline-success btn-sm ms-2" data-bs-toggle="modal" data-bs-target="#kasztModal">i</button></p>
        <p class="fs-4 border-bottom border-secondary"><span class="fw-bolder me-2">Faj: </span><span>{{ Faj.name }}</span><button type="button" class="btn btn-outline-success btn-sm ms-2" data-bs-toggle="modal" data-bs-target="#fajModal">i</button></p>
        <p class="fs-4 border-bottom border-secondary"><span class="fw-bolder me-2">Jellem: </span><span>{{ Jellem.name }}</span> <button v-if="Jellem.name !== ''" type="button" class="btn btn-outline-success btn-sm ms-2" data-bs-toggle="modal" data-bs-target="#jellemModal">i</button></p>
        <p class="fs-4 border-bottom border-secondary"><span class="fw-bolder me-2">Vallás: </span><span>{{ magusCharacter.Vallas }}</span></p>
        <p class="fs-4 border-bottom border-secondary"><span class="fw-bolder me-2">Szimbólum: </span><span>{{ magusCharacter.Szimbolum }}</span></p>
        <p class="fs-4 border-bottom border-secondary"><span class="fw-bolder me-2">Szülőföld: </span><span>{{ magusCharacter.Szulofold }}</span></p>
        <p class="fs-4 border-bottom border-secondary mb-5"><span class="fw-bolder me-2">Iskola: </span><span>{{ magusCharacter.Iskola }}</span></p>
        <div class="my-5 text-center">
            <p class="border border-secondary p-3 fs-1 fw-bolder">{{ magusCharacter.Szint }}</p>
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
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
import MagusKasztPreview from './MagusKasztPreview.vue';
export default {
    components: {
           MagusKasztPreview
        },
    computed: {
        ...mapGetters('currentCharacter', {
            magusCharacter: 'magusCharacter',
        }),
        ...mapGetters('magusAligments', {
                aligment: 'aligment'
        }),
        ...mapGetters('magusRaces', {
            race: 'race'
        }),
        ...mapGetters('magusClasses', {
            magusKaszt: 'magusClass'
        }),
        Jellem() {
            let jellem = this.aligment(this.magusCharacter.Jellem);
            if (jellem) {
                return jellem
            } else {
                return {name: 'Not selected', description: 'Not selected'}
            }
        },
        Faj() {  
            return this.race(this.magusCharacter.Faj);
        },
        Kaszt() {
            return this.magusKaszt(this.magusCharacter.Kaszt);
        },
    }
}
</script>