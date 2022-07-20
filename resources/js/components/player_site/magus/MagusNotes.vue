<template>
    <div>
        <div>
            <div class="text-center py-2 border-bottom border-secondary my-2">
                <h4>Jegyzetek</h4>
                <button class="btn btn-success mt-2" type="button"  data-bs-toggle="modal" data-bs-target="#noteModal">Uj jegyzet hozzáadása</button>
            </div>
            <p class="ms-2" v-for="note, index in notes" :key="'K' + index">{{ note }} <button class="btn btn-outline-danger btn-sm ms-2" type="button" @click="deleteNote(index)">-</button></p> 
        </div>

        <!-- modal -->
        <div class="modal fade" id="noteModal" tabindex="-1" aria-labelledby="noteModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="noteModalLabel">Uj jegyzet</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                <div class="modal-body">
                    <input type="text" class="form-control" id="egyebb-text" v-model="inputNote">
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary"  @click="saveNote" data-bs-dismiss="modal">Save changes</button>
                </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from 'vuex';
export default {
    data() {
        return {
            inputNote: '',
        }
    },
    computed: {
        ...mapGetters('currentCharacter', {
            magusCharacter: 'magusCharacter',
        }),
        notes() {
            return this.magusCharacter.notes;
        }
    },
    methods: {
        ...mapMutations('currentCharacter', {
            updateNotes: 'updateNotes'
        }),
        ...mapActions('currentCharacter', {
            save: 'save'
        }),
        saveNote() {
            if (this.inputNote != '') {
                let currentNotes = this.notes;
                currentNotes.push(this.inputNote);
                this. updateNotes(currentNotes);
                this.save();
                this.inputNote = '';
            }
        },
        deleteNote(index) {
            let currentNotes = this.notes;
            currentNotes.splice(index, 1);
            this. updateNotes(currentNotes);
            this.save();
        }
    },
}
</script>