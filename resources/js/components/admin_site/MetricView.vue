<template>
    <div>
       <div class="bg-ligh bg-gradient border border-success rounded mt-4 mb-4 text-end">
           <button type="button" class="btn btn-success m-3" @click="fetchMetrickData">Fetch Data</button>
       </div>
       <!-- grafikon -->
       <div v-if="haveMetrickData" class="p-3 border border-secondary rounded m-2">
           <div class="row">
               <!-- v-for -->
               <div v-for="metrick in metrickData" :key="metrick.id" class="col">
                   <div class="text-center mb-3">
                       <p>{{ metrick.views }}</p>
                   </div>
                   <div class="d-flex justify-content-center">
                       <!-- grafikai oszlop -->
                       <div class="bg-primary bar" v-bind:style="{ height: metrick.views * 5 + 'px' }"></div>
                   </div>
                   <div class="text-center mt-3">
                       <p>{{ metrick.updated_at }}</p>
                   </div>
               </div>
           </div>
           <div v-if="havePagination" class="text-center">
                <button v-for="pag, index in pagLinks" :key="'PB' + index" :disabled="!pag.url" :class="{'active':pag.active}" class="btn btn-sm" @click="paginate(pag.url)" v-html="pag.label"></button>
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
    },
}
</script>

<style scoped>
    .active {
        border: 1px solid rgb(15, 91, 161);
    }

    .bar {
        width: 10px;
    }
</style>