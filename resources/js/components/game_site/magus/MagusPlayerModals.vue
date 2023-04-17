<template>
    <div>
        <div v-if="openCharacterSheet">
            <magus-character-sheet />
            <button type="button" class="btn btn-secondary costum-btn" @click="charcterSheetClose">Bezár</button>
        </div>
       <!-- Character Sheet Modal -->
        <div class="modal fade" id="characterSheetModal" tabindex="-1" aria-labelledby="characterSheetModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered modal-lg">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="diceModalLabel">Karakterlap</h5>
                        <button type="button" class="btn-close" aria-label="Close" @click="charcterSheetClose"></button>
                    </div>
                <div class="modal-body">
                    <magus-character-sheet />
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary costum-btn" @click="charcterSheetClose">Bezár</button>
                </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';
import MagusCharacterSheet from '../../player_site/magus/MagusCharacterSheet.vue';
export default {
    components: {
        MagusCharacterSheet
    },
    computed: {
        ...mapGetters('gameSiteControl', {
            openCharacterSheet: 'openCharacterSheet',
        })
    },

    methods: {
        ...mapMutations('gameSiteControl', {
            updateOpenCharacterSheet: 'updateOpenCharacterSheet',
        }),

        //Character Sheet modal
        charcterSheetClose() {
            this.updateOpenCharacterSheet(false);
        },

        charcterSheetModalOpen() {
            document.body.classList.add('modal-open');
            let modalClasses = window.document.getElementById('characterSheetModal').classList;
            modalClasses.add('d-block')
            modalClasses.add('show')
            let backdrop = document.createElement('div')
            backdrop.classList = "modal-backdrop fade show"
            document.body.appendChild(backdrop)
        },

        charcterSheetModalClose() {
            let modalClasses = window.document.getElementById('characterSheetModal').classList;
            document.body.classList.remove('modal-open');
            modalClasses.remove('d-block')
            modalClasses.remove('show')
            let backdrop = document.querySelector('.modal-backdrop')
            document.body.removeChild(backdrop)
        },
    },

    // watch: {
    //     openCharacterSheet(newState) {
    //         if (newState) {
    //             this.charcterSheetModalOpen();
    //         } else {
    //             this.charcterSheetModalClose();
    //         }
    //     },
    //}
}
</script>