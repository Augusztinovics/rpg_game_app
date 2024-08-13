<template>
    <div>
        <div>
            <div v-if="isMage" class="border-bottom border-secondary my-2">
                <h4 class="text-center mt-2">Varázslatok</h4>
                <div class="d-grid text-center mb-3">
                    <button class="btn btn-success m-2 bg-green-leather costum-btn" type="button" data-bs-toggle="modal" data-bs-target="#magiaModal">Mágiák</button>
                </div>
            </div>
            <h4 class="text-center mt-2">Mana-pontok</h4>
            <div class="row">
                <div class="col border-end border-secondary">
                    <p>Mp/szint</p>
                    <p>{{ kasztMagia.text }}</p>
                </div>
                <div class="col">
                    <p>Max Mp</p>
                    <p>{{ magia.maxMp }}</p>
                </div>
            </div>
            <p class="border-top border-secondary">Akt Mp</p>
            <p>{{ magia.aktMp }}</p>
            <div v-if="magia.maxMp > 0" class="d-grid text-center mb-3">
                <button v-if="magia.aktMp > 0" class="btn btn-danger ms-2 bg-red-leather costum-btn" type="button" data-bs-toggle="modal" data-bs-target="#manaUseModal">Mana Pontok Használata</button>
                <button v-if="magia.aktMp < magia.maxMp" class="btn btn-success ms-2 mt-2 bg-green-leather costum-btn" type="button" @click="refreshMana">Mana Pontok Teljes Feltöltése</button>
            </div>
        </div>
        <!-- Mana use input modal -->
        <div class="modal fade" id="manaUseModal" tabindex="-1" aria-labelledby="manaUseModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="manaUseModalLabel">Mana-pontok használata</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                <div class="modal-body">
                    <p>Rendelkezésre álló mana pontok: {{ magia.aktMp }}</p>
                    <label for="psiInput">Elhasználni kivánt mana pontok mennyisége:</label>
                    <input type="number" class="form-control" id="psiInput" min="1" :max="magia.aktMp" v-model="inputManaUse">
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary bg-blue-leather costum-btn" data-bs-dismiss="modal">Bezár</button>
                    <button type="button" class="btn btn-primary bg-red-leather costum-btn"  @click="submitManaUse" data-bs-dismiss="modal">Elment</button>
                </div>
                </div>
            </div>
        </div>

        <!-- Magia view modals -->
        <div class="modal fade" id="magiaModal" tabindex="-1" aria-labelledby="magiaModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-xl">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="magiaModalLabel">Mágiák: </h5>
                        <div class="mx-2 d-flex flex-row">
                            <button v-if="magusCharacter.Kaszt == 'BARD'" :class="['m-1 btn btn-sm ', selected_tab == 'bard_magia_tab' ? 'btn-dark' : 'btn-secondary']" @click="selectTab('bard_magia_tab')">Bárd Mágia</button>
                            <button v-if="isCleric" :class="['m-1 btn btn-sm ', selected_tab == 'pap_magia_tab' ? 'btn-dark' : 'btn-secondary']" @click="selectTab('pap_magia_tab')">Papi Mágia</button>
                            <button v-if="magusCharacter.Kaszt == 'BOSZORKANY'" :class="['m-1 btn btn-sm ', selected_tab == 'boszorkany_magia_tab' ? 'btn-dark' : 'btn-secondary']" @click="selectTab('boszorkany_magia_tab')">Boszorkány Mágia</button>
                            <button v-if="magusCharacter.Kaszt == 'BOSZORKANYMESTER'" :class="['m-1 btn btn-sm ', selected_tab == 'boszmester_magia_tab' ? 'btn-dark' : 'btn-secondary']" @click="selectTab('boszmester_magia_tab')">Boszorkánymester Mágia</button>
                            <button v-if="magusCharacter.Kaszt == 'TUZVARAZSLO'" :class="['m-1 btn btn-sm ', selected_tab == 'tuzvarazslo_magia_tab' ? 'btn-dark' : 'btn-secondary']" @click="selectTab('tuzvarazslo_magia_tab')">Tűzvarázsló Mágia</button>
                            <button v-if="magusCharacter.Kaszt == 'VARAZSLO' || haveMagiaHasznalatMf" :class="['m-1 btn btn-sm ', selected_tab == 'varazslo_magia_tab' ? 'btn-dark' : 'btn-secondary']" @click="selectTab('varazslo_magia_tab')">Varázsló Mágia</button>
                            <button v-if="magusCharacter.Kaszt == 'BOSZORKANYMESTER' || magusCharacter.Kaszt == 'BOSZORKANY' || magusCharacter.Kaszt == 'VARAZSLO' || isCleric" :class="['m-1 btn btn-sm ', selected_tab == 'varazstargyak_tab' ? 'btn-dark' : 'btn-secondary']" @click="selectTab('varazstargyak_tab')">Varázstárgyak</button>
                        </div>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <div class="card-body text-center">
                            <img :src="imgUrl" alt="magus book page" class="img-fluid">
                        </div>
                    </div>
                    <div class="modal-footer">
                        <div class="card-footer text-center">
                            <button class="btn btn-sm btn-secondary" @click="prevPage">&lt;</button>
                            <span class="mx-2">
                                <span>{{ current_page }}</span>/
                                <span>{{ max_page }}</span>
                            </span>
                            <button class="btn btn-sm btn-secondary" @click="nextPage">&gt;</button>
                        </div>
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
            inputManaUse: 0,
            selected_tab: 'bard_magia',
            current_page: 1,
            max_page: 1,
        }
    },
    computed: {
        ...mapGetters('currentCharacter', {
            magusCharacter: 'magusCharacter',
        }),
        ...mapGetters('magusClasses', {
            magusKaszt: 'magusClass'
        }),
        ...mapGetters('magusBook', {
            bard_magia: 'bard_magia',
            pap_magia: 'pap_magia',
            boszorkany_magia: 'boszorkany_magia',
            boszmester_magia: 'boszmester_magia',
            tuzvarazslo_magia: 'tuzvarazslo_magia',
            varazslo_magia: 'varazslo_magia',
            varazstargyak: 'varazstargyak',
        }),
        imgUrl() {
            switch(this.selected_tab) {
                case 'bard_magia_tab':
                    return this.bard_magia[this.current_page - 1] ?? this.bard_magia[0];
                case 'pap_magia_tab':
                    return this.pap_magia[this.current_page - 1] ?? this.pap_magia[0];
                case 'boszorkany_magia_tab':
                    return this.boszorkany_magia[this.current_page - 1] ?? this.boszorkany_magia[0];
                case 'boszmester_magia_tab':
                    return this.boszmester_magia[this.current_page - 1] ?? this.boszmester_magia[0];
                case 'tuzvarazslo_magia_tab':
                    return this.tuzvarazslo_magia[this.current_page - 1] ?? this.tuzvarazslo_magia[0];
                case 'varazslo_magia_tab':
                    return this.varazslo_magia[this.current_page - 1] ?? this.varazslo_magia[0];
                case 'varazstargyak_tab':
                    return this.varazstargyak[this.current_page - 1] ?? this.varazstargyak[0];
                default:
                    return this.bard_magia[this.current_page - 1] ?? this.bard_magia[0];
            }
        },
        Kaszt() {
            return this.magusKaszt(this.magusCharacter.Kaszt);
        },
        kasztMagia() {
            return this.Kaszt.mpLevel;
        },
        magia() {
            return this.magusCharacter.Magia;
        },
        haveMagiaHasznalatMf() {
            return this.magusCharacter.LearnedSkills.mf.includes('MAGIA_HASZNALAT');
        },
        isMage() {
            if (this.haveMagiaHasznalatMf) {
                this.selected_tab = 'varazslo_magia_tab';
                this.current_page = 1;
                this.max_page = this.varazslo_magia.length;
            }
            if (this.magusCharacter.Kaszt == 'BARD') {
                this.selected_tab = 'bard_magia_tab';
                this.current_page = 1;
                this.max_page = this.bard_magia.length;
            }
            if (this.isCleric) {
                this.selected_tab = 'pap_magia_tab';
                this.current_page = 1;
                this.max_page = this.pap_magia.length;
            }
            if (this.magusCharacter.Kaszt == 'BOSZORKANY') {
                this.selected_tab = 'boszorkany_magia_tab';
                this.current_page = 1;
                this.max_page = this.boszorkany_magia.length;
            }
            if (this.magusCharacter.Kaszt == 'BOSZORKANYMESTER') {
                this.selected_tab = 'boszmester_magia_tab';
                this.current_page = 1;
                this.max_page = this.boszmester_magia.length;
            }
            if (this.magusCharacter.Kaszt == 'TUZVARAZSLO') {
                this.selected_tab = 'tuzvarazslo_magia_tab';
                this.current_page = 1;
                this.max_page = this.tuzvarazslo_magia.length;
            }
            if (this.magusCharacter.Kaszt == 'VARAZSLO') {
                this.selected_tab = 'varazslo_magia_tab';
                this.current_page = 1;
                this.max_page = this.varazslo_magia.length;
            }
            return this.haveMagiaHasznalatMf || this.magusCharacter.Kaszt == 'BARD' || this.isCleric || this.magusCharacter.Kaszt == 'BOSZORKANY' || this.magusCharacter.Kaszt == 'BOSZORKANYMESTER' || this.magusCharacter.Kaszt == 'TUZVARAZSLO' || this.magusCharacter.Kaszt == 'VARAZSLO';
        },
        isCleric() {
            let clerics = ['PAP', 'PAP_DONVIK', 'PAP_AREL', 'PAP_THARR', 'PAP_KYEL', 'PAPLOVAG', 'PAPLOVAG_DONVIK', 'PAPLOVAG_RANAGOL', 'PAPLOVAG_DREINA', 'PAPLOVAG_KRAD', 'PAPLOVAG_UWEL', 'PAPLOVAG_DARTON'];
            return clerics.includes(this.magusCharacter.Kaszt);
        },
    },
    methods: {
        ...mapMutations('currentCharacter', {
            updateAktMp: 'updateAktMp',
            updateMaxMp: 'updateMaxMp',
        }),
        ...mapActions('currentCharacter', {
            save: 'save'
        }),
        submitManaUse() {
            if (parseInt(this.inputManaUse) <= this.magia.aktMp && parseInt(this.inputManaUse) > 0) {
                let updatedMana = this.magia.aktMp - parseInt(this.inputManaUse);
                let msg = this.magusCharacter.Nev + ' Manát használt! Mennyiség: ' + this.inputManaUse + 'Mp';
                this.$root.$emit('CharacterChangedEvent', msg);
                this.inputManaUse = 0;
                this.updateAktMp(updatedMana);
                this.save();
            }
        },
        refreshMana() {
            this.updateAktMp(this.magia.maxMp);
            this.save();
            let msg = this.magusCharacter.Nev + ' Feltöltötte Mana pontjait!';
            this.$root.$emit('CharacterChangedEvent', msg);
        },
        selectTab(tab) {
            switch (tab) {
                case 'bard_magia_tab':
                    this.selected_tab = 'bard_magia_tab';
                    this.current_page = 1;
                    this.max_page = this.bard_magia.length;
                    break;
                case 'pap_magia_tab':
                    this.selected_tab = 'pap_magia_tab';
                    this.current_page = 1;
                    this.max_page = this.pap_magia.length;
                    break;
                case 'boszorkany_magia_tab':
                    this.selected_tab = 'boszorkany_magia_tab';
                    this.current_page = 1;
                    this.max_page = this.boszorkany_magia.length;
                    break;
                case 'boszmester_magia_tab':
                    this.selected_tab = 'boszmester_magia_tab';
                    this.current_page = 1;
                    this.max_page = this.boszmester_magia.length;
                    break;
                case 'tuzvarazslo_magia_tab':
                    this.selected_tab = 'tuzvarazslo_magia_tab';
                    this.current_page = 1;
                    this.max_page = this.tuzvarazslo_magia.length;
                    break;
                case 'varazslo_magia_tab':
                    this.selected_tab = 'varazslo_magia_tab';
                    this.current_page = 1;
                    this.max_page = this.varazslo_magia.length;
                    break;
                case 'varazstargyak_tab':
                    this.selected_tab = 'varazstargyak_tab';
                    this.current_page = 1;
                    this.max_page = this.varazstargyak.length;
                    break;
                default:
                    this.selected_tab = 'bard_magia_tab';
                    this.current_page = 1;
                    this.max_page = this.bard_magia.length;
            }
        },
        prevPage() {
            let prev = this.current_page - 1;
            if (prev < 1) {
                this.current_page = this.max_page;
            } else {
                this.current_page = prev;
            }
        },
        nextPage() {
            let next = this.current_page + 1;
            if (next > this.max_page) {
                this.current_page = 1;
            } else {
                this.current_page = next;
            }
        },
    },
    
}
</script>