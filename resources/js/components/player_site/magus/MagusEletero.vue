<template>
    <div>
        <h4 class="text-center mt-2">Életerő</h4>
        <div class="d-grid text-center mb-3">
            <button class="btn btn-success my-3" type="button"  data-bs-toggle="modal" data-bs-target="#damageModal">Életerő módositása</button>
        </div>
        <div class="row">
            <div class="col border-end border-secondary">
                <p>Max Ép</p>
                <p class="border-bottom border-secondary">{{ maxEp }}</p>
                <p>Akt Ép</p>
                <p>{{ aktualisEp }}</p>
            </div>
            <div class="col">
                <p>Max Fp</p>
                <p class="border-bottom border-secondary">{{ maxFp }}</p>
                <p>Fp/szint</p>
                <p>{{ fpSzint }}</p>
            </div>
        </div>
        <p class="border-top border-secondary">Akt Fp</p>
        <p>{{ aktualisFp }}</p>

        <!-- damage modal -->
        <div class="modal fade" id="damageModal" tabindex="-1" aria-labelledby="damageModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="damageModalLabel">Sebzés / Gyógyulás</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                <div class="modal-body">
                    <label for="fp">Fájdalom:</label>
                    <input type="number" class="form-control" id="fp" v-model="inputFp">
                    <label for="ep">Életerő:</label>
                    <input type="number" class="form-control" id="ep" v-model="inputEp">
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-success"  @click="teljesGyogyul" data-bs-dismiss="modal">Teljesen gyógyult</button>
                    <button type="button" class="btn btn-danger"  @click="sebzesGyogyul('-')" data-bs-dismiss="modal">Sebzés</button>
                    <button type="button" class="btn btn-success"  @click="sebzesGyogyul('+')" data-bs-dismiss="modal">Gyógyulás</button>
                </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
     props: {
        maxEp: Number,
        aktEp: Number,
        maxFp: Number,
        aktFp: Number,
        fpSzint: String,
        sfe: Number,
    },
    data() {
        return {
            aktualisFp: 0,
            aktualisEp: 0,
            inputFp: 0,
            inputEp: 0,
        }
    },
    methods: {
        sebzesGyogyul(mod) {

        },
        teljesGyogyul() {

        }
    },
    mounted() {
        this.aktualisFp = this.aktFp;
        this.aktualisEp = this.aktEp;
    }
}
</script>