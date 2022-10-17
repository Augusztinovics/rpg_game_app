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
                                <a href="" class="btn btn-outline-success m-1"
                                    >Letölt</a
                                >
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
            loading: false,
            error: false,
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
</style>
