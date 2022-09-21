<template>
    <div>
        <ul class="nav nav-pills mb-3 border border-success rounded p-3" id="pills-tab" role="tablist">
            <li class="nav-item" role="presentation">
                <button class="nav-link active" id="pills-npc-tab" data-bs-toggle="pill" data-bs-target="#pills-npc" type="button" role="tab" aria-controls="pills-npc" aria-selected="true">Baráti Nem Játékos Karakterek</button>
            </li>
            <li class="nav-item" role="presentation">
                <button class="nav-link" id="pills-npcEnemy-tab" data-bs-toggle="pill" data-bs-target="#pills-npcEnemy" type="button" role="tab" aria-controls="pills-npcEnemy" aria-selected="false">Ellenséges Nem Játékos Karakterek</button>
            </li>
            <li class="nav-item" role="presentation">
                <button class="nav-link" id="pills-bestia-tab" data-bs-toggle="pill" data-bs-target="#pills-bestia" type="button" role="tab" aria-controls="pills-bestia" aria-selected="false">Szörnyek</button>
            </li>
        </ul>
        <div class="tab-content" id="pills-tabContent">
            <div class="tab-pane fade show active" id="pills-npc" role="tabpanel" aria-labelledby="pills-npc-tab">
                 <div v-for="npc, index in friendlyNpcs" :key="'NPC' + index" class="accordion-item">
                    <h2 class="accordion-header" :id="'NPC' + index + '-heading'">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" :data-bs-target="'#' + 'NPC' + index" aria-expanded="false" :aria-controls="'NPC' + index">
                            {{ npc.name }}
                        </button>
                    </h2>
                    <div :id="'NPC' + index" class="accordion-collapse collapse" :aria-labelledby="'NPC' + index + '-heading'">
                        <div class="accordion-body">
                            <div class="row">
                                <div class="col-sm">
                                    <p><b>Faj: </b> {{ npc.race }} </p>
                                    <p><b>Szint: </b> {{ npc.level }} </p>
                                    <p><b>TP érték: </b> {{ npc.exp }} </p>
                                    <p><b>Életerő:</b></p>
                                    <p>Életerő Pontok ( Ép ): {{ npc.EP }}</p>
                                    <p>Fájdalomtűrési Pontok ( Fp ): {{ npc.FP }}</p>
                                </div>
                                <div class="col-sm">
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
                                <div class="col-sm">
                                    <p><b>Harcértékek: </b></p>
                                    <p>Kezdeményező Érték ( KÉ ): {{ npc.KE }}</p>
                                    <p>Támadó Érték ( TÉ ): {{ npc.TE }}</p>
                                    <p>Védő Érték ( VÉ ): {{ npc.VE }}</p>
                                    <p>Célzó Érték ( CÉ ): {{ npc.CE }}</p>
                                    <p>Sebzés ( Sp ): {{ npc.SP }}</p>
                                    <p>Sebzés Felfogó Érték ( SFÉ ): {{ npc.SFE }}</p>
                                </div>
                            </div>
                            <div>
                                <p><b>Az NJK álltalános leírása:</b></p>
                                <p>{{ npc.description }}</p>
                                <p> <b>NJK Szerepe a játékban: </b></p>
                                <p>{{ npc.role }}</p>
                                <p><b>NJK viselkedési mintája: </b></p>
                                <p>{{ npc.sablon }}</p>
                            </div>
                            <div class="text-center m-2">
                                <button type="button" class="btn btn-success costum-btn m-3" @click="npcAdd(npc, index)">NJK hozzáadása a listához</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="tab-pane fade" id="pills-npcEnemy" role="tabpanel" aria-labelledby="pills-npcEnemy-tab">
                 <div v-for="npc, index in enemyNpc" :key="'ENPC' + index" class="accordion-item">
                    <h2 class="accordion-header" :id="'ENPC' + index + '-heading'">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" :data-bs-target="'#' + 'ENPC' + index" aria-expanded="false" :aria-controls="'ENPC' + index">
                            {{ npc.name }}
                        </button>
                    </h2>
                    <div :id="'ENPC' + index" class="accordion-collapse collapse" :aria-labelledby="'ENPC' + index + '-heading'">
                        <div class="accordion-body">
                            <div class="row">
                                <div class="col-sm">
                                    <p><b>Faj: </b> {{ npc.race }} </p>
                                    <p><b>Szint: </b> {{ npc.level }} </p>
                                    <p><b>TP érték: </b> {{ npc.exp }} </p>
                                    <p><b>Életerő:</b></p>
                                    <p>Életerő Pontok ( Ép ): {{ npc.EP }}</p>
                                    <p>Fájdalomtűrési Pontok ( Fp ): {{ npc.FP }}</p>
                                </div>
                                <div class="col-sm">
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
                                <div class="col-sm">
                                    <p><b>Harcértékek: </b></p>
                                    <p>Kezdeményező Érték ( KÉ ): {{ npc.KE }}</p>
                                    <p>Támadó Érték ( TÉ ): {{ npc.TE }}</p>
                                    <p>Védő Érték ( VÉ ): {{ npc.VE }}</p>
                                    <p>Célzó Érték ( CÉ ): {{ npc.CE }}</p>
                                    <p>Sebzés ( Sp ): {{ npc.SP }}</p>
                                    <p>Sebzés Felfogó Érték ( SFÉ ): {{ npc.SFE }}</p>
                                </div>
                            </div>
                            <div>
                                <p><b>Az NJK álltalános leírása:</b></p>
                                <p>{{ npc.description }}</p>
                                <p><b>NJK Szerepe a játékban: </b></p>
                                <p>{{ npc.role }}</p>
                                <p><b>NJK viselkedési mintája: </b></p>
                                <p>{{ npc.sablon }}</p>
                            </div>
                            <div class="text-center m-2">
                                <button type="button" class="btn btn-success costum-btn m-3" @click="npcAdd(npc, index)">NJK hozzáadása a listához</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="tab-pane fade" id="pills-bestia" role="tabpanel" aria-labelledby="pills-bestia-tab">
                 <div v-for="npc, index in monsters" :key="'BESTIA' + index" class="accordion-item">
                    <h2 class="accordion-header" :id="'BESTIA' + index + '-heading'">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" :data-bs-target="'#' + 'BESTIA' + index" aria-expanded="false" :aria-controls="'BESTIA' + index">
                            {{ npc.name }}
                        </button>
                    </h2>
                    <div :id="'BESTIA' + index" class="accordion-collapse collapse" :aria-labelledby="'BESTIA' + index + '-heading'">
                        <div class="accordion-body">
                            <div class="row">
                                <div class="col-sm">
                                    <p><b>Faj: </b> {{ npc.race }} </p>
                                    <p><b>Szint: </b> {{ npc.level }} </p>
                                    <p><b>TP érték: </b> {{ npc.exp }} </p>
                                    <p><b>Életerő:</b></p>
                                    <p>Életerő Pontok ( Ép ): {{ npc.EP }}</p>
                                    <p>Fájdalomtűrési Pontok ( Fp ): {{ npc.FP }}</p>
                                </div>
                                <div class="col-sm">
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
                                <div class="col-sm">
                                    <p><b>Harcértékek: </b></p>
                                    <p>Kezdeményező Érték ( KÉ ): {{ npc.KE }}</p>
                                    <p>Támadó Érték ( TÉ ): {{ npc.TE }}</p>
                                    <p>Védő Érték ( VÉ ): {{ npc.VE }}</p>
                                    <p>Célzó Érték ( CÉ ): {{ npc.CE }}</p>
                                    <p>Sebzés ( Sp ): {{ npc.SP }}</p>
                                    <p>Sebzés Felfogó Érték ( SFÉ ): {{ npc.SFE }}</p>
                                </div>
                            </div>
                            <div>
                                <p><b>Az NJK álltalános leírása:</b></p>
                                <p>{{ npc.description }}</p>
                                <p><b>NJK Szerepe a játékban: </b></p>
                                <p>{{ npc.role }}</p>
                                <p><b>NJK viselkedési mintája: </b></p>
                                <p>{{ npc.sablon }}</p>
                            </div>
                            <div class="text-center m-2">
                                <button type="button" class="btn btn-success costum-btn m-3" @click="npcAdd(npc)">NJK hozzáadása a listához</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="text-center m-3">
            <button type="button" class="btn btn-secondary costum-btn m-3" @click="cancelEdit">Mégsem</button>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
    computed: {
        ...mapGetters('magusBestiarium', {
            friendlyNpcs: 'friendlyNpcs',
            enemyNpc : 'enemyNpc',
            monsters: 'monsters'
        }),
    },
    methods: {
        npcAdd(npc) {
           this.$emit('save', {npc: npc, index: null});
        },
        cancelEdit() {
            this.$emit('cancel');
        },
    },
}
</script>