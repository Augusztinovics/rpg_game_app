<template>
    <div>
        <div v-if="loading" class="bg-success p-3 text-center">
            <h2 class="text-light">Küldés folyamatban, kérem várjon...</h2>
        </div>
        <div v-if="error" class="bg-danger p-3 text-center">
            <h2 class="text-light">Valami hiba történt, kérem próbálja újra...</h2>
            <button type="button" class="btn btn-success m-3" @click="error=false">Close</button>
        </div>
        <div class="text-center my-4">
            <h2>Kérdés kérdezése</h2>
            <p>Van kérdése vagy valami észrevétele?</p>
            <hr>
            <button type="button" class="btn btn-success my-3 costum-btn px-3" data-bs-toggle="modal" data-bs-target="#questionModal">Irja meg kérdését</button>
            <hr>
        </div>
        <div class="container">
            <!-- the div for loop -->
            <div v-for="question, index in questionCards" :key="'QC' + index" class="border border-primary rounded">
                <div class="p-3">
                    <p><b>Az ön kérdése:</b></p>
                    <p>{{ question.question}}</p>
                </div>
                <hr>
                <div v-if="question.answer" class="p-3 ms-5">
                    <p>{{ question.answer }}</p>
                </div>
                <div v-else class="figure-caption p-3 ms-5">
                    <p>Még nincs válasz, eltarthat pár napig...</p>
                </div>
                <hr>
                <div class="text-end bg-secondary">
                    <button type="button" class="btn btn-danger my-3 costum-btn me-3" @click="deleteQuestion(question.id)">Kérdés törlése</button>
                </div>
            </div>
        </div>
         <!-- question modal -->
        <div class="modal fade" id="questionModal" tabindex="-1" aria-labelledby="questionModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="questionModalLabel">Kérdezés</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" @click="inputQuestion=''"></button>
                    </div>
                <div class="modal-body">
                    <label for="qs">Az ön kérdése:</label>
                    <textarea class="form-control" id="qs" rows="10" v-model="inputQuestion"></textarea>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary bg-blue-leather costum-btn" data-bs-dismiss="modal" @click="inputQuestion=''">Mégsem</button>
                    <button type="button" class="btn btn-success bg-green-leather costum-btn"  @click="sendQuestion" data-bs-dismiss="modal">Küldés</button>
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
            inputQuestion: '',
            questionCards: [],
            loading: false,
            error: false,  
        }
    },
    computed: {},
    methods: {
        sendQuestion() {
            if (this.inputQuestion) {
                this.loading = true;
                this.error = false;
                axios.post('/support/question', {
                    question: this.inputQuestion
                })
                .then(res => {
                    this.inputQuestion = '';
                    this.fetchQuestions();
                }).catch(error => {
                    console.log(error);
                    this.loading = false;
                    this.error = true;
                })
            }
        },
        fetchQuestions() {
            this.loading = true;
            this.error = false;
            axios.get('/support/questions')
            .then(res => {
                this.questionCards = res.data;
                this.loading = false;
            }).catch(error => {
                this.loading = false;
                this.error = true;
                console.log(error);
            })
        },
        deleteQuestion(id) {
            this.loading = true;
            this.error = false;
            axios.post('/support/question/' + id, {})
            .then(res => {
                this.fetchQuestions();
            }).catch(error => {
                console.log(error);
                this.loading = false;
                this.error = true;
            })
        },
    },
    mounted() {
        this.fetchQuestions();
    }
}
</script>