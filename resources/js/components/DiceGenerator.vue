<template>
    <div>
        <div>
            <button class="btn btn-success mt-2 costum-btn" type="button"  data-bs-toggle="modal" data-bs-target="#diceModal">Kockadobás</button>
        </div>

        <!-- Dice Modal -->
        <div class="modal fade dice-foward" id="diceModal" tabindex="-1" aria-labelledby="diceModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="diceModalLabel">Kockák</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" @click="closeModal"></button>
                    </div>
                <div class="modal-body">
                    <div class="text-center p-5 m-2 border border-secondary rounded-2">
                        <div class="d-grid gap-2">
                            <button
                                v-for="(dice, index) in dices" :key="'DICE' + index"
                                type="button"
                                class="btn btn-success btn-lg costum-btn mb-2"
                                @click="rollDice(dice)"
                                >
                                K{{ dice }} dobókocka
                            </button>
                        </div>
                    </div>
                    <div>
                        <div class="text-center mt-3">
                            <h2>{{ rollLabel }}</h2>
                            <h2 v-if="rollResult" class="display-3 mt-3"><span class="shadow pt-1 pb-1 ps-3 pe-3 border border-3 border-dark rounded-pill">{{ rollResult }}</span></h2>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary costum-btn" data-bs-dismiss="modal" @click="closeModal">Bezár</button>
                </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        dices: {
            type: Array,
            default: [6]
        },
    },
    data() {
        return {
            rollResult: 0,
            rollLabel: 'Még nem történt kockadobás',
        }
    },
    methods: {
        rollDice(dice) {
            this.rollResult = Math.floor(Math.random() * (dice - 1 + 1) ) + 1;
            this.rollLabel = 'A K' + dice +' dobás eredménye';
            this.$emit('roll', this.rollResult);
        },
        closeModal() {
            this.rollResult = 0;
            this.rollLabel = 'Még nem történt kockadobás';
        }
    },
}
</script>