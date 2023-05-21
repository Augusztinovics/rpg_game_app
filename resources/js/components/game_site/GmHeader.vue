<template>
    <component 
        :is="active_component"
        :game-active="gameActive"
    />
</template>

<script>
    import MagusGmHeader from './magus/MagusGmHeader.vue';
    import EmptyComponent from './EmptyComponent.vue';
    export default {
        components: {
            MagusGmHeader,
            EmptyComponent,
        },
        props: {
            game: {
                type: String,
                default: 'MAGUS'
            },
            gameActive: {
                type: Boolean,
                default: false
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
                    this.active_component = 'MagusGmHeader';
                    break;
                default:
                    this.active_component = 'EmptyComponent';
            }
        }
    }
</script>