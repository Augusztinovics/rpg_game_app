<template>
    <div>
        <nav>
            <div class="nav nav-tabs" id="nav-tab" role="tablist">
                <button class="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-af" type="button" role="tab" aria-controls="nav-af" aria-selected="true">Alapfokú képzetség tanulása</button>
                <button class="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-mf" type="button" role="tab" aria-controls="nav-mf" aria-selected="false">Mesterfokre fejlesztés</button>
            </div>
        </nav>
        <div class="tab-content" id="nav-tabContent">
            <!-- uj alapfoku kepzetseg tanulasa tab -->
            <div class="tab-pane fade show active" id="nav-af" role="tabpanel" aria-labelledby="nav-af-tab">
                <div class="accordion" id="accordionPanelsStayOpenExample">
                    <div v-for="skil in availablleSkills" :key="skil.id" class="accordion-item">
                        <h2 class="accordion-header" :id="skil.id + '-heading'">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" :data-bs-target="'#' + skil.id" aria-expanded="false" :aria-controls="skil.id">
                                {{ skil.name }}
                            </button>
                        </h2>
                        <div :id="skil.id" class="accordion-collapse collapse" :aria-labelledby="skil.id + '-heading'">
                            <div class="accordion-body">
                                <p><b>Leirás:</b></p>
                                <p>{{ skil.description }}</p>
                                <p><b>Af </b>Kp: {{skil.KpAf}}</p>
                                <p>{{ skil.Af }}</p>
                                <p><b>Mf </b>Kp: {{skil.KpMf}}</p>
                                <p>{{ skil.Mf }}</p>
                                <!-- a kulonbozo kepzetsegek hozzaadasa -->
                                <div v-if="skil.id == 'FEGYVER_HASZNALAT'">
                                   <div class="card bg-success text-white text-center">
                                        <div class="card-body">
                                            <p class="h3">Új fegyver alapfokú ismeretének elsajátitása {{ skil.KpAf }} KP-ért</p>
                                            <select class="form-select form-select-lg mb-3" aria-label="weapon-select">
                                                <option selected value="" disabled>Választj fegyvert</option>
                                                <option v-for="weapon in availableWeapons" :key="weapon.id" :value="weapon.id">{{ weapon.name }}</option>
                                                <option v-for="ranged in availableRangedWeapons" :key="ranged.id" :value="ranged.id">{{ ranged.name }}</option>
                                            </select>
                                            <p><button class="btn btn-primary btn-lg">Megtanul</button></p>
                                        </div>
                                    </div>
                                </div>
                                <div v-else-if="skil.id == 'FEGYVER_DOBAS'">
                                    <div class="card bg-success text-white text-center">
                                        <div class="card-body">
                                            <p class="h3">Új fegyverdobás alapfokú ismeretének elsajátitása {{ skil.KpAf }} KP-ért</p>
                                            <select class="form-select form-select-lg mb-3" aria-label="weapon-select">
                                                <option selected value="" disabled>Választj fegyvert</option>
                                                <option v-for="weapon in availableWeapons" :key="weapon.id" :value="weapon.id">{{ weapon.name }}</option>
                                            </select>
                                            <p><button class="btn btn-primary btn-lg">Megtanul</button></p>
                                        </div>
                                    </div>
                                </div>
                                <div v-else-if="skil.id == 'NYELVISMERET'">
                                   <div class="card bg-success text-white text-center">
                                        <div class="card-body">
                                            <p class="h3">Új nyelv tanulása {{ skil.KpAf }} KP-ért</p>
                                            <input class="form-control form-control-lg" type="text" placeholder="ird be a megtanulni kivánt nyelvet" aria-label="language input">
                                            <p><button class="btn btn-primary btn-lg mt-2">Megtanul</button></p>
                                        </div>
                                    </div>
                                </div>
                                <div v-else-if="skil.id == 'SZAKMA'">
                                    <div class="card bg-success text-white text-center">
                                        <div class="card-body">
                                            <p class="h3">Új szakma tanulása {{ skil.KpAf }} KP-ért</p>
                                            <input class="form-control form-control-lg" type="text" placeholder="ird be a megtanulni kivánt szakmát" aria-label="skill input">
                                            <p><button class="btn btn-primary btn-lg mt-2">Megtanul</button></p>
                                        </div>
                                    </div>
                                </div>
                                <div v-else>
                                    <div class="card bg-success text-white text-center">
                                        <div class="card-body">
                                            <p class="h3">{{ skil.name }} elsajátitása {{ skil.KpAf }} KP-ért</p>
                                            <p><button class="btn btn-primary btn-lg">Megtanul</button></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- alapfoku kepzetseg mesterfokura fejlesztese tab -->
            <div class="tab-pane fade" id="nav-mf" role="tabpanel" aria-labelledby="nav-mf-tab">

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
        ...mapGetters('magusSkills', {
            skills: 'skills',
        }),
        ...mapGetters('magusWeapons', {
            weapons: 'weapons',
            rangedWeapons: 'rangedWeapons',
        }),
        kpLeft() {
            return this.magusCharacter.KpLeft;
        },
        learnedWeaponsList() {
            return this.magusCharacter.FegyverhasznalatAlap;
        },
        learnedSkills() {
            return this.magusCharacter.LearnedSkills.af;
        },
        availablleSkills() {
            return this.skills.filter(s => !this.learnedSkills.includes(s.id) && s.KpAf <= this.kpLeft);
        },
        availableWeapons() {
            return this.weapons.filter(w => !this.learnedWeaponsList.includes(w.id));
        },
        availableRangedWeapons() {
            return this.rangedWeapons.filter(r => !this.learnedWeaponsList.includes(r.id));
        },
    },
    methods: {
        ...mapMutations('currentCharacter', {
            updateKpLeftDown: 'updateKpLeftDown',
        }),
        ...mapActions('currentCharacter', {
                save: 'save'
        }),
    },
}
</script>