<template>
    <div>
        <h2>Game modules!!!!!</h2>
        <p v-for="call in calls" :key="call.game_id">{{ call.game_name}}</p>
    </div>
</template>

<script>
export default {
    props: {
        GeneratedCharacters: {
            type: Array,
            default: []
        }
    },
    data() {
        return {
            calls: [],
        }
    },

    computed: {
        
    },

    methods: {
        getCalls() {
            axios.get('/character/game-calls/MAGUS')
            .then( (response) => {
                this.calls = response.data;
                console.log(this.calls);
            })
            .catch( (error) => {
                console.log(error);
            });
        }
    },

    mounted() {
            this.getCalls();
        }
}
</script>