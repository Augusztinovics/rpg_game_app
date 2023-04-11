<template>
    <div>
        <div v-for="call in calls" :key="call.game_id" class="p-3 m-2 border rounded-3 border-dark">
            <div class="row">
                <div class="col">
                    <h3>{{ call.game_name}}</h3>
                </div>
                <div v-if="call.character_id" class="col">
                    <button type="button" class="w-100 btn btn-lg btn-success costum-btn bg-green-leather" @click="startGame(call.game_id)">Játék oldal</button>
                </div>
            </div>
            <div v-if="call.character_id" class="row">
                <hr>
                <div class="col">
                    <p>{{ getCharName(call.character_id)}}</p>
                </div>
                <div v-if="call.character_id" class="col">
                    <button type="button" class="w-100 btn btn-lg btn-danger costum-btn bg-red-leather" @click="removeCharacterFromModule(call.game_id)">Töröl</button>
                </div>
            </div>
            <div v-else>
                <hr>
                <div>
                    <button type="button" class="w-90 btn btn-lg btn-success costum-btn bg-green-leather" @click="toogleDrop(call.game_id)">Karakter választása a játékhoz</button>
                </div>
                <div v-if="char_drop == call.game_id" class="p-3 m-2 border rounded-3 border-dark">
                    <div v-for="character in GeneratedCharacters" :key="call.game_id + character.id" class="row">
                        <hr>
                        <div class="col">
                            <p class="h3">{{ character.character_data.Nev + ' - ' + character.character_data.Szint + ' Szint'}}</p>
                        </div>
                        <div class="col">
                            <button type="button" class="w-100 mb-2 btn btn-success costum-btn bg-green-leather" @click="selectCharacterToModule(call.game_id, character.id)">Kiválaszt</button>
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
        GeneratedCharacters: {
            type: Array,
            default: []
        }
    },
    data() {
        return {
            calls: [],
            char_drop: 0,
        }
    },

    computed: {
        
    },

    methods: {
        getCalls() {
            axios.get('/character/game-calls/MAGUS')
            .then( (response) => {
                this.calls = response.data;
            })
            .catch( (error) => {
                console.log(error);
            });
        },
        getCharName(char_id) {
            console.log(this.GeneratedCharacters);
            console.log('Character Id: ' + char_id);
            let character = this.GeneratedCharacters.find(ch => ch.id == char_id);
            if (character) {
                return character.character_data.Nev + ' ' + character.character_data.Szint + ' Szint';
            } else {
                return 'Nem talalom a karaktert!!!';
            }
        },
        toogleDrop(id) {
            this.char_drop == id ? this.char_drop = 0 : this.char_drop = id;
        },
        selectCharacterToModule(module_id, char_id) {
            axios.post('/character/game-calls/add-character/MAGUS', 
                {
                    'char_id' : char_id,
                    'module_id' : module_id
                }
            )
            .then( (response) => {
                this.calls = response.data;
                this.char_drop = 0
            })
            .catch( (error) => {
                console.log(error);
            });
        },
        removeCharacterFromModule(module_id) {
            axios.post('/character/game-calls/remove-character/MAGUS', 
                {
                    'module_id' : module_id
                }
            )
            .then( (response) => {
                this.calls = response.data;
                this.char_drop = 0
            })
            .catch( (error) => {
                console.log(error);
            });
        },
        startGame(module_id) {
            window.location.href = '/site/game-module/' + module_id;
        }
    },

    mounted() {
            this.getCalls();
        }
}
</script>