<template>
    <div>
        <div class="text-center">
            <h2>Landing Page Views</h2>
        </div>
       <div class="bg-ligh bg-gradient border border-success rounded mt-4 mb-4 text-center">
           <button type="button" class="btn btn-success m-3" @click="fetchMetrickData">Fetch View Data</button>
       </div>
       <!-- grafikon -->
       <div v-if="haveMetrickData" class="p-3 border border-secondary rounded m-2">
           <div class="row">
               <!-- v-for -->
               <div v-for="metrick in metrickData" :key="metrick.id" class="col">
                   <div class="text-center mb-3">
                       <p>{{ metrick.updated_at }}</p>
                   </div>
                   <div class="d-flex justify-content-center">
                       <!-- grafikai oszlop -->
                       <div class="bg-primary bar" v-bind:style="{ height: metrick.views * 5 + 'px' }"></div>
                   </div>
                   <div class="text-center mt-3">
                       <p>{{ metrick.views }}</p>
                   </div>
               </div>
           </div>
           <div v-if="havePagination" class="text-center">
                <button v-for="pag, index in pagLinks" :key="'PB' + index" :disabled="!pag.url" :class="{'active':pag.active}" class="btn btn-sm" @click="paginate(pag.url)" v-html="pag.label"></button>
            </div>
       </div>
       <hr>
       <div>
           <div class="text-center">
               <h2>Download and Shared Data</h2>
           </div>
            <div class="bg-ligh bg-gradient border border-success rounded mt-4 mb-4 text-center">
                <button type="button" class="btn btn-success m-3" @click="fetchDownloadedData">Fetch Downloaded Data</button>
            </div>
            <div class="p-3 border border-secondary rounded m-2">
                <div class="row">
                    <div class="text-center">
                        <h2>Downloads:</h2>
                    </div>
                    <hr>
                    <div class="col">
                        <div class="text-center p-3 mb-2 bg-secondary text-white border border-3 border-primary rounded-2">
                            <h3>Magus Character Sheets Downloads</h3>
                            <h3>{{ magusCharacterSheet }}</h3>
                        </div>
                    </div>
                    <div class="col">
                        <div class="text-center p-3 mb-2 bg-secondary text-white border border-3 border-primary rounded-2">
                            <h3>Magus Game Modules Downloads</h3>
                            <h3>{{ magusGameDownloaded }}</h3>
                        </div>
                    </div>
                    <div class="col">
                        <div class="text-center p-3 mb-2 bg-secondary text-white border border-3 border-primary rounded-2">
                            <h3>All Downloads</h3>
                            <h3>{{ allDownload }}</h3>
                        </div>
                    </div>
                </div>
                <hr>
                <div class="text-center">
                    <h2>Game Module Share and Use</h2>
                </div>
                <hr>
                <div class="row">
                    <div class="col">
                        <div class="text-center p-3 mb-2 bg-secondary text-white border border-3 border-primary rounded-2">
                            <h3>Magus Game Module Shared</h3>
                            <h3>{{ magusGameShared }}</h3>
                        </div>
                    </div>
                    <div class="col">
                        <div class="text-center p-3 mb-2 bg-secondary text-white border border-3 border-primary rounded-2">
                            <h3>Magus Game Module Used</h3>
                            <h3>{{ magusGameUsed }}</h3>
                        </div>
                    </div>
                </div>
            </div>
       </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            metrickData: [],
            loading: false,
            haveError: false,
            pagLinks: [],
            magusCharacterSheet: 0,
            magusGameDownloaded: 0,
            allDownload: 0,
            magusGameShared: 0,
            magusGameUsed: 0,
        }
    },
    computed: {
        havePagination() {
            return this.pagLinks.length > 3;
        },
        haveMetrickData() {
            return this.metrickData.length > 0;
        }
    },
    methods: {
        fetchMetrickData() {
            this.loading = true;
            this.haveError = false;
            axios.get('/admin/metrick-data')
            .then(res => {
                this.metrickData = res.data.data;
                this.pagLinks = res.data.links;
                this.loading = false;
            }).catch(error => {
                this.loading = false;
                this.haveError = true;
                console.log(error);
            })
        },
        paginate(link) {
            this.loading = true;
            this.haveError = false;
            axios.get(link)
            .then(res => {
                this.metrickData = res.data.data;
                this.pagLinks = res.data.links;
                this.loading = false;
            }).catch(error => {
                this.haveError = true;
                console.log(error);
            })
        },
        fetchDownloadedData() {
            this.loading = true;
            this.haveError = false;
            axios.get('/admin/download-data')
            .then(res => {
                this.magusCharacterSheet = res.data.magus_character_sheet;
                this.magusGameDownloaded = res.data.magus_game_downloaded;
                this.allDownload = res.data.all_download;
                this.magusGameShared = res.data.magus_game_shared;
                this.magusGameUsed = res.data.magus_game_used;
                this.loading = false;
            }).catch(error => {
                this.loading = false;
                this.haveError = true;
                console.log(error);
            })
        }
    },
}
</script>

<style scoped>
    .active {
        border: 1px solid rgb(15, 91, 161);
    }

    .bar {
        width: 20px;
    }
</style>