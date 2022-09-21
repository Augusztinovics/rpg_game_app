<template>
    <div>
        <div v-if="error">
            <div class="text-center bg-danger m-3">
                <p class="text-light p-4">Hiba történt mentés közben...</p>
            </div>
        </div>
        <div v-show="currentView == 'EDIT'">
            <npc-edit
                ref="npcEdit"
                @save="saveNpcEdit"
                @cancel="cancelNpcEdit"
            />
        </div>
        <div v-show="currentView == 'LIST'">
            <div class="text-center m-3">
                <button
                    type="button"
                    class="btn btn-success costum-btn m-3"
                    @click="newNpcEdit"
                >
                    NJK hozzáadása
                </button>
                <button
                    type="button"
                    class="btn btn-success costum-btn m-3"
                    @click="showBestiarium"
                >
                    Bestiárium
                </button>
            </div>
            <div
                v-for="(npc, index) in npcs"
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
                        <div class="row">
                            <div class="col-sm">
                                <p><b>Faj: </b> {{ npc.race }}</p>
                                <p><b>Szint: </b> {{ npc.level }}</p>
                                <p><b>TP érték: </b> {{ npc.exp }}</p>
                                <p><b>Életerő:</b></p>
                                <p>Életerő Pontok ( Ép ): {{ npc.EP }}</p>
                                <p>
                                    Fájdalomtűrési Pontok ( Fp ): {{ npc.FP }}
                                </p>
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
                                <p>
                                    Sebzés Felfogó Érték ( SFÉ ): {{ npc.SFE }}
                                </p>
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
                        <div
                            v-if="deleting == index"
                            class="text-center m-2 border border-danger border-2 rounded-5"
                        >
                            <p class="m-3">Bisztos akarja törölni az NJK-át</p>
                            <button
                                type="button"
                                class="btn btn-success costum-btn m-3"
                                @click="cancelDeleting"
                            >
                                Mégsem
                            </button>
                            <button
                                type="button"
                                class="btn btn-danger costum-btn m-3"
                                @click="deleteNpc(index)"
                            >
                                Töröl
                            </button>
                        </div>
                        <div v-else class="text-center m-2">
                            <button
                                type="button"
                                class="btn btn-success costum-btn m-3"
                                @click="npcEdit(npc, index)"
                            >
                                Módosít
                            </button>
                            <button
                                type="button"
                                class="btn btn-danger costum-btn m-3"
                                @click="prepareDeleting(index)"
                            >
                                Töröl
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div v-show="currentView == 'NPC'">
            <magus-bestiarium @cancel="cancelNpcEdit" @save="saveNpcEdit" />
        </div>
        <div></div>

        <div v-if="loading" id="overlay">
            <div id="overlayText">Mentés folyamatban...</div>
        </div>
    </div>
</template>

<script>
import NpcEdit from "./MagusModuleGlobalNpcEdit.vue";
import magusBestiarium from "./MagusModuleGlobalNpcBestiarium.vue";

export default {
    props: {
        moduleId: {
            type: Number,
            default: null,
        },
    },
    components: {
        NpcEdit,
        magusBestiarium,
    },
    data() {
        return {
            npcs: [],
            currentView: "LIST",
            loading: false,
            error: false,
            deleting: null,
        };
    },
    computed: {},
    methods: {
        getNpc() {
            axios
                .get("/gm/get-magus-game-module-npc/" + this.moduleId)
                .then((res) => {
                    if (res.data.npcs) {
                        this.npcs = res.data.npcs;
                    }
                })
                .catch((err) => {
                    console.log(err);
                });
        },
        saveNpc() {
            this.loading = true;
            this.error = false;
            axios
                .post("/gm/update-magus-game-module-npc/" + this.moduleId, {
                    npcs: this.npcs,
                })
                .then((res) => {
                    this.loading = false;
                })
                .catch((err) => {
                    this.loading = false;
                    this.error = true;
                    setTimeout(() => {
                        this.error = false;
                    }, 3000);
                });
        },
        prepareDeleting(index) {
            this.deleting = index;
        },
        cancelDeleting() {
            this.deleting = null;
        },
        deleteNpc(index) {
            this.npcs.splice(index, 1);
            this.deleting = null;
            this.saveNpc();
        },
        newNpcEdit() {
            this.currentView = "EDIT";
            this.$refs.npcEdit.setDefaultNpc();
        },
        showBestiarium() {
            this.currentView = "NPC";
        },
        saveNpcEdit({ npc, index }) {
            if (index !== null) {
                this.npcs[index] = npc;
            } else {
                this.npcs.push(npc);
            }
            this.saveNpc();
            this.currentView = "LIST";
        },
        cancelNpcEdit() {
            this.currentView = "LIST";
        },
        npcEdit(npc, index) {
            this.currentView = "EDIT";
            this.$refs.npcEdit.setNpc(npc, index);
        },
    },
};
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
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 200;
}

#overlayText {
    position: absolute;
    top: 50%;
    left: 50%;
    font-size: 50px;
    color: white;
    transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
}
</style>
