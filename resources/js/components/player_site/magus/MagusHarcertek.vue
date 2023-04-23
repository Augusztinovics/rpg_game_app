<template>
    <div>
        <h4 class="text-center mt-2">{{ moduleName }}</h4>
        <div v-if="hmLeft > 0" class="text-center my-4">
            <p><b>{{ hmLeft }} HM szétosztható</b></p>
            <button class="btn btn-outline-success" type="button" @click="updateHms"><b>+</b></button>
        </div>
        <div class="row">
            <div class="col border-end border-secondary">
                <p>Alap</p>
                <p class="border-bottom border-secondary">{{ alap }}</p>
                <p>Osztott HM</p>
                <p>{{ osztotHm }}</p>
            </div>
            <div class="col">
                <p>Aktuális</p>
                <p class="border-bottom border-secondary">{{ aktualis }}</p>
                <p>Fegyver nélkül</p>
                <p>{{ fegyverNelkul }}</p>
            </div>
        </div>
        <p class="border-top border-secondary">Módositók</p>
        <p v-for="mod, index in modositok" :key="index">{{ mod }}</p>
    </div>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from 'vuex';
export default {
     props: {
        moduleName: String,
        alap: Number,
        osztotHm: Number,
        aktualis: Number,
        fegyverNelkul: Number,
        modositok: Array,
        id: String,
    },
    computed: {
        ...mapGetters('currentCharacter', {
            magusCharacter: 'magusCharacter',
        }),
        hmLeft() {
            return this.magusCharacter.HmLeft;
        },
    },
    methods: {
         ...mapMutations('currentCharacter', {
            updateHmLeft: 'updateHmLeft',
            updateKeSzint: 'updateKeSzint',
            updateTeSzint: 'updateTeSzint',
            updateVeSzint: 'updateVeSzint',
            updateCeSzint: 'updateCeSzint',
        }),
        ...mapActions('currentCharacter', {
            save: 'save'
        }),
        updateHms() {
            if (this.id =='KE') {
                this.updateKeSzint();
                this.updateHmLeft();
                this.save();
            }
            if (this.id =='TE') {
                this.updateTeSzint();
                this.updateHmLeft();
                this.save();
            }
            if (this.id =='VE') {
                this.updateVeSzint();
                this.updateHmLeft();
                this.save();
            }
            if (this.id =='CE') {
                this.updateCeSzint();
                this.updateHmLeft();
                this.save();
            }
            let msg = this.magusCharacter.Nev + ' HM-et osztott! ' + this.id + ': +1';
            this.$root.$emit('CharacterChangedEvent', msg);
        }
    },
}
</script>