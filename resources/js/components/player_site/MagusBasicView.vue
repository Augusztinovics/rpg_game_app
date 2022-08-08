<template>
    <div class="container-fluid">
        <div v-if="basic==1">

            <header>          
                <div class="px-4 py-5 my-5 text-center bg-success text-light rounded">
                        <img class="d-block mx-auto mb-4" src="/img/pentagram.png" alt="" width="72" height="57">
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
            <section>
                <div class="text-center">
                    <h2>Izelitő a játékból</h2>
                    <p>Némi leirás a játékból kedvcsinálóként</p>
                </div>

                <div class="accordion" id="accordionPanelsStayOpenExample">
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="panelsStayOpen-headingOne">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="false" aria-controls="panelsStayOpen-collapseOne">
                                Játszható fajok
                            </button>
                        </h2>
                        <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingOne">
                            <div class="accordion-body">
                                <div v-for="faj, index in races" :key="'Faj' + index">
                                    <h2 class="mb-4">{{ faj.name }}</h2>
                                    <p><b>Tulajdonság módositók:</b></p>
                                    <p><b>Erő: <span v-if="faj.ERO > 0">+</span>{{ faj.ERO }}</b></p>
                                    <p><b>Gyorsaság: <span v-if="faj.GYORS > 0">+</span>{{ faj.GYORS }}</b></p>
                                    <p><b>Ügyesség: <span v-if="faj.UGY > 0">+</span>{{ faj.UGY }}</b></p>
                                    <p><b>Állóképesség: <span v-if="faj.ALLO > 0">+</span>{{ faj.ALLO }}</b></p>
                                    <p><b>Egészség: <span v-if="faj.EG > 0">+</span>{{ faj.EG }}</b></p>
                                    <p><b>Szépség: <span v-if="faj.SZEP > 0">+</span>{{ faj.SZEP }}</b></p>
                                    <p><b>Inteligencia: <span v-if="faj.INT > 0">+</span>{{ faj.INT }}</b></p>
                                    <p><b>Akaraterő: <span v-if="faj.AK > 0">+</span>{{ faj.AK }}</b></p>
                                    <p><b>Asztrál: <span v-if="faj.ASZT > 0">+</span>{{ faj.ASZT }}</b></p>
                                    <p v-if="faj.CE > 0"><b>Célzó érték módositó: {{ faj.CE}}</b></p>
                                    <p><b>Faji képzettségek:</b></p>
                                    <p><b>Mesterfokú:</b></p>
                                    <p v-for="kepzetseg, index in faj.skills.mf" :key="'kp' + index">{{ skill(kepzetseg).name }}</p>
                                    <p><b>Százalékos képzettségek:</b></p>
                                    <p v-for="precSkill, key in faj.skills.precent" :key="key">{{ skillPrecent(key).name }} +{{ precSkill }}%</p>
                                    <div v-if="faj.forbittenClasses.length > 0">
                                        <p><b>Tiltott kasztok:</b></p>
                                        <p v-for="tilosKaszt, index in faj.forbittenClasses" :key="'Kaszt' + index">{{ Kaszt(tilosKaszt).name }}</p>
                                    </div> 
                                    <p><b>A faj leirása:</b></p>
                                    <p v-for="des, index in faj.description" :key="'D' + index">{{ des }}</p>
                                    <p> <b>Különleges képességek </b></p>
                                    <p v-for="special, index in faj.specials" :key="'S' + index">{{ special }}</p>
                                    <hr>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="accordion-item">
                        <h2 class="accordion-header" id="panelsStayOpen-headingTwo">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                                Játszható karakterek
                            </button>
                        </h2>
                        <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
                            <div class="accordion-body">
                                <div  v-for="kaszLehetoseg, index in magusClasses" :key="'Kaszt' + index">
                                    <h2 class="mb-4">{{ kaszLehetoseg.name }}</h2>
                                    <magus-kaszt-preview :kaszt="kaszLehetoseg" />
                                    <hr>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="panelsStayOpen-headingThree">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                                Képzetségek
                            </button>
                        </h2>
                        <div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
                            <div class="accordion-body">
                                <div v-for="skil in skills" :key="skil.id">
                                    <h2 class="mb-4">{{ skil.name }}</h2>
                                    <p><b>Leirás:</b></p>
                                    <p>{{ skil.description }}</p>
                                    <p><b>Af </b>Kp: {{skil.KpAf}}</p>
                                    <p>{{ skil.Af }}</p>
                                    <p><b>Mf </b>Kp: {{skil.KpMf}}</p>
                                    <p>{{ skil.Mf }}</p>
                                    <hr>
                                </div>
                                <div v-for="precSkill, key in skillsPrecent" :key="key">
                                    <h2 class="mb-4">{{ precSkill.name }}</h2>
                                    <p>{{ precSkill.description }}</p>
                                    <hr>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="panelsStayOpen-headingFour">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseFour" aria-expanded="false" aria-controls="panelsStayOpen-collapseFour">
                                Fegyverek, pajzsok, vértek
                            </button>
                        </h2>
                        <div id="panelsStayOpen-collapseFour" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingFour">
                            <div class="accordion-body">
                                <h2>Közelharci Fegyverek</h2>
                                <hr>
                                <div v-for="fegyver, index in weapons" :key="index">
                                    <h3 class="mb-4">{{ fegyver.name }}</h3>
                                    <p>Tipus: {{ fegyver.Type }}</p>
                                    <p>Tám/kör: {{ fegyver.TamKor }}</p>
                                    <p>KÉ: {{ fegyver.Ke}}</p>
                                    <p>TÉ: {{ fegyver.Te}}</p>
                                    <p>VÉ: {{ fegyver.Ve}}</p>
                                    <p>Sebzés: {{ fegyver.Sp.name}}</p>
                                    <p>Súly: {{ fegyver.weight }}</p>
                                    <p>Érték: {{ fegyver.price }}</p>
                                    <p> {{ fegyver.description }}</p>
                                    <hr>
                                </div>
                                <h2>Célzó Fegyverek</h2>
                                <hr>
                                <div v-for="ij, index in rangedWeapons" :key="'R' + index">
                                    <h3 class="mb-4">{{ ij.name }}</h3>
                                    <p>Tám/kör: {{ ij.TamKor }}</p>
                                    <p>KÉ: {{ ij.Ke}}</p>
                                    <p>CÉ: {{ ij.Ce}}</p>
                                    <p>Táv: {{ ij.Tav}} méter</p>
                                    <p>Sebzés: {{ ij.Sp.name}}</p>
                                    <p>Súly: {{ ij.weight }}</p>
                                    <p>Érték: {{ ij.price }}</p>
                                    <p> {{ ij.description }}</p>
                                    <hr>
                                </div>
                                <h2>Pajzsok</h2>
                                <hr>
                                <div v-for="pajzs in shields" :key="pajzs.id">
                                    <div v-if="pajzs.id != 'NON'">
                                        <h3 class="mb-4">{{ pajzs.name }}</h3>
                                        <p>MGT: {{ pajzs.Mgt }}</p>
                                        <p>VÉ: {{ pajzs.Ve}}</p>
                                        <p>Súly: {{ pajzs.weight }}</p>
                                        <p>Érték: {{ pajzs.price }}</p>
                                        <p> {{ pajzs.description }}</p>
                                        <hr>
                                    </div> 
                                </div>
                                <h2>Vértek</h2>
                                <hr>
                                <div v-for="pancel in armors" :key="'p' + pancel.id">
                                    <div v-if="pancel.id != 'NON'">
                                        <h3 class="mb-4">{{ pancel.name }}</h3>
                                        <p>Anyag: {{ pancel.material }}</p>
                                        <p>MGT: {{ pancel.Mgt }}</p>
                                        <p>SFÉ: {{ pancel.Sfe}}</p>
                                        <p>Súly: {{ pancel.weight }}</p>
                                        <p>Érték: {{ pancel.price }}</p>
                                        <p> {{ pancel.description }}</p>
                                        <hr>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <hr>
            <main>
                <div class="row row-cols-1 row-cols-md-2 mb-2 text-center">
                    <div class="col">
                        <div class="card mb-4 rounded-3 shadow-sm border-success">
                            <div class="card-header py-3 text-white bg-success border-success">
                                <h4 class="my-0 fw-normal">Karakterek</h4>
                            </div>
                            <div class="card-body">
                                <ul class="list-unstyled mt-3 mb-4">
                                    <li v-for="magusCharacter in magusCharacters" :key="magusCharacter.id">
                                       <button class="btn btn-outline-success m-2" @click="viewCharacter(magusCharacter)">{{ magusCharacter.character_data.Nev }} ( {{ magusCharacter.character_data.Szint }}.Szintű {{ Kaszt(magusCharacter.character_data.Kaszt).name }})</button>
                                       <button class="btn btn-outline-danger" @click="deleteCharacter(magusCharacter.id)">Törlés</button>
                                    </li>
                                </ul>
                                <button type="button" class="w-100 btn btn-lg btn-success" @click="basic=2">Új karakter készitése</button>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card mb-4 rounded-3 shadow-sm border-success">
                            <div class="card-header py-3 text-white bg-success border-success">
                                <h4 class="my-0 fw-normal">Játék modulok</h4>
                            </div>
                            <div class="card-body">
                                <ul class="list-unstyled mt-3 mb-4">
                                    <li>Még nem elérhető funkció</li>
                                </ul>
                                <button type="button" class="w-100 btn btn-lg btn-success">Modul keresése</button>
                            </div>
                        </div>
                    </div>    
                </div>
            </main>
            <hr>
            <footer class="text-center m-2">
                <div class="p-4">
                    <p>FIGYELEM a lapon lévő adatok a <b>M.A.G.U.S avagy a Kalandorok Krónikái Első Törvénykönyv</b> 1997. évi kiadványából származnak.</p>
                    <p>A lap csak idézeteket és részadatokat tartalmaz, nem a teljes könyv adatait, igy nem helyettesiti a könyvet.</p>
                    <p>Kérem a játékosokat, hogy ha még nem rendelkeznek a könyvvel, vásárolják meg azt, hogy teljes képet kapjanak a játékról.</p>
                </div>
            </footer>
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
    import MagusKasztPreview from './magus/MagusKasztPreview.vue';
    import { mapGetters, mapActions, mapMutations } from 'vuex';

    export default {
        components: {
            MagusCharacterCreate,
            MagusCharacterSheet,
            MagusKasztPreview,
        },
        data() {
            return {
                basic: 1,
            }
        },
        computed: {
            ...mapGetters('userCharacters', {
                 magusCharacters: 'magusCharacters'
            }),
            ...mapGetters('magusClasses', {
                magusKaszt: 'magusClass',
                magusClasses: 'magusClasses',
            }),
            ...mapGetters('magusRaces', {
                races: 'races',
            }),
            ...mapGetters('magusSkills', {
                skills: 'skills',
                skillsPrecent: 'skillsPrecent',
                skill: 'skill',
                skillPrecent: 'skillPrecent',
            }),
            ...mapGetters('magusWeapons', {
                weapons: 'weapons',
                rangedWeapons: 'rangedWeapons',
            }),
            ...mapGetters('magusShields', {
                shields: 'shields',
            }),
            ...mapGetters('magusArmors', {
                armors: 'armors',
            }),
        },
        methods: {
            ...mapActions('userCharacters', {
                 loadMagusCharacters: 'loadMagusCharacters'
            }),
            ...mapMutations('currentCharacter', {
                 addCharacter: 'addCharacter',
            }),
            Kaszt(kasztId) {
                return this.magusKaszt(kasztId);
            },
            back() {
                //fetch data to refresh
                this.loadMagusCharacters();
                this.basic = 1;
            },
            viewCharacter(character) {
                this.addCharacter({
                    id: character.id,
                    characterData: character.character_data,
                });
                this.basic = 3;
            },
            deleteCharacter(id) {
                axios.post('/character/delete/' + id, {})
                .then( (response) => {
                    this.loadMagusCharacters();
                })
                .catch( (error) => {
                    console.log(error);
                });
            }
        },
        mounted() {
            this.loadMagusCharacters();
        }
    }
</script>