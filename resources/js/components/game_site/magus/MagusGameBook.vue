<template>
    <div class="card m-2 mt-4">
        <div class="card-header">
            <div class="ms-2 d-flex flex-row">
                <button :class="['m-1 btn btn-sm ', selected_tab == 'let_szabalya_tab' ? 'btn-dark' : 'btn-secondary']" @click="selectTab('let_szabalya_tab')">Létezés Szabályai</button>
                <button :class="['m-1 btn btn-sm ', selected_tab == 'harcrendszer_tab' ? 'btn-dark' : 'btn-secondary']" @click="selectTab('harcrendszer_tab')">Harcrendszer</button>
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
            }),
            imgUrl() {
                switch(this.selected_tab) {
                    case 'harcrendszer_tab':
                        return this.harcrendszer[this.current_page - 1] ?? this.harcrendszer[0];
                    default:
                        return this.let_szabalyai[this.current_page - 1] ?? this.let_szabalyai[0];
                }
            }
        },
        methods: {
            selectTab(tab) {
                switch (tab) {
                    case 'harcrendszer_tab':
                        //
                        this.selected_tab = 'harcrendszer_tab';
                        this.current_page = 1;
                        this.max_page = this.harcrendszer.length;
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