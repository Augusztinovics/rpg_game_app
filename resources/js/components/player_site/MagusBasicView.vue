<template>
    <div class="container-fluid">
        <div v-if="basic==1">

            <header>          
                <div class="px-4 py-5 my-5 text-center bg-success text-light rounded">
                        <img class="d-block mx-auto mb-4" src="/docs/5.0/assets/brand/bootstrap-logo.svg" alt="" width="72" height="57">
                        <h1 class="display-5 fw-bold">MAGUS</h1>
                        <div class="col-lg-6 mx-auto">
                            <p class="lead mb-4">---- Avagy ----</p>
                            <p class="lead mb-4">A kalandorok krónikája</p>
                        </div>
                    </div>
                <div class="pricing-header p-3 pb-md-4 mx-auto text-center">
                    <figure>
                        <blockquote class="blockquote">
                            <p><strong>Hiretelen néma </strong>csend lett. A fények kihunytak, csupán egyetlen pentagramma izzott fenyegető smaragd színnel.</p>
                            <p>- Árulás! - kiáltotta a Weila legfőbb annyrja. Alakja körül sápadt fényaura éledt...</p>
                            <p>...és az egyik istenszobor lomhán megmozdult.</p>
                            <p></p>
                            <figcaption class="blockquote-footer text-end">
                                részlet a  <cite title="Godorai függőkert krónikájából">Godorai függőkert krónikájából</cite>
                            </figcaption>
                        </blockquote>
                    </figure>
                </div>
                <hr>
            </header>

            <main>
                <div class="row row-cols-1 row-cols-md-2 mb-2 text-center">
                    <div class="col">
                        <div class="card mb-4 rounded-3 shadow-sm border-success">
                            <div class="card-header py-3 text-white bg-success border-success">
                                <h4 class="my-0 fw-normal">Characters</h4>
                            </div>
                            <div class="card-body">
                                <ul class="list-unstyled mt-3 mb-4">
                                    <li>10 users included</li>
                                    <li>2 GB of storage</li>
                                    <li>Email support</li>
                                    <li>Help center access</li>
                                </ul>
                                <button type="button" class="w-100 btn btn-lg btn-success" @click="basic=2">Make a new character</button>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card mb-4 rounded-3 shadow-sm border-success">
                            <div class="card-header py-3 text-white bg-success border-success">
                                <h4 class="my-0 fw-normal">Modules</h4>
                            </div>
                            <div class="card-body">
                                <ul class="list-unstyled mt-3 mb-4">
                                    <li>30 users included</li>
                                    <li>15 GB of storage</li>
                                    <li>Phone and email support</li>
                                    <li>Help center access</li>
                                </ul>
                                <button type="button" class="w-100 btn btn-lg btn-success">Search for modules</button>
                            </div>
                        </div>
                    </div>    
                </div>
            </main>

        </div>
        <div v-else-if="basic==2">
            <magus-character-create @back="back"/>
        </div>
        <div v-else-if="basic==3" class="container-fluid">
            <div>
                <button class="btn btn-lg btn-success m-3" @click="basic=1">Back</button>
            </div>
            <magus-character-sheet />
        </div>
    </div>
</template>

<script>
    import MagusCharacterCreate from './MagusCharacterCreate.vue';
    import MagusCharacterSheet from './magus/MagusCharacterSheet.vue'

    export default {
        components: {
            MagusCharacterCreate,
            MagusCharacterSheet,
        },
        data() {
            return {
                basic: 1,
            }
        },
        methods: {
            back() {
                //fetch data to refresh
                this.basic = 1;
            }
        },
        mounted() {
            console.log('Component mounted.')
        }
    }
</script>