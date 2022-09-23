<template>
    <div>
        <!-- Jelenet kontener -->
        <div>
            <!-- Jelenet sorszama -->
            <div class="text-end">
                <p>{{ module_data.game_module_data_order}}</p>
            </div>
            <!-- Jelenet cim -->
            <div class="text-center m-3">
                <h1>{{ moduleData.module_data.title }}<span class="ms-3"><button type="button" class="btn btn-success btn-sm costum-btn">Módosít</button></span></h1>
            </div>
            <!-- Jelenet leirasa hatterkeppel -->
            <div class="text-center">
                <div class="text-end">
                    <button type="button" class="btn btn-success btn-sm costum-btn">Háttér kép</button>
                </div>
                <div>
                    <p>{{ moduleData.module_data.description }}</p>
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
            inputTitle: '',
            inputDescript: '',
        }
    },
}
</script>