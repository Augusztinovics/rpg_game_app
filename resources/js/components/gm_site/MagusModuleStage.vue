<template>
    <div>
        <!-- Jelenet kontener -->
        <div class="container-md border border-secondary p-2 mt-4">
            <!-- Jelenet sorszama -->
            <div class="text-center">
                <img class="d-block mx-auto mb-4" src="/img/pentagram.png" alt="" width="72" height="72">
                <div class="text-end">
                    <p class="me-4"><span class="p-3 border border-secondary rounded-pill">{{ localOrder }}</span></p>
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
            <!-- Terkep rajzolas -->
            <div>

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

        <!-- JELENET NPC -->
        <!-- JELENET JEGYZET -->
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    props: {
        moduleData: Object,
        index: Number
    },
    data() {
        return {
            localOrder: null,
            localData: {},
            selectedImg: '',
            selectedBgIndex: null,
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
        white-space: pre;
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
</style>