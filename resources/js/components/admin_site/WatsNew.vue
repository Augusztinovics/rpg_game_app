<template>
    <div>
        <div v-if="pageMod=='ALL'">
            <div v-if="loading" class="bg-success p-3 text-center">
                <h2 class="text-light">Data loading, please wait....</h2>
            </div>
            <div v-if="haveError" class="bg-danger p-3 text-center">
                <h2 class="text-light">Error loading</h2>
            </div>
            <div class="text-center my-4">
                <button type="button" class="btn btn-success my-3 costum-btn px-3" @click="addNews">Create a news</button>
            </div>
            <hr>
            <div v-if="havePagination" class="text-center">
                <button v-for="pag, index in pagLinks" :key="'PT' + index" :disabled="!pag.url" :class="{'active':pag.active}" class="btn btn-sm" @click="paginate(pag.url)" v-html="pag.label"></button>
            </div>
            <div class="table-responsive">
                <table class="table table-striped">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Published</th>
                            <th>Published at</th>
                            <th>Title</th>
                            <th>Created</th>
                            <th>Modifyed</th>
                            <th>-</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="hir, index in news" :key="'N' + index">
                            <td>{{ hir.id }}</td>
                            <td>
                                <p>{{ newsPublished(hir.published) }}</p>
                                <button v-if="!hir.published" class="btn btn-outline-success btn-sm ms-1" type="button" @click="publishNews(hir.id, 1)">Publish</button>
                                <button v-else class="btn btn-outline-danger btn-sm ms-1" type="button" @click="publishNews(hir.id, 0)">Unpublish</button>
                            </td>
                            <td>{{ hir.publushed_at }}</td>
                            <td><button type="button" @click="viewNews(index)">{{ hir.title }}</button></td>
                            <td>{{ hir.created_at }}</td>
                            <td>{{ hir.updated_at }}</td>
                            <td>
                                <button class="btn btn-outline-success btn-sm ms-1" type="button" @click="editNews(index)">Mod</button>
                                <button class="btn btn-outline-danger btn-sm ms-1" type="button" @click="deleteNews(hir.id)">Del</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div v-if="havePagination" class="text-center">
                <button v-for="pag, index in pagLinks" :key="'PT' + index" :disabled="!pag.url" :class="{'active':pag.active}" class="btn btn-sm" @click="paginate(pag.url)" v-html="pag.label"></button>
            </div>
        </div>

        <div v-if="pageMod=='EDIT'">
            <div v-if="loading" class="bg-success p-3 text-center">
                <h2 class="text-light">Data loading, please wait....</h2>
            </div>
            <div v-if="haveError" class="bg-danger p-3 text-center">
                <h2 class="text-light">Error loading</h2>
            </div>
            <div>
                <div class="text-center my-3">
                    <h2>Edit/Create News</h2>
                </div>
                <div class="my-5">
                    <label for="title">Title</label>
                    <input type="text" class="form-control" id="title" v-model="inputTitle">
                </div>
                <div>
                    <label for="news">The news:</label>
                    <textarea class="form-control" id="news" rows="30" v-model="inputNews"></textarea>
                </div>
                <hr>
                <div class="text-center my-3">
                    <button class="btn btn-primary" type="button" @click="cancelEdit">Cancel</button>
                    <button class="btn btn-success ms-3" type="button" @click="saveNews">Save</button>
                </div>
            </div>
        </div>

        <div v-if="pageMod=='VIEW'">
            <div class="mt-4">
                <h3>{{ inputTitle }}</h3>
                <div v-html="inputNews"></div>
            </div>
            <hr>
            <div class="text-center my-3">
                <button class="btn btn-primary" type="button" @click="cancelEdit">Back</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            news: [],
            loading: false,
            haveError: false,
            selectedNewsId: null,
            inputTitle: '',
            inputNews: '',
            pagLinks: [],
            pageMod: 'ALL',
        }
    },
    computed: {
        havePagination() {
            return this.pagLinks.length > 3;
        },
    },
    methods: {
        newsPublished(pub) {
            if (pub) {
                return 'Published'
            } else {
                return 'Not yet'
            }
        },
        fetchNews() {
            this.loading = true;
            this.haveError = false;
            axios.get('/admin/news')
            .then(res => {
                this.news = res.data.data;
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
                this.news = res.data.data;
                this.pagLinks = res.data.links;
                this.loading = false;
            }).catch(error => {
                this.haveError = true;
                console.log(error);
            })
        },
        addNews() {
            this.selectedNewsId = null;
            this.inputTitle = '';
            this.inputNews = '';
            this.pageMod = 'EDIT'
        },
        editNews(index) {
            this.selectedNewsId = this.news[index].id;
            this.inputTitle = this.news[index].title;
            this.inputNews = this.news[index].news;
            this.pageMod = 'EDIT'
        },
        viewNews(index) {
            this.inputTitle = this.news[index].title;
            this.inputNews = this.news[index].news;
            this.pageMod = 'VIEW'
        },
        cancelEdit() {
            this.selectedNewsId = null;
            this.inputTitle = '';
            this.inputNews = '';
            this.pageMod = 'ALL'
        },
        createNews() {
             if (this.inputTitle && this.inputNews) {
                this.loading = true;
                this.haveError = false;
                axios.post('/admin/news/create', {
                    title: this.inputTitle,
                    news: this.inputNews
                })
                .then(res => {
                    this.loading = false;
                    this.fetchNews();
                    this.selectedNewsId = null;
                    this.inputTitle = '';
                    this.inputNews = '';
                    this.pageMod = 'ALL'
                }).catch(error => {
                    console.log(error);
                    this.loading = false;
                    this.haveError = true;
                })
            }
        },
        updateNews() {
            if (this.selectedNewsId) {
                this.loading = true;
                this.haveError = false;
                axios.post('/admin/news/update/' + this.selectedNewsId, {
                    title: this.inputTitle,
                    news: this.inputNews
                })
                .then(res => {
                    this.loading = false;
                    this.fetchNews();
                    this.selectedNewsId = null;
                    this.inputTitle = '';
                    this.inputNews = '';
                    this.pageMod = 'ALL'
                }).catch(error => {
                    console.log(error);
                    this.loading = false;
                    this.haveError = true;
                })
            }
        },
        saveNews() {
            if (this.selectedNewsId) {
                this.updateNews()
            } else {
                this.createNews();
            }
        },
        publishNews(id, publish) {
            this.loading = true;
            this.haveError = false;
            axios.post('/admin/news/publish/' + id, {
                publish: publish,
            })
            .then(res => {
                this.loading = false;
                this.fetchNews();
            }).catch(error => {
                console.log(error);
                this.loading = false;
                this.haveError = true;
            })
        },
        deleteNews(id) {
            this.loading = true;
            this.haveError = false;
            axios.post('/admin/news/delete/' + id, {})
            .then(res => {
                this.loading = false;
                this.fetchNews();
            }).catch(error => {
                console.log(error);
                this.loading = false;
                this.haveError = true;
            })
        }
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