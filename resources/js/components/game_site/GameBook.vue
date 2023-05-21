<template>
    <component 
        :is="active_component"
        :is-gm="isGm"
        :character-id="characterId"
    />
</template>

<script>
    import MagusGameBook from './magus/MagusGameBook.vue';
    import EmptyComponent from './EmptyComponent.vue';
    export default {
        components: {
            MagusGameBook,
            EmptyComponent,
        },
        props: {
            game: {
                type: String,
                default: 'MAGUS'
            },
            isGm: {
                type: Boolean,
                default: false
            },
            characterId: {
                type: String,
                default: ''
            }
        },
        data() {
            return {
                active_component: 'EmptyComponent'
            }
        },
        mounted() {
            switch(this.game) {
                case 'MAGUS':
                    this.active_component = 'MagusGameBook';
                    break;
                default:
                    this.active_component = 'EmptyComponent';
            }
        }
    }
</script>