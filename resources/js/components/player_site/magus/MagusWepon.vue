<template>
    <div>
        <h4 class="text-center mt-2 pb-3 border-bottom border-secondary">Fegyverek</h4>
        <div class="p-2 m-2 border-bottom border-secondary">
            <h5 class="ms-2 mt-2 pb-3">Kézben tartott fegyverek:</h5>
            <p class="ms-2"><span class="fw-bolder me-2">Jobb kéz: </span>{{ rightHandEquip.name }}</p>
            <p class="ms-2"><span class="fw-bolder me-2">Bal kéz: </span>{{ leftHandEquip.name }}</p>
        </div>
        <div class="mt-3">
            <h5 class="text-center">Közelharci fegyverek</h5>
            <div class="d-grid text-center mb-3">
                <button class="btn btn-success my-3" type="button" data-bs-toggle="modal" data-bs-target="#weaponModal">Fegyver hozzáadása</button>
            </div>
             <table class="table table-striped">
                <thead>
                    <tr>
                        <th>Fegyver</th>
                        <th>Tám/kör</th>
                        <th>KÉ</th>
                        <th>TÉ</th>
                        <th>VÉ</th>
                        <th>Sebzés</th>
                        <th>-</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="fegyver, index in availableWeapon" :key="'W' + index">
                        <td>{{ fegyver.name }}</td>
                        <td>{{ fegyver.TamKor }}</td>
                        <td>{{ fegyver.Ke }}</td>
                        <td>{{ fegyver.Te }}</td>
                        <td>{{ fegyver.Ve }}</td>
                        <td>{{ fegyver.Sp.name }}</td>
                        <td><button class="btn btn-outline-danger btn-sm ms-1" type="button"  @click="removeWeapon(index)">-</button></td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="mt-3">
            <h5 class="text-center">Távolsági fegyverek</h5>
            <div class="d-grid text-center mb-3">
                <button class="btn btn-success my-3" type="button" data-bs-toggle="modal" data-bs-target="#rangedModal">Fegyver hozzáadása</button>
            </div>
             <table class="table table-striped">
                <thead>
                    <tr>
                        <th>Fegyver</th>
                        <th>Tám/kör</th>
                        <th>KÉ</th>
                        <th>CÉ</th>
                        <th>Táv</th>
                        <th>Sebzés</th>
                        <th>-</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="ij, index in availableRangedWeapon" :key="'R' + index">
                        <td>{{ ij.name }}</td>
                        <td>{{ ij.TamKor }}</td>
                        <td>{{ ij.Ke }}</td>
                        <td>{{ ij.Ce }}</td>
                        <td>{{ ij.Tav }} méter</td>
                        <td>{{ ij.Sp.name }}</td>
                        <td><button class="btn btn-outline-danger btn-sm ms-1" type="button" @click="removeRanged(index)">-</button></td>
                    </tr>
                </tbody>
            </table>
        </div>

         <!-- Kozelharci fegyver hozzaadasa modal -->
        <div class="modal fade smooth" id="weaponModal" tabindex="-1" aria-labelledby="weaponModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered modal-lg">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="weaponModalLabel">Közelharci fegyver választása</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                <div class="modal-body">
                    <h4>Közelharci fegyverek</h4>
                    <p>Figyelem, ha vásárolsz fegyvert annak értékét külön le kell vonni a kincseid közül!</p>
                    <div class="d-grid text-center">
                        <div v-for="fegyver, index in weapons" :key="index" class="my-2">
                            <a class="btn btn-outline-dark" href="#endW" @click="selectWeapon(fegyver.id)">
                                <p class="fs-5 fw-bolder">{{ fegyver.name }}</p>
                                <p> {{ fegyver.description }}</p>
                                <p>Tipus: {{ fegyver.Type }}</p>
                                <p>Tám/kör: {{ fegyver.TamKor }}</p>
                                <p>KÉ: {{ fegyver.Ke}}</p>
                                <p>TÉ: {{ fegyver.Te}}</p>
                                <p>VÉ: {{ fegyver.Ve}}</p>
                                <p>Sebzés: {{ fegyver.Sp.name}}</p>
                                <p>Súly: {{ fegyver.weight }}</p>
                                <p>Érték: {{ fegyver.price }}</p>
                            </a>
                            <hr>
                        </div>
                    </div>
                    <div class="text-center bg-info text-black mt-3 border border-primary rounded" id="endW">
                        <h4 class="mt-2">A választás:</h4>
                        <p>{{ selectedWeaponName }}</p>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary"  @click="submitWeapon" data-bs-dismiss="modal">Save changes</button>
                </div>
                </div>
            </div>
        </div>

          <!-- Tavolsagi fegyver hozzaadasa modal -->
        <div class="modal fade smooth" id="rangedModal" tabindex="-1" aria-labelledby="rangedModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered modal-lg">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="rangedModalLabel">Távolsági fegyver választása</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                <div class="modal-body">
                    <h4>Távolsági fegyverek</h4>
                    <p>Figyelem, ha vásárolsz fegyvert annak értékét külön le kell vonni a kincseid közül!</p>
                    <div class="d-grid text-center">
                        <div v-for="ij, index in rangedWeapons" :key="'R' + index" class="my-2">
                            <a class="btn btn-outline-dark" href="#endR" @click="selectRangedWeapon(ij.id)">
                                <p class="fs-5 fw-bolder">{{ ij.name }}</p>
                                <p> {{ ij.description }}</p>
                                <p>Tám/kör: {{ ij.TamKor }}</p>
                                <p>KÉ: {{ ij.Ke}}</p>
                                <p>CÉ: {{ ij.Ce}}</p>
                                <p>Táv: {{ ij.Tav}} méter</p>
                                <p>Sebzés: {{ ij.Sp.name}}</p>
                                <p>Súly: {{ ij.weight }}</p>
                                <p>Érték: {{ ij.price }}</p>
                            </a>
                            <hr>
                        </div>
                    </div>
                    <div class="text-center bg-info text-black mt-3 border border-primary rounded" id="endR">
                        <h4 class="mt-2">A választás:</h4>
                        <p>{{ selectedRangedWeaponName }}</p>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary"  @click="submitRangedWeapon" data-bs-dismiss="modal">Save changes</button>
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
            kozelharci: [],
            tav: [],
            selectedWeaponId: '',
            selectedRangedId: '',
        }
    },
    computed: {
        ...mapGetters('currentCharacter', {
            magusCharacter: 'magusCharacter',
            haveLearnedSkill: 'haveLearnedSkill',
            weaponSkillLevel: 'weaponSkillLevel',
            throwWeaponSkillLevel: 'throwWeaponSkillLevel',
        }),
        ...mapGetters('magusWeapons', {
            weapons: 'weapons',
            weapon: 'weapon',
            rangedWeapons: 'rangedWeapons',
            rangedWeapon: 'rangedWeapon',
        }),
         ...mapGetters('magusShields', {
            shield: 'shield',
        }),
        haveLeftHandEquip() {
            if (this.magusCharacter.LeftHand == '') {
                return false;
            } else {
                return true;
            }
        },
        haveRightHandEquip() {
            if (this.magusCharacter.RightHand == '') {
                return false;
            } else {
                return true;
            }
        },
        leftHandEquip() {
            if (this.haveLeftHandEquip) {
                let leftShield = this.shield(this.magusCharacter.LeftHand);
                let leftWeapon = this.weapon(this.magusCharacter.LeftHand);
                let leftRanged = this.rangedWeapon(this.magusCharacter.LeftHand);
                if (leftShield) {
                    return leftShield;
                } else if (leftWeapon) {
                    return leftWeapon;                
                } else if (leftRanged) {
                    return leftRanged;
                } else {
                    return { name:'semmi', Cat: 'X'};
                }
            } else {
                return { name:'semmi', Cat: 'X'};
            }
        },
        rightHandEquip() {
            if (this.haveRightHandEquip) {
                let rightShield = this.shield(this.magusCharacter.RightHand);
                let rightWeapon = this.weapon(this.magusCharacter.RightHand);
                let rightRanged = this.rangedWeapon(this.magusCharacter.RightHand);
                if (rightShield) {
                    return rightShield;
                } else if (rightWeapon) {
                    return rightWeapon;                
                } else if (rightRanged) {
                    return rightRanged;
                } else {
                    return {name: 'semmi'};
                }
            } else {
                return { name: 'semmi' };
            }
        },
        availableWeapon() {
            let avWeapons = [];
            this.magusCharacter.FegyverekKozelharci.forEach((item) => {
                let elem = this.weapon(item);
                avWeapons.push(elem);
            })
            return avWeapons;
        },
        availableRangedWeapon() {
            let rangWeapons = [];
            this.magusCharacter.FegyverekTavolsagi.forEach((item) => {
                let elem = this.rangedWeapon(item);
                rangWeapons.push(elem);
            })
            return rangWeapons;
        },
        selectedWeaponName() {
            if (this.selectedWeaponId == '') {
                return '';
            } else {
                return this.weapon(this.selectedWeaponId).name;
            }
        },
        selectedRangedWeaponName() {
            if (this.selectedRangedId == '') {
                return '';
            } else {
                return this.rangedWeapon(this.selectedRangedId).name;
            }
        },
        haveTwoHandedFightSkill() {
            return this.haveLearnedSkill('KETKEZES_HARC');
        },
        LeftHandId() {
            return this.magusCharacter.LeftHand;
        },
        rightHandId() {
            return this.magusCharacter.RightHand;
        }
    },
    methods: {
        ...mapMutations('currentCharacter', {
            updateKeMod: 'updateKeMod',
            updateTeMod: 'updateTeMod',
            updateVeMod: 'updateVeMod',
            updateCeMod: 'updateCeMod',
            updateWeapons: 'updateWeapons',
            updateRangedWeapons: 'updateRangedWeapons',
            updateRightHand: 'updateRightHand',
            updateLeftHand: 'updateLeftHand',
        }),
        ...mapActions('currentCharacter', {
            save: 'save'
        }),
        removeWeapon(index) {
            if (this.magusCharacter.LeftHand == this.kozelharci[index] || this.magusCharacter.RightHand == this.kozelharci[index]) {

            } else {
                this.kozelharci.splice(index, 1);
                this.updateWeapons(this.kozelharci);
                this.save();
            }    
        },
        removeRanged(index) {
            if (this.magusCharacter.LeftHand == this.tav[index] || this.magusCharacter.RightHand == this.tav[index]) {

            } else {
                this.tav.splice(index, 1);
                this.updateRangedWeapons(this.tav);
                this.save();
            }    
        },
        selectWeapon(id) {
            this.selectedWeaponId = id;
        },
        selectRangedWeapon(id) {
            this.selectedRangedId = id;
        },
        submitWeapon() {
            if (this.selectedWeaponId != '') {
                this.kozelharci.push(this.selectedWeaponId);
                this.updateWeapons(this.kozelharci);
                this.selectedWeaponId = '';
                this.save();
            }
        },
        submitRangedWeapon() {
            if (this.selectedRangedId != '') {
                this.tav.push(this.selectedRangedId);
                this.updateRangedWeapons(this.tav);
                this.selectedRangedId = '';
                this.save();
            }
        },
        unequipLeft() {
            if (this.haveLeftHandEquip) {
                if (this.leftHandEquip.Cat == 'S') {
                    this.$root.$emit('emptyLeftShield');
                    return;
                }
                if (this.leftHandEquip.Cat != 'X') {
                    if (this.leftHandEquip.Cat == 'W') {
                        //two handed weapon, need emty both hand
                        if (this.leftHandEquip.Hand == 2) {
                            let skillLevel = this.weaponSkillLevel(this.LeftHandId);
                            if (skillLevel == 'Na') {
                                this.updateKeMod((this.leftHandEquip.Ke * -1) + 10);
                                this.updateTeMod((this.leftHandEquip.Te * -1) + 25);
                                this.updateVeMod((this.leftHandEquip.Ve * -1) + 20);
                                this.updateLeftHand('');
                                this.updateRightHand('');
                                this.save();
                                return;
                            }
                            if (skillLevel == 'Af') {
                                this.updateKeMod(this.leftHandEquip.Ke * -1);
                                this.updateTeMod(this.leftHandEquip.Te * -1);
                                this.updateVeMod(this.leftHandEquip.Ve * -1);
                                this.updateLeftHand('');
                                this.updateRightHand('');
                                this.save();
                                return;
                            }
                             if (skillLevel == 'Mf') {
                                this.updateKeMod((this.leftHandEquip.Ke * -1) - 10);
                                this.updateTeMod((this.leftHandEquip.Te * -1) - 25);
                                this.updateVeMod((this.leftHandEquip.Ve * -1) - 20);
                                this.updateLeftHand('');
                                this.updateRightHand('');
                                this.save();
                                return;
                            }
                        } else {
                            //one handed weapon, just left hand empty
                            let weponSkillLevel = this.weaponSkillLevel(this.LeftHandId);
                            if (this.haveTwoHandedFightSkill.have) {
                                //two weapon fighting skill jus Ve added
                                if (this.haveTwoHandedFightSkill.level == 'Af') {
                                    if (weponSkillLevel == 'Na') {
                                        this.updateVeMod((this.leftHandEquip.Ve * -1) + 20);
                                        this.updateLeftHand('');
                                        this.save();
                                        return;
                                    }
                                    if (weponSkillLevel == 'Af') {
                                        this.updateVeMod(this.leftHandEquip.Ve * -1);
                                        this.updateLeftHand('');
                                        this.save();
                                        return;
                                    }
                                    if (weponSkillLevel == 'Mf') {
                                        this.updateVeMod((this.leftHandEquip.Ve * -1) - 20);
                                        this.updateLeftHand('');
                                        this.save();
                                        return;
                                    }
                                } else {
                                    if (weponSkillLevel == 'Na') {
                                        this.updateKeMod((this.leftHandEquip.Ke * -1) + 10);
                                        this.updateTeMod((this.leftHandEquip.Te * -1) + 25);
                                        this.updateVeMod((this.leftHandEquip.Ve * -1) + 20);
                                        this.updateLeftHand('');
                                        this.save();
                                        return;
                                    }
                                    if (weponSkillLevel == 'Af') {
                                        this.updateKeMod(this.leftHandEquip.Ke * -1);
                                        this.updateTeMod(this.leftHandEquip.Te * -1);
                                        this.updateVeMod(this.leftHandEquip.Ve * -1);
                                        this.updateLeftHand('');
                                        this.save();
                                        return;
                                    }
                                    if (weponSkillLevel == 'Mf') {
                                        this.updateKeMod((this.leftHandEquip.Ke * -1) - 10);
                                        this.updateTeMod((this.leftHandEquip.Te * -1) - 25);
                                        this.updateVeMod((this.leftHandEquip.Ve * -1) - 20);
                                        this.updateLeftHand('');
                                        this.save();
                                        return;
                                    }
                                }
                            } else {
                                //no two weapon fighting skill, the caracter just holded the weapon
                                this.updateLeftHand('');
                                this.save();
                                return;
                            }
                        }
                    }
                    if (this.leftHandEquip.Cat == 'R') {
                        let rangedSkillLevel = this.weaponSkillLevel(this.LeftHandId);
                        if (rangedSkillLevel == 'Na') {
                            this.updateKeMod((this.leftHandEquip.Ke * -1) + 10);
                            this.updateCeMod((this.leftHandEquip.Ce * -1) + 25);
                            this.updateLeftHand('');
                            this.updateRightHand('');
                            this.save();
                            return;
                        }
                        if (rangedSkillLevel == 'Af') {
                            this.updateKeMod(this.leftHandEquip.Ke * -1);
                            this.updateCeMod(this.leftHandEquip.Ce * -1);
                            this.updateLeftHand('');
                            this.updateRightHand('');
                            this.save();
                            return;
                        }
                        if (rangedSkillLevel == 'Mf') {
                            this.updateKeMod((this.leftHandEquip.Ke * -1) - 10);
                            this.updateCeMod((this.leftHandEquip.Ce * -1) - 25);
                            this.updateLeftHand('');
                            this.updateRightHand('');
                            this.save();
                            return;
                        }
                    }
                }
                
            }
        },
         unequipRight() {
            if (this.haveRightHandEquip) {
                if (this.leftHandEquip.Cat != 'X') {
                    if (this.leftHandEquip.Cat == 'W') {
                        let skillLevel = this.weaponSkillLevel(this.LeftHandId);
                        //two handed weapon, need emty both hand
                        if (this.leftHandEquip.Hand == 2) { 
                            if (skillLevel == 'Na') {
                                this.updateKeMod((this.leftHandEquip.Ke * -1) + 10);
                                this.updateTeMod((this.leftHandEquip.Te * -1) + 25);
                                this.updateVeMod((this.leftHandEquip.Ve * -1) + 20);
                                this.updateLeftHand('');
                                this.updateRightHand('');
                                this.save();
                                return;
                            }
                            if (skillLevel == 'Af') {
                                this.updateKeMod(this.leftHandEquip.Ke * -1);
                                this.updateTeMod(this.leftHandEquip.Te * -1);
                                this.updateVeMod(this.leftHandEquip.Ve * -1);
                                this.updateLeftHand('');
                                this.updateRightHand('');
                                this.save();
                                return;
                            }
                             if (skillLevel == 'Mf') {
                                this.updateKeMod((this.leftHandEquip.Ke * -1) - 10);
                                this.updateTeMod((this.leftHandEquip.Te * -1) - 25);
                                this.updateVeMod((this.leftHandEquip.Ve * -1) - 20);
                                this.updateLeftHand('');
                                this.updateRightHand('');
                                this.save();
                                return;
                            }
                        } else {
                           if (skillLevel == 'Na') {
                                this.updateKeMod((this.leftHandEquip.Ke * -1) + 10);
                                this.updateTeMod((this.leftHandEquip.Te * -1) + 25);
                                this.updateVeMod((this.leftHandEquip.Ve * -1) + 20);
                                this.updateRightHand('');
                                this.save();
                                return;
                            }
                            if (skillLevel == 'Af') {
                                this.updateKeMod(this.leftHandEquip.Ke * -1);
                                this.updateTeMod(this.leftHandEquip.Te * -1);
                                this.updateVeMod(this.leftHandEquip.Ve * -1);
                                this.updateRightHand('');
                                this.save();
                                return;
                            }
                             if (skillLevel == 'Mf') {
                                this.updateKeMod((this.leftHandEquip.Ke * -1) - 10);
                                this.updateTeMod((this.leftHandEquip.Te * -1) - 25);
                                this.updateVeMod((this.leftHandEquip.Ve * -1) - 20);
                                this.updateRightHand('');
                                this.save();
                                return;
                            }
                        }
                    }
                    if (this.leftHandEquip.Cat == 'R') {
                        let rangedSkillLevel = this.weaponSkillLevel(this.LeftHandId);
                        if (rangedSkillLevel == 'Na') {
                            this.updateKeMod((this.leftHandEquip.Ke * -1) + 10);
                            this.updateCeMod((this.leftHandEquip.Ce * -1) + 25);
                            this.updateLeftHand('');
                            this.updateRightHand('');
                            this.save();
                            return;
                        }
                        if (rangedSkillLevel == 'Af') {
                            this.updateKeMod(this.leftHandEquip.Ke * -1);
                            this.updateCeMod(this.leftHandEquip.Ce * -1);
                            this.updateLeftHand('');
                            this.updateRightHand('');
                            this.save();
                            return;
                        }
                        if (rangedSkillLevel == 'Mf') {
                            this.updateKeMod((this.leftHandEquip.Ke * -1) - 10);
                            this.updateCeMod((this.leftHandEquip.Ce * -1) - 25);
                            this.updateLeftHand('');
                            this.updateRightHand('');
                            this.save();
                            return;
                        }
                    }
                }
                
            }
        }
    },
    mounted() {
        this.kozelharci = this.magusCharacter.FegyverekKozelharci;
        this.tav = this.magusCharacter.FegyverekTavolsagi;
    },
}
</script>

<style scoped>
    .smooth{
        scroll-behavior: smooth;
    }
</style>