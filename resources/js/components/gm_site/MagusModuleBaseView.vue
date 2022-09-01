<template>
    <div>
        <div class="p-4 border-bottom border-primary m-2 text-center">
            <button type="button" class="btn btn-success costum-btn">
                Új játék készítése
            </button>
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
                                gameModule.name
                            }}</a>
                        </td>
                        <td>
                            <a href="" class="btn btn-outline-success m-1"
                                >Megnéz</a
                            >
                            <button
                                type="button"
                                class="btn btn-success costum-btn m-1"
                            >
                                Módosít
                            </button>
                            <button
                                type="button"
                                class="btn btn-danger costum-btn m-1"
                            >
                                Töröl
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
        Magus
    </div>
</template>

<script>
export default {
    data() {
        return {
            gameModules: [],
            pagLinks: [],
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
                    this.gameModules = res.data;
                    // this.gameModules = res.data.data;
                    this.pagLinks = res.data.links;
                    //csak most
                    this.pagLinks = [];
                    //end csak most
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
};
</script>

<style scoped>
.active {
    border: 1px solid rgb(15, 91, 161);
}
</style>
