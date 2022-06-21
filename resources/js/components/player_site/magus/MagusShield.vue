<template>
    <div>
        <h4 class="text-center mt-2 pb-3 border-bottom border-secondary">Használható pajzs</h4>
        <div class="d-grid text-center mb-3">
            <button class="btn btn-success my-3" type="button" @click="unequip"  data-bs-toggle="modal" data-bs-target="#shieldModal">Pajzs módositása</button>
        </div>
        <div v-if="haveShield" class=" border-top border-secondary my-2">
            <p><span class="fs-5 fw-bolder me-2">{{ currentShield.name }}</span> <button class="btn btn-outline-success btn-sm ms-2" type="button"  data-bs-toggle="modal" data-bs-target="#shieldInfoModal">i</button></p>
            <p><span class="fw-bolder me-2">Állapot: </span><span>{{ haveShieldEquipedText }}</span><button class="btn btn-outline-success btn-sm ms-2" @click="equipUnequip">Változtat</button></p>
            <p><span class="fw-bolder me-2">Használat szintje: </span>{{ haveShieldSkill.level }}</p>
            <p><span class="fw-bolder me-2">Esetleges támadások száma: </span>{{ currentShield.TamKor }}</p>
            <p class="fs-5"><span class="fw-bolder me-2">Sebzés: </span><span>{{ currentShield.Sp.name }}</span></p>
            <p class="fs-5"><span class="fw-bolder me-2">MGT: </span><span>{{ currentShield.Mgt }}</span></p>
            <p class="fs-5"><span class="fw-bolder me-2">VÉ: </span><span>{{ currentShield.Ve }}</span></p>
        </div>
        <div v-else class=" border-top border-secondary my-2">
            <p class="p-2">A karakter nem rendelkezik pajzsal</p>
        </div>

        <!-- Pajzs modositas modal -->
        <div class="modal fade" id="shieldModal" tabindex="-1" aria-labelledby="shieldModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="shieldModalLabel">Pajzs választása</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                <div class="modal-body">
                    <div v-if="haveShield">
                        <h4>Jelenleg meglévő pajzs:</h4>
                        <p><span class="fs-5 fw-bolder me-2">{{ currentShield.name }}</span> <button class="btn btn-outline-success btn-sm ms-2" type="button"  data-bs-toggle="modal" data-bs-target="#shieldInfoModal">i</button></p>
                    </div>
                    <div v-else>
                    </div>
                    <h4>Pajzs választási lehetőségek</h4>
                    <p>Figyelem, ha vásárolsz pajzsot annak értékét külön le kell vonni a kincseid közül!</p>
                    <div class="d-grid text-center">
                        <div class="my-2">
                            <button class="btn btn-outline-dark" @click="selectShield('')">
                                Nem akarok pajzsot
                            </button>
                        </div>
                        <div v-for="pajzs, index in shields" :key="index" class="my-2">
                            <button class="btn btn-outline-dark" @click="selectShield(pajzs.id)">
                                <p class="fs-5 fw-bolder">{{ pajzs.name }}</p>
                                <p> {{ pajzs.description }}</p>
                                <p>MGT: {{ pajzs.Mgt }}</p>
                                <p>VÉ: {{ pajzs.Ve}}</p>
                                <p>Súly: {{ pajzs.weight }}</p>
                                <p>Érték: {{ pajzs.price }}</p>
                            </button>
                        </div>
                    </div>
                    <div class="text-center bg-info text-black mt-3 border border-primary rounded">
                        <h4 class="mt-2">A választás:</h4>
                        <p>{{ selectedShieldName }}</p>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary"  @click="submitShield" data-bs-dismiss="modal">Save changes</button>
                </div>
                </div>
            </div>
        </div>

        <!-- Pajzs info modal -->
         <div class="modal fade" id="shieldInfoModal" tabindex="-1" aria-labelledby="shieldInfoModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="shieldInfoModalLabel">{{ currentShield.name }}</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <p> {{ currentShield.description }}</p>
                        <p><span class="fw-bolder me-2">Esetleges támadások száma: </span>{{ currentShield.TamKor }}</p>
                        <p class="fs-5"><span class="fw-bolder me-2">Sebzés: </span><span>{{ currentShield.Sp.name }}</span></p>
                        <p class="fs-5"><span class="fw-bolder me-2">MGT: </span><span>{{ currentShield.Mgt }}</span></p>
                        <p class="fs-5"><span class="fw-bolder me-2">VÉ: </span><span>{{ currentShield.Ve }}</span></p>
                        <p class="fs-5"><span class="fw-bolder me-2">Súlya: </span><span>{{ currentShield.weight }}</span></p>
                        <p class="fs-5"><span class="fw-bolder me-2">Értéke: </span><span>{{ currentShield.price }}</span></p>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
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
                selectedShieldId: '',
            }
        },
        computed: {
            ...mapGetters('currentCharacter', {
                magusCharacter: 'magusCharacter',
                haveLearnedSkill: 'haveLearnedSkill',
            }),
            ...mapGetters('magusShields', {
                shields: 'shields',
                shield: 'shield',
            }),
            haveShield() {
                return this.magusCharacter.Pajzs.id == '' ? false : true;
            },
            currentShield() {
                return this.shield(this.magusCharacter.Pajzs.id);
            },
            haveShieldSkill() {
                return this.haveLearnedSkill('PAJZS_HASZNALAT');
            },
            haveShieldEquiped() {
                return this.magusCharacter.Pajzs.equipped;
            },
            haveShieldEquipedText() {
                return this.haveShieldEquiped ? ' Harcra kész ' : ' Nincs kézbe véve ';
            },
            selectedShieldName() {
                if (this.selectedShieldId == '') {
                    return 'Nem kell pajzs';
                } else {
                    return this.shield(this.selectedShieldId).name;
                }
            },
        },
        methods: {
            ...mapMutations('currentCharacter', {
                updateVeMod: 'updateVeMod',
                updateShieldType: 'updateShieldType',
                updateShieldEquip: 'updateShieldEquip',
                updateMgtMod: 'updateMgtMod',
            }),
            ...mapActions('currentCharacter', {
                save: 'save'
            }),
            equipUnequip() {
                if (this.magusCharacter.Pajzs.equipped) {
                    this.updateShieldEquip(false);
                    this.updateVeMod(this.currentShield.Ve * -1);
                    this.updateMgtMod(this.currentShield.Mgt * -1);
                    this.save();
                } else {
                    this.updateShieldEquip(true);
                    this.updateVeMod(this.currentShield.Ve);
                    this.updateMgtMod(this.currentShield.Mgt);
                    this.save();
                }
            },
            unequip(){
                if (this.haveShield && this.magusCharacter.Pajzs.equipped) {
                    this.updateShieldEquip(false);
                    this.updateVeMod(this.currentShield.Ve * -1);
                    this.updateMgtMod(this.currentShield.Mgt * -1);
                    this.save();
                }              
            },
            selectShield(id) {
                this.selectedShieldId = id;
            },
            submitShield() {
                this.updateShieldType(this.selectedShieldId);
                this.save();
            }
        },
       
    }
</script>