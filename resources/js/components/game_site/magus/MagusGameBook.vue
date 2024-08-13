<template>
    <div class="card m-2 mt-4">
        <div class="card-header">
            <div class="ms-2 d-flex flex-row">
                <button :class="['m-1 btn btn-sm ', selected_tab == 'let_szabalya_tab' ? 'btn-dark' : 'btn-secondary']" @click="selectTab('let_szabalya_tab')">Létezés Szabályai</button>
                <button :class="['m-1 btn btn-sm ', selected_tab == 'harcrendszer_tab' ? 'btn-dark' : 'btn-secondary']" @click="selectTab('harcrendszer_tab')">Harcrendszer</button>
                <button :class="['m-1 btn btn-sm ', selected_tab == 'kepzetsegek_tab' ? 'btn-dark' : 'btn-secondary']" @click="selectTab('kepzetsegek_tab')">Képzetségek</button>
                <button :class="['m-1 btn btn-sm ', selected_tab == 'pszi_tab' ? 'btn-dark' : 'btn-secondary']" @click="selectTab('pszi_tab')">Pszi</button>
                <button v-if="isGm || characterId == 'BARD'" :class="['m-1 btn btn-sm ', selected_tab == 'bard_magia_tab' ? 'btn-dark' : 'btn-secondary']" @click="selectTab('bard_magia_tab')">Bárd Mágia</button>
                <button v-if="isGm || isCleric" :class="['m-1 btn btn-sm ', selected_tab == 'pap_magia_tab' ? 'btn-dark' : 'btn-secondary']" @click="selectTab('pap_magia_tab')">Papi Mágia</button>
                <button v-if="isGm || characterId == 'BOSZORKANY'" :class="['m-1 btn btn-sm ', selected_tab == 'boszorkany_magia_tab' ? 'btn-dark' : 'btn-secondary']" @click="selectTab('boszorkany_magia_tab')">Boszorkány Mágia</button>
                <button v-if="isGm || characterId == 'BOSZORKANYMESTER'" :class="['m-1 btn btn-sm ', selected_tab == 'boszmester_magia_tab' ? 'btn-dark' : 'btn-secondary']" @click="selectTab('boszmester_magia_tab')">Boszorkánymester Mágia</button>
                <button v-if="isGm || characterId == 'TUZVARAZSLO'" :class="['m-1 btn btn-sm ', selected_tab == 'tuzvarazslo_magia_tab' ? 'btn-dark' : 'btn-secondary']" @click="selectTab('tuzvarazslo_magia_tab')">Tűzvarázsló Mágia</button>
                <button v-if="isGm || characterId == 'VARAZSLO'" :class="['m-1 btn btn-sm ', selected_tab == 'varazslo_magia_tab' ? 'btn-dark' : 'btn-secondary']" @click="selectTab('varazslo_magia_tab')">Varázsló Mágia</button>
                <button :class="['m-1 btn btn-sm ', selected_tab == 'penz_felszereles_tab' ? 'btn-dark' : 'btn-secondary']" @click="selectTab('penz_felszereles_tab')">Pénz Felszerelés</button>
                <button v-if="isGm || characterId == 'BOSZORKANYMESTER'" :class="['m-1 btn btn-sm ', selected_tab == 'betegsegek_mergek_tab' ? 'btn-dark' : 'btn-secondary']" @click="selectTab('betegsegek_mergek_tab')">Betegségek Mérgek</button>
                <button v-if="isGm || characterId == 'BOSZORKANYMESTER' || characterId == 'BOSZORKANY' || characterId == 'VARAZSLO'" :class="['m-1 btn btn-sm ', selected_tab == 'varazstargyak_tab' ? 'btn-dark' : 'btn-secondary']" @click="selectTab('varazstargyak_tab')">Varázstárgyak</button>
                <button v-if="isGm || characterId == 'TOLVAJ'" :class="['m-1 btn btn-sm ', selected_tab == 'csapdak_tab' ? 'btn-dark' : 'btn-secondary']" @click="selectTab('csapdak_tab')">Csapdák</button>
            </div>
        </div>
        <div class="card-body text-center">
            <img :src="imgUrl" alt="magus book page" class="img-fluid">
        </div>
        <div class="card-footer text-center">
            <button class="btn btn-sm btn-secondary" @click="prevPage">&lt;</button>
            <span class="mx-2">
                <span>{{ current_page }}</span>/
                <span>{{ max_page }}</span>
            </span>
            <button class="btn btn-sm btn-secondary" @click="nextPage">&gt;</button>
        </div>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex';

    export default {
        props: {
            isGm: {
                type: Boolean,
                default: false
            },
            characterId: {
                type: String,
                default: ''
            }
        },
        data() {
            return {
                selected_tab: 'let_szabalya_tab',
                current_page: 1,
                max_page: 1,
            }
        },
        computed: {
            ...mapGetters('magusBook', {
                let_szabalyai: 'let_szabalyai',
                harcrendszer: 'harcrendszer',
                kepzetsegek: 'kepzetsegek',
                pszi: 'pszi',
                bard_magia: 'bard_magia',
                pap_magia: 'pap_magia',
                boszorkany_magia: 'boszorkany_magia',
                boszmester_magia: 'boszmester_magia',
                tuzvarazslo_magia: 'tuzvarazslo_magia',
                varazslo_magia: 'varazslo_magia',
                penz_felszereles: 'penz_felszereles',
                betegsegek_mergek: 'betegsegek_mergek',
                varazstargyak: 'varazstargyak',
                csapdak: 'csapdak',
            }),
            imgUrl() {
                switch(this.selected_tab) {
                    case 'harcrendszer_tab':
                        return this.harcrendszer[this.current_page - 1] ?? this.harcrendszer[0];
                    case 'kepzetsegek_tab':
                        return this.kepzetsegek[this.current_page - 1] ?? this.kepzetsegek[0];
                    case 'pszi_tab':
                        return this.pszi[this.current_page - 1] ?? this.pszi[0];
                    case 'bard_magia_tab':
                        return this.bard_magia[this.current_page - 1] ?? this.bard_magia[0];
                    case 'pap_magia_tab':
                        return this.pap_magia[this.current_page - 1] ?? this.pap_magia[0];
                    case 'boszorkany_magia_tab':
                        return this.boszorkany_magia[this.current_page - 1] ?? this.boszorkany_magia[0];
                    case 'boszmester_magia_tab':
                        return this.boszmester_magia[this.current_page - 1] ?? this.boszmester_magia[0];
                    case 'tuzvarazslo_magia_tab':
                        return this.tuzvarazslo_magia[this.current_page - 1] ?? this.tuzvarazslo_magia[0];
                    case 'varazslo_magia_tab':
                        return this.varazslo_magia[this.current_page - 1] ?? this.varazslo_magia[0];
                    case 'penz_felszereles_tab':
                        return this.penz_felszereles[this.current_page - 1] ?? this.penz_felszereles[0];
                    case 'betegsegek_mergek_tab':
                        return this.betegsegek_mergek[this.current_page - 1] ?? this.betegsegek_mergek[0];
                    case 'varazstargyak_tab':
                        return this.varazstargyak[this.current_page - 1] ?? this.varazstargyak[0];
                    case 'csapdak_tab':
                        return this.csapdak[this.current_page - 1] ?? this.csapdak[0];
                    default:
                        return this.let_szabalyai[this.current_page - 1] ?? this.let_szabalyai[0];
                }
            },
            isCleric() {
                let clerics = ['PAP', 'PAP_DONVIK', 'PAP_AREL', 'PAP_THARR', 'PAP_KYEL', 'PAPLOVAG', 'PAPLOVAG_DONVIK', 'PAPLOVAG_RANAGOL', 'PAPLOVAG_DREINA', 'PAPLOVAG_KRAD', 'PAPLOVAG_UWEL', 'PAPLOVAG_DARTON'];
                return clerics.includes(this.characterId);
            },
        },
        methods: {
            selectTab(tab) {
                switch (tab) {
                    case 'harcrendszer_tab':
                        this.selected_tab = 'harcrendszer_tab';
                        this.current_page = 1;
                        this.max_page = this.harcrendszer.length;
                        break;
                    case 'kepzetsegek_tab':
                        this.selected_tab = 'kepzetsegek_tab';
                        this.current_page = 1;
                        this.max_page = this.kepzetsegek.length;
                        break;
                    case 'pszi_tab':
                        this.selected_tab = 'pszi_tab';
                        this.current_page = 1;
                        this.max_page = this.pszi.length;
                        break;
                    case 'bard_magia_tab':
                        this.selected_tab = 'bard_magia_tab';
                        this.current_page = 1;
                        this.max_page = this.bard_magia.length;
                        break;
                    case 'pap_magia_tab':
                        this.selected_tab = 'pap_magia_tab';
                        this.current_page = 1;
                        this.max_page = this.pap_magia.length;
                        break;
                    case 'boszorkany_magia_tab':
                        this.selected_tab = 'boszorkany_magia_tab';
                        this.current_page = 1;
                        this.max_page = this.boszorkany_magia.length;
                        break;
                    case 'boszmester_magia_tab':
                        this.selected_tab = 'boszmester_magia_tab';
                        this.current_page = 1;
                        this.max_page = this.boszmester_magia.length;
                        break;
                    case 'tuzvarazslo_magia_tab':
                        this.selected_tab = 'tuzvarazslo_magia_tab';
                        this.current_page = 1;
                        this.max_page = this.tuzvarazslo_magia.length;
                        break;
                    case 'varazslo_magia_tab':
                        this.selected_tab = 'varazslo_magia_tab';
                        this.current_page = 1;
                        this.max_page = this.varazslo_magia.length;
                        break;
                    case 'penz_felszereles_tab':
                        this.selected_tab = 'penz_felszereles_tab';
                        this.current_page = 1;
                        this.max_page = this.penz_felszereles.length;
                        break;
                    case 'betegsegek_mergek_tab':
                        this.selected_tab = 'betegsegek_mergek_tab';
                        this.current_page = 1;
                        this.max_page = this.betegsegek_mergek.length;
                        break;
                    case 'varazstargyak_tab':
                        this.selected_tab = 'varazstargyak_tab';
                        this.current_page = 1;
                        this.max_page = this.varazstargyak.length;
                        break;
                    case 'csapdak_tab':
                        this.selected_tab = 'csapdak_tab';
                        this.current_page = 1;
                        this.max_page = this.csapdak.length;
                        break;
                    default:
                        this.selected_tab = 'let_szabalya_tab';
                        this.current_page = 1;
                        this.max_page = this.let_szabalyai.length;
                }
            },
            prevPage() {
                let prev = this.current_page - 1;
                if (prev < 1) {
                    this.current_page = this.max_page;
                } else {
                    this.current_page = prev;
                }
            },
            nextPage() {
                let next = this.current_page + 1;
                if (next > this.max_page) {
                    this.current_page = 1;
                } else {
                    this.current_page = next;
                }
            },
        },
        mounted() {
            this.max_page = this.let_szabalyai.length;
        }
    }
</script>