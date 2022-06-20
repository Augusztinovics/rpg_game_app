<template>
     <div class="row">
                <div class="col-5 text-wrap">
                        <h3 class="border-bottom border-secondary my-4 p-2">Erő </h3>
                        <h3 class="border-bottom border-secondary my-4 p-2">Gyorsaság </h3>
                        <h3 class="border-bottom border-secondary my-4 p-2">Ügyesség </h3>
                        <h3 class="border-bottom border-secondary my-4 p-2">Állóképesség </h3>
                        <h3 class="border-bottom border-secondary my-4 p-2">Egészség </h3>
                        <h3 class="border-bottom border-secondary my-4 p-2">Szépség </h3>
                        <h3 class="border-bottom border-secondary my-4 p-2">Inteligencia </h3>
                        <h3 class="border-bottom border-secondary my-4 p-2">Akaraterő </h3>
                        <h3 class="border-bottom border-secondary my-4 p-2">Asztrál </h3>
                </div>
                    <div class="col-4">
                        <h3 class="my-4"><span title="Ideiglenesen csökkentsd a tulajdonságot" class="btn btn-outline-danger btn-sm me-2" @click="ModEro('-')"><b>-</b></span> <span title="Visszaálitani a tulajdonságot eredeti értékére" class="btn btn-outline-dark btn-lg" @click="ModEro('0')"><b>{{ ero }}</b></span> <span title="Ideiglenesen növeld a tulajdonságot" class="btn btn-outline-success btn-sm ms-2" @click="ModEro('+')"><b>+</b></span></h3>
                        <h3 class="my-4"><span title="Ideiglenesen csökkentsd a tulajdonságot" class="btn btn-outline-danger btn-sm me-2" @click="ModGyors('-')"><b>-</b></span> <span title="Visszaálitani a tulajdonságot eredeti értékére" class="btn btn-outline-dark btn-lg" @click="ModGyors('0')"><b>{{ gyorsasag }}</b></span> <span title="Ideiglenesen növeld a tulajdonságot" class="btn btn-outline-success btn-sm ms-2" @click="ModGyors('+')"><b>+</b></span></h3>
                        <h3 class="my-4"><span title="Ideiglenesen csökkentsd a tulajdonságot" class="btn btn-outline-danger btn-sm me-2" @click="ModUgy('-')"><b>-</b></span> <span title="Visszaálitani a tulajdonságot eredeti értékére" class="btn btn-outline-dark btn-lg" @click="ModUgy('0')"><b>{{ ugyesseg }}</b></span> <span title="Ideiglenesen növeld a tulajdonságot" class="btn btn-outline-success btn-sm ms-2" @click="ModUgy('+')"><b>+</b></span></h3>
                        <h3 class="my-4"><span title="Ideiglenesen csökkentsd a tulajdonságot" class="btn btn-outline-danger btn-sm me-2" @click="ModAllo('-')"><b>-</b></span> <span title="Visszaálitani a tulajdonságot eredeti értékére" class="btn btn-outline-dark btn-lg" @click="ModAllo('0')"><b>{{ allokepesseg }}</b></span> <span title="Ideiglenesen növeld a tulajdonságot" class="btn btn-outline-success btn-sm ms-2" @click="ModAllo('+')"><b>+</b></span></h3>
                        <h3 class="my-4"><span title="Ideiglenesen csökkentsd a tulajdonságot" class="btn btn-outline-danger btn-sm me-2" @click="ModEg('-')"><b>-</b></span> <span title="Visszaálitani a tulajdonságot eredeti értékére" class="btn btn-outline-dark btn-lg" @click="ModEg('0')"><b>{{ egeszseg }}</b></span> <span title="Ideiglenesen növeld a tulajdonságot" class="btn btn-outline-success btn-sm ms-2" @click="ModEg('+')"><b>+</b></span></h3>
                        <h3 class="my-4"><span title="Ideiglenesen csökkentsd a tulajdonságot" class="btn btn-outline-danger btn-sm me-2" @click="ModSzep('-')"><b>-</b></span> <span title="Visszaálitani a tulajdonságot eredeti értékére" class="btn btn-outline-dark btn-lg" @click="ModSzep('0')"><b>{{ szepseg }}</b></span> <span title="Ideiglenesen növeld a tulajdonságot" class="btn btn-outline-success btn-sm ms-2" @click="ModSzep('+')"><b>+</b></span></h3>
                        <h3 class="my-4"><span title="Ideiglenesen csökkentsd a tulajdonságot" class="btn btn-outline-danger btn-sm me-2" @click="ModInt('-')"><b>-</b></span> <span title="Visszaálitani a tulajdonságot eredeti értékére" class="btn btn-outline-dark btn-lg" @click="ModInt('0')"><b>{{ inteligencia }}</b></span> <span title="Ideiglenesen növeld a tulajdonságot" class="btn btn-outline-success btn-sm ms-2" @click="ModInt('+')"><b>+</b></span></h3>
                        <h3 class="my-4"><span title="Ideiglenesen csökkentsd a tulajdonságot" class="btn btn-outline-danger btn-sm me-2" @click="ModAk('-')"><b>-</b></span> <span title="Visszaálitani a tulajdonságot eredeti értékére" class="btn btn-outline-dark btn-lg" @click="ModAk('0')"><b>{{ akarat }}</b></span> <span title="Ideiglenesen növeld a tulajdonságot" class="btn btn-outline-success btn-sm ms-2" @click="ModAk('+')"><b>+</b></span></h3>
                        <h3 class="my-4"><span title="Ideiglenesen csökkentsd a tulajdonságot" class="btn btn-outline-danger btn-sm me-2" @click="ModAszt('-')"><b>-</b></span> <span title="Visszaálitani a tulajdonságot eredeti értékére" class="btn btn-outline-dark btn-lg" @click="ModAszt('0')"><b>{{ asztral }}</b></span> <span title="Ideiglenesen növeld a tulajdonságot" class="btn btn-outline-success btn-sm ms-2" @click="ModAszt('+')"><b>+</b></span></h3>
                </div>
                <div class="col-3">
                    <div class="">
                        <div class="border border-secondary rounded my-4">
                            <p class="mb-3 p-1">Sp: <span>{{ spMod }}</span></p>
                        </div>            
                        <div class="border border-secondary rounded my-4">
                            <p class="mb-3 p-1">Mod: <span> +1</span></p>
                        </div>
                        <div class="border border-secondary rounded my-4">
                            <p class="mb-3 p-1">Mod: <span> 0</span></p>
                        </div>
                        <div class="border border-warning rounded my-5">
                            <p class=" p-2"><b>*Figyelem!!!</b></p>
                            <p class=" p-2">A <span title="Ideiglenesen csökkentsd a tulajdonságot" class="btn btn-outline-danger btn-sm me-2"><b>-</b></span> és <span title="Ideiglenesen növeld a tulajdonságot" class="btn btn-outline-success btn-sm ms-2"><b>+</b></span> gombok segitségével csak ideiglenesen lehet növelni vagy csökkenteni a tulajdonságot. A tulajdonság értékére kattintva, vagy a lap ujratöltésénél visszaáll az eredeti értékére.</p> 
                        </div>
                    </div>   
                </div> 
            </div>     
</template>

<script>
import { mapGetters, mapMutations, mapActions } from 'vuex';
export default {
    computed: {
        ...mapGetters('currentCharacter', {
            magusCharacter: 'magusCharacter',
        }),
        ...mapGetters('magusRaces', {
            race: 'race'
        }),
        Faj() {
            return this.race(this.magusCharacter.Faj);
        },
        ero() {
            return this.magusCharacter.ERO + this.Faj.ERO + this.magusCharacter.eroMod;
        },
        gyorsasag() {
            return this.magusCharacter.GYORS + this.Faj.GYORS + this.magusCharacter.gyorsMod;
        },
        ugyesseg() {
            return this.magusCharacter.UGY + this.Faj.UGY + this.magusCharacter.ugyMod;
        },
        allokepesseg() {
            return this.magusCharacter.ALLO + this.Faj.ALLO + this.magusCharacter.alloMod;
        },
        egeszseg() {
            return this.magusCharacter.EG + this.Faj.EG + this.magusCharacter.egMod;
        },
        szepseg() {
            return this.magusCharacter.SZEP + this.Faj.SZEP + this.magusCharacter.szepMod;
        },
        inteligencia() {
            return this.magusCharacter.INT + this.Faj.INT + this.magusCharacter.intMod;
        },
        akarat() {
            return this.magusCharacter.AK + this.Faj.AK + this.magusCharacter.akMod;
        },
        asztral() {
            return this.magusCharacter.ASZT + this.Faj.ASZT + this.magusCharacter.asztMod;
        },
        spMod() {
            let sp = 0;
            if (this.ero > 16) {
                sp = this.ero - 16;
            }
            return '+' + sp.toString();
        },
    },
    methods: {
        ...mapMutations('currentCharacter', {
            updateEroMod: 'updateEroMod',
            updateGyorsMod: 'updateGyorsMod',
            updateUgyMod: 'updateUgyMod',
            updateAlloMod: 'updateAlloMod',
            updateEgMod: 'updateEgMod',
            updateSzepMod: 'updateSzepMod',
            updateIntMod: 'updateIntMod',
            updateAkMod: 'updateAkMod',
            updateAsztMod: 'updateAsztMod',
        }),
        ...mapActions('currentCharacter', {
            save: 'save'
        }),
        ModEro(mod) {    
            this.updateEroMod(mod);
            this.save();
        },
        ModGyors(mod) {  
           this.updateGyorsMod(mod);
           this.save();
        },
        ModUgy(mod) {         
            this.updateUgyMod(mod);
            this.save();
        },
        ModAllo(mod) {         
            this.updateAlloMod(mod);
            this.save();
        },
        ModEg(mod) {         
           this.updateEgMod(mod);
           this.save();
        },
        ModSzep(mod) {         
            this.updateSzepMod(mod);
            this.save();
        },
        ModInt(mod) {         
           this.updateIntMod(mod);
           this.save();
        },
        ModAk(mod) {         
            this.updateAkMod(mod);
            this.save();
        },
        ModAszt(mod) {         
            this.updateAsztMod(mod);
            this.save();
        },
    },
    
}
</script>