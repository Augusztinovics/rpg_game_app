<template>
    <div :class="['bg-light', siteStyle]">
        <!-- header menu container -->
        <header class="fixed-top">
            <nav class="navbar space-between bg-dark">
                <div v-if="isGm" class="mx-3">
                    <gm-header 
                        :game="gameModule.game"
                        :game-active="game_active"
                    />
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
        <!-- Body layout -->
        <div :class="[doubleLayout ? 'container-fluid row' : 'container']">
            <!-- modals and side menus -->
            <div :class="[doubleLayout ? 'col-4' : '']">
                <active-modals 
                    :game="gameModule.game"
                    :isGm="isGm"
                    :module="gameModule"
                    :seens="gameData"
                />
            </div>
            
            <!-- body container -->
            <div :class="[doubleLayout ? 'col-8' : '']">
                <game-body 
                    :game="gameModule.game"
                    :seen="activeSeene"
                />
                <not-ready-overlay v-if="!game_active" />
            </div>
        </div>
        
        <div style="height:120px;"></div>
        <!-- footer container -->
        <div class="fixed-bottom">
            <game-footer/>
        </div>
    </div>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex';
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
            active_seene: 1,
        }
    },
    computed: {
        ...mapGetters('gameSiteControl', {
            openCharacterSheet: 'openCharacterSheet',
        }),

        doubleLayout() {
            //here will be maybe a lot
            return (this.openCharacterSheet) && window.innerWidth > 1399;
        },

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
        },

        activeSeene() {
            let seen = this.gameData.find(d => d.game_module_data_order === this.active_seene);
            return seen ? seen : this.gameData[0];
        }
    },
    methods: {
        openDiceModal() {
            this.$refs['dice-modal'].showModal();
        },
        atDiceRolled(roll) {
            let msg = this.character ? this.character.character_data.Nev : 'Játékmester';
            msg += ' Dobott K' + roll.type + ' dobókockával. A dobás eredménye: ' + roll.result;
            console.log(msg);
        },
        ...mapMutations('currentCharacter', {
            addCharacter: 'addCharacter',
        }),
    },
    mounted() {
        this.game_active = this.gameModule.game_active;
        this.active_seene = this.gameModule.game_module_state;
        console.log(this.activeSeene);
        if (this.character) {
            this.addCharacter({
                id: this.character.id,
                characterData: this.character.character_data,
            });
        }
        this.$root.$on('CharacterChangedEvent', (msg) => {
            console.log(msg);
        });
        this.$root.$on('GameDeactive', (state) => {
            //Send axio to backend!!!
            axios.post('/site/game-module/update-active/' + this.gameModule.id, {
                game_active: state
            }).then((res) => {
                console.log(res);
                this.game_active = state;
                console.log('Game State: ' + state);
                //fire the event to everybody
            }).catch((e) => {
                console.log(e);
            })
        });
    }
}
</script>