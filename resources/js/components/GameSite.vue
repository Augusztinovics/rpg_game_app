<template>
    <div :class="['container', 'bg-light', siteStyle]">
        <!-- header menu container -->
        <header class="fixed-top">
            <nav class="navbar space-between bg-dark">
                <div v-if="isGm" class="mx-3">
                    <gm-header :game="gameModule.game"/>
                </div>
                <div v-else class="mx-3">
                    <player-header 
                        :game="gameModule.game"
                    />
                </div>
                <div class="mx-3">
                    <button @click="openDiceModal">Dobókockák</button>
                </div>
            </nav>
        </header>
        <dice-generator ref="dice-modal" :form_site="true" :dices="diceSet" @roll="atDiceRolled"/>
        <div style="height:80px;"></div>
        <active-modals 
            :game="gameModule.game"
            :isGm="isGm"
        />
        <!-- body container -->
        <div>
            <game-body :game="gameModule.game"/>
            <not-ready-overlay v-if="!game_active" />
        </div>
        <div style="height:120px;"></div>
        <!-- footer container -->
        <div>
            <game-footer/>
        </div>
    </div>
</template>

<script>
import { mapMutations } from 'vuex';
import GameBody from './game_site/GameBody.vue';
import GameFooter from './game_site/GameFooter.vue';
import GmHeader from './game_site/GmHeader.vue';
import NotReadyOverlay from './game_site/NotReadyOverlay.vue';
import PlayerHeader from './game_site/PlayerHeader.vue';
import DiceGenerator from './DiceGenerator.vue';
import ActiveModals from './game_site/ActiveModals.vue';

export default {
    components: {
        GameBody,
        GameFooter,
        GmHeader,
        NotReadyOverlay,
        PlayerHeader,
        DiceGenerator,
        ActiveModals,
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
    data() {
        return {
            game_active: false,
        }
    },
    computed: {
        siteStyle() {
            return this.gameModule.game ? this.gameModule.game.toLowerCase() + '-style' : '';
        },
        diceSet() {
            switch(this.gameModule.game) {
                case 'MAGUS':
                    return [6, 10, 100];
                default:
                    return [6];
            }
        }
    },
    methods: {
        openDiceModal() {
            this.$refs['dice-modal'].showModal();
        },
        atDiceRolled(roll) {
            console.log('Dice Rolled With K' + roll.type + ' The Resoult: ' + roll.result);
        },
        ...mapMutations('currentCharacter', {
            addCharacter: 'addCharacter',
        }),
    },
    mounted() {
        this.game_active = this.gameModule.game_active;
        if (this.character) {
            this.addCharacter({
                id: this.character.id,
                characterData: this.character.character_data,
            });
        }
    }
}
</script>