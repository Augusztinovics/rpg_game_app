<template>
    <div>
        <!-- Kp left show and control -->
        <div>
            <h4 class="text-center mt-2 pb-3 border-bottom border-secondary">Képzetségek</h4>
            <div class="row pb-3 border-bottom border-secondary">
                <div class="col border-end border-secondary">
                    <p>Képzetség pontok</p>
                    <p>{{ kpLeft }}</p>
                </div>
                <div class="col border-end border-secondary">
                    <p>Képzetség százalék</p>
                    <p>{{ kpPrecentLeft }}%</p>
                </div>
                <div class="col">
                    <p>KP/szint</p>
                    <p>{{ KpSzint }}</p>
                </div>
                <div class="col">
                    <button class="btn btn-success my-3" type="button" >Új képzettség tanulása</button>
                </div>
            </div>
        </div>

        <!-- kepzetseg tablazatok -->
        <div  class="row mt-3">
            <!-- tanult kepzetsegek -->
            <div class="col pb-3 border-bottom border-end border-secondary">

            </div>
            <!-- szazalekos kepzetsegek -->
            <div class="col pb-3 border-bottom border-end border-secondary">
                <h4 class="text-center mt-2 pb-3 border-bottom border-secondary">Százalékos Képzetség Tábla</h4>
                <table class="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col-6">Képzettség</th>
                            <th scope="col">Ráfektetett KP</th>
                            <th scope="col">Ráfektetett %</th>
                            <th scope="col">Összesen %</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="precSkill, key in charactersPrecentSkills" :key="key">
                            <td>{{ skillPrecent(key).name }}</td>
                            <td>{{ precSkill.kpAdded }}</td>
                            <td>{{ precSkill.precentAdded }}</td>
                            <td>{{ sumSkillPrecent(precSkill.precent) }}</td>
                        </tr>
                       
             
                    </tbody>
                </table> 
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
            haveLearnedSkill: 'haveLearnedSkill',
        }),
        ...mapGetters('magusClasses', {
            magusKaszt: 'magusClass'
        }),
         ...mapGetters('magusRaces', {
            race: 'race'
        }),
        ...mapGetters('magusSkills', {
            skill: 'skill',
            skillPrecent: 'skillPrecent',
        }),
        Faj() {
            let race = 'HUMAN';
            if (this.magusCharacter) {
                race = this.magusCharacter.Faj;
            }
            return this.race(race);
        },
        ugyesseg() {
            return this.magusCharacter.UGY + this.Faj.UGY + this.magusCharacter.ugyMod - this.magusCharacter.MgtMod;
        },
        ugyessegModosito() {
            let ugyMod = 0;
            if (this.ugyesseg > 10) {
                ugyMod = this.ugyesseg - 10;
            }
            return ugyMod;
        },
        KpSzint() {
            return this.magusKaszt(this.magusCharacter.Kaszt).KpSzint;
        },
        kpLeft() {
            return this.magusCharacter.KpLeft;
        },
        kpPrecentLeft() {
            return this.magusCharacter.KpPrecentLeft;
        },
        charactersPrecentSkills() {
            return this.magusCharacter.szazalekosKepzetsegek;
        },
        characterSkills() {
            let skillSet = [];
            //fegyverhasznalat af
            if (this.magusCharacter.FegyverhasznalatAlap.lenght > 0) {
                
            }


            return skillSet;
        },
    },
    methods: {
        ...mapMutations('currentCharacter', {
            
        }),
        ...mapActions('currentCharacter', {
                save: 'save'
        }),
        sumSkillPrecent(prec) {
            return this.ugyessegModosito + prec;
        }
    },
}
</script>