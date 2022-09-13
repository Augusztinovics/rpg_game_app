<template>
    <div>
        <div v-if="error">
            <div class="text-center bg-danger m-3">
                <p class="text-light p-4">Hiba történt mentés közben...</p>
            </div>
        </div>
            <div v-if="currentView=='EDIT'">
                <npc-edit 
                    :selected-index="selectedIndex"
                    :selected-npc="selectedNpc"
                    :new-npc="newNpc"
                />
            </div>
            <div v-if="currentView=='LIST'">
                <div class="text-center m-3">
                    <button type="button" class="btn btn-success costum-btn m-3">NJK hozzáadása</button>
                    <button type="button" class="btn btn-success costum-btn m-3">Bestiárium</button>
                </div>
                <div v-for="npc, index in npcs" :key="'NPC' + index" class="accordion-item">
                    <h2 class="accordion-header" :id="'NPC' + index + '-heading'">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" :data-bs-target="'#' + 'NPC' + index" aria-expanded="false" :aria-controls="'NPC' + index">
                            {{ npc.name }}
                        </button>
                    </h2>
                    <div :id="'NPC' + index" class="accordion-collapse collapse" :aria-labelledby="'NPC' + index + '-heading'">
                        <div class="accordion-body">
                            <p><b>Faj: </b> {{ npc.race }} </p>
                            <p><b>Szint: </b> {{ npc.level }} </p>
                            <p><b>TP érték: </b> {{ npc.exp }} </p>
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
                            <p><b>Harcértékek: </b></p>
                            <p>Kezdeményező Érték ( KÉ ): {{ npc.KE }}</p>
                            <p>Támadó Érték ( TÉ ): {{ npc.TE }}</p>
                            <p>Védő Érték ( VÉ ): {{ npc.VE }}</p>
                            <p>Célzó Érték ( CÉ ): {{ npc.CE }}</p>
                            <p>Sebzés ( Sp ): {{ npc.SP }}</p>
                            <p>Sebzés Felfogó Érték ( SFÉ ): {{ npc.SFE }}</p>
                            <p><b>Életerő:</b></p>
                            <p>Életerő Pontok ( Ép ): {{ npc.EP }}</p>
                            <p>Fájdalomtűrési Pontok ( Fp ): {{ npc.FP }}</p>
                            <p><b>Az NJK álltalános leírása:</b></p>
                            <p>{{ npc.description }}</p>
                            <p>NJK Szerepe a játékban: </p>
                            <p>{{ npc.role }}</p>
                            <p>NJK viselkedési mintája: </p>
                            <p>{{ npc.sablon }}</p>
                            <div v-if="deleting==index" class="text-center m-2 border border-danger border-2 rounded-5">
                                <p class="m-3">Bisztos akarja törölni az NJK-át</p>
                                <button type="button" class="btn btn-success costum-btn m-3" @click="cancelDeleting">Mégsem</button>
                                <button type="button" class="btn btn-danger costum-btn m-3" @click="deleteNpc(index)">Töröl</button>
                            </div>
                            <div v-else class="text-center m-2">
                                <button type="button" class="btn btn-success costum-btn m-3">Módosít</button>
                                <button type="button" class="btn btn-danger costum-btn m-3" @click="prepareDeleting(index)">Töröl</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div v-if="currentView=='NPC'">

            </div>
        <div>

        </div>

        <div v-if="loading" id="overlay">
            <div id="overlayText">
                Mentés folyamatban...
            </div>
        </div>
    </div>
</template>

<script>
import NpcEdit from './MagusModuleGlobalNpcEdit.vue';

export default {
    props: {
        moduleId: {
            type: Number,
            default: null
        }
    },
    components: {
        NpcEdit
    },
    data() {
        return {
            npcs: [],
            selectedIndex: null,
            selectedNpc: null,
            newNpc: true,
            currentView: 'LIST',
            loading: false,
            error: false,
            deleting: null,
        }
    },
    computed: {},
    methods: {
        getNpc() {
            axios.get('/gm/get-magus-game-module-npc/' + this.moduleId)
            .then( res => {
                if (res.data.npcs) {
                    this.npcs = res.data.npcs;
                } 
            })
            .catch( err => {
                console.log(err);
            })
        },
        saveNpc() {
            this.loading = true;
            this.error = false;
            axios.post('/gm/update-magus-game-module-npc/' + this.moduleId, {
                npcs: this.npcs
            }).then( res => {
                this.loading = false;
            })
            .catch( err => {
                this.loading = false;
                this.error = true;
                setTimeout(() => {
                    this.error = false;
                }, 3000)
            })
        },
        prepareDeleting(index) {
            this.deleting = index;
        },
        cancelDeleting() {
            this.deleting = null;
        },
        deleteNpc(index) {
            this.npcs.splice(index, 1);
            this.saveNpc();
        },
    },
}
</script>

<style scoped>
    #overlay {
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0,0,0,0.5);
    z-index: 200;
    }

    #overlayText{
    position: absolute;
    top: 50%;
    left: 50%;
    font-size: 50px;
    color: white;
    transform: translate(-50%,-50%);
    -ms-transform: translate(-50%,-50%);
    }
</style>