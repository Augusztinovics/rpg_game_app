<template>
    <div>

    </div>
</template>

<script>
export default {
    props: {
        selectedIndex: {
            type: Number,
            default: null
        },
        selectedNpc: {
            type: Object,
            require: true
        },
        newNpc: {
            type: Boolean,
            default: true,
        }
    },
}
</script>