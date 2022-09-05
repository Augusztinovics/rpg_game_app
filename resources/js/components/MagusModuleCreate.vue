<template>
    <div>
        <!-- Just for testing now -->
        <h1>{{ magusGameModule.game_module_name }}</h1>
        <p>{{ magusGameModule.id }}</p>
        <p>GM: {{ magusGameModule.gm_id }}</p>
        <p>Data count: {{ dataCount }}</p>
    </div>
</template>

<script>
export default {
    props: {
        gameModule: Object,
        gameData: Object
    },
    data() {
        return {
            magusGameModule : null,
            magusGameData : [],
            loading: false,
        }
    },
    computed: {
        dataCount() {
            return this.magusGameData.length;
        }
    },
    methods: {},
    mounted() {
        console.log(this.gameModule);
        console.log(this.gameData);
        this.magusGameModule = this.gameModule;
        if (this.gameData) {
            this.magusGameData = Object.values(this.gameData);
        }
    },
}
</script>