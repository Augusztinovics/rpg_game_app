<template>
    <component 
        :is="active_component"
    />
</template>

<script>
import MagusPlayerHeader from './magus/MagusPlayerHeader.vue';
import EmptyComponent from './EmptyComponent.vue';
export default {
    components: {
        MagusPlayerHeader,
        EmptyComponent,
    },
    props: {
        game: {
            type: String,
            default: 'MAGUS'
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
                this.active_component = 'MagusPlayerHeader';
                break;
            default:
                this.active_component = 'EmptyComponent';
        }
    }
}
</script>