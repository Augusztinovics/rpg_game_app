<template>
    <div>
        <div class="d-grid text-center mb-3">
            <button class="btn btn-success ms-2 bg-green-leather costum-btn" type="button" data-bs-toggle="modal" data-bs-target="#tpModal">Tapasztalati Pontok Növelése</button>
        </div>
        <h5>Tapasztalati pontok</h5>
        <p class="border border-secondary rounded m-4 p-3">{{ currentTp }}</p>
        <h5>Pontok a következő szinthez</h5>
        <p class="border border-secondary rounded m-4 p-3">{{ tpNextLevel }}</p>

        <!-- Tp input modal -->
        <div class="modal fade" id="tpModal" tabindex="-1" aria-labelledby="tpModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="tpModalLabel">Tapasztalati Pontok hozzáadása</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                    <div class="modal-body">
                        <label for="tpInput">Kapott Tapasztalati Pontok:</label>
                        <input type="number" class="form-control" id="tpInput"  v-model="inputTp">
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary bg-blue-leather costum-btn" data-bs-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary bg-green-leather costum-btn" @click="addTp" data-bs-dismiss="modal">Save changes</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { mapGetters, mapMutations, mapActions } from 'vuex';
export default {
    data() {
        return {
            inputTp: 0,
            tpNextLevel: 0,
        }
    },
    computed: {
        ...mapGetters('currentCharacter', {
            magusCharacter: 'magusCharacter',
        }),
        ...mapGetters('magusClasses', {
            magusKaszt: 'magusClass'
        }),
        Kaszt() {
            return this.magusKaszt(this.magusCharacter.Kaszt);
        },
        szint() {
            return this.magusCharacter.Szint;
        },
        currentTp() {
            return this.magusCharacter.Tp;
        },
        calculateNextLevelTp() {
            if (this.szint < 12) {
                return this.Kaszt.TpSzint[this.szint][0];
            } else {
                let overLevel = this.szint - 11;
                if (overLevel > 0) {
                    if (overLevel == 1) {
                        return this.Kaszt.TpSzint[11][1] + 1;
                    } else {
                        let baseMax = this.Kaszt.TpSzint[11][1];
                        let overMax = this.Kaszt.TpSzint[12];
                        return (baseMax + (overMax * (overLevel - 1))) + 1;
                    }
                }
            }
        },
    },
    methods: {
        ...mapMutations('currentCharacter', {
            updateSkillsAf: 'updateSkillsAf',
            updateSkillsMf: 'updateSkillsMf',
            updatePszi: 'updatePszi',
            updateMaxMp: 'updateMaxMp',
            updateTp: 'updateTp',
            levelUp: 'levelUp',
        }),
        ...mapActions('currentCharacter', {
            save: 'save'
        }),
        addTp() {
            if (parseInt(this.inputTp) > 0) {
                this.updateTp(parseInt(this.inputTp));
                this.inputTp = 0;
                this.save();
                this.checkLevelUp();
            }
        },
        checkLevelUp() {
            if (this.currentTp >= this.tpNextLevel) {
                this.processLevelUp();
            }
        },
        processLevelUp() {
            let fpincrese = Math.floor(Math.random() * (this.Kaszt.FpSzint.sp[1] - this.Kaszt.FpSzint.sp[0] + 1) ) + this.Kaszt.FpSzint.sp[0];
            let manaincrese = 0;
            if (this.Kaszt.mpLevel.range[1] > 0 && this.Kaszt.id != 'BARD') {
                if (this.Kaszt.mpLevel.range[0] == this.Kaszt.mpLevel.range[1]) {
                    manaincrese = this.Kaszt.mpLevel.range[0];
                } else {
                    manaincrese = Math.floor(Math.random() * (this.Kaszt.mpLevel.range[1] - this.Kaszt.mpLevel.range[0] + 1) ) + this.Kaszt.mpLevel.range[0];
                }
            } else {
                if (this.Kaszt.id == 'BARD') {
                    if (this.magusCharacter.INT > 10) {
                        manaincrese = this.magusCharacter.INT - 10;
                    }
                }
            }
            let nextLevel = this.szint + 1;
            let fegyverAfIn = 0;
            let fegyverMfIn = 0;
            let fegyverDAfIn = 0;
            let fegyverDMfIn = 0;
            let nyelvAfIn = 0;
            let nyelvMfIn = 0;
            let szakmaAfIn = 0;
            let szakmaMfIn = 0;
            if (this.Kaszt.skillsOtherLevel[nextLevel]) {
                let skillSet = this.Kaszt.skillsOtherLevel[nextLevel];
                fegyverAfIn = skillSet.FegyverhasznalatAlap;
                fegyverMfIn = skillSet.FegyverhasznalatMester;
                fegyverDAfIn = skillSet.FegyverdobasAlap;
                fegyverDMfIn = skillSet.FegyverdobasMester;
                nyelvAfIn = skillSet.NyelvismeretAf;
                nyelvMfIn = skillSet.NyelvismeretMf;
                szakmaAfIn = skillSet.SzakmaAf;
                szakmaMfIn = skillSet.SzakmaMf;
                skillSet.af.forEach(element => {
                    this.addAfSkill(element);
                });
                skillSet.mf.forEach(element => {
                    this.addMfSkill(element);
                });
            }
            let levelData = {
                level: nextLevel,
                fp: fpincrese,
                hm: this.Kaszt.HmSzint,
                kp: this.Kaszt.KpSzint,
                kpPrec: this.Kaszt.KpPrecent,
                fegyverAf: fegyverAfIn,
                fegyverMf: fegyverMfIn,
                fegyverDAf: fegyverDAfIn,
                fegyverDMf: fegyverDMfIn,
                nyelvAf: nyelvAfIn,
                nyelvMf: nyelvMfIn,
                szakmaAf: szakmaAfIn,
                szakmaMf: szakmaMfIn,
                mana: manaincrese,
            };
            this.levelUp(levelData);
            this.save();
            this.tpNextLevel = this.calculateNextLevelTp;
            this.checkLevelUp();
        },
        addAfSkill(id) {
            let learnedSkillList = this.magusCharacter.LearnedSkills.af;
            learnedSkillList.push(id);
            this.updateSkillsAf(learnedSkillList);
            if (id == 'PSZI') {
                let psiSkill = this.magusCharacter.Pszi;
                psiSkill.learned = true;
                psiSkill.atlevel = this.magusCharacter.Szint;
                psiSkill.level = 'Af';
                psiSkill.school = 'Pyarroni';
                psiSkill.maxPszi += 4;
                psiSkill.psziPointLevel = 3;
                psiSkill.currentPszi += 0;
                this.updatePszi(psiSkill); 
            }
        },
        addMfSkill(id) {
            let learnedSkillList = this.magusCharacter.LearnedSkills.mf;
            learnedSkillList.push(id);
            this.updateSkillsMf(learnedSkillList);
            if (id == 'PSZI') {
                let psiSkill = this.magusCharacter.Pszi;
                psiSkill.learned = true;
                psiSkill.atlevel = this.magusCharacter.Szint;
                psiSkill.level = 'Mf';
                psiSkill.school = 'Pyarroni';
                psiSkill.maxPszi += 5;
                psiSkill.psziPointLevel = 4;
                psiSkill.currentPszi += 0;
                this.updatePszi(psiSkill); 
            }
        },
    },
    mounted: function() {
        this.tpNextLevel = this.calculateNextLevelTp;
    },
}
</script>