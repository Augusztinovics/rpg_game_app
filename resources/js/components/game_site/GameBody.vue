<template>
    <component 
        :is="active_component"
        :game-seen="seen"
        :is-gm="isGm"
    />
</template>

<script>
    import MagusGameBody from './magus/MagusGameBody.vue';
    import EmptyComponent from './EmptyComponent.vue';

    export default {
        components: {
            MagusGameBody,
            EmptyComponent,
        },
        props: {
            game: {
                type: String,
                default: 'MAGUS'
            },
            seen: {
                type: Object,
                default: {}
            },
            isGm: {
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
                    this.active_component = 'MagusGameBody';
                    break;
                default:
                    this.active_component = 'EmptyComponent';
            }
        }
    }
</script>
