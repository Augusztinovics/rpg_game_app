<template>
    <div>
        <div class="text-center border-bottom border-secondary">
                <h4>Kincsek</h4>
                <button class="btn btn-success my-3 bg-green-leather costum-btn" type="button" :disabled="loading" data-bs-toggle="modal" data-bs-target="#vagyonModal">Vagyon hozzáadása</button>
                <button class="btn btn-danger my-3 ms-2 bg-red-leather costum-btn" type="button" :disabled="loading" data-bs-toggle="modal" data-bs-target="#vagyonKifizetesModal">Vagyon kifizetése</button>
        </div>
        <div class="row">
            <div class="col text-center">
                <h5>réz</h5>
                <div class="row">
                    <div class="col-8">
                        <p>{{ rez }}</p>
                    </div>
                    <div class="col-4">
                        <button class="btn btn-outline-success btn-sm my-1 d-block" type="button" @click=" modKincsek(1, 0, 0, 0, 0, '+')" :disabled="loading">+</button>
                        <button class="btn btn-outline-danger btn-sm my-1 d-block" type="button" @click=" modKincsek(1, 0, 0, 0, 0, '-')" :disabled="loading">-</button>
                    </div>
                </div>
            </div>
            <div class="col text-center">
                <h5>ezüst</h5>
                <div class="row">
                    <div class="col-8">
                        <p>{{ ezust }}</p>
                    </div>
                    <div class="col-4">
                        <button class="btn btn-outline-success btn-sm my-1 d-block" type="button" @click=" modKincsek(0, 1, 0, 0, 0, '+')" :disabled="loading">+</button>
                        <button class="btn btn-outline-danger btn-sm my-1 d-block" type="button" @click=" modKincsek(0, 1, 0, 0, 0, '-')" :disabled="loading">-</button>
                    </div>
                </div>
            </div>
            <div class="col text-center">
                <h5>arany</h5>
                <div class="row">
                    <div class="col-8">
                        <p>{{ arany }}</p>
                    </div>
                    <div class="col-4">
                        <button class="btn btn-outline-success btn-sm my-1 d-block" type="button" @click=" modKincsek(0, 0, 1, 0, 0, '+')" :disabled="loading">+</button>
                        <button class="btn btn-outline-danger btn-sm my-1 d-block" type="button" @click=" modKincsek(0, 0, 1, 0, 0, '-')" :disabled="loading">-</button>
                    </div>
                </div>
            </div>
            <div class="col text-center">
                <h5>mithrill</h5>
                <div class="row">
                    <div class="col-8">
                        <p>{{ mithrill }}</p>
                    </div>
                    <div class="col-4">
                        <button class="btn btn-outline-success btn-sm my-1 d-block" type="button" @click=" modKincsek(0, 0, 0, 1, 0, '+')" :disabled="loading">+</button>
                        <button class="btn btn-outline-danger btn-sm my-1 d-block" type="button" @click=" modKincsek(0, 0, 0, 1, 0, '-')" :disabled="loading">-</button>
                    </div>
                </div>
            </div>
            <div class="col text-center">
                <h5>drágakő</h5>
                <div class="row">
                    <div class="col-8">
                        <p>{{ dragako }}</p>
                    </div>
                    <div class="col-4">
                        <button class="btn btn-outline-success btn-sm my-1 d-block" type="button" @click=" modKincsek(0, 0, 0, 0, 1, '+')" :disabled="loading">+</button>
                        <button class="btn btn-outline-danger btn-sm my-1 d-block" type="button" @click=" modKincsek(0, 0, 0, 0, 1, '-')" :disabled="loading">-</button>
                    </div>
                </div>
            </div>
            <div class="col text-center">
                <h5>egyébb</h5>
                    <div class="row">
                    <div class="col-10">
                            <p v-for="valami, index in egyebb" :key="'K' + index">{{ valami }} <button class="btn btn-outline-danger btn-sm ms-1" type="button" :disabled="loading" @click="removeEgyebbKincs(index)">-</button></p>
                    </div>
                    <div class="col-2">
                        <button class="btn btn-outline-success btn-sm my-1 d-block" type="button" :disabled="loading" data-bs-toggle="modal" data-bs-target="#egyebbModal">+</button>
                    </div>
                </div>
            </div>
        </div>

         <!-- Kincsek egyebb input modal -->
        <div class="modal fade" id="egyebbModal" tabindex="-1" aria-labelledby="egyebbModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="egyebbModalLabel">Uj kincs</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                <div class="modal-body">
                    <input type="text" class="form-control" id="egyebb-text" v-model="egyebb_text">
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary bg-blue-leather costum-btn" data-bs-dismiss="modal">Bezár</button>
                    <button type="button" class="btn btn-primary bg-green-leather costum-btn"  @click=" modKincsek(0, 0, 0, 0, 0, '+')" data-bs-dismiss="modal">Elment</button>
                </div>
                </div>
            </div>
        </div>

        <!-- Kincsek vagyon input modal -->
        <div class="modal fade" id="vagyonModal" tabindex="-1" aria-labelledby="vagyonModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="vagyonModalLabel">Uj vagyon</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                <div class="modal-body">
                    <label for="rez">Réz:</label>
                    <input type="number" class="form-control" id="rez" v-model="rez_input">
                    <label for="ezust">Ezüst:</label>
                    <input type="number" class="form-control" id="ezust" v-model="ezust_input">
                    <label for="arany">Arany:</label>
                    <input type="number" class="form-control" id="arany" v-model="arany_input">
                    <label for="mithrill">Mithrill:</label>
                    <input type="number" class="form-control" id="mithrill" v-model="mithrill_input">
                    <label for="dragako">Drágakő:</label>
                    <input type="number" class="form-control" id="dragako" v-model="dragako_input">
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary bg-blue-leather costum-btn" data-bs-dismiss="modal">Bezár</button>
                    <button type="button" class="btn btn-primary bg-green-leather costum-btn" @click="submitVagyon" data-bs-dismiss="modal">Elment</button>
                </div>
                </div>
            </div>
        </div>

         <!-- Kincsek vagyon kifizetes input modal -->
        <div class="modal fade" id="vagyonKifizetesModal" tabindex="-1" aria-labelledby="vagyonKifizetesModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="vagyonKifizetesModalLabel">Uj vagyon</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                <div class="modal-body">
                    <label for="rez">Réz:</label>
                    <input type="number" class="form-control" id="rez" v-model="rez_input">
                    <label for="ezust">Ezüst:</label>
                    <input type="number" class="form-control" id="ezust" v-model="ezust_input">
                    <label for="arany">Arany:</label>
                    <input type="number" class="form-control" id="arany" v-model="arany_input">
                    <label for="mithrill">Mithrill:</label>
                    <input type="number" class="form-control" id="mithrill" v-model="mithrill_input">
                    <label for="dragako">Drágakő:</label>
                    <input type="number" class="form-control" id="dragako" v-model="dragako_input">
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary bg-blue-leather costum-btn" data-bs-dismiss="modal">Bezár</button>
                    <button type="button" class="btn btn-primary bg-red-leather costum-btn" @click="submitVagyonKifizetes" data-bs-dismiss="modal">Elment</button>
                </div>
                </div>
            </div>
        </div>

        <!-- Kifizetes Error Modal -->
        <div v-if="fizetesError" class="alert alert-danger alert-dismissible fade show" role="alert">
            <strong>Nincs elég pénz!!!</strong> Egy vagy több bevitt összeg lefedésére nincs elegendő vagyon!
            <button type="button" class="btn-close" data-bs-dismiss="alert" @click="fizetesError=false" aria-label="Close"></button>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from 'vuex';
export default {
    data() {
        return {
            rez: 0,
            ezust: 0,
            arany: 0,
            mithrill: 0,
            dragako: 0,
            egyebb: [],
            loading: false,
            egyebb_text: '',
            rez_input: 0,
            ezust_input: 0,
            arany_input: 0,
            mithrill_input: 0,
            dragako_input: 0,
            fizetesError: false,
        }
    },
    computed: {
        ...mapGetters('currentCharacter', {
            magusCharacter: 'magusCharacter',
        }),
    },
    methods: {
        ...mapMutations('currentCharacter', {
            updateKincsek: 'updateKincsek'
        }),
        ...mapActions('currentCharacter', {
            save: 'save'
        }),
        modKincsek(rez, ezust, arany, mithrill, dragako, mod) {
            if (mod === '+') {
                this.rez += rez;
                this.ezust += ezust;
                this.arany  += arany;
                this.mithrill += mithrill;
                this.dragako += dragako;
                if (this.egyebb_text !== '') {
                    this.egyebb.push(this.egyebb_text);
                }
                let msg = this.magusCharacter.Nev + ' Növelte kincseit! Réz: +' + rez + ' Ezüst: +' + ezust + ' Arany: +' + arany + ' Mithrill: +' + mithrill + ' Egyébb: ' + this.egyebb_text;
                this.$root.$emit('CharacterChangedEvent', msg);
            }
            if (mod === '-') {
                if (this.rez > 0) {
                    this.rez -= rez;
                }
                    if (this.ezust > 0) {
                    this.ezust -= ezust;
                }
                    if (this.arany > 0) {
                    this.arany -= arany;
                }
                    if (this.mithrill > 0) {
                    this.mithrill -= mithrill;
                }
                    if (this.dragako > 0) {
                    this.dragako -= dragako;
                }
                let msg = this.magusCharacter.Nev + ' Csökentette kincseit! Réz: -' + rez + ' Ezüst: -' + ezust + ' Arany: -' + arany + ' Mithrill: -' + mithrill ;
                this.$root.$emit('CharacterChangedEvent', msg);
            }
            this.egyebb_text = '';
            this.saveKincsek();
        },
        removeEgyebbKincs(index) {
            this.egyebb.splice(index, 1);
            this.saveKincsek();
        },
        submitVagyon() {
            this.modKincsek(parseInt(this.rez_input), parseInt(this.ezust_input), parseInt(this.arany_input), parseInt(this.mithrill_input), parseInt(this.dragako_input), '+');
            this.rez_input = 0;
            this.ezust_input = 0;
            this.arany_input = 0;
            this.mithrill_input = 0;
            this.dragako_input = 0;
        },
        submitVagyonKifizetes() {
            if (parseInt(this.rez_input) > this.rez || parseInt(this.ezust_input)> this.ezust || parseInt(this.arany_input) > this.arany || parseInt(this.mithrill_input) > this.mithrill || parseInt(this.dragako_input) > this.dragako) {
                this.rez_input = 0;
                this.ezust_input = 0;
                this.arany_input = 0;
                this.mithrill_input = 0;
                this.dragako_input = 0;
                this.fizetesError = true;
            } else {
                this.modKincsek(parseInt(this.rez_input), parseInt(this.ezust_input), parseInt(this.arany_input), parseInt(this.mithrill_input), parseInt(this.dragako_input), '-');
                this.rez_input = 0;
                this.ezust_input = 0;
                this.arany_input = 0;
                this.mithrill_input = 0;
                this.dragako_input = 0;
            }
        },
        saveKincsek() {
            let data = {
                rez: this.rez,
                ezust: this.ezust,
                arany: this.arany,
                mithrill: this.mithrill,
                dragako: this.dragako,
                egyebb: this.egyebb
            };
            this.updateKincsek(data);
            this.save();
        },
    },
    mounted() {
        this.rez = this.magusCharacter.Kincsek.rez;
        this.ezust = this.magusCharacter.Kincsek.ezust;
        this.arany = this.magusCharacter.Kincsek.arany;
        this.mithrill = this.magusCharacter.Kincsek.mithrill;
        this.dragako = this.magusCharacter.Kincsek.dragako;
        this.egyebb = this.magusCharacter.Kincsek.egyebb;  
    }  
}
</script>