<template>
    <div v-if="haveNews" class="container-fluid bg-light">
        <div class="text-center my-4 pt-4">
            <img class="d-block mx-auto my-4" src="/img/pentagram.png" alt="" width="72" height="72">
            <h2>Hírek és történések</h2>
        </div>
        <hr>
        <div class="container">
            <div v-for="hir, index in news" :key="'N' + index">
                <h3 class="ps-3 mb-5"><small class="text-muted me-4 h6">{{ hir.publushed_at }} </small>{{ hir.title }}</h3>
                <div class="p-3 mb-4" v-html="hir.news"></div>
            </div>
            <div v-if="havePagination" class="text-center mb-4 pb-2">
                <button v-for="pag, index in pagLinks" :key="'PT' + index" :disabled="!pag.url" :class="{'active':pag.active}" class="btn btn-sm" @click="paginate(pag.url)" v-html="pag.label"></button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            news: [],
            pagLinks: [],
        }
    },
    computed: {
        havePagination() {
            return this.pagLinks.length > 3;
        },
        haveNews() {
            return this.news.length > 0;
        }
    },
    methods: {
        fetchNews() {
            axios.get('/news')
            .then(res => {
                this.news = res.data.data;
                this.pagLinks = res.data.links;
            }).catch(error => {
                console.log(error);
            })
        },
        paginate(link) {
            axios.get(link)
            .then(res => {
                this.news = res.data.data;
                this.pagLinks = res.data.links;
            }).catch(error => {
                console.log(error);
            })
        },
    },
    mounted() {
        this.fetchNews();
    }
}
</script>

<style scoped>
    .active{
        border: 1px solid rgb(15, 91, 161);
    }
</style>