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
                <h1>{{ localData.title }}<span class="ms-3"><button type="button" class="btn btn-success btn-sm costum-btn">Módosít</button></span></h1>
            </div>
            <!-- Jelenet leirasa hatterkeppel -->
            <div class="text-center">
                <div class="text-end">
                    <button type="button" class="btn btn-success btn-sm costum-btn">Háttér kép</button>
                </div>
                <div>
                    <p>{{ localData.description }}</p>
                    <button type="button" class="btn btn-success btn-sm costum-btn">Módosít</button>
                </div>
            </div>
            <!-- Terkep rajzolas -->
            <div>

            </div>
        </div>

        <!-- Edit modals -->
        <!-- CIM -->
        <!-- HATTERKEP -->
        <!-- LEIRAS -->
        <!-- JELENET NPC -->
        <!-- JELENET JEGYZET -->
    </div>
</template>

<script>
export default {
    props: {
        moduleData: Object
    },
    data() {
        return {
            localOrder: null,
            localData: {},
        }
    },
    mounted() {
        this.localOrder = this.moduleData.game_module_data_order;
        this.localData = this.moduleData.module_data;
    }
}
</script>