<template>
    <div>
        <div class="text-center border-bottom border-secondary">
            <h4>Felszerelés</h4>
            <button class="btn btn-success my-3" type="button" :disabled="equip_loading" data-bs-toggle="modal" data-bs-target="#equipModal">Új felszerelés hozzáadása</button>
        </div>
        <table class="table table-striped">
            <thead>
                <tr>
                    <th scope="col-4">Felszerelés</th>
                    <th scope="col-2">darab</th>
                    <th scope="col-4">elhelyezés</th>
                    <th scope="col-2">kontrol</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="equip, index in felszereles" :key="'FSZ' + index">
                    <td>{{ equip.name }}</td>
                    <td>{{ equip.quantity }}</td>
                    <td>{{ equip.where }}</td>
                    <td><button class="btn btn-outline-success btn-sm m-1" type="button" @click="addQuantToEquipment(index)" :disabled="equip_loading">+</button><button class="btn btn-outline-danger btn-sm m-1" type="button" @click="removeQuantFromEquipment(index)" :disabled="equip_loading">-</button></td>
                </tr> 
            </tbody>
        </table>

         <!-- Uj felszereles input modal -->
        <div class="modal fade" id="equipModal" tabindex="-1" aria-labelledby="equipModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="equipModal">Uj felszerelés</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                <div class="modal-body">
                    <label for="elnevezes">Felszerelés elnevezése</label>
                    <input type="text" class="form-control" id="elnevezes" v-model="input_felszereles">
                    <label for="quant">Felszerelés mennyisége</label>
                    <input type="number" class="form-control" id="quant" v-model="input_quantity">
                    <label for="where">Felszerelés elhelyezése</label>
                    <input type="text" class="form-control" id="where" v-model="input_where">
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary"  @click="addNewEquipment" data-bs-dismiss="modal">Save changes</button>
                </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from 'vuex';
export default {
    props: {
        id: Number,
        Equipment: Object,
    },
    data() {
        return {
            felszereles: [],
            equip_loading: false,
            input_felszereles: '',
            input_quantity: 1,
            input_where: '',
        }
    },
    computed: {
        ...mapGetters('currentCharacter', {
            magusCharacter: 'magusCharacter',
        }),
    },
    methods: {
         ...mapMutations('currentCharacter', {
            updateFelszereles: 'updateFelszereles'
        }),
        ...mapActions('currentCharacter', {
            save: 'save'
        }),
        addQuantToEquipment(index) {
                this.felszereles[index].quantity ++;
                this.saveEquipment();
        },
        removeQuantFromEquipment(index) {
            if (this.felszereles[index].quantity === 1) {
                this.felszereles.splice(index, 1);
            } else {
                this.felszereles[index].quantity --;
            }
            this.saveEquipment();
        },
        addNewEquipment() {
            if (this.input_felszereles !== '' && this.input_where !== '') {
                let newEquip = {
                    name: this.input_felszereles,
                    quantity: this.input_quantity,
                    where: this.input_where
                }
                this.felszereles.push(newEquip);
                this.input_felszereles = '';
                this.input_quantity = 1;
                this.input_where = '';

                this.saveEquipment();
            }
        },
        saveEquipment() {
            let data = {
                felszereles: this.felszereles
            }
            this.updateFelszereles(data);
            this.save();
        }
    },
    mounted() {
        this.felszereles = this.Equipment.felszereles;
    }
}
</script>