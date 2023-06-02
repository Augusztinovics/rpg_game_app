<template>
    <div>
        <div class="row align-items-end">
            <div class="col-8">
                <div class="d-flex flex-row align-items-end">
                    <div :class="['p-2 player-icon text-center', player.voice ? ' mic-active' : '']" v-for="player, index in activePlayers" :key="'Player' + index">
                        <h6>{{ player.name}}</h6>
                    </div>
                </div>
            </div>
            <div class="col-4">
                <div class="d-flex flex-row align-items-end">
                    <div>
                        <button :class="['mic-btn', micActive ? ' mic-btn-active' : '']" @click="toogleMic"><span>Mic</span></button>
                    </div>
                    <div>
                        <div class="msg-holder">
                            <ul>
                                <li v-for="msg, index in sendedMessages" :key="'msg' + index">{{ msg }}</li>
                            </ul>
                        </div>
                        <div>
                            <input type="text" v-model="message">
                            <button class="btn btn-sm btn-success" @click="sendMessage">Küld</button>
                        </div>
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
        },
        micActive: {
            type: Boolean,
            default: false
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
        },
        toogleMic() {
            this.$emit('ToogleMic');
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