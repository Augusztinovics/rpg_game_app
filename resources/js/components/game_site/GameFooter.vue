<template>
    <div>
        <div class="row">
            <div class="col-7">
                <div class="d-flex flex-row">
                    <div v-for="player, index in activePlayers" :key="'Player' + index">{{ player.name}}</div>
                </div>
            </div>
            <div class="col">
                <div>
                    <div>
                        <ul>
                            <li v-for="msg, index in sendedMessages" :key="'msg' + index">{{ msg }}</li>
                        </ul>
                    </div>
                    <div>
                        <input type="text" v-model="message">
                        <button class="btn btn-sm" @click="sendMessage">Küld</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        activePlayers: {
            type: Array,
            default: []
        },
        sendedMessages: {
            type: Array,
            default: []
        }
    },
    data() {
        return {
            message: ''
        }
    },
    methods: {
        sendMessage() {
            if (this.message != '') {
                this.$emit('SendAMessage', this.message);
                this.message = '';
            }
        }
    },
}
</script>

<style scoped>
 .test {
     width: 100%;
     height: 120px;
     background-color: blue;
 }
</style>