<template>
  
<div>
    <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
        <li class="nav-item" role="presentation">
            <button class="nav-link active" id="pills-games-tab" data-bs-toggle="pill" data-bs-target="#pills-games" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Games</button>
        </li>
        <li class="nav-item" role="presentation">
            <button class="nav-link" id="pills-chat-tab" data-bs-toggle="pill" data-bs-target="#pills-chat" type="button" role="tab" aria-controls="pills-chat" aria-selected="false">Chat</button>
        </li>
    </ul>
    <div class="tab-content" id="pills-tabContent">
        <div class="tab-pane fade show active" id="pills-games" role="tabpanel" aria-labelledby="pills-games-tab">
            <game-type-tabs />
        </div>
        <div class="tab-pane fade" id="pills-chat" role="tabpanel" aria-labelledby="pills-chat-tab">
            <chat-box />
        </div>
    </div>
</div>

</template>

<script>
    import ChatBox from './player_site/ChatBox.vue';
    import GameTypeTabs from './player_site/GameTypeTabs.vue'
    export default {
        components: {
            ChatBox,
            GameTypeTabs
        },
        mounted() {
            console.log('Component mounted.')
        }
    }
</script>