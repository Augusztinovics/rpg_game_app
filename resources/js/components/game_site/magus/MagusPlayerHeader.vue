<template>
    <div>
        <button @click="charcterSheetOpen">Karakterlap</button>
    </div>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex';
export default {
    computed: {
        ...mapGetters('gameSiteControl', {
            openCharacterSheet: 'openCharacterSheet',
        })
    },
    methods: {
        ...mapMutations('gameSiteControl', {
            updateOpenCharacterSheet: 'updateOpenCharacterSheet',
        }),
        charcterSheetOpen() {
            this.updateOpenCharacterSheet(!this.openCharacterSheet);
        }
    },
}
</script>