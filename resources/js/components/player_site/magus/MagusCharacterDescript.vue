<template>
    <div>
        <dir>
            <h4>A Karakter leirása/előtörténet</h4>
            <button class="btn btn-success my-3 bg-green-leather costum-btn" type="button" data-bs-toggle="modal" data-bs-target="#descriptionModal">Leirás módositása</button>
            <p class="border-top border-secondary mt-4" style="white-space: pre-line;">{{ characterDescription }}</p>
        </dir>

        <!-- input modal -->
        <div class="modal fade" id="descriptionModal" tabindex="-1" aria-labelledby="descriptionModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="descriptionModalLabel">Röviden a karakterről</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                <div class="modal-body">
                    <textarea v-model="description" class="form-control" rows="6"></textarea>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary bg-blue-leather costum-btn" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary bg-green-leather costum-btn" @click="saveNewDescription" data-bs-dismiss="modal">Save changes</button>
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
            description: '',
        }
    },
    computed: {
        ...mapGetters('currentCharacter', {
            magusCharacter: 'magusCharacter',
        }),
        characterDescription() {
            return this.magusCharacter.description;
        }
    },
    methods: {
        ...mapMutations('currentCharacter', {
                updateDescription: 'updateDescription'
        }),
        ...mapActions('currentCharacter', {
                save: 'save'
        }),
        saveNewDescription() {
            this.updateDescription(this.description);
            this.save();
        }
    },
    mounted() {
        this.description = this.characterDescription;
    }
}
</script>