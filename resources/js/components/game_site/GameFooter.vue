<template>
    <div>
        <div class="row align-items-end">
            <div class="col-8">
                <div class="d-flex flex-row align-items-end">
                    <div :class="['p-2 player-icon text-center', player.voice ? ' mic-active' : '']" v-for="player, index in activePlayers" :key="'Player' + index">
                        <h6>{{ shortenName(player.name)}}</h6>
                    </div>
                </div>
            </div>
            <div class="col-4">
                <div class="d-flex flex-row align-items-end">
                    <div>
                        <button :class="['mic-btn', micActive ? ' mic-btn-active' : '']" @click="toogleMic"><span>Mikrofon</span></button>
                    </div>
                    <div class="flex-fill me-2 p-1 bg-light">
                        <div :class="['msg-holder', expanded ? ' msg-holder-expand' : '']" id="msg_holder">
                            <ul class="list-unstyled">
                                <li v-for="msg, index in sendedMessages" :key="'msg' + index" class="fw-bold">{{ msg }}</li>
                            </ul>
                        </div>
                        <div>
                            <div class="input-group input-group-sm">
                                <button class="btn btn-outline-secondary fw-bold" type="button" id="btn-up" @click="toogleMsgBox" v-html="expandBtnText"></button>
                                <input type="text" v-model="message" class="form-control" aria-label="Message" aria-describedby="btn-send" placeholder="Üzenet..." @keyup.enter="sendMessage">
                                <button class="btn btn-outline-secondary fw-bold" type="button" id="btn-send" @click="sendMessage">Küld</button>
                            </div>
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
            message: '',
            expanded: false,
        }
    },
    computed: {
        expandBtnText() {
            return this.expanded ? '&curlyvee;' : '&curlywedge;';
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
        },
        shortenName(name) {
            if (name.length > 20) {
                return name.substring(0, 20) + '...';
            }
            return name;
        },
        toogleMsgBox() {
            this.expanded = !this.expanded;
            setTimeout(() => {this.bottomMsg();}, 100);
        },
        bottomMsg() {
            let msgCont = document.getElementById('msg_holder');
            if (msgCont) {
                msgCont.scrollTop = msgCont.scrollHeight;
            }
        },
    },
    watch: {
        sendedMessages() {
            this.bottomMsg();
        }
    },
}
</script>
