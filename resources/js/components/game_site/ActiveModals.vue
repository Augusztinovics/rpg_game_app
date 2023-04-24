<template>
    <component 
        :is="active_component"
        :module="this.module"
        :seens="this.seens"
    />
</template>

<script>
import MagusPlayerModals from './magus/MagusPlayerModals.vue';
import EmptyComponent from './EmptyComponent.vue';
import MagusGmModals from './magus/MagusGmModals.vue';

export default {
    components: {
        MagusPlayerModals,
        EmptyComponent,
        MagusGmModals,
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
        module: {
            type: Object,
            default: {}
        },
        seens: {
            type: Array,
            default: []
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
                if (this.isGm) {
                    this.active_component = 'MagusGmModals';
                } else {
                    this.active_component = 'MagusPlayerModals';
                }
                break;
            default:
                this.active_component = 'EmptyComponent';
        }
    }
}
</script>