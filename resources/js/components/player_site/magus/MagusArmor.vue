<template>
<div>
        <h4 class="text-center mt-2 pb-3 border-bottom border-secondary">Páncél</h4>
        <div class="d-grid text-center mb-3">
            <button class="btn btn-success my-3 bg-green-leather costum-btn" type="button" @click="unequip"  data-bs-toggle="modal" data-bs-target="#armorModal">Páncél módositása</button>
        </div>
        <div v-if="haveArmor" class=" border-top border-secondary my-2">
            <p><span class="fs-5 fw-bolder me-2">{{ currentArmor.name }}</span> <button class="btn btn-outline-success btn-sm ms-2" type="button"  data-bs-toggle="modal" data-bs-target="#armorInfoModal">i</button></p>
            <p><span class="fw-bolder me-2">Állapot: </span><span>{{ haveArmorEquipedText }}</span><button class="btn btn-outline-success btn-sm ms-2" @click="equipUnequip">Változtat</button></p>
            <p><span class="fw-bolder me-2">Használat szintje: </span>{{ haveArmorSkill.level }}</p>
            <p class="fs-5"><span class="fw-bolder me-2">SFÉ: </span><span>{{ currentArmor.Sfe }}</span></p>
            <p class="fs-5"><span class="fw-bolder me-2">MGT: </span><span>{{ currentArmor.Mgt }}</span></p>
            <p class="fs-5"><span class="fw-bolder me-2">Aktuális SFÉ: </span><span>{{ currentArmorSfe }}</span><button class="btn btn-outline-danger btn-sm ms-2" @click="damageSfe">SFÉ rongálódás</button><button class="btn btn-outline-success btn-sm ms-2" @click="restoreSfe">Megjavitva</button></p>
        </div>
        <div v-else class=" border-top border-secondary my-2">
            <p class="p-2">A karakter nem rendelkezik páncéllal</p>
        </div>

        <!-- Pancel modositas modal -->
        <div class="modal fade smooth" id="armorModal" tabindex="-1" aria-labelledby="armorModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="armorModalLabel">Páncél választása</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                <div class="modal-body">
                    <div v-if="haveArmor">
                        <h4>Jelenleg meglévő páncél:</h4>
                        <p><span class="fs-5 fw-bolder me-2">{{ currentArmor.name }}</span> <button class="btn btn-outline-success btn-sm ms-2" type="button"  data-bs-toggle="modal" data-bs-target="#armorInfoModal">i</button></p>
                    </div>
                    <div v-else>
                    </div>
                    <h4>Páncél választási lehetőségek</h4>
                    <p>Figyelem, ha vásárolsz páncélt annak értékét külön le kell vonni a kincseid közül!</p>
                    <p>Ha nem rendelkezel pácél viselet képzetséggel, csak könnyű páncélt viselhetsz</p>
                    <p>Páncél viselet : {{ haveArmorSkill.level }}</p>
                    <div v-if="haveArmorSkill.have" class="d-grid text-center">
                        <div class="my-2">
                            <a class="btn btn-outline-dark" href="#end" @click="selectArmor('')">
                                Nem akarok páncélt
                            </a>
                        </div>
                        <div v-for="pancel, index in armors" :key="index" class="my-2">
                            <a class="btn btn-outline-dark" href="#end" @click="selectArmor(pancel.id)">
                                <p class="fs-5 fw-bolder">{{ pancel.name }}</p>
                                <p> {{ pancel.description }}</p>
                                <p>Anyag: {{ pancel.material }}</p>
                                <p>MGT: {{ pancel.Mgt }}</p>
                                <p>SFÉ: {{ pancel.Sfe}}</p>
                                <p>Súly: {{ pancel.weight }}</p>
                                <p>Érték: {{ pancel.price }}</p>
                            </a>
                        </div>
                    </div>
                    <div v-else class="d-grid text-center">
                         <div class="my-2">
                            <a class="btn btn-outline-dark" href="#end" @click="selectArmor('')">
                                Nem akarok páncélt
                            </a>
                        </div>
                        <div v-for="pancel, index in LightArmors" :key="index" class="my-2">
                            <a class="btn btn-outline-dark" href="#end" @click="selectArmor(pancel.id)">
                                <p class="fs-5 fw-bolder">{{ pancel.name }}</p>
                                <p> {{ pancel.description }}</p>
                                <p>Anyag: {{ pancel.material }}</p>
                                <p>MGT: {{ pancel.Mgt }}</p>
                                <p>SFÉ: {{ pancel.Sfe}}</p>
                                <p>Súly: {{ pancel.weight }}</p>
                                <p>Érték: {{ pancel.price }}</p>
                            </a>
                        </div>
                    </div>
                    <div class="text-center bg-info text-black mt-3 border border-primary rounded" id="end">
                        <h4 class="mt-2">A választás:</h4>
                        <p>{{ selectedArmorName }}</p>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary bg-blue-leather costum-btn" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary bg-green-leather costum-btn"  @click="submitArmor" data-bs-dismiss="modal">Save changes</button>
                </div>
                </div>
            </div>
        </div>

        <!-- Pajzs info modal -->
         <div class="modal fade" id="armorInfoModal" tabindex="-1" aria-labelledby="armorInfoModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="armorInfoModalLabel">{{ currentArmor.name }}</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <p> {{ currentArmor.description }}</p>
                        <p class="fs-5"><span class="fw-bolder me-2">Anyag: </span><span>{{ currentArmor.material }}</span></p>
                        <p class="fs-5"><span class="fw-bolder me-2">MGT: </span><span>{{ currentArmor.Mgt }}</span></p>
                        <p class="fs-5"><span class="fw-bolder me-2">SFÉ: </span><span>{{ currentArmor.Sfe }}</span></p>
                        <p class="fs-5"><span class="fw-bolder me-2">Súlya: </span><span>{{ currentArmor.weight }}</span></p>
                        <p class="fs-5"><span class="fw-bolder me-2">Értéke: </span><span>{{ currentArmor.price }}</span></p>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary bg-blue-leather costum-btn" data-bs-dismiss="modal">Close</button>
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
                selectedArmorId: '',
            }
        },
        computed: {
            ...mapGetters('currentCharacter', {
                magusCharacter: 'magusCharacter',
                haveLearnedSkill: 'haveLearnedSkill',
            }),
            ...mapGetters('magusArmors', {
                armors: 'armors',
                armor: 'armor',
            }),
            haveArmor() {
                return this.magusCharacter.Pancel.id == '' ? false : true;
            },
            currentArmor() {
                return this.armor(this.magusCharacter.Pancel.id);
            },
            haveArmorSkill() {
                return this.haveLearnedSkill('PANCEL_VISELET');
            },
            haveArmorEquiped() {
                return this.magusCharacter.Pancel.equipped;
            },
            haveArmorEquipedText() {
                return this.haveArmorEquiped ? ' Felöltve ' : ' Nem viseli ';
            },
            selectedArmorName() {
                if (this.selectedArmorId == '') {
                    return 'Nem kell páncél';
                } else {
                    return this.armor(this.selectedArmorId).name;
                }
            },
            currentArmorSfe() {
                return this.magusCharacter.Pancel.currentSfe;
            },
            LightArmors() {
                return this.armors.filter(t => t.type === 'L');
            }
        },
        methods: {
            ...mapMutations('currentCharacter', {
                updateArmorType: 'updateArmorType',
                updateArmorEquip: 'updateArmorEquip',
                updateCurrentSfe: 'updateCurrentSfe',
                updateSfeDamage: 'updateSfeDamage',
                updateMgtMod: 'updateMgtMod',
            }),
            ...mapActions('currentCharacter', {
                save: 'save'
            }),
            equipUnequip() {
                if (this.magusCharacter.Pancel.equipped) {
                    this.updateArmorEquip(false);
                    if (this.haveArmorSkill.level != 'Mf'){
                        this.updateMgtMod(this.currentArmor.Mgt * -1);
                    } 
                    this.save();
                } else {
                    this.updateArmorEquip(true);
                    if (this.haveArmorSkill.level != 'Mf'){
                        this.updateMgtMod(this.currentArmor.Mgt);
                    } 
                    this.save();
                }
            },
            unequip(){
                if (this.haveArmor && this.magusCharacter.Pancel.equipped) {
                    this.updateArmorEquip(false);
                    if (this.haveArmorSkill.level != 'Mf'){
                        this.updateMgtMod(this.currentArmor.Mgt * -1);
                    } 
                    this.save();
                }              
            },
            selectArmor(id) {
                this.selectedArmorId = id;
            },
            submitArmor() {
                this.updateArmorType(this.selectedArmorId);
                this.updateCurrentSfe(this.armor(this.selectedArmorId).Sfe);
                this.save();
            },
            restoreSfe() {
                this.updateCurrentSfe(this.currentArmor.Sfe);
                this.save();
            },
            damageSfe(){
                this.updateSfeDamage();
                this.save();
            }
        },
       
    }
</script>

<style scoped>
    .smooth{
        scroll-behavior: smooth;
    }
</style>