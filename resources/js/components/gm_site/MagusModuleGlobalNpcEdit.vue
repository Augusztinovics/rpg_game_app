<template>
    <div>
        <div class="text-center p-5">
            <div class="input-group mb-3">
                <span class="input-group-text" id="name"><b>NJK neve:</b></span>
                <input type="text" class="form-control" placeholder="NJK neve" aria-label="Npcname" aria-describedby="name" v-model="npc.name">
            </div>
            <div class="input-group mb-3">
                <span class="input-group-text" id="race"><b>NJK faja:</b></span>
                <input type="text" class="form-control" placeholder="faj" aria-label="Npcrace" aria-describedby="race" v-model="npc.race">
            </div>
            <div class="input-group mb-3">
                <span class="input-group-text" id="level"><b>NJK szintje:</b></span>
                <input type="number" class="form-control" aria-label="Npclevel" aria-describedby="level" v-model="npc.level">
            </div>
        </div>
        <div class="row m-4">
            <div class="col">
                <div class="input-group mb-3">
                    <span class="input-group-text" id="ero"><b>Erő:</b></span>
                    <input type="number" class="form-control" aria-label="Npcero" aria-describedby="ero" v-model="npc.ERO">
                </div>
                <div class="input-group mb-3">
                    <span class="input-group-text" id="gyors"><b>Gyorsaság:</b></span>
                    <input type="number" class="form-control" aria-label="Npcgyors" aria-describedby="ero" v-model="npc.GYORS">
                </div>
                <div class="input-group mb-3">
                    <span class="input-group-text" id="ugy"><b>Ügyesség:</b></span>
                    <input type="number" class="form-control" aria-label="Npcugy" aria-describedby="ugy" v-model="npc.UGY">
                </div>
                <div class="input-group mb-3">
                    <span class="input-group-text" id="allo"><b>Állóképesség:</b></span>
                    <input type="number" class="form-control" aria-label="Npcallo" aria-describedby="allo" v-model="npc.ALLO">
                </div>
                <div class="input-group mb-3">
                    <span class="input-group-text" id="eg"><b>Egészség:</b></span>
                    <input type="number" class="form-control" aria-label="Npceg" aria-describedby="eg" v-model="npc.EG">
                </div>
                <div class="input-group mb-3">
                    <span class="input-group-text" id="szep"><b>Szépség:</b></span>
                    <input type="number" class="form-control" aria-label="Npcszep" aria-describedby="szep" v-model="npc.SZEP">
                </div>
                <div class="input-group mb-3">
                    <span class="input-group-text" id="int"><b>Inteligencia:</b></span>
                    <input type="number" class="form-control" aria-label="Npcint" aria-describedby="int" v-model="npc.INT">
                </div>
                <div class="input-group mb-3">
                    <span class="input-group-text" id="ak"><b>Akaraterő:</b></span>
                    <input type="number" class="form-control" aria-label="Npcak" aria-describedby="ak" v-model="npc.AK">
                </div>
                <div class="input-group mb-3">
                    <span class="input-group-text" id="aszt"><b>Asztrál:</b></span>
                    <input type="number" class="form-control" aria-label="Npcaszt" aria-describedby="aszt" v-model="npc.ASZT">
                </div>
            </div>
            <div class="col">
                <div class="input-group mb-3">
                    <span class="input-group-text" id="ke"><b>Kezdeményező ( KÉ ):</b></span>
                    <input type="text" class="form-control" aria-label="Npcke" aria-describedby="ke" v-model="npc.KE">
                </div>
                <div class="input-group mb-3">
                    <span class="input-group-text" id="te"><b>Támadó ( TÉ ):</b></span>
                    <input type="text" class="form-control" aria-label="Npcte" aria-describedby="ero" v-model="npc.TE">
                </div>
                <div class="input-group mb-3">
                    <span class="input-group-text" id="ve"><b>Védő ( VÉ ):</b></span>
                    <input type="text" class="form-control" aria-label="Npcve" aria-describedby="ve" v-model="npc.VE">
                </div>
                <div class="input-group mb-3">
                    <span class="input-group-text" id="ce"><b>Célzó ( CÉ ):</b></span>
                    <input type="text" class="form-control" aria-label="Npce" aria-describedby="ce" v-model="npc.CE">
                </div>
                <div class="input-group mb-3">
                    <span class="input-group-text" id="sp"><b>Cebzés ( Sp ):</b></span>
                    <input type="text" class="form-control" aria-label="Npcsp" aria-describedby="sp" v-model="npc.SP">
                </div>
                <div class="input-group mb-3">
                    <span class="input-group-text" id="sfe"><b>Sebzés Felfogó ( SFÉ ):</b></span>
                    <input type="text" class="form-control" aria-label="Npcsfe" aria-describedby="sfe" v-model="npc.SFE">
                </div>
                <div class="input-group mb-3">
                    <span class="input-group-text" id="ep"><b>Életerő ( Ép ):</b></span>
                    <input type="text" class="form-control" aria-label="Npcep" aria-describedby="ep" v-model="npc.EP">
                </div>
                <div class="input-group mb-3">
                    <span class="input-group-text" id="fp"><b>Fájdalomtűrés ( Fp ):</b></span>
                    <input type="text" class="form-control" aria-label="Npcfp" aria-describedby="fp" v-model="npc.FP">
                </div>
            </div>
        </div>
        <div>
            <div class="mb-3">
                <label for="description" class="form-label">NJK leírása</label>
                <textarea class="form-control" id="description" rows="3" v-model="npc.description"></textarea>
            </div>
            <div class="mb-3">
                <label for="role" class="form-label">NJK szerepe</label>
                <textarea class="form-control" id="role" rows="3" v-model="npc.role"></textarea>
            </div>
            <div class="mb-3">
                <label for="sablon" class="form-label">NJK viselkedési mintája</label>
                <textarea class="form-control" id="sablon" rows="3" v-model="npc.sablon"></textarea>
            </div>
        </div>
        <div class="text-center">
            <button type="button" class="btn btn-secondary costum-btn m-3" @click="cancelEdit">Mégsem</button>
            <button type="button" class="btn btn-success costum-btn m-3" @click="saveEdit">Elment</button>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            npcIndex: null,
            npc: {
                name: '',
                race: 'Ember',
                level: '1',
                exp: '0',
                ERO: '10',
                GYORS: '10',
                UGY: '10',
                ALLO: '10',
                EG: '10',
                SZEP: '10',
                INT: '10',
                AK: '10',
                ASZT: '10',
                KE: '',
                TE: '',
                VE: '',
                CE: '',
                SP: '',
                SFE: '0',
                EP: '',
                FP: '',
                description: '',
                role: '',
                sablon: '',
            }
        }
    },
    computed: {},
    methods: {
        setNpc(npc, index) {
            this.npcIndex = index;
            this.npc.name = npc.name;
            this.npc.race = npc.race;
            this.npc.level = npc.level;
            this.npc.exp = npc.exp;
            this.npc.ERO = npc.ERO;
            this.npc.GYORS = npc.GYORS;
            this.npc.UGY = npc.UGY;
            this.npc.ALLO = npc.ALLO;
            this.npc.EG = npc.EG;
            this.npc.SZEP = npc.SZEP;
            this.npc.INT = npc.INT;
            this.npc.AK = npc.AK;
            this.npc.ASZT = npc.ASZT;
            this.npc.KE = npc.KE;
            this.npc.TE = npc.TE;
            this.npc.VE = npc.VE;
            this.npc.CE = npc.CE;
            this.npc.SP = npc.SP;
            this.npc.SFE = npc.SFE;
            this.npc.EP = npc.EP;
            this.npc.FP = npc.FP;
            this.npc.description = npc.description;
            this.npc.role = npc.role;
            this.npc.sablon = npc.sablon;
        },
        setDefaultNpc() {
            this.npcIndex = null;
            this.npc.name = '';
            this.npc.race = 'Ember';
            this.npc.level = '1';
            this.npc.exp = '';
            this.npc.ERO = '10';
            this.npc.GYORS = '10';
            this.npc.UGY = '10';
            this.npc.ALLO = '10';
            this.npc.EG = '10';
            this.npc.SZEP = '10';
            this.npc.INT = '10';
            this.npc.AK = '10';
            this.npc.ASZT = '10';
            this.npc.KE = '';
            this.npc.TE = '';
            this.npc.VE = '';
            this.npc.CE = '';
            this.npc.SP = '';
            this.npc.SFE = '';
            this.npc.EP = '1';
            this.npc.FP = '4';
            this.npc.description = '';
            this.npc.role = '';
            this.npc.sablon = '';
        },
        cancelEdit() {
            this.$emit('cancel');
        },
        saveEdit() {
            this.$emit('save', {npc: this.npc, index: this.npcIndex});
        }
    },
}
</script>