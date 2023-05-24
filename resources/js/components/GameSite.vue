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
        <div v-else class="container text-center">
            <site-canvas
                :map-drow-data="activeSeene.module_data.map"
                :module-index="active_seene"
                ref="SiteDrowCanvas"
            >
            </site-canvas>
        </div>
        <!-- Body layout -->
        <div :class="[doubleLayout ? 'container-fluid row' : 'container']">
            <!-- modals and side menus -->
            <div :class="[doubleLayout ? 'col-4 game-side-menu' : '']">
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
        
        <!-- game book -->
        <div>
            <game-book
                :game="gameModule.game"
                :is-gm="isGm"
                :character-id="playerCharacterId"
            >
            </game-book>
        </div>
        <div style="height:160px;"></div>
        <!-- footer container -->
        <div class="fixed-bottom">
            <game-footer
                :active-players="players"
                :sended-messages="messages"
                :mic-active="mic"
                @SendAMessage="messageSend"
                @ToogleMic="toogleMic"
            />
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
import SiteCanvas from './game_site/SiteCanvas.vue';
import GameBook from './game_site/GameBook.vue';

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
        SiteCanvas,
        GameBook,
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
            socket: null,
            players: [],
            messages: [],
            mic: false,
            mediaRec: null,
            interval: null,
        }
    },
    computed: {
        ...mapGetters('gameSiteControl', {
            openCharacterSheet: 'openCharacterSheet',
            openGlobalNotes: 'openGlobalNotes',
            openBestiarium: 'openBestiarium',
        }),

        playerCharacterId() {
            if (this.character) {
                return this.character.character_data.Kaszt;
            }
            return '';
        },

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
            this.socket.emit('CharacterChangedEvent', msg);
        },
        ...mapMutations('currentCharacter', {
            addCharacter: 'addCharacter',
        }),
        seenDrowSave(draw) {
            let data = this.activeSeene.module_data;
            data.map = draw;
            axios.post('/gm/update-game-module-data/' + this.activeSeene.id, {
                newData: data
            }).then((res) => {
                this.activeSeene.module_data = res.data.module_data;
                this.socket.emit('ReloadActiveSeeneData');
            }).catch((e) => {
                console.log(e);
            })

        },
        deactivateGame(state) {
            //Send axio to backend!!!
            axios.post('/site/game-module/update-active/' + this.gameModule.id, {
                game_active: state
            }).then((res) => {
                this.game_active = state;
                console.log('Game State: ' + state);
                this.socket.emit('GameStateChange', state);
                //fire the event to everybody
            }).catch((e) => {
                console.log(e);
            })
        },
        characterChanged(msg) {
            this.messages.push(msg);
        },
        messageSend(msg) {
            let message = this.character ? this.character.character_data.Nev : 'Játékmester';
            message += ' : ' + msg;
            this.messages.push(message);
            this.socket.emit('CharacterChangedEvent', message);
        },
        drowCanvasLine(line) {
            if (this.$refs["SiteDrowCanvas"]) {
                this.$refs["SiteDrowCanvas"].drowLine(line);
            }
        },
        reloadActiveModuleData() {
            axios.get('/site/game-module-data/' + this.activeSeene.id)
            .then((res) => {
                this.activeSeene.module_data = res.data;
            }).catch((e) => {
                console.log(e);
            })
        },
        refreshPlayers(players) {
            this.players = players;
        },
        toogleMic() {
            this.mic = !this.mic;
            if (this.mic) {
                if (this.mediaRec) {
                    this.mediaRec.start();
                    this.interval = setInterval(() => {
                        this.mediaRec.stop();
                        this.mediaRec.start();
                    }, 1000)
                }
            } else {
                if (this.mediaRec) {
                    clearInterval(this.interval);
                    this.mediaRec.stop();
                }
            }
        },
        sendVoice(e) {
            var fileReader = new FileReader();
            fileReader.readAsDataURL(e.data);
            fileReader.onloadend = () => {
                var base64String = fileReader.result;
                this.socket.emit('voice', base64String);
            }
        },
    },
    mounted() {
        let ip = this.jsServerSettings.server_ip;
        let port = this.jsServerSettings.server_port;
        let address = ip;
        if (this.jsServerSettings.use_port == true) {
          address += ':' + port;
        }
        this.socket = io(address + '/Game-' + this.gameModule.id);
        this.socket.on('CharacterChanged', (msg) => {
            this.characterChanged(msg);
        });
        this.socket.on('GameActiveChanged', (state) => {
            this.game_active = state;
        });
        this.socket.on('ChangedActiveSeene', (order) => {
            this.active_seene = order;
        });
        this.socket.on('OnCanvasDrow', (line) => {
            this.drowCanvasLine(line);
        });
        this.socket.on('OnReloadActiveSeeneData', () => {
            this.reloadActiveModuleData();
        });
        this.socket.on('PlayerJoined', (players) => {
            this.refreshPlayers(players);
        });
        this.socket.on('AudioMessage', (data) => {
            let audio = new Audio(data);
            audio.play();
        });
        this.game_active = this.gameModule.game_active;
        this.active_seene = this.gameModule.game_module_state;

        let playerName = 'KM';
        if (this.character) {
            this.addCharacter({
                id: this.character.id,
                characterData: this.character.character_data,
            });
            playerName = this.character.character_data.Nev;
        }
        this.socket.emit('PlayerJoin', playerName);
        this.$root.$on('CharacterChangedEvent', (msg) => {
            this.socket.emit('CharacterChangedEvent', msg);
        });
        this.$root.$on('GameDeactive', (state) => {
            this.deactivateGame(state);
        });
        this.$root.$on('SeeneChanged', (order) => {
            //Send axios to backend
            axios.post('/site/game-module/update-state/' + this.gameModule.id, {
                game_state: order
            }).then((res) => {
                this.game_data = res.data.game_data;
                this.active_seene = order;
                 //fire the event to everybody
                this.socket.emit('ActiveSeeneChanged', order);
            }).catch((e) => {
                console.log(e);
            })
        });
        this.$root.$on('CanvasDrow', (line) => {
            this.socket.emit('DrowCanvas', line);
        });
        navigator.mediaDevices.getUserMedia({ audio: true }).then((stream) => {
            this.mediaRec = new MediaRecorder(stream);
            this.mediaRec.ondataavailable = (e) => {
                this.sendVoice(e);
            }
        });
    },
    beforeDestroy() {
        if (this.isGm) {
            this.deactivateGame(false);
        }
    }
}
</script>