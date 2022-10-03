<template>
    <div>
        <!-- Jelenet kontener -->
        <div class="container-md border border-secondary p-2 mt-4">
            <!-- Jelenet sorszama -->
            <div class="text-center  header-contener">
                <img class="header-img" src="/img/pentagram.png" alt="" width="72" height="72">
                <div class="text-end mt-3">
                    <button v-if="upArrowShow" type="button" class="btn btn-secondary btn-sm me-4 mb-3" @click="reorderModule('UP')">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-up-square" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm8.5 9.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V11.5z"/>
                        </svg>
                    </button>
                    <p class="me-4">
                        <button type="button" class="btn btn-danger btn-sm costum-btn me-3">Jelenet törlése</button>
                        <span class="p-3 border border-secondary rounded-pill">{{ localOrder }}</span>
                    </p>
                    <button v-if="downArrowShow" type="button" class="btn btn-secondary btn-sm me-4"  @click="reorderModule('DOWN')">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-down-square" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm8.5 2.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V4.5z"/>
                        </svg>
                    </button>
                </div>
            </div>
            <!-- Jelenet cim -->
            <div class="text-center m-3">
                <h1>{{ localData.title }}<span class="ms-3"><button type="button" class="btn btn-success btn-sm costum-btn" data-bs-toggle="modal" :data-bs-target="'#' +titleModalId">Módosít</button></span></h1>
            </div>
            <!-- Jelenet leirasa hatterkeppel -->
            <div class="text-center">
                <div class="text-end">
                    <button type="button" class="btn btn-success btn-sm costum-btn m-3" data-bs-toggle="modal" :data-bs-target="'#' + imgModalId">Háttér kép</button>
                </div>
                <div class="stage-des">
                    <img v-bind:src="bgImg" alt="stage background image" style="width:100%;">
                    <div class="stage-des-text">
                        <p class="stage-text"><b>{{ localData.description }}</b></p>
                        <button type="button" class="btn btn-success btn-sm costum-btn" data-bs-toggle="modal" :data-bs-target="'#' + desModalId">Módosít</button>
                    </div>
                </div>
            </div>
            <!-- Jegyzetek -->
            <div class="accordion" :id="'accordionNote' + index">
                <div class="accordion-item">
                    <h2 class="accordion-header" :id="'heading' + index">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" :data-bs-target="'#collapseNote' + index" aria-expanded="false" :aria-controls="'collapseNote' + index">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-book" viewBox="0 0 16 16">
                                <path d="M1 2.828c.885-.37 2.154-.769 3.388-.893 1.33-.134 2.458.063 3.112.752v9.746c-.935-.53-2.12-.603-3.213-.493-1.18.12-2.37.461-3.287.811V2.828zm7.5-.141c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492V2.687zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783z"/>
                            </svg>
                            <b class="ms-4">Jegyzetek</b>
                        </button>
                    </h2>
                    <div :id="'collapseNote' + index" class="accordion-collapse collapse" :aria-labelledby="'heading' + index" :data-bs-parent="'#accordionNote' + index">
                        <div class="accordion-body">
                            <p v-for="note, index in localData.note" :key="'NOTE' + index" class="d-flex justify-content-between border border-secondary p-2"><span class="text-with-enter">{{ note }}</span>
                                <span>
                                    <button type="button" class="btn btn-success btn-sm costum-btn ms-3"  data-bs-toggle="modal" :data-bs-target="'#' + noteModalId" @click="editNote(note, index)">Módosít</button>
                                    <button type="button" class="btn btn-danger btn-sm costum-btn ms-3" @click="deleteNote(index)">Töröl</button>
                                </span>
                            </p>
                            <div class="text-center mt-3">
                                <button type="button" class="btn btn-success costum-btn ms-3"  data-bs-toggle="modal" :data-bs-target="'#' + noteModalId" @click="newNote">+ Új jegyzet hozzáadása</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Terkep rajzolas -->
            <div class="accordion" :id="'accordionMap' + index">
                <div class="accordion-item">
                    <h2 class="accordion-header" :id="'headingMap' + index">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" :data-bs-target="'#collapseMap' + index" aria-expanded="false" :aria-controls="'collapseMap' + index">
                            <b class="ms-4">Jelenethez tartozó Térkép Készítése</b>
                        </button>
                    </h2>
                    <div :id="'collapseMap' + index" class="accordion-collapse collapse" :aria-labelledby="'headingMap' + index" :data-bs-parent="'#accordionMap' + index">
                        <div class="accordion-body">
                            <!-- canvas a rajzolashoz -->
                            <map-drowing 
                                :map-drow-data="localData.map"
                                :canvas-id="'stageCanvas' + index"
                                @save="saveDrowing"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Edit modals -->
        <!-- CIM -->
        <div class="modal fade" :id="titleModalId" tabindex="-1" aria-labelledby="titleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="titleModalLabel">Jelenet címe</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                <div class="modal-body">
                    <input type="text" class="form-control" id="egyebb-text" v-model="localData.title">
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary costum-btn" data-bs-dismiss="modal">Bezár</button>
                    <button type="button" class="btn btn-primary costum-btn" @click="saveData" data-bs-dismiss="modal">Elment</button>
                </div>
                </div>
            </div>
        </div>

        <!-- HATTERKEP -->
        <div class="modal fade" :id="imgModalId" tabindex="-1" aria-labelledby="imgModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-lg">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="imgModalLabel">Jelenet háttérképe</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" @click="closeBgModal"></button>
                    </div>
                <div class="modal-body">
                   <div class="text-center">
                       <button type="button" v-for="bgImg, index in imgs" :key="'BG' + index" class="bg-select" @click="selectBg(bgImg, index)" :class="[selectedBgIndex == index ? 'bg-selected' : '']">
                           <img :src="'/img/fantasy-bg/' + bgImg" :alt="'Selectable beckround image ' + bgImg" style="width:100%;">
                       </button>
                   </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary costum-btn" data-bs-dismiss="modal" @click="closeBgModal">Bezár</button>
                    <button type="button" class="btn btn-primary costum-btn" @click="saveSelectedBg" data-bs-dismiss="modal">Elment</button>
                </div>
                </div>
            </div>
        </div>
        <!-- LEIRAS -->
        <div class="modal fade" :id="desModalId" tabindex="-1" aria-labelledby="desModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="desModalLabel">Jelenet leírása</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                <div class="modal-body">
                    <textarea class="form-control" v-model="localData.description" rows="5"></textarea>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary costum-btn" data-bs-dismiss="modal">Bezár</button>
                    <button type="button" class="btn btn-primary costum-btn" @click="saveData" data-bs-dismiss="modal">Elment</button>
                </div>
                </div>
            </div>
        </div>

        <!-- JELENET JEGYZET -->
        <div class="modal fade" :id="noteModalId" tabindex="-1" aria-labelledby="desModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="desModalLabel">Jegyzet</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" @click="newNote"></button>
                    </div>
                <div class="modal-body">
                    <textarea class="form-control" v-model="inputNote" rows="5"></textarea>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary costum-btn" @click="newNote" data-bs-dismiss="modal">Bezár</button>
                    <button type="button" class="btn btn-primary costum-btn" @click="saveNote" data-bs-dismiss="modal">Elment</button>
                </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
import MapDrowing from './MapDrowing.vue';

export default {
    components: {
        MapDrowing
    },
    props: {
        moduleData: Object,
        index: Number,
        moduleCount: Number
    },
    data() {
        return {
            localOrder: null,
            localData: {},
            selectedImg: '',
            selectedBgIndex: null,
            inputNote: '',
            inputNoteIndex: null,
        }
    },
    computed: {
        ...mapGetters('fantasyBgImgs', {
            imgs: 'imgs'
        }),
        bgImg() {
            return '/img/fantasy-bg/' + this.localData.img;
        },
        titleModalId() {
            return 'titleModal' + this.index;
        },
        desModalId() {
            return 'desModal' + this.index;
        },
        imgModalId() {
            return 'imgModal' + this.index;
        },
        noteModalId() {
            return 'noteModal' + this.index;
        },
        upArrowShow() {
            return this.moduleCount > 0 && this.index > 0;
        },
        downArrowShow() {
            return this.moduleCount > 0 && this.index < this.moduleCount - 1;
        }
    },
    methods: {
        saveData() {
            this.$emit('loading', true);
            this.$emit('onError', false);
            axios.post('/gm/update-game-module-data/' + this.moduleData.id, {
                newData: this.localData
            }).then( res => {
                this.$emit('updatedData', { moduleData: res.data, index: this.index });
                this.$emit('loading', false);
            }).catch( err => {
                this.$emit('loading', false);
                this.$emit('onError', true);
                setTimeout(() => {
                    this.$emit('onError', false);
                }, 3000)
            })
        },
        selectBg(img, index) {
            this.selectedImg = img;
            this.selectedBgIndex = index;
        },
        closeBgModal() {
            this.selectedImg = '';
            this.selectedBgIndex = null;
        },
        saveSelectedBg() {
            if (this.selectedImg) {
                this.localData.img = this.selectedImg;
                this.closeBgModal();
                this.saveData();
            }
        },
        editNote(note, index) {
            this.inputNote = note;
            this.inputNoteIndex = index;
        },
        newNote() {
            this.inputNote = '';
            this.inputNoteIndex = null;
        },
        saveNote() {
            if (!this.inputNote) {
                return;
            }
            if (this.inputNoteIndex === null) {
                this.localData.note.push(this.inputNote);
            } else {
                this.localData.note[this.inputNoteIndex] = this.inputNote;
            }
            this.inputNote = '';
            this.inputNoteIndex = null;
            this.saveData();
        },
        deleteNote(index) {
            this.localData.note.splice(index, 1);
            this.saveData();
        },
        saveDrowing(mapData) {
            this.localData.map = mapData;
            this.saveData();
        },
        reorderModule(direction) {
            this.$emit('reorder', {index: this.index, direction: direction});
        },
        deleteStage() {
            this.$emit('delete', this.moduleData.id);
        }
    },
    watch: {
        moduleData() {
            this.localOrder = this.moduleData.game_module_data_order;
            this.localData = this.moduleData.module_data;
        }
    },
    mounted() {
        this.localOrder = this.moduleData.game_module_data_order;
        this.localData = this.moduleData.module_data;
    }
}
</script>

<style scoped>
    .stage-des {
        position: relative;
        text-align: center;
    }
    .stage-des-text {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
    .stage-text {
        margin: 10px;
        padding: 10px;
        font-size: 1.2rem;
        background: rgba(255, 255, 255, 0.7);
        border-radius: 15%;
        white-space: pre-wrap;
    }
    .bg-select{
        margin: 10px;
        padding: 3px;
        border: 1px solid rgb(26, 26, 114);
        width: 200px;
        height: 120px;
    }
    .bg-select:hover {
        border: 1px solid red;
    }
    .bg-selected {
        border: 1px solid red;
    }
    .text-with-enter {
        white-space: pre-wrap;
    }
    .header-contener{
        position: relative;
        height: 125px;
    }
    .header-img {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
    @media only screen and (max-width: 522px) {
    .header-img {
        left: 50px;
    }
}
</style>