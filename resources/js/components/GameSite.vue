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
        <!-- drowing canvas -->
        <div v-if="isGm" class="container text-center">
            <map-drowing
                :map-drow-data="activeSeene.module_data.map"
                canvas-id="seenCanvas"
                :from-site="true"
                :module-index="active_seene"
                @save="seenDrowSave"
            ></map-drowing>
        </div>
        <!-- Body layout -->
        <div :class="[doubleLayout ? 'container-fluid row' : 'container']">
            <!-- modals and side menus -->
            <div :class="[doubleLayout ? 'col-4' : '']">
                <active-modals 
                    :game="gameModule.game"
                    :isGm="isGm"
                    :module="gameModule"
                    :seens="gameData"
                    :active-seene="active_seene"
                />
            </div>
            
            <!-- body container -->
            <div :class="[doubleLayout ? 'col-8' : '']">
                <game-body 
                    :game="gameModule.game"
                    :seen="activeSeene"
                    :is-gm="isGm"
                />
                <not-ready-overlay v-if="!game_active" />
            </div>
        </div>
        
        <div style="height:160px;"></div>
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
import MapDrowing from './gm_site/MapDrowing.vue';

export default {
    components: {
        GameBody,
        GameFooter,
        GmHeader,
        NotReadyOverlay,
        PlayerHeader,
        DiceGenerator,
        ActiveModals,
        MapDrowing,
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
            game_data: this.gameData,
        }
    },
    computed: {
        ...mapGetters('gameSiteControl', {
            openCharacterSheet: 'openCharacterSheet',
            openGlobalNotes: 'openGlobalNotes',
            openBestiarium: 'openBestiarium',
        }),

        doubleLayout() {
            //here will be maybe a lot
            return (this.openCharacterSheet || this.openBestiarium || this.openGlobalNotes) && window.innerWidth > 1399;
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
            let seen = this.game_data.find(d => d.game_module_data_order === this.active_seene);
            return seen ? seen : this.game_data[0];
        },

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
        seenDrowSave(draw) {
            console.log(draw);
        },
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
                this.game_active = state;
                console.log('Game State: ' + state);
                //fire the event to everybody
            }).catch((e) => {
                console.log(e);
            })
        });
        this.$root.$on('SeeneChanged', (order) => {
            //Send axios to backend
            axios.post('/site/game-module/update-state/' + this.gameModule.id, {
                game_state: order
            }).then((res) => {
                this.game_data = res.data.game_data;
                this.active_seene = order;
                console.log(this.activeSeene);
                 //fire the event to everybody
                console.log('Game Seene: ' + order);
            }).catch((e) => {
                console.log(e);
            })
            //Change the activeSceen in socket event callback
        });
        this.$root.$on('CanvasDrow', (line) => {
            console.log(line);
        });
    }
}
</script>