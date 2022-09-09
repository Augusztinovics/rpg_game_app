<template>
    <div>
        <div v-if="error">
            <div class="text-center bg-danger m-3">
                <p class="text-light p-4">Hiba történt mentés közben...</p>
            </div>
        </div>
        <!-- module cime -->
        <div class="text-center m-5">
            <h1 class="mb-5">{{ moduleName }}</h1>
            <p class="text-muted">A modul cime</p>
            <div class="input-group input-group-lg ps-sm-5 pe-sm-5">
                <input type="text" class="form-control" v-model="moduleName" aria-label="Game Module Name" aria-describedby="button-addon2">
                <button class="btn btn-outline-success" type="button" id="button-addon2" @click="updateModuleName">Elment</button>
            </div>
        </div>
        <!-- globalis menu sor -->
        <div class="text-center m-3 bg-secondary shadow-lg border border-4 rounded-5">
            <button class="btn btn-outline-light btn-lg costum-btn m-4" data-bs-toggle="modal" data-bs-target="#globalNoteModal" @click="fatchNotes">Globális jegyzetek</button>
            <button class="btn btn-outline-light btn-lg costum-btn m-4" data-bs-toggle="modal" data-bs-target="#npcModal">NPC karakterek</button>
        </div>

        <div>
            <!-- jelenet containaer -->
            <div>

            </div>
            <div class="text-center m-4">
                <button class="btn btn-success btn-lg m-4">+ Jelenet hozzáadása</button>
            </div>
        </div>
        
        <div v-if="loading" id="overlay">
            <div id="overlayText">
                Mentés folyamatban...
            </div>
        </div>

        <!-- Globalis Jegyzetek Modal -->
        <div class="modal fade" id="globalNoteModal" tabindex="-1" aria-labelledby="globalNoteModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-fullscreen">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="globalNoteModalLabel">Globális jegyzetek</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <game-module-global-note 
                            :module-id="moduleId"
                            ref="notesModule" />
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary costum-btn" data-bs-dismiss="modal">Bezár</button>
                    </div>
                </div>
            </div>
        </div>

        <!-- NPC Modal -->
        <div class="modal fade" id="npcModal" tabindex="-1" aria-labelledby="npcModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-fullscreen">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="npcModalLabel">NPC karakterek</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        ...
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary costum-btn" data-bs-dismiss="modal">Bezár</button>
                        <button type="button" class="btn btn-primary costum-btn">Save changes</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import GameModuleGlobalNote from './gm_site/MagusModuleGlobalNote.vue';

export default {
    props: {
        gameModule: Object,
        gameData: Object
    },
    components: {
        GameModuleGlobalNote
    },
    data() {
        return {
            moduleName: '',
            moduleId: null,
            magusGameData : [],
            loading: false,
            error: false,
        }
    },
    computed: {
        dataCount() {
            return this.magusGameData.length;
        }
    },
    methods: {
        updateModuleName() {
            if (this.moduleName) {
                this.loading = true;
                this.error = false;
                axios.post('/gm/update-magus-game-module-name/' + this.moduleId, {
                    moduleName: this.moduleName
                }).then( res => {
                    this.loading = false;
                }).catch( err => {
                    this.loading = false;
                    this.error = true;
                    setTimeout(() => {
                        this.error = false;
                    }, 3000)
                })
            }
        },
        fatchNotes() {
            this.$refs.notesModule.getNotes();
        }
    },
    mounted() {
        console.log(this.gameModule);
        console.log(this.gameData);
        this.moduleName = this.gameModule.game_module_name;
        this.moduleId = this.gameModule.id;
        if (this.gameData) {
            this.magusGameData = Object.values(this.gameData);
        }
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