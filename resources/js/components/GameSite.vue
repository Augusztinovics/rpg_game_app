<template>
    <div>
        <h1>GAME SITE!!!</h1>
    </div>
</template>

<script>
export default {
    props: {
        gameModule: {
            type: Object,
            required: true
        },
        gameData: {
            type: Array,
            required: true
        },
        jsServerSettings: {
            type: Object,
            required: true
        },
        userId: {
            type: Number,
            required: true
        },
        isGm: {
            type: Boolean,
            default: false
        },
        character: [Object, Boolean],
    },
}
</script>