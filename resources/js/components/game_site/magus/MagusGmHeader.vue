<template>
    <div>
        <button class="ms-2 top-btn" @click="globalNotesOpen">Álltalános jegyzetek</button>
        <button class="ms-2 top-btn" @click="bestiariumOpen">Bestiárium</button>
        <button class="ms-2 top-btn" @click="SeeneSelectOpen">Jelenet változtatása</button>
        <button v-if="gameActive" class="ms-2 btn btn-sm btn-success" @click="confirmGameDeactivate">A játék aktív</button>
        <button v-else class="ms-2 btn btn-sm btn-danger" @click="confirmGameDeactivate">A játék nem aktív, Aktiváld!</button>
    </div>
</template>

<script>
    import { mapMutations, mapGetters } from 'vuex';
    export default {
        props: {
            gameActive: {
                type: Boolean,
                default: false
            }
        },
        computed: {
            ...mapGetters('gameSiteControl', {
                openGlobalNotes: 'openGlobalNotes',
                openBestiarium: 'openBestiarium',
                openSeeneSelect: 'openSeeneSelect',
            })
        },
        methods: {
            ...mapMutations('gameSiteControl', {
                updateOpenGlobalNotes: 'updateOpenGlobalNotes',
                updateOpenBestiarium: 'updateOpenBestiarium',
                updateOpenSeeneSelect: 'updateOpenSeeneSelect',
            }),
            globalNotesOpen() {
                this.updateOpenGlobalNotes(!this.openGlobalNotes);
            },
            bestiariumOpen() {
                this.updateOpenBestiarium(!this.openBestiarium);
            },
            SeeneSelectOpen() {
                this.updateOpenSeeneSelect(!this.openSeeneSelect);
            },
            confirmGameDeactivate() {
                if (window.confirm('Bisztosan akarod változtatni a játék aktív állapotát?')) {
                    this.$root.$emit('GameDeactive', !this.gameActive);
                }
            }
        },
    }
</script>