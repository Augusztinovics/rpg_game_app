<template>
    <div class="container-fluid">
        <p><b>Tulajdonságok:</b></p>
        <p>ERŐ: {{ kaszt.ERO.name}}</p>
        <p>GYORSASÁG: {{ kaszt.GYORS.name}}</p>
        <p>ÜGYESSÉG: {{ kaszt.UGY.name}}</p>
        <p>ÁLLÓKÉPESSÉG: {{ kaszt.ALLO.name}}</p>
        <p>EGÉSZSÉG: {{ kaszt.EG.name}}</p>
        <p>SZÉPSÉG: {{ kaszt.SZEP.name}}</p>
        <p>INTELIGENCIA: {{ kaszt.INT.name}}</p>
        <p>AKARATERŐ: {{ kaszt.AK.name}}</p>
        <p>ASZTRÁL: {{ kaszt.ASZT.name}}</p>
        <p><b>Leirás</b></p>
        <p v-for="des, index in kaszt.description" :key="index">{{ des }}</p>
       <p><b>Harcérték</b></p>
       <p>{{ kaszt.harcertek }}</p>
       <p><b>Életerő és Fájdalomtűrés</b></p>
       <p>{{ kaszt.eletero }}</p>
       <p><b>Képzetségek</b></p>
       <p>{{ kaszt.kepzetsegek }}</p>
       <!-- Ide kell meg felsorolni a kepzetsegeket + Tovabbi szinteken megkapandokat -->
       <p><b>Képzetségek első szinten:</b></p>
       <p v-for="skillFirstLevel, index in characterSkills(kaszt.skillsFirstLevel)" :key="'FL' + index">{{ skillFirstLevel }}</p>
       <p><b>Képzetségek további szinteken:</b></p>
       <div v-for="skillsAther, key in kaszt.skillsOtherLevel" :key="'TSZ' + key">
            <p><b>TSZ: {{ key }}</b></p>
            <p v-for="skillLevels, index in characterSkills(skillsAther)" :key="key + index">{{ skillLevels }}</p>
       </div>
       <p><b>Tapasztalati Szint</b></p>
       <p>{{ kaszt.tapasztalat }}</p>
       <div class="row">
           <div class="col text-center">
               <p><b>Tapasztalati pont</b></p>
               <p><span>{{ kaszt.TpSzint[0][0] }}</span> - <span>{{ kaszt.TpSzint[0][1] }}</span></p>
               <p><span>{{ kaszt.TpSzint[1][0] }}</span> - <span>{{ kaszt.TpSzint[1][1] }}</span></p>
               <p><span>{{ kaszt.TpSzint[2][0] }}</span> - <span>{{ kaszt.TpSzint[2][1] }}</span></p>
               <p><span>{{ kaszt.TpSzint[3][0] }}</span> - <span>{{ kaszt.TpSzint[3][1] }}</span></p>
               <p><span>{{ kaszt.TpSzint[4][0] }}</span> - <span>{{ kaszt.TpSzint[4][1] }}</span></p>
               <p><span>{{ kaszt.TpSzint[5][0] }}</span> - <span>{{ kaszt.TpSzint[5][1] }}</span></p>
               <p><span>{{ kaszt.TpSzint[6][0] }}</span> - <span>{{ kaszt.TpSzint[6][1] }}</span></p>
               <p><span>{{ kaszt.TpSzint[7][0] }}</span> - <span>{{ kaszt.TpSzint[7][1] }}</span></p>
               <p><span>{{ kaszt.TpSzint[8][0] }}</span> - <span>{{ kaszt.TpSzint[8][1] }}</span></p>
               <p><span>{{ kaszt.TpSzint[9][0] }}</span> - <span>{{ kaszt.TpSzint[9][1] }}</span></p>
               <p><span>{{ kaszt.TpSzint[10][0] }}</span> - <span>{{ kaszt.TpSzint[10][1] }}</span></p>
               <p><span>{{ kaszt.TpSzint[11][0] }}</span> - <span>{{ kaszt.TpSzint[11][1] }}</span></p>
           </div>
            <div class="col text-center">
                <p><b>Tapasztalati szint</b></p>
                <p>1.</p>
                <p>2.</p>
                <p>3.</p>
                <p>4.</p>
                <p>5.</p>
                <p>6.</p>
                <p>7.</p>
                <p>8.</p>
                <p>9.</p>
                <p>10.</p>
                <p>11.</p>
                <p>12.</p>
           </div>
       </div>
       <p>Minden további szinthez +{{ kaszt.TpSzint[12] }} Tp kell</p>
       <p><b>{{kaszt.name}} Fegyvertára</b></p>
       <p>{{ kaszt.fegyvertar }}</p>
    </div>

</template>

<script>
    import { mapGetters } from 'vuex';
    export default {
         props: {
            kaszt: Object,
        },
        computed: {
            ...mapGetters('magusSkills', {
                skill: 'skill',
                skillPrecent: 'skillPrecent',
            }),
        },
        methods: {
             characterSkills(set) {
                let skillSet = [];
                //fegyverhasznalat af
                if (set.FegyverhasznalatAlap > 0) {
                    let afWeaponSkill = set.FegyverhasznalatAlap + 'Fegyverhasználat Af' ;
                    skillSet.push(afWeaponSkill);
                      
                }
                //fegyverhasznalat mf
                if (set.FegyverhasznalatMester > 0) {
                    let mfWeaponSkill = set.FegyverhasznalatMester + 'Fegyverhasználat Mf' ;
                    skillSet.push(mfWeaponSkill);
                }
                //fegyverdobas af
                if (set.FegyverdobasAlap > 0) {
                    let afWeapondSkill = set.FegyverdobasAlap + 'Fegyver dobása Af' ;
                    skillSet.push(afWeapondSkill);
                }
                //fegyverdobas mf
                if (set.FegyverdobasMester > 0) {
                    let mfWeapondSkill = set.FegyverdobasMester + 'Fegyver dobása Mf' ;
                    skillSet.push(mfWeapondSkill);
                }
                //nyelv af
                if (set.NyelvismeretAf > 0) {
                    let nyelvSkillAf = set.NyelvismeretAf + 'Nyelvismeret Af'
                    skillSet.push(nyelvSkillAf);
                }
                //nyelv mf
                if (set.NyelvismeretMf > 0) {
                    let nyelvSkillMf = set.NyelvismeretMf + 'Nyelvismeret Mf'
                    skillSet.push(nyelvSkillMf);
                }
                //szakma af
                if (set.SzakmaAf > 0) {
                    let szakmaSkillAf = set.SzakmaAf + 'Szakma Af'
                    skillSet.push(szakmaSkillAf);
                }
                //szakma mf
                if (set.SzakmaMf > 0) {
                    let szakmaSkillMf = set.SzakmaMf + 'Szakma Mf'
                    skillSet.push(szakmaSkillMf);
                }
                //az osszes tobbi af
                if ( set.af.length > 0) {
                   set.af.forEach(currentSkill => {
                        let theSkill = this.skill(currentSkill);
                        if (theSkill) {
                            let skillData =  theSkill.name + ' Af';
                            skillSet.push(skillData);
                        }
                    });
                }
                //az osszes tobbi mf
                if ( set.mf.length > 0) {
                    set.mf.forEach(currentSkill => {
                        let theSkill = this.skill(currentSkill);
                        if (theSkill) {
                            let skillData =  theSkill.name + ' Mf';
                            skillSet.push(skillData);
                        }
                    });
                }
                //szazalekosok
                for (const [key, prec] of Object.entries(set.precent)) {
                    if (prec > 0) {
                        let precSkill = this.skillPrecent(key).name + ': ' + prec + '%';
                        skillSet.push(precSkill);
                    }
                }

                return skillSet;
            },
        },
    }
</script>