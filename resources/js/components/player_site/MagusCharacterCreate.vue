<template>
    <div class="container-fluid">
        <magus-character-sheet :magusCharacter="magusCharacter" />
    </div>
</template>

<script>
    import MagusCharacterSheet from './common/MagusCharacterSheet.vue'
    export default {
         components: {
            MagusCharacterSheet
        },
        data() {
            return {
                magusCharacter: {
                    ERO: 17,
                    GYORS: 3,
                    UGY: 3,
                    ALLO: 3,
                    EG: 3,
                    SZEP: 3,
                    INT: 3,
                    AK: 3,
                    ASZT: 3,
                    Nev: 'A karakter neve',
                    Kaszt: 'HARCOS',
                    Faj: 'ELF',
                    Jellem: 'R',
                    Vallas: '',
                    Szimbolum: 'Hold',
                    Szulofold: 'Gorvick',
                    Iskola: 'Zsoldos',
                    Szint: 1,
                    FpSzint: 10,
                    AktEp: 6,
                    AktFp: 12,
                    KeSzint: 1,
                    TeSzint: 2,
                    VeSzint: 2,
                    CeSzint: 0,
                }
            }
        },
        mounted() {
            console.log('Component mounted.')
        }
    }
</script>