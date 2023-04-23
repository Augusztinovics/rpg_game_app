<template>
    <div>
        <button @click="globalNotesOpen">Álltalános jegyzetek</button>
        <button @click="bestiariumOpen">Bestiárium</button>
        <button @click="bestiariumOpen">Jelenet változtatása</button>
        <label for="checkbox">Játék aktív <input type="checkbox" id="checkbox"></label>
    </div>
</template>

<script>
    import { mapMutations, mapGetters } from 'vuex';
    export default {
        computed: {
            ...mapGetters('gameSiteControl', {
                openGlobalNotes: 'openGlobalNotes',
                openBestiarium: 'openBestiarium',
            })
        },
        methods: {
            ...mapMutations('gameSiteControl', {
                updateOpenGlobalNotes: 'updateOpenGlobalNotes',
                updateOpenBestiarium: 'updateOpenBestiarium',
            }),
            globalNotesOpen() {
                this.updateOpenGlobalNotes(!this.openGlobalNotes);
            },
            bestiariumOpen() {
                this.updateOpenBestiarium(!this.openBestiarium);
            }
        },
    }
</script>