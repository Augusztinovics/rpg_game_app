<template>
    <div class="container-fluid">
        <magus-character-sheet :magusCharacter="magusCharacter" />
    </div>
</template>

<script>
    import MagusCharacterSheet from './magus/MagusCharacterSheet.vue'
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
                    HmLeft: 0,
                    KpLeft: 0,
                    KpPrecentLeft: 0,
                    FegyverhasznalatAlap: [],
                    FegyverhasznalatMester: [],
                    FegyverdobasAlap: [],
                    FegyverdobasMester: [],
                    Nyelvismeret: [],
                    Szakma: [],
                    Pszi: {
                        learned: false,
                        atlevel: 0,
                        level: 'Af',
                    },
                    szazalekosKepzetsegek: {
                        maszas: {
                            precent: 0,
                            precentAdded: 0,
                            kpAdded: 0,
                        },
                         eses: {
                            precent: 0,
                            precentAdded: 0,
                            kpAdded: 0,
                        },
                         ugras: {
                            precent: 0,
                            precentAdded: 0,
                            kpAdded: 0,
                        },
                         lopakodas: {
                            precent: 0,
                            precentAdded: 0,
                            kpAdded: 0,
                        },
                         rejtozes: {
                            precent: 0,
                            precentAdded: 0,
                            kpAdded: 0,
                        },
                         koteltanc: {
                            precent: 0,
                            precentAdded: 0,
                            kpAdded: 0,
                        },
                         zsebmetszes: {
                            precent: 0,
                            precentAdded: 0,
                            kpAdded: 0,
                        },
                         csabdafelfedezes: {
                            precent: 0,
                            precentAdded: 0,
                            kpAdded: 0,
                        },
                         zarnyitas: {
                            precent: 0,
                            precentAdded: 0,
                            kpAdded: 0,
                        },
                         titkosajto: {
                            precent: 0,
                            precentAdded: 0,
                            kpAdded: 0,
                        },
                    },
                    LearnedSkills:[],
                    Pancel: {
                        name: '',
                        equipped: false,
                        mgt: 0,
                        sfe: 0,
                    },
                    Pajzs: {
                        name: '',
                        eqiupped: false,
                        ve: 0,
                        mgt: 0,
                    },
                    Fegyverek: [
                        {
                            name: 'HOSSZUKARD',
                            rightHand: false,
                            leftHand: false,
                        }
                    ],
                    Kincsek: {
                        rez: 10,
                        ezust: 2,
                        arany: 0,
                        mithrill: 0,
                        dragako: 0,
                        egyebb: ['ezust serleg', 'disztanyer'],
                    },
                    Felszereles: { 
                        felszereles: [
                            {
                                name:'Hálózsák',
                                quantity: 1,
                                where: 'Táska alatt',
                            }
                        ]
                    },
                }
            }
        },
        mounted() {
            console.log('Component mounted.')
        }
    }
</script>