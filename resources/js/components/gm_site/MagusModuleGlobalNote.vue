<template>
    <div>
        <div v-if="error">
            <div class="text-center bg-danger m-3">
                <p class="text-light p-4">Hiba történt mentés közben...</p>
            </div>
        </div>
        <div>
            <div v-for="note, index in notes" :key="'N' + index" class="input-group m-2">
                <textarea class="form-control" aria-label="Note textarea" v-model="note.note"></textarea>
                <button class="btn btn-outline-success" type="button" @click="saveNotes(index)">Elment</button>
                <button class="btn btn-outline-danger" type="button" @click="deleteNote(index)">Töröl</button>
            </div>
        </div>
        <div class="text-center mt-4">
            <button type="button" class="btn btn-success costum-btn" @click="addNote">Jegyzet hozzáadása</button>
        </div>
        <div v-if="loading" id="overlay">
            <div id="overlayText">
                Mentés folyamatban...
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        moduleId: {
            type: Number,
            default: null
        }
    },
    data() {
        return {
            notes: [],
            loading: false,
            error: false,
        }
    },
    computed: {},
    methods: {
        addNote() {
            let newNote = {
                note: '',
                chacked: false
            };
            this.notes.push(newNote);
        },
        deleteNote(index) {
            this.notes.splice(index, 1);
            this.saveNotes(index);
        },
        saveNotes(index) {
            this.loading = true;
            this.error = false;
            axios.post('/gm/update-magus-game-module-note/' + this.moduleId, {
                note: this.notes
            }).then( res => {
                this.loading = false;
            })
            .catch( err => {
                this.loading = false;
                this.notes.splice(index, 1);
                this.error = true;
                setTimeout(() => {
                    this.error = false;
                }, 3000)
            })
        },
        getNotes() {
            axios.get('/gm/get-magus-game-module-note/' + this.moduleId)
            .then( res => {
                this.notes = res.data.notes;
            })
            .catch( err => {
                console.log(err);
            })
        }
    },
    
}
</script>

<style scoped>
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