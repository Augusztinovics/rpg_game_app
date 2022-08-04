<template>
    <div>
        <div>
            <div v-if="magia.maxMp > 0" class="border-bottom border-secondary my-2">
                <h4 class="text-center mt-2">Varázslatok</h4>
                <div class="d-grid text-center mb-3">
                    <button v-if="magusCharacter.Kaszt == 'BARD'" class="btn btn-success m-2" type="button" data-bs-toggle="modal" data-bs-target="#bardModal">Bárd Mágiák</button>
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
                <button v-if="magia.aktMp > 0" class="btn btn-danger ms-2" type="button" data-bs-toggle="modal" data-bs-target="#manaUseModal">Mana Pontok Használata</button>
                <button v-if="magia.aktMp < magia.maxMp" class="btn btn-success ms-2 mt-2" type="button" @click="refreshMana">Mana Pontok Teljes Feltöltése</button>
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
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary"  @click="submitManaUse" data-bs-dismiss="modal">Save changes</button>
                </div>
                </div>
            </div>
        </div>

        <!-- Magia view modals -->
        <!-- Bard -->
        <div class="modal fade" id="bardModal" tabindex="-1" aria-labelledby="bardModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-xl">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="bardModalLabel">Bárd Mágia</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <div class="p-3 border border-secondary rounded mb-2">
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" v-model="showBardAll" id="bard_checkbox">
                                <label class="form-check-label" for="bard_checkbox">
                                    Összes mágia mutatása
                                </label>
                            </div>
                        </div>
                        
                        <ul class="nav nav-tabs" id="myTab" role="tablist">
                            <li class="nav-item" role="presentation">
                                <button class="nav-link active" id="ismerteto-tab" data-bs-toggle="tab" data-bs-target="#ismerteto" type="button" role="tab" aria-controls="ismerteto" aria-selected="true">Ismertető</button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button class="nav-link" id="dal-tab" data-bs-toggle="tab" data-bs-target="#dal" type="button" role="tab" aria-controls="dal" aria-selected="false">{{ bardDalMagia.name }}</button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button class="nav-link" id="hang-tab" data-bs-toggle="tab" data-bs-target="#hang" type="button" role="tab" aria-controls="hang" aria-selected="false">{{ bardHangMagia.name }}</button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button class="nav-link" id="feny-tab" data-bs-toggle="tab" data-bs-target="#feny" type="button" role="tab" aria-controls="feny" aria-selected="false">{{ bardFenyMagia.name }}</button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button class="nav-link" id="egyebb-tab" data-bs-toggle="tab" data-bs-target="#egyebb" type="button" role="tab" aria-controls="egyebb" aria-selected="false">{{ bardEgyebbMagia.name }}</button>
                            </li>
                        </ul>
                        <div class="tab-content" id="myTabContent">
                            <div class="tab-pane fade show active" id="ismerteto" role="tabpanel" aria-labelledby="ismerteto-tab">
                                <div class="mt-3">
                                    <p v-for="ism, index in bardSpellDescription" :key="'ismerteto' + index">{{ ism }}</p>
                                </div>
                            </div>
                            <div class="tab-pane fade" id="dal" role="tabpanel" aria-labelledby="dal-tab">
                                <div class="border border-secondary p-2 mb-2">
                                    <h4>{{ bardDalMagia.name }}</h4>
                                    <p v-for="daldes, index in bardDalMagia.description" :key="'daldes' + index">{{ daldes }}</p>
                                </div>
                                <div>
                                    <h4>Varázslatok</h4>
                                    <div v-for="dal, index in bardDalMagiaList" :key="'dal' + index" class="accordion-item">
                                        <h2 class="accordion-header" :id="'dal' + index + '-heading'">
                                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" :data-bs-target="'#' + 'dal' + index" aria-expanded="false" :aria-controls="'dal' + index">
                                                {{ dal.name }}
                                            </button>
                                        </h2>
                                         <div :id="'dal' + index" class="accordion-collapse collapse" :aria-labelledby="'dal' + index + '-heading'">
                                            <div class="accordion-body">
                                                <p><b>Tipus:{{ dal.typ }}</b></p>
                                                <p><b>Mana-pont: {{ dal.manaText }}</b></p>
                                                <p><b>Erősség: {{ dal.strenght }}</b></p>
                                                <p><b>Varázslás ideje: {{ dal.castTime }}</b></p>
                                                <p><b>Hatótáv: {{ dal.effectRange }}</b></p>
                                                <p><b>Időtartam: {{ dal.effectTime }}</b></p>
                                                <p><b>Mágiaellenállás: {{ dal.resistance }}</b></p>
                                                <p><b>Leirás:</b></p>
                                                <p v-for="des, index in dal.description" :key="'Des' + index">{{ des }}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="tab-pane fade" id="hang" role="tabpanel" aria-labelledby="hang-tab">
                                <div class="border border-secondary p-2 mb-2">
                                    <h4>{{ bardHangMagia.name }}</h4>
                                    <p v-for="hangdes, index in bardHangMagia.description" :key="'hangdes' + index">{{ hangdes }}</p>
                                </div>
                                <div>
                                    <h4>Varázslatok</h4>
                                    <div v-for="hang, index in bardHangMagiaList" :key="'hang' + index" class="accordion-item">
                                        <h2 class="accordion-header" :id="'hang' + index + '-heading'">
                                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" :data-bs-target="'#' + 'hang' + index" aria-expanded="false" :aria-controls="'hang' + index">
                                                {{ hang.name }}
                                            </button>
                                        </h2>
                                         <div :id="'hang' + index" class="accordion-collapse collapse" :aria-labelledby="'hang' + index + '-heading'">
                                            <div class="accordion-body">
                                                <p><b>Tipus:{{ hang.typ }}</b></p>
                                                <p><b>Mana-pont: {{ hang.manaText }}</b></p>
                                                <p><b>Erősség: {{ hang.strenght }}</b></p>
                                                <p><b>Varázslás ideje: {{ hang.castTime }}</b></p>
                                                <p><b>Hatótáv: {{ hang.effectRange }}</b></p>
                                                <p><b>Időtartam: {{ hang.effectTime }}</b></p>
                                                <p><b>Mágiaellenállás: {{ hang.resistance }}</b></p>
                                                <p><b>Leirás:</b></p>
                                                <p v-for="des, index in hang.description" :key="'hangDes' + index">{{ des }}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="tab-pane fade" id="feny" role="tabpanel" aria-labelledby="feny-tab">
                                <div class="border border-secondary p-2 mb-2">
                                    <h4>{{ bardFenyMagia.name }}</h4>
                                    <p v-for="fenydes, index in bardFenyMagia.description" :key="'fenydes' + index">{{ fenydes }}</p>
                                </div>
                                <div>
                                    <h4>Varázslatok</h4>
                                    <div v-for="feny, index in bardFenyMagiaList" :key="'feny' + index" class="accordion-item">
                                        <h2 class="accordion-header" :id="'feny' + index + '-heading'">
                                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" :data-bs-target="'#' + 'feny' + index" aria-expanded="false" :aria-controls="'feny' + index">
                                                {{ feny.name }}
                                            </button>
                                        </h2>
                                         <div :id="'feny' + index" class="accordion-collapse collapse" :aria-labelledby="'feny' + index + '-heading'">
                                            <div class="accordion-body">
                                                <p><b>Tipus:{{ feny.typ }}</b></p>
                                                <p><b>Mana-pont: {{ feny.manaText }}</b></p>
                                                <p><b>Erősség: {{ feny.strenght }}</b></p>
                                                <p><b>Varázslás ideje: {{ feny.castTime }}</b></p>
                                                <p><b>Hatótáv: {{ feny.effectRange }}</b></p>
                                                <p><b>Időtartam: {{ feny.effectTime }}</b></p>
                                                <p><b>Mágiaellenállás: {{ feny.resistance }}</b></p>
                                                <p><b>Leirás:</b></p>
                                                <p v-for="des, index in feny.description" :key="'fenyDes' + index">{{ des }}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="tab-pane fade" id="egyebb" role="tabpanel" aria-labelledby="egyebb-tab">
                                <div class="border border-secondary p-2 mb-2">
                                    <h4>{{ bardEgyebbMagia.name }}</h4>
                                    <p v-for="egyebbdes, index in bardEgyebbMagia.description" :key="'egyebbdes' + index">{{ egyebbdes }}</p>
                                </div>
                                <div>
                                    <h4>Varázslatok</h4>
                                    <div v-for="egyebb, index in bardEgyebbMagiaList" :key="'egyebb' + index" class="accordion-item">
                                        <h2 class="accordion-header" :id="'egyebb' + index + '-heading'">
                                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" :data-bs-target="'#' + 'egyebb' + index" aria-expanded="false" :aria-controls="'egyebb' + index">
                                                {{ egyebb.name }}
                                            </button>
                                        </h2>
                                         <div :id="'egyebb' + index" class="accordion-collapse collapse" :aria-labelledby="'egyebb' + index + '-heading'">
                                            <div class="accordion-body">
                                                <p><b>Tipus:{{ egyebb.typ }}</b></p>
                                                <p><b>Mana-pont: {{ egyebb.manaText }}</b></p>
                                                <p><b>Erősség: {{ egyebb.strenght }}</b></p>
                                                <p><b>Varázslás ideje: {{ egyebb.castTime }}</b></p>
                                                <p><b>Hatótáv: {{ egyebb.effectRange }}</b></p>
                                                <p><b>Időtartam: {{ egyebb.effectTime }}</b></p>
                                                <p><b>Mágiaellenállás: {{ egyebb.resistance }}</b></p>
                                                <p><b>Leirás:</b></p>
                                                <p v-for="des, index in egyebb.description" :key="'egyebbDes' + index">{{ des }}</p>
                                            </div>
                                        </div>
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
            inputManaUse: 0,
            showBardAll: false,
        }
    },
    computed: {
        ...mapGetters('currentCharacter', {
            magusCharacter: 'magusCharacter',
        }),
        ...mapGetters('magusBardSpells', {
            bardSpellDescription: 'bardSpellDescription',
            bardDalMagia: 'bardDalMagia',
            bardHangMagia: 'bardHangMagia',
            bardFenyMagia: 'bardFenyMagia',
            bardEgyebbMagia: 'bardEgyebbMagia',
        }),
        ...mapGetters('magusClasses', {
            magusKaszt: 'magusClass'
        }),
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
        // Bard Spells
        bardDalMagiaList() {
            let dalList = this.bardDalMagia.spells;
            if (this.showBardAll) {
                return dalList;
            } else {
                return dalList.filter(s => s.mana <= this.magia.aktMp);
            }
        },
        bardHangMagiaList() {
            let hangList = this.bardHangMagia.spells;
            if (this.showBardAll) {
                return hangList;
            } else {
                return hangList.filter(s => s.mana <= this.magia.aktMp);
            }
        },
        bardFenyMagiaList() {
            let fenyList = this.bardFenyMagia.spells;
            if (this.showBardAll) {
                return fenyList;
            } else {
                return fenyList.filter(s => s.mana <= this.magia.aktMp);
            }
        },
        bardEgyebbMagiaList() {
            let egyebbList = this.bardEgyebbMagia.spells;
            if (this.showBardAll) {
                return egyebbList;
            } else {
                return egyebbList.filter(s => s.mana <= this.magia.aktMp);
            }
        }
        
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
                this.inputManaUse = 0;
                this.updateAktMp(updatedMana);
                this.save();
            }
        },
        refreshMana() {
            this.updateAktMp(this.magia.maxMp);
            this.save();
        }
    },
    
}
</script>