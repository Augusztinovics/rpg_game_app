<template>
    <div>
        <div v-if="error">
            <div class="text-center bg-danger m-3">
                <p class="text-light p-4">Valami Hiba történt...</p>
            </div>
        </div>

        <div>
            <div v-if="havePagination" class="text-center mt-4">
                <button
                    v-for="(pag, index) in pagLinks"
                    :key="'PT' + index"
                    :disabled="!pag.url"
                    :class="{ active: pag.active }"
                    class="btn btn-sm"
                    @click="paginate(pag.url)"
                    v-html="pag.label"
                ></button>
            </div>
            <div class="table-responsive m-4">
                <table class="table table-striped">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Játék modul neve</th>
                            <th>Lehetőségek</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr
                            v-for="(gameModule, index) in gameModules"
                            :key="'GM' + index"
                        >
                            <td>{{ gameModule.id }}</td>
                            <td>{{ gameModule.game_module_name }}</td>
                            <td>
                                <button
                                    class="btn btn-outline-success m-1"
                                    @click="getModuleDatas(gameModule.id, index)"
                                    data-bs-toggle="modal"
                                    data-bs-target="#previewModal"
                                >
                                    Áttekintés
                                </button>
                                <a :href="'public/game-module-pdf/' + gameModule.id" class="btn btn-outline-success m-1"
                                    >Letölt</a
                                >
                                <button
                                    v-if="isGm"
                                    class="btn btn-outline-success m-1"
                                    @click="usePublicGameModule(gameModule.id)"
                                >
                                    Játék átvétele
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div v-if="havePagination" class="text-center">
                <button
                    v-for="(pag, index) in pagLinks"
                    :key="'PT' + index"
                    :disabled="!pag.url"
                    :class="{ active: pag.active }"
                    class="btn btn-sm"
                    @click="paginate(pag.url)"
                    v-html="pag.label"
                ></button>
            </div>
        </div>

        <!-- Module Attekintes Modal -->
        <div class="modal fade" id="previewModal" tabindex="-1" aria-labelledby="previewModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-fullscreen">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="previewModalLabel">Játék áttekintése</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <div v-if="gameModules[selectedIndex]">
                            <div>
                                <div class="stage-title">
                                    <img class="header-img" src="/img/pentagram.png" alt="pentagram" width="72" height="72">
                                    <h1>{{ gameModules[selectedIndex].game_module_name }}</h1>
                                </div>
                                <div>
                                    <h2>A játék fő történésvonala:</h2>
                                    <p v-for="note, index in gameModules[selectedIndex].global_note" :key="'GNOTE' + index"><span><b>- </b></span>{{ note.note }}</p>
                                </div>
                            </div>
                            <hr>
                            <div v-for="stage, index in moduleData" :key="'STAGE' + index">
                                <div>
                                    <div class="stage-title">
                                        <img class="header-img" src="/img/pentagram.png" alt="pentagram" width="72" height="72">
                                        <h2>{{ stage.module_data.title }}</h2>
                                    </div>
                                    <div>
                                        <img :src="'/img/fantasy-bg/' + stage.module_data.img" alt="stage background image" style="width:100%;">
                                        <div class="stage-des-text">
                                            <p class="stage-text"><b>{{ stage.module_data.description }}</b></p>
                                        </div>
                                    </div>
                                </div>
                                <hr>
                                <div v-if="stage.module_data.note.lenght > 0">
                                    <div>
                                        <div class="stage-title">
                                            <img class="header-img" src="/img/pentagram.png" alt="pentagram" width="72" height="72">
                                            <h2>{{ stage.module_data.title }}</h2>
                                        </div>
                                        <p><b>A jelenet történési menete:</b></p>
                                        <div>
                                            <p v-for="note, index in stage.module_data.note" :key="'SNote' + stage.id + index"><span><b>- </b></span>{{ note }}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        
                            <div v-if="gameModules[selectedIndex].npc_data">
                                <div class="stage-title">
                                    <img class="header-img" src="/img/pentagram.png" alt="pentagram" width="72" height="72">
                                    <h2>Bestiárium</h2>
                                </div>
                                <hr>
                                <div v-for="npc, index in gameModules[selectedIndex].npc_data" :key="'NPC' + index">
                                    <div>
                                        <h2>{{ npc.name }}</h2>
                                    </div>
                                    <p>------------------------------------------</p>
                                    <div> 
                                        <div>
                                            <div class="one-row">
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
                                            <div class="one-row">
                                                <p><b>Faj: </b> {{ npc.race }}</p>
                                                <p><b>Szint: </b> {{ npc.level }}</p>
                                                <p><b>TP érték: </b> {{ npc.exp }}</p>
                                                <p><b>Életerő:</b></p>
                                                <p>Életerő Pontok ( Ép ): {{ npc.EP }}</p>
                                                <p>
                                                    Fájdalomtűrési Pontok ( Fp ): {{ npc.FP }}
                                                </p>
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
                                    </div>
                                    <hr>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <div v-if="gameModules[selectedIndex]">
                            <a :href="'public/game-module-pdf/' + gameModules[selectedIndex].id" class="btn btn-outline-success m-1"
                            >Letölt</a
                            >
                            <button
                                v-if="isGm"
                                class="btn btn-outline-success m-1"
                                @click="usePublicGameModule(gameModules[selectedIndex].id)"
                            >
                                Játék átvétele
                            </button>
                        </div>
                        <button type="button" class="btn btn-secondary costum-btn" data-bs-dismiss="modal">Bezár</button>
                    </div>
                </div>
            </div>
        </div>

        <div v-if="loading" id="overlay">
            <div id="overlayText">
                Töltés folyamatban...
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            gameModules: [],
            pagLinks: [],
            isGm: false,
            loading: false,
            error: false,
            moduleData: [],
            selectedIndex: null
        };
    },
    computed: {
        havePagination() {
            return this.pagLinks.length > 3;
        },
    },
    methods: {
        fetchGameModules() {
            axios
            .get("public/game-modules/MAGUS")
            .then((res) => {
                console.log(res);
                this.gameModules = res.data.gameModules.data;
                this.isGm = res.data.isGm;
                this.pagLinks = res.data.gameModules.links;
            })
            .catch((error) => {
                console.log(error);
            });
        },
        paginate(link) {
            axios
            .get(link)
            .then((res) => {
                this.gameModules = res.data.gameModules.data;
                this.isGm = res.data.isGm;
                this.pagLinks = res.data.gameModules.links;
            })
            .catch((error) => {
                console.log(error);
            });
        },
        usePublicGameModule(id) {
            this.loading = true;
            this.error = false;
            axios
                .post("gm/use-public-game-module/" + id)
                .then((res) => {
                    this.loading = false;
                    alert('A játék sikeresen átvéve');
                })
                .catch((error) => {
                    console.log(error.response.data.message);
                    this.loading = false;
                    this.error = true;
                    setTimeout(() => {
                        this.error = false;
                    }, 3000)
            });
        },
        getModuleDatas(id, index) {
            this.selectedIndex = index;
            this.loading = true;
            this.error = false;
            axios
                .get("public/game-module-data/" + id)
                .then((res) => {
                    this.loading = false;
                    this.moduleData = res.data;
                })
                .catch((error) => {
                    console.log(error.response.data.message);
                    this.loading = false;
                    this.error = true;
                    setTimeout(() => {
                        this.error = false;
                    }, 3000)
            });
        }
    },
    mounted() {
        this.fetchGameModules();
    },
}
</script>

<style scoped>
    .active {
        border: 1px solid rgb(15, 91, 161);
    }

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
    .header-img {
        display: inline-block;
        margin-right: auto;
    }
    .stage-des-text {
        text-align: center;
    }
    .stage-text {
        margin: 10px;
        padding: 10px;
        font-size: 1.2rem;
        background: rgba(255, 255, 255, 0.7);
        border-radius: 15%;
        white-space: pre-wrap;
    }
    .stage-title {
        margin: 10;
        text-align: center;
    }
    .one-row {
        display: inline-block;
        width: 45%;
    }
</style>
