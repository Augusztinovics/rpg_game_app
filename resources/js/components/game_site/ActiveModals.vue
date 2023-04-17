<template>
    <component 
        :is="active_component"
    />
</template>

<script>
import MagusPlayerModals from './magus/MagusPlayerModals.vue';
import EmptyComponent from './EmptyComponent.vue';
export default {
    components: {
        MagusPlayerModals,
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
                    //Gm magus modals!!!
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