<template>
    <div class="container-fluid">
        <magus-character-sheet />
    </div>
</template>

<script>
    import MagusCharacterSheet from './magus/MagusCharacterSheet.vue'
    export default {
         components: {
            MagusCharacterSheet
        },
        data() {
            return {
                
            }
        },
        mounted() {
            console.log('Component mounted.')
        }
    }
</script>