<template>
    <div class="container-fluid bg-success img-bg">
        <div class="text-center p-4"><h2 class="text-white display-2 fw-bold"><span><img class="me-5" src="/img/pentagram.png" alt="" width="40" height="40"></span>magus karakterlap<span><img class="ms-5" src="/img/pentagram.png" alt="" width="40" height="40"></span></h2></div>

        <!-- --------fizikai tulajdonsagok---------- -->
        <div class="bg-light border border-success rounded mb-3 p-3 bg-white-leather">
            <magus-atributes />
        </div>

        <!-- A 3 colt tartalmazo row -->
        <div class="row justify-content-evenly">
            <!-- az elso col a rowba -->
           <div class="col-lg">

               <!-- ------eletero--------- -->
               <div class=" bg-light border border-success rounded mb-4 p-3 bg-white-leather">
                   <magus-eletero />
               </div>

                <!-- Pszi kepzetseg -->    
                <div class="bg-light border border-success rounded mb-3 p-3 bg-white-leather">
                    <magus-psi />        
               </div>

                <!-- mana -->
                 <div class=" bg-light border border-success rounded mb-3 p-3 bg-white-leather">
                  <magus-mana />
               </div>
           </div>

            <!-- A masodik col a rowba -->
           <div class="col-lg">

                <!-- karakter altalanos adatai -->
                <div class="bg-light border border-success rounded mb-5 p-3 bg-white-leather">
                    <magus-base-data />
                </div>

                <!-- Tam per kor -->
                <div class="bg-light border border-success rounded mb-5 p-3 bg-white-leather">
                   <div class="row">
                       <div class="col border-end border-secondary">
                           <p>HM/szint</p>
                           <p>{{ hmSzint }}</p>
                       </div>
                        <div class="col">
                            <p>Tám/kör</p>
                            <p>{{ tamKor }}</p>
                        </div>
                   </div>
               </div>

                <!-- viselt pancel tipusa -->
                <div class="bg-light border border-success rounded mb-4 p-3 bg-white-leather">
                    <magus-armor />
                </div>

           </div>
            <!-- A harmadik col a rowba -->
            <div class="col-lg">
                <!-- Harcertekek  -->
               <div class="bg-light border border-success rounded mb-4 p-3 bg-white-leather">
                   <magus-harcertek 
                        :moduleName="'Kezdeményező érték (KÉ)'"
                        :alap="Kaszt.KEalap"
                        :osztotHm="keOsztott"
                        :aktualis="keOsz"
                        :fegyverNelkul="keAlap"
                        :modositok="[]"
                        :id="'KE'"
                   />
               </div>

                <div class="bg-light border border-success rounded mb-4 p-3 bg-white-leather">
                    <magus-harcertek 
                        :moduleName="'Támadó érték (TÉ)'"
                        :alap="Kaszt.TEalap"
                        :osztotHm="teOsztott"
                        :aktualis="teOsz"
                        :fegyverNelkul="teAlap"
                        :modositok="[]"
                        :id="'TE'"
                   />
               </div>

                <div class="bg-light border border-success rounded mb-4 p-3 bg-white-leather">
                    <magus-harcertek 
                        :moduleName="'Védő érték (VÉ)'"
                        :alap="Kaszt.VEalap"
                        :osztotHm="veOsztott"
                        :aktualis="veOsz"
                        :fegyverNelkul="veAlap"
                        :modositok="[]"
                        :id="'VE'"
                   />
               </div>

               <div class="bg-light border border-success rounded mb-4 p-3 bg-white-leather">
                   <magus-harcertek 
                        :moduleName="'Célzó érték (CÉ)'"
                        :alap="ceFaj"
                        :osztotHm="ceOsztott"
                        :aktualis="ceOsz"
                        :fegyverNelkul="ceAlap"
                        :modositok="[]"
                        :id="'CE'"
                   />
               </div>

               <!-- viselt pajzs tipus -->
                <div class="bg-light border border-success rounded mb-4 p-3 bg-white-leather">
                    <magus-shield />
                </div>
           </div>
        </div>

        <!-- fegyverek -->
        <div class="bg-light border border-success rounded mb-4 p-3 bg-white-leather">
           <magus-wepon />
        </div>

        <!-- kepzetseg tablazat -->
         <div class="bg-light border border-success rounded mb-4 p-3 bg-white-leather">
             <magus-skills />
        </div>

        <!-- kincsek -->
        <div class="bg-light border border-success rounded mb-4 p-3 bg-white-leather">
            <magus-kincsek />
        </div>

        <!-- felszereles -->
        <div class="bg-light border border-success rounded mb-4 p-3 bg-white-leather">
            <magus-equipment :Equipment="magusCharacter.Felszereles" :id="magusCharacter.id" />
        </div>

        <!-- egyebb -->
        <div class="row justify-content-evenly">
            <div class="col">
                <div class="bg-light border border-success rounded mb-4 p-3 bg-white-leather">
                    <h4>Egyébb módositók</h4>
                    <p v-for="special, index in Faj.specials" :key="'E' + index">{{ special }}</p>
                </div>
            </div>
            <div class="col">
                <div class="bg-light border border-success rounded mb-4 p-3 bg-white-leather">
                    <magus-character-descript />
                </div>
            </div>
            <div class="col">
                <div class="bg-light border border-success rounded mb-4 p-3 bg-white-leather">
                    <magus-level-up />
                </div>
            </div>
        </div>

        <!-- notes -->
        <div class="bg-light border border-success rounded mb-4 p-3 bg-white-leather">
            <magus-notes />
        </div>
        <p>.</p>

        <!-- loading panel -->
        <div v-if="loadingState" class="overlay">
            <div class="spinner-border text-primary spin" role="status">
                <span class="visually-hidden">Töltődik...</span>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex';
    import MagusBaseData from './MagusBaseData.vue';
    import MagusKincsek from './MagusKincsek.vue';
    import MagusEquipment from './MagusEquipment.vue';
    import MagusHarcertek from './MagusHarcertek.vue';
    import MagusEletero from './MagusEletero.vue';
    import MagusAtributes from './MagusAtributes.vue';
    import MagusShield from './MagusShield.vue';
    import MagusArmor from './MagusArmor.vue';
    import MagusWepon from './MagusWepon.vue';
    import MagusSkills from './MagusSkills.vue';
    import MagusCharacterDescript from './MagusCharacterDescript.vue';
    import MagusNotes from './MagusNotes.vue';
    import MagusPsi from './MagusPsi.vue';
    import MagusMana from './MagusMana.vue';
    import MagusLevelUp from './MagusLevelUp.vue';

    export default {
        components: {
           MagusBaseData,
           MagusKincsek,
           MagusEquipment,
           MagusHarcertek,
           MagusEletero,
           MagusAtributes,
           MagusShield,
           MagusArmor,
           MagusWepon,
           MagusSkills,
           MagusCharacterDescript,
           MagusNotes,
           MagusPsi,
           MagusMana,
           MagusLevelUp,
        },
        data() {
            return {
               
            }
        },

        //COMPUTED----------------------------------
        computed: {
             ...mapGetters('currentCharacter', {
                 magusCharacter: 'magusCharacter',
                 loadingState: 'loadingState',
            }),
            ...mapGetters('magusAligments', {
                 aligment: 'aligment'
            }),
            ...mapGetters('magusRaces', {
                race: 'race'
            }),
            ...mapGetters('magusClasses', {
                magusKaszt: 'magusClass'
            }),
            
            Jellem() {
                let jellem = this.aligment(this.magusCharacter.Jellem);
                if (jellem) {
                    return jellem
                } else {
                    return {name: 'Not selected', description: 'Not selected'}
                }
            },
            Faj() {
                 let race = 'HUMAN';
                 if (this.magusCharacter) {
                     race = this.magusCharacter.Faj;
                 }
                return this.race(race);
            },
            Kaszt() {
                 let kaszt = 'HARCOS';
                 if (this.magusCharacter) {
                     kaszt = this.magusCharacter.Kaszt;
                 }
                return this.magusKaszt(kaszt);
            },
            ero() {
                return this.magusCharacter.ERO + this.magusCharacter.eroMod;
            },
            gyorsasag() {
                return this.magusCharacter.GYORS + this.magusCharacter.gyorsMod - this.magusCharacter.MgtMod;
            },
            ugyesseg() {
                return this.magusCharacter.UGY + this.magusCharacter.ugyMod - this.magusCharacter.MgtMod;
            },
            hmSzint() {
                return this.Kaszt.HmSzint + this.Kaszt.KESzintKotelezo + this.Kaszt.TESzintKotelezo + this.Kaszt.VESzintKotelezo + this.Kaszt.CESzintKotelezo;
            },
            tamKor() {
                if (this.gyorsasag > 15 && this.ugyesseg > 15) {
                    return 'A használt fegyver Tám/Köre +1';
                } else {
                    return 'A használt fegyver Tám/Köre';
                }
            },
            keAlap() {
                let gyorsMod = 0;
                let ugyMod = 0;
                if (this.gyorsasag > 10) {
                    gyorsMod = this.gyorsasag - 10;
                }
                if (this.ugyesseg > 10) {
                    ugyMod = this.ugyesseg - 10;
                }
                return this.Kaszt.KEalap + (this.Kaszt.KESzintKotelezo * this.magusCharacter.Szint) + this.magusCharacter.KeSzint + gyorsMod + ugyMod;
            },
            keOsz() {
                return this.keAlap + this.magusCharacter.KeMod;
            },
            keOsztott() {
                return this.magusCharacter.KeSzint + (this.Kaszt.KESzintKotelezo * this.magusCharacter.Szint);
            },
            teAlap() {
                let gyorsMod = 0;
                let ugyMod = 0;
                let eroMod = 0;
                if (this.gyorsasag > 10) {
                    gyorsMod = this.gyorsasag - 10;
                }
                if (this.ugyesseg > 10) {
                    ugyMod = this.ugyesseg - 10;
                }
                if (this.ero > 10) {
                    eroMod = this.ero - 10;
                }
                return this.Kaszt.TEalap + (this.Kaszt.TESzintKotelezo * this.magusCharacter.Szint) + this.magusCharacter.TeSzint + gyorsMod + ugyMod + eroMod;
            },
            teOsz() {
                return this.teAlap + this.magusCharacter.TeMod;
            },
            teOsztott() {
                return this.magusCharacter.TeSzint + (this.Kaszt.TESzintKotelezo * this.magusCharacter.Szint);
            },
            veAlap() {
                let gyorsMod = 0;
                let ugyMod = 0;
                if (this.gyorsasag > 10) {
                    gyorsMod = this.gyorsasag - 10;
                }
                if (this.ugyesseg > 10) {
                    ugyMod = this.ugyesseg - 10;
                }
                return this.Kaszt.VEalap + (this.Kaszt.VESzintKotelezo * this.magusCharacter.Szint) + this.magusCharacter.VeSzint + gyorsMod + ugyMod;
            },
            veOsz() {
                return this.veAlap + this.magusCharacter.VeMod;
            },
            veOsztott() {
                return this.magusCharacter.VeSzint + (this.Kaszt.VESzintKotelezo * this.magusCharacter.Szint);
            },
            ceAlap() {
                let ugyMod = 0;
                let ce = 0;
                if (this.ugyesseg > 10) {
                    ugyMod = this.ugyesseg - 10;
                }
                if (this.Faj.CE > 0) {
                    ce = this.Faj.CE;
                } else {
                    ce = this.Kaszt.CEalap;
                }
                return ce + (this.Kaszt.CESzintKotelezo * this.magusCharacter.Szint) + this.magusCharacter.CeSzint + ugyMod;
            },
            ceOsz() {
                return this.ceAlap + this.magusCharacter.CeMod;
            },
            ceOsztott() {
                return this.magusCharacter.CeSzint + (this.Kaszt.CESzintKotelezo * this.magusCharacter.Szint);
            },
            ceFaj() {
                let ce = 0;
                if (this.Faj.CE > 0) {
                    ce = this.Faj.CE;
                } else {
                    ce = this.Kaszt.CEalap;
                }
                return ce;
            }
        },

        //METHODS-------------------------------------
        methods: {
            
        },
        mounted() {

        }
    }
</script>

<style scoped>
    .img-bg {
        background-image: url("/img/stone-green.jpg");
        background-repeat: repeat;
        border: 5px solid green;
        border-radius: 10px;
    }
    .overlay {
        position: fixed; /* Sit on top of the page content */
        width: 100%; /* Full width (cover the whole page) */
        height: 100%; /* Full height (cover the whole page) */
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(0,0,0,0.5); /* Black background with opacity */
        z-index: 200; /* Specify a stack order in case you're using a different order for other elements */
    }
    .spin {
        position: absolute;
        top: 50%;
        left: 50%;
        height: 200px;
        width: 200px;
        transform: translate(-50%,-50%);
        -ms-transform: translate(-50%,-50%);
    }
</style>