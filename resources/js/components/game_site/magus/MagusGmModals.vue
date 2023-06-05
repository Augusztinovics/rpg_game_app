<template>
    <div>
        <!-- Global notes -->
        <div v-if="openGlobalNotes" class="card">
            <div class="card-body">
                <h2 class="card-title mb-4">Jegyzeteid</h2>
                <ul class="list-group list-group-flush">
                    <li v-for="(note, index) in this.module.global_note" :key="'GN' + index" class="list-group-item">{{ note.note }}</li>
                </ul>
                <hr>
                <div class="text-end">
                    <button class="btn btn-sm btn-secondary" @click="closeGlobalNotes">Bezár</button>
                </div>
            </div>
        </div>
        <!-- Bestiarium -->
        <div v-if="openBestiarium" :class="['card', openGlobalNotes ? 'mt-2' : '']">
            <div class="card-body">
                <h2 class="card-title mb-4">Bestiárium</h2>
                 <div
                    v-for="(npc, index) in this.module.npc_data"
                    :key="'NPC' + index"
                    class="accordion-item"
                >
                    <h2 class="accordion-header" :id="'NPC' + index + '-heading'">
                        <button
                            class="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            :data-bs-target="'#' + 'NPC' + index"
                            aria-expanded="false"
                            :aria-controls="'NPC' + index"
                        >
                            {{ npc.name }}
                        </button>
                    </h2>
                    <div
                        :id="'NPC' + index"
                        class="accordion-collapse collapse"
                        :aria-labelledby="'NPC' + index + '-heading'"
                    >
                        <div class="accordion-body">
                            <div>
                                <div>
                                    <p><b>Faj: </b> {{ npc.race }}</p>
                                    <p><b>Szint: </b> {{ npc.level }}</p>
                                    <p><b>TP érték: </b> {{ npc.exp }}</p>
                                    <hr>
                                    <p><b>Életerő:</b></p>
                                    <p>Életerő Pontok ( Ép ): {{ npc.EP }}</p>
                                    <p>
                                        Fájdalomtűrési Pontok ( Fp ): {{ npc.FP }}
                                    </p>
                                </div>
                                <hr>
                                <div>
                                    <p><b>Tulajdonságok:</b></p>
                                    <p>Erő: {{ npc.ERO }}</p>
                                    <p>Gyorsaság: {{ npc.GYORS }}</p>
                                    <p>Ügyesség: {{ npc.UGY }}</p>
                                    <p>Állóképesség: {{ npc.ALLO }}</p>
                                    <p>Egészség: {{ npc.EG }}</p>
                                    <p>Szépség: {{ npc.SZEP }}</p>
                                    <p>Inteligencia: {{ npc.INT }}</p>
                                    <p>Akaraterő: {{ npc.AK }}</p>
                                    <p>Asztrál: {{ npc.ASZT }}</p>
                                </div>
                                <hr>
                                <div>
                                    <p><b>Harcértékek: </b></p>
                                    <p>Kezdeményező Érték ( KÉ ): {{ npc.KE }}</p>
                                    <p>Támadó Érték ( TÉ ): {{ npc.TE }}</p>
                                    <p>Védő Érték ( VÉ ): {{ npc.VE }}</p>
                                    <p>Célzó Érték ( CÉ ): {{ npc.CE }}</p>
                                    <p>Sebzés ( Sp ): {{ npc.SP }}</p>
                                    <p>
                                        Sebzés Felfogó Érték ( SFÉ ): {{ npc.SFE }}
                                    </p>
                                </div>
                            </div>
                            <hr>
                            <div>
                                <p><b>Az NJK álltalános leírása:</b></p>
                                <p>{{ npc.description }}</p>
                                <hr>
                                <p><b>NJK Szerepe a játékban: </b></p>
                                <p>{{ npc.role }}</p>
                                <hr>
                                <p><b>NJK viselkedési mintája: </b></p>
                                <p>{{ npc.sablon }}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <hr>
                <div class="text-end">
                    <button class="btn btn-sm btn-secondary" @click="closeBestiarium">Bezár</button>
                </div>
            </div>
        </div>

        <!-- Select Seene Modal -->
        <div class="modal fade" id="selectSeeneModal" tabindex="-1" aria-labelledby="selectSeeneModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered modal-lg">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="selectSeeneModalLabel">Jelenet választás</h5>
                        <button type="button" class="btn-close" aria-label="Close" @click="closeSeeneSelect"></button>
                    </div>
                <div class="modal-body">
                    <div v-for="seen in seens" :key="'Seen' + seen.game_module_data_order">
                        <div :class="['border', 'rounded', 'm-2', 'p-2', 'seen-select', seen.game_module_data_order == activeSeene ? 'border-primary' : 'border-dark']" @click="selectSeene(seen.game_module_data_order)">
                            <h3>{{ seen.module_data.title }}</h3>
                            <p>{{ seen.module_data.description }}</p>
                        </div>
                        <hr>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary costum-btn" @click="closeSeeneSelect">Bezár</button>
                </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapGetters, mapMutations } from 'vuex';

    export default {
        props: {
            module: {
                type: Object,
                default: {}
            },
            seens: {
                type: Array,
                default: []
            },
            activeSeene: {
                type: Number,
                default: 1
            }
        },
        computed: {
            ...mapGetters('gameSiteControl', {
                openGlobalNotes: 'openGlobalNotes',
                openBestiarium: 'openBestiarium',
                openSeeneSelect: 'openSeeneSelect',
            }),
        },
        methods: {
            ...mapMutations('gameSiteControl', {
                updateOpenGlobalNotes: 'updateOpenGlobalNotes',
                updateOpenBestiarium: 'updateOpenBestiarium',
                updateOpenSeeneSelect: 'updateOpenSeeneSelect',
            }),

            closeGlobalNotes() {
                this.updateOpenGlobalNotes(false);
            },

            closeBestiarium() {
                this.updateOpenBestiarium(false);
            },

            closeSeeneSelect() {
                this.updateOpenSeeneSelect(false);
            },

            selectSeeneModalOpen() {
                document.body.classList.add('modal-open');
                let modalClasses = window.document.getElementById('selectSeeneModal').classList;
                modalClasses.add('d-block')
                modalClasses.add('show')
                let backdrop = document.createElement('div')
                backdrop.classList = "modal-backdrop fade show"
                document.body.appendChild(backdrop)
            },

            selectSeeneModalClose() {
                let modalClasses = window.document.getElementById('selectSeeneModal').classList;
                document.body.classList.remove('modal-open');
                modalClasses.remove('d-block')
                modalClasses.remove('show')
                let backdrop = document.querySelector('.modal-backdrop')
                document.body.removeChild(backdrop)
            },

            selectSeene(order) {
                if (order == this.activeSeene) {
                    this.closeSeeneSelect();
                    return;
                }
                this.$root.$emit('SeeneChanged', order);
                this.closeSeeneSelect();
            },
        },
        watch: {
            openSeeneSelect(newState) {
                if (newState) {
                    this.selectSeeneModalOpen();
                } else {
                    this.selectSeeneModalClose();
                }
            },
        }
    }
</script>

<style scoped>
    .seen-select:hover {
        background-color: aquamarine;
        cursor: pointer;
    }
</style>