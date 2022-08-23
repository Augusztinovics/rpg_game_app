<template>
  
<div>
    <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
        <li class="nav-item" role="presentation">
            <button class="nav-link active" id="pills-games-tab" data-bs-toggle="pill" data-bs-target="#pills-games" type="button" role="tab" aria-controls="pills-home" aria-selected="true" @click="setActiveTab('GAME')">Játékok</button>
        </li>
        <li class="nav-item" role="presentation">
            <button class="nav-link" id="pills-chat-tab" data-bs-toggle="pill" data-bs-target="#pills-chat" type="button" role="tab" aria-controls="pills-chat" aria-selected="false" @click="setActiveTab('CHAT')">Csevegés <span v-if="haveMessage" class="new-message"></span></button>
        </li>
        <li class="nav-item" role="presentation">
            <button class="nav-link" id="pills-support-tab" data-bs-toggle="pill" data-bs-target="#pills-support" type="button" role="tab" aria-controls="pills-support" aria-selected="false" @click="setActiveTab('ASK')">Kérdések</button>
        </li>
    </ul>
    <div class="tab-content" id="pills-tabContent">
        <div class="tab-pane fade show active" id="pills-games" role="tabpanel" aria-labelledby="pills-games-tab">
            <game-type-tabs />
        </div>
        <div class="tab-pane fade" id="pills-chat" role="tabpanel" aria-labelledby="pills-chat-tab">
            <chat-box 
                @newMessage="newMessage"
                :server-ip-address="serverIp"
            />
        </div>
        <div class="tab-pane fade" id="pills-support" role="tabpanel" aria-labelledby="pills-support-tab">
            <support-question />
        </div>
    </div>
</div>

</template>

<script>
    import ChatBox from './player_site/ChatBox.vue';
    import GameTypeTabs from './player_site/GameTypeTabs.vue';
    import SupportQuestion from './player_site/SupportQuestion.vue';

    export default {
        props: {
            serverIp:String
        },
        components: {
            ChatBox,
            GameTypeTabs,
            SupportQuestion,
        },
        data() {
            return {
                activeTab : 'GAME',
                haveMessage : false,
            }
        },
        computed: {

        },
        methods: {
            newMessage() {
                if (this.activeTab != 'CHAT') {
                    this.haveMessage = true;
                }
            },
            setActiveTab(tab) {
            if (tab == 'CHAT') {
                this.haveMessage = false;
            }
            this.activeTab = tab;
        },
        },
        mounted() {
            console.log('Player Site mounted.');
        }
    }
</script>

<style scoped>
    .new-message {
        display: inline-block;
        height: 6px;
        width: 6px;
        background-color: green;
        border-radius: 50%;
        margin-bottom: 4px;
    }
</style>