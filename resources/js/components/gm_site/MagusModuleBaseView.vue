<template>
    <div>
        <div v-if="error">
            <div class="text-center bg-danger m-3">
                <p class="text-light p-4">Hiba történt mentés közben...</p>
            </div>
        </div>

        <div>
            <div class="p-4 border-bottom border-primary m-2 text-center">
                <a
                    href="/gm/magus-game-module/new"
                    class="btn btn-success costum-btn"
                >
                    Új játék készítése
                </a>
            </div>
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
                            <th>Meghívott játékosok száma</th>
                            <th>Lehetőségek</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr
                            v-for="(gameModule, index) in gameModules"
                            :key="'GM' + index"
                        >
                            <td>{{ gameModule.id }}</td>
                            <td>
                                <a href="" class="btn btn-link">{{
                                    gameModule.game_module_name
                                }}</a>
                            </td>
                            <td>
                                <button
                                    type="button"
                                    class="btn btn-outline-success"
                                >
                                    {{ playersCount(index) }}
                                </button>
                            </td>
                            <td>
                                <a :href="'gm/game-module-pdf/' + gameModule.id" class="btn btn-outline-success m-1"
                                    >Letölt</a
                                >
                                <button
                                    type="button"
                                    class="btn btn-success costum-btn m-1"
                                    @click="openSelectFriendModal(index)"
                                    data-bs-toggle="modal"
                                    data-bs-target="#playerModal"
                                >
                                    Játékost meghív
                                </button>
                                <a
                                    :href="'/gm/magus-game-module/' + gameModule.id"
                                    class="btn btn-success costum-btn m-1"
                                >
                                    Módosít
                                </a>
                                <button
                                    type="button"
                                    class="btn btn-danger costum-btn m-1"
                                    data-bs-toggle="modal"
                                    data-bs-target="#confirmDelete"
                                    @click="prepareForDelete(gameModule.id)"
                                >
                                    Töröl
                                </button>
                                <button
                                    v-if="!gameModule.shared"
                                    type="button"
                                    class="btn btn-success costum-btn m-1"
                                    data-bs-toggle="modal"
                                    data-bs-target="#confirmShare"
                                    @click="prepareForShare(gameModule.id, index)"
                                >
                                    Megosztás
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

        <!-- Modals for adding player and deleting module -->
        <div class="modal fade" id="playerModal" tabindex="-1" aria-labelledby="playerModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="playerModalLabel">Játékos meghívása</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                <div class="modal-body">
                    <ul class="list-unstyled">
                        <li v-for="(friend, index) in friends"
                            :key="'FREND' + index"
                            class="m-2"
                        >
                            {{ friend.friend.name }}
                            <button v-if="haveInPlayerList(friend.friend.id)" class="btn btn-danger btn-sm costum-btn ms-4" @click="removePlayerFromModule(friend.friend.id)">Meghivás Visszavonása</button>
                            <button v-else class="btn btn-success btn-sm costum-btn ms-4" @click="addPlayerToModule(friend.friend.id)">Meghívás Játékosnak</button>

                        </li>
                    </ul>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary costum-btn" data-bs-dismiss="modal">Bezár</button>
                </div>
                </div>
            </div>
        </div>

        <!-- DELETE CONFIRMATION -->
        <div class="modal fade" id="confirmDelete" tabindex="-1" aria-labelledby="delModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="delModalLabel">Játék module törlése</h5>
                        <button type="button" class="btn-close" @click="cancelDelete" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                <div class="modal-body">
                    <div class="text-center m-4">
                        <p>Bisztosan törölni szeretné ezt a Játék Modult?</p>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary costum-btn" @click="cancelDelete" data-bs-dismiss="modal">Mégsem</button>
                    <button type="button" class="btn btn-danger costum-btn" @click="deleteModule" data-bs-dismiss="modal">Töröl</button>
                </div>
                </div>
            </div>
        </div>

        <!-- SHARE CONFIRMATION -->
        <div class="modal fade" id="confirmShare" tabindex="-1" aria-labelledby="shareModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="shareModalLabel">Játék module megosztása</h5>
                        <button type="button" class="btn-close" @click="cancelShare" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                <div class="modal-body">
                    <div class="text-center m-4">
                        <p>Bisztosan meg szeretné osztani ezt a Játék Modult?</p>
                        <p>Minden modult csak egyszer lehet megosztani!</p>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary costum-btn" @click="cancelShare" data-bs-dismiss="modal">Mégsem</button>
                    <button type="button" class="btn btn-success costum-btn" @click="shareGameModule" data-bs-dismiss="modal">Megosztás</button>
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
            friends: [],
            selectedModuleIndex: null,
            idForDelete: null,
            loading: false,
            error: false,
            shareId: null,
            shareIndex: null,
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
            .get("gm/game-modules/MAGUS")
            .then((res) => {
                this.gameModules = res.data.data;
                this.pagLinks = res.data.links;
            })
            .catch((error) => {
                console.log(error);
            });
        },
        paginate(link) {
            axios
            .get(link)
            .then((res) => {
                this.gameModules = res.data.data;
                this.pagLinks = res.data.links;
            })
            .catch((error) => {
                console.log(error);
            });
        },
        playersCount(index) {
            if (this.gameModules[index].players) {
                return this.gameModules[index].players.length;
            } else {
                return 0;
            }
        },
        fetchFriends() {
            this.loading = true;
            this.error = false;
            axios
            .get("gm/friend-list")
            .then((res) => {
                this.friends = res.data;
                this.loading = false;
            })
            .catch((error) => {
                console.log(error);
                this.loading = false;
                this.error = true;
                setTimeout(() => {
                    this.error = false;
                }, 3000)
            });
        },
        openSelectFriendModal(index) {
            this.selectedModuleIndex = index;
            this.fetchFriends();
        },
        shareGameModule() {
            if (!this.shareId && this.shareIndex) {
                return;
            }
            this.loading = true;
            this.error = false;
            axios
                .post("gm/share-game-module/" + this.shareId)
                .then((res) => {
                    this.loading = false;
                    this.gameModules[this.shareIndex].shared = true;
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
        prepareForShare(id,index) {
            this.shareId = id;
            this.shareIndex = index;
        },
        cancelShare() {
            this.shareId = null;
            this.shareIndex = null;
        },
        haveInPlayerList(id) {
            return this.gameModules[this.selectedModuleIndex].players.find(friend => friend.player_id == id);
        },
        addPlayerToModule(friendId) {
            this.loading = true;
            this.error = false;
            axios
            .post("gm/ad-game-module-player/" + this.gameModules[this.selectedModuleIndex].id, {
                playerId: friendId
            })
            .then((res) => {
                this.gameModules[this.selectedModuleIndex].players = res.data;
                this.loading = false;
            })
            .catch((error) => {
                console.log(error);
                this.loading = false;
                this.error = true;
                setTimeout(() => {
                    this.error = false;
                }, 3000)
            });
        },
        removePlayerFromModule(friendId) {
            this.loading = true;
            this.error = false;
            axios
            .post("gm/remove-game-module-player/" + this.gameModules[this.selectedModuleIndex].id, {
                playerId: friendId
            })
            .then((res) => {
                this.gameModules[this.selectedModuleIndex].players = res.data;
                this.loading = false;
            })
            .catch((error) => {
                console.log(error);
                this.loading = false;
                this.error = true;
                setTimeout(() => {
                    this.error = false;
                }, 3000)
            });
        },
        deleteModule() {
            if (this.idForDelete === null) {
                return;
            }
            this.loading = true;
            this.error = false;
            axios
            .post("gm/delete-game-module/" + this.idForDelete, {})
            .then((res) => {
                this.fetchGameModules();
                this.loading = false;
            })
            .catch((error) => {
                console.log(error);
                this.loading = false;
                this.error = true;
                setTimeout(() => {
                    this.error = false;
                }, 3000)
            });
        },
        prepareForDelete(id) {
            this.idForDelete = id;
        },
        cancelDelete() {
            this.idForDelete = null;
        }
    },
    mounted() {
        this.fetchGameModules();
    },
};
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
</style>
