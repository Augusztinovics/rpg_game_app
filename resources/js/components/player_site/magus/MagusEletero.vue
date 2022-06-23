<template>
    <div :class="{'bg-danger' : halott}">
        <h4 class="text-center mt-2">Életerő</h4>
        <div class="d-grid text-center mb-3">
            <button class="btn btn-success my-3" type="button"  data-bs-toggle="modal" data-bs-target="#damageModal">Életerő módositása</button>
        </div>
        <div class="row">
            <div class="col border-end border-secondary">
                <p>Max Ép</p>
                <p class="border-bottom border-secondary">{{ maxEp }}</p>
                <p>Akt Ép</p>
                <p>{{ aktualisEp }}</p>
            </div>
            <div class="col">
                <p>Max Fp</p>
                <p class="border-bottom border-secondary">{{ maxFp }}</p>
                <p>Fp/szint</p>
                <p>{{ fpSzint }}</p>
            </div>
        </div>
        <p class="border-top border-secondary">Akt Fp</p>
        <p>{{ aktualisFp }}</p>

        <!-- damage modal -->
        <div class="modal fade" id="damageModal" tabindex="-1" aria-labelledby="damageModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="damageModalLabel">Sebzés / Gyógyulás</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                <div class="modal-body">
                    <label for="fp">Fájdalom:</label>
                    <input type="number" class="form-control" id="fp" v-model="inputFp">
                    <label for="ep">Életerő:</label>
                    <input type="number" class="form-control" id="ep" v-model="inputEp">
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-success"  @click="teljesGyogyul" data-bs-dismiss="modal">Teljesen gyógyult</button>
                    <button type="button" class="btn btn-danger"  @click="sebzesGyogyul('-')" data-bs-dismiss="modal">Sebzés</button>
                    <button type="button" class="btn btn-success"  @click="sebzesGyogyul('+')" data-bs-dismiss="modal">Gyógyulás</button>
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
            aktualisFp: 0,
            aktualisEp: 0,
            fpSzint: '',
            inputFp: 0,
            inputEp: 0,
            halott: false,
        }
    },
    computed: {
        ...mapGetters('currentCharacter', {
            magusCharacter: 'magusCharacter',
        }),
        ...mapGetters('magusClasses', {
            magusKaszt: 'magusClass'
        }),
        ...mapGetters('magusRaces', {
            race: 'race'
        }),
        Kaszt() {
            return this.magusKaszt(this.magusCharacter.Kaszt);
        },
        Faj() {
            return this.race(this.magusCharacter.Faj);
        },
        egeszseg() {
            return this.magusCharacter.EG + this.Faj.EG + this.magusCharacter.egMod;
        },
        akaratero() {
            return this.magusCharacter.AK + this.Faj.AK + this.magusCharacter.akMod;
        },
        allokepesseg() {
            return this.magusCharacter.ALLO + this.Faj.ALLO + this.magusCharacter.alloMod;
        },
        maxFp() {
            let akMod = 0;
            let alloMod = 0;
            if (this.akaratero > 10) {
                akMod = this.akaratero - 10;
            };
            if (this.allokepesseg > 10) {
                alloMod = this.allokepesseg - 10;
            };  
            return this.Kaszt.Fpalap + akMod + alloMod + this.magusCharacter.FpSzint;
        },
        maxEp() {
            let epMod = 0;
            if (this.egeszseg > 10) {
                epMod = this.egeszseg - 10;
            }
            return this.Kaszt.Epalap + epMod;
        },
    },
    methods: {
        ...mapMutations('currentCharacter', {
            updateEletero: 'updateEletero'
        }),
        ...mapActions('currentCharacter', {
            save: 'save'
        }),
        sebzesGyogyul(mod) {
            if (mod === '+') {
                if (this.inputFp !== 0 || this.inputFp !== '') {
                    this.aktualisFp += parseInt(this.inputFp);
                    if (this.aktualisFp > this.maxFp) {
                        this.aktualisFp = this.maxFp;
                    }
                }
                if (this.inputEp !== 0 || this.inputEp !== '') {
                    this.aktualisEp += parseInt(this.inputEp);
                    if (this.aktualisEp > this.maxEp) {
                        this.aktualisEp = this.maxEp;
                    }
                }
                if (this.aktualisFp > 0 && this.aktualisEp > 0) {
                    this.halott = false;
                }
            }
            if (mod === '-') {
                let Fpsp = 0;
                let Epsp = 0;
                if (this.inputFp !== 0 || this.inputFp !== '') {
                    Fpsp = parseInt(this.inputFp);
                }
                if (this.inputEp !== 0 || this.inputEp !== '') {
                    Epsp = parseInt(this.inputEp);
                }
                if (Fpsp > this.aktualisFp) {
                    Epsp += Fpsp - this.aktualisFp;
                    Fpsp = this.aktualisFp;
                }
                this.aktualisFp -= Fpsp;
                this.aktualisEp -= Epsp;
                if (this.aktualisFp <= 0 || this.aktualisEp <= 0) {
                    this.halott = true;
                }
            }
            this.inputFp = 0;
            this.inputEp = 0;
            this.saveEletero();
        },
        teljesGyogyul() {
            this.aktualisFp = this.maxFp;
            this.aktualisEp = this.maxEp;
            this.halott = false;
            this.inputFp = 0;
            this.inputEp = 0;
            this.saveEletero();
        },
        saveEletero() {
            this.updateEletero({
                AktFp: this.aktualisFp,
                AktEp: this.aktualisEp
            });
            this.save();
        },
    },
   
    mounted() {
        this.fpSzint = this.Kaszt.FpSzint;
        this.aktualisFp = this.magusCharacter.AktFp;
        this.aktualisEp = this.magusCharacter.AktEp;
        if (this.aktualisFp <= 0 || this.aktualisEp <= 0) {
            this.halott = true;
        }
    }
}
</script>