<template>
    <div class="container bg-light">
        <!-- header menu container -->
        <header class="row mt-4">
            <div v-if="isGm" class="col-8">
                <gm-header/>
            </div>
            <div v-else class="col-8">
                <player-header/>
            </div>
            <div class="col-4 text-center">
                <dice-generator :dices="[6, 10, 100]"/>
            </div>
        </header>
        <div style="height:2000px;"></div>
        <!-- body container -->
        <div>
            <game-body/>
            <not-ready-overlay/>
        </div>
        <!-- footer container -->
        <div>
            <game-footer/>
        </div>
    </div>
</template>

<script>
import GameBody from './game_site/GameBody.vue';
import GameFooter from './game_site/GameFooter.vue';
import GmHeader from './game_site/GmHeader.vue';
import NotReadyOverlay from './game_site/NotReadyOverlay.vue';
import PlayerHeader from './game_site/PlayerHeader.vue';
import DiceGenerator from './DiceGenerator.vue';

export default {
    components: {
        GameBody,
        GameFooter,
        GmHeader,
        NotReadyOverlay,
        PlayerHeader,
        DiceGenerator,
    },
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