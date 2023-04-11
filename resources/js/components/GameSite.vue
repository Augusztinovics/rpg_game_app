<template>
    <div>
        <!-- dice generator container -->
        <div class="text-center m-2 p-2">
            <dice-generator :dices="[6, 10, 100]"/>
        </div>
        <!-- header menu container -->
        <div>
            <div v-if="isGm">
                <gm-header/>
            </div>
            <div v-else>
                <player-header/>
            </div>
        </div>
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