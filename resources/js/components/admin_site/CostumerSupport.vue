<template>
    <div>
        <div v-if="loading" class="bg-success p-3 text-center">
            <h2 class="text-light">Sending, please wait....</h2>
        </div>
        <div v-if="haveError" class="bg-danger p-3 text-center">
            <h2 class="text-light">Somethink whent wrong! Please try again...</h2>
            <button type="button" class="btn btn-success m-3" @click="haveError=false">Close</button>
        </div>
        <hr>
        <div class="text-center my-4">
            <h2>Costumers questions</h2>
            <hr>
            <button type="button" class="btn btn-success my-3 costum-btn px-3 me-3" @click="fetchAllQuestions">All questions</button>
            <button type="button" class="btn btn-success my-3 costum-btn px-3" @click="fetchUnansweredQuestions">Unanswered questions</button>
            <hr>
        </div>
        <div>
            <div v-if="havePagination" class="text-center">
                <button v-for="pag, index in pagLinks" :key="'PT' + index" :disabled="!pag.url" :class="{'active':pag.active}" class="btn btn-sm" @click="paginate(pag.url)" v-html="pag.label"></button>
            </div>
            <div>
                <div v-for="question, index in questionCards" :key="'QC' + index" class="border border-primary rounded">
                    <div class="p-3">
                        <p><b>User: {{ question.user.name }}, E-mail: {{ question.user.email }}, Id: {{ question.user.id }}, At: {{ question.created_at }}</b></p>
                        <p>{{ question.question}}</p>
                    </div>
                    <hr>
                    <div v-if="question.answer" class="p-3 ms-5">
                        <p>{{ question.answer }}</p>
                    </div>
                    <div v-else class="figure-caption p-3 ms-5">
                        <p>Not answered jet...</p>
                    </div>
                    <hr>
                    <div class="text-end bg-secondary">
                        <button type="button" class="btn btn-success my-3 costum-btn me-3 px-5" data-bs-toggle="modal" data-bs-target="#answerModal" @click="setQuestion(question)">Answer the question</button>
                        <button type="button" class="btn btn-danger my-3 costum-btn me-3" @click="deleteQuestion(question.id)">Delete question</button>
                    </div>
                </div>
            </div>
            <div v-if="havePagination" class="text-center">
                <button v-for="pag, index in pagLinks" :key="'PT' + index" :disabled="!pag.url" :class="{'active':pag.active}" class="btn btn-sm" @click="paginate(pag.url)" v-html="pag.label"></button>
            </div>
        </div>
        <!-- answer modal -->
        <div class="modal fade" id="answerModal" tabindex="-1" aria-labelledby="answerModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="answerModalLabel">Answer a question</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" @click="inputAnswer=''"></button>
                    </div>
                <div class="modal-body">
                    <p><b>The question:</b></p>
                    <p v-if="answeringQuestion">{{ answeringQuestion.question }}</p>
                    <label for="qs">Your answer:</label>
                    <textarea class="form-control" id="qs" rows="10" v-model="inputAnswer"></textarea>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary bg-blue-leather costum-btn" data-bs-dismiss="modal" @click="inputAnswer=''">Cancel</button>
                    <button type="button" class="btn btn-success bg-green-leather costum-btn"  @click="sendAnswer" data-bs-dismiss="modal">Send</button>
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
            inputAnswer: '',
            questionCards: [],
            pagLinks: [],
            loading: false,
            haveError: false,
            answeringQuestion: null,
        }
    },
    computed: {
        havePagination() {
            return this.pagLinks.length > 3;
        },
    },
    methods: {
        fetchUnansweredQuestions() {
            this.loading = true;
            this.haveError = false;
            axios.get('/admin/unanswered-questions')
            .then(res => {
                this.questionCards = res.data.data;
                this.pagLinks = res.data.links;
                this.loading = false;
            }).catch(error => {
                this.loading = false;
                this.haveError = true;
                console.log(error);
            })
        },
        fetchAllQuestions() {
            this.loading = true;
            this.haveError = false;
            axios.get('/admin/questions')
            .then(res => {
                this.questionCards = res.data.data;
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
                this.questionCards = res.data.data;
                this.pagLinks = res.data.links;
                this.loading = false;
            }).catch(error => {
                this.haveError = true;
                console.log(error);
            })
        },
        deleteQuestion(id) {
            this.loading = true;
            this.haveError = false;
            axios.post('/admin/delete-question/' + id, {})
            .then(res => {
                this.fetchUnansweredQuestions();
            }).catch(error => {
                console.log(error);
                this.loading = false;
                this.haveError = true;
            })
        },
        setQuestion(question) {
            this.answeringQuestion = question;
        },
        sendAnswer() {
            if (this.inputAnswer && this.answeringQuestion) {
                this.loading = true;
                this.haveError = false;
                axios.post('/admin/answer/' + this.answeringQuestion.id, {
                    answer: this.inputAnswer
                })
                .then(res => {
                    this.inputAnswer = '';
                    this.answeringQuestion = null;
                    this.fetchUnansweredQuestions();
                }).catch(error => {
                    console.log(error);
                    this.loading = false;
                    this.haveError = true;
                })
            }
        },
    },
    mounted() {
        this.fetchUnansweredQuestions();
    }
}
</script>

<style scoped>
    .active{
        border: 1px solid rgb(15, 91, 161);
    }
</style>