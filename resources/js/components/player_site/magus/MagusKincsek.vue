<template>
    <div>
        <div class="text-center border-bottom border-secondary">
                <h4>Kincsek</h4>
                <button class="btn btn-success my-3" type="button" :disabled="loading" data-bs-toggle="modal" data-bs-target="#vagyonModal">Vagyon hozzáadása</button>
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
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary"  @click=" modKincsek(0, 0, 0, 0, 0, '+')" data-bs-dismiss="modal">Save changes</button>
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
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary"  @click="submitVagyon" data-bs-dismiss="modal">Save changes</button>
                </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
            Kincsek: Object,
        },
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
        }
    },
    methods: {
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
        saveKincsek() {
            let data = {
                rez: this.rez,
                ezust: this.ezust,
                arany: this.arany,
                mithrill: this.mithrill,
                dragako: this.dragako,
                egyebb: this.egyebb
            };



            //axios to enpoint 



        },
    },
    mounted() {
        this.rez = this.Kincsek.rez;
        this.ezust = this.Kincsek.ezust;
        this.arany = this.Kincsek.arany;
        this.mithrill = this.Kincsek.mithrill;
        this.dragako = this.Kincsek.dragako;
        this.egyebb = this.Kincsek.egyebb;  
    }  
}
</script>