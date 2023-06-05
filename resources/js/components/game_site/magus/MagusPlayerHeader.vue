<template>
    <div>
        <button class="ms-2 top-btn" @click="charcterSheetOpen">Karakterlap</button>
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