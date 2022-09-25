<template>
    <div>
        <!-- Jelenet kontener -->
        <div>
            <!-- Jelenet sorszama -->
            <div class="text-end">
                <p>{{ localOrder }}</p>
            </div>
            <!-- Jelenet cim -->
            <div class="text-center m-3">
                <h1>{{ localData.title }}<span class="ms-3"><button type="button" class="btn btn-success btn-sm costum-btn" data-bs-toggle="modal" data-bs-target="#titleModal">Módosít</button></span></h1>
            </div>
            <!-- Jelenet leirasa hatterkeppel -->
            <div class="text-center">
                <div class="text-end">
                    <button type="button" class="btn btn-success btn-sm costum-btn">Háttér kép</button>
                </div>
                <div>
                    <p>{{ localData.description }}</p>
                    <button type="button" class="btn btn-success btn-sm costum-btn" data-bs-toggle="modal" data-bs-target="#desModal">Módosít</button>
                </div>
            </div>
            <!-- Terkep rajzolas -->
            <div>

            </div>
        </div>

        <!-- Edit modals -->
        <!-- CIM -->
        <div class="modal fade" id="titleModal" tabindex="-1" aria-labelledby="titleModalLabel" aria-hidden="true">
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

        <!-- LEIRAS -->
        <div class="modal fade" id="desModal" tabindex="-1" aria-labelledby="desModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="desModalLabel">Jelenet leírása</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                <div class="modal-body">
                    <textarea class="form-control" v-model="localData.description"></textarea>
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
export default {
    props: {
        moduleData: Object,
        index: Number
    },
    data() {
        return {
            localOrder: null,
            localData: {},
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
    },
    mounted() {
        this.localOrder = this.moduleData.game_module_data_order;
        this.localData = this.moduleData.module_data;
    }
}
</script>