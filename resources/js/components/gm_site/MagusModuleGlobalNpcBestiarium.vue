<template>
    <div>
        <ul class="nav nav-pills mb-3 border border-success rounded p-3" id="pills-tab" role="tablist">
            <li class="nav-item" role="presentation">
                <button class="nav-link active" id="pills-aquir-tab" data-bs-toggle="pill" data-bs-target="#pills-aquir" type="button" role="tab" aria-controls="pills-aquir" aria-selected="true">Aquirok</button>
            </li>
            <li class="nav-item" role="presentation">
                <button class="nav-link" id="pills-animals-tab" data-bs-toggle="pill" data-bs-target="#pills-animals" type="button" role="tab" aria-controls="pills-animals" aria-selected="false">Állatok</button>
            </li>
            <li class="nav-item" role="presentation">
                <button class="nav-link" id="pills-demons-tab" data-bs-toggle="pill" data-bs-target="#pills-demons" type="button" role="tab" aria-controls="pills-demons" aria-selected="false">Démonok</button>
            </li>
            <li class="nav-item" role="presentation">
                <button class="nav-link" id="pills-elementals-tab" data-bs-toggle="pill" data-bs-target="#pills-elementals" type="button" role="tab" aria-controls="pills-elementals" aria-selected="false">Elementálok</button>
            </li>
            <li class="nav-item" role="presentation">
                <button class="nav-link" id="pills-undeads-tab" data-bs-toggle="pill" data-bs-target="#pills-undeads" type="button" role="tab" aria-controls="pills-undeads" aria-selected="false">Élőholtak</button>
            </li>
            <li class="nav-item" role="presentation">
                <button class="nav-link" id="pills-jins-tab" data-bs-toggle="pill" data-bs-target="#pills-jins" type="button" role="tab" aria-controls="pills-jins" aria-selected="false">Dzsinnek</button>
            </li>
            <li class="nav-item" role="presentation">
                <button class="nav-link" id="pills-bestia-tab" data-bs-toggle="pill" data-bs-target="#pills-bestia" type="button" role="tab" aria-controls="pills-bestia" aria-selected="false">Különböző Szörnyek</button>
            </li>
        </ul>
        <div class="tab-content" id="pills-tabContent">
            <div class="tab-pane fade show active" id="pills-aquir" role="tabpanel" aria-labelledby="pills-aquir-tab">
                 <div v-for="npc, index in aquirs" :key="'AQUIR' + index" class="accordion-item">
                    <h2 class="accordion-header" :id="'AQUIR' + index + '-heading'">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" :data-bs-target="'#' + 'AQUIR' + index" aria-expanded="false" :aria-controls="'AQUIR' + index">
                            {{ npc.name }}
                        </button>
                    </h2>
                    <div :id="'AQUIR' + index" class="accordion-collapse collapse" :aria-labelledby="'AQUIR' + index + '-heading'">
                        <div class="accordion-body">
                            <div class="row">
                                <div class="col-sm">
                                    <p><b>Faj: </b> {{ npc.race }} </p>
                                    <p><b>Szint: </b> {{ npc.level }} </p>
                                    <p><b>TP érték: </b> {{ npc.exp }} </p>
                                    <p><b>Életerő:</b></p>
                                    <p>Életerő Pontok ( Ép ): {{ npc.EP }}</p>
                                    <p>Fájdalomtűrési Pontok ( Fp ): {{ npc.FP }}</p>
                                </div>
                                <div class="col-sm">
                                    <p><b>Tulajdonságok:</b></p>
                                    <p>Erő: {{ npc.ERO }}</p>
                                    <p>Gyorsaság: {{ npc.GYORS }}</p>
                                    <p>Ügyesség: {{ npc.UGY }}</p>
                                    <p>Állóképesség: {{ npc.ALLO }}</p>
                                    <p>Egészség: {{ npc.EG }}</p>
                                    <p>Szépség: {{ npc.SZEP }}</p>
                                    <p>Inteligencia: {{ npc.INT }}</p>
                                    <p>Akaraterő: {{ npc.AK }}</p>
                                    <p>Asztrál: {{ npc.ASZT }}</p>
                                </div>
                                <div class="col-sm">
                                    <p><b>Harcértékek: </b></p>
                                    <p>Kezdeményező Érték ( KÉ ): {{ npc.KE }}</p>
                                    <p>Támadó Érték ( TÉ ): {{ npc.TE }}</p>
                                    <p>Védő Érték ( VÉ ): {{ npc.VE }}</p>
                                    <p>Célzó Érték ( CÉ ): {{ npc.CE }}</p>
                                    <p>Sebzés ( Sp ): {{ npc.SP }}</p>
                                    <p>Sebzés Felfogó Érték ( SFÉ ): {{ npc.SFE }}</p>
                                </div>
                            </div>
                            <div>
                                <p><b>Az NJK álltalános leírása:</b></p>
                                <p>{{ npc.description }}</p>
                                <p> <b>NJK Szerepe a játékban: </b></p>
                                <p>{{ npc.role }}</p>
                                <p><b>NJK viselkedési mintája: </b></p>
                                <p>{{ npc.sablon }}</p>
                            </div>
                            <div class="text-center m-2">
                                <button type="button" class="btn btn-success costum-btn m-3" @click="npcAdd(npc, index)">NJK hozzáadása a listához</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="tab-pane fade" id="pills-animals" role="tabpanel" aria-labelledby="pills-animals-tab">
                 <div v-for="npc, index in animals" :key="'ANIMALS' + index" class="accordion-item">
                    <h2 class="accordion-header" :id="'ANIMALS' + index + '-heading'">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" :data-bs-target="'#' + 'ANIMALS' + index" aria-expanded="false" :aria-controls="'ANIMALS' + index">
                            {{ npc.name }}
                        </button>
                    </h2>
                    <div :id="'ANIMALS' + index" class="accordion-collapse collapse" :aria-labelledby="'ANIMALS' + index + '-heading'">
                        <div class="accordion-body">
                            <div class="row">
                                <div class="col-sm">
                                    <p><b>Faj: </b> {{ npc.race }} </p>
                                    <p><b>Szint: </b> {{ npc.level }} </p>
                                    <p><b>TP érték: </b> {{ npc.exp }} </p>
                                    <p><b>Életerő:</b></p>
                                    <p>Életerő Pontok ( Ép ): {{ npc.EP }}</p>
                                    <p>Fájdalomtűrési Pontok ( Fp ): {{ npc.FP }}</p>
                                </div>
                                <div class="col-sm">
                                    <p><b>Tulajdonságok:</b></p>
                                    <p>Erő: {{ npc.ERO }}</p>
                                    <p>Gyorsaság: {{ npc.GYORS }}</p>
                                    <p>Ügyesség: {{ npc.UGY }}</p>
                                    <p>Állóképesség: {{ npc.ALLO }}</p>
                                    <p>Egészség: {{ npc.EG }}</p>
                                    <p>Szépség: {{ npc.SZEP }}</p>
                                    <p>Inteligencia: {{ npc.INT }}</p>
                                    <p>Akaraterő: {{ npc.AK }}</p>
                                    <p>Asztrál: {{ npc.ASZT }}</p>
                                </div>
                                <div class="col-sm">
                                    <p><b>Harcértékek: </b></p>
                                    <p>Kezdeményező Érték ( KÉ ): {{ npc.KE }}</p>
                                    <p>Támadó Érték ( TÉ ): {{ npc.TE }}</p>
                                    <p>Védő Érték ( VÉ ): {{ npc.VE }}</p>
                                    <p>Célzó Érték ( CÉ ): {{ npc.CE }}</p>
                                    <p>Sebzés ( Sp ): {{ npc.SP }}</p>
                                    <p>Sebzés Felfogó Érték ( SFÉ ): {{ npc.SFE }}</p>
                                </div>
                            </div>
                            <div>
                                <p><b>Az NJK álltalános leírása:</b></p>
                                <p>{{ npc.description }}</p>
                                <p><b>NJK Szerepe a játékban: </b></p>
                                <p>{{ npc.role }}</p>
                                <p><b>NJK viselkedési mintája: </b></p>
                                <p>{{ npc.sablon }}</p>
                            </div>
                            <div class="text-center m-2">
                                <button type="button" class="btn btn-success costum-btn m-3" @click="npcAdd(npc, index)">NJK hozzáadása a listához</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="tab-pane fade" id="pills-demons" role="tabpanel" aria-labelledby="pills-demons-tab">
                 <div v-for="npc, index in demons" :key="'DEMONS' + index" class="accordion-item">
                    <h2 class="accordion-header" :id="'DEMONS' + index + '-heading'">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" :data-bs-target="'#' + 'DEMONS' + index" aria-expanded="false" :aria-controls="'DEMONS' + index">
                            {{ npc.name }}
                        </button>
                    </h2>
                    <div :id="'DEMONS' + index" class="accordion-collapse collapse" :aria-labelledby="'DEMONS' + index + '-heading'">
                        <div class="accordion-body">
                            <div class="row">
                                <div class="col-sm">
                                    <p><b>Faj: </b> {{ npc.race }} </p>
                                    <p><b>Szint: </b> {{ npc.level }} </p>
                                    <p><b>TP érték: </b> {{ npc.exp }} </p>
                                    <p><b>Életerő:</b></p>
                                    <p>Életerő Pontok ( Ép ): {{ npc.EP }}</p>
                                    <p>Fájdalomtűrési Pontok ( Fp ): {{ npc.FP }}</p>
                                </div>
                                <div class="col-sm">
                                    <p><b>Tulajdonságok:</b></p>
                                    <p>Erő: {{ npc.ERO }}</p>
                                    <p>Gyorsaság: {{ npc.GYORS }}</p>
                                    <p>Ügyesség: {{ npc.UGY }}</p>
                                    <p>Állóképesség: {{ npc.ALLO }}</p>
                                    <p>Egészség: {{ npc.EG }}</p>
                                    <p>Szépség: {{ npc.SZEP }}</p>
                                    <p>Inteligencia: {{ npc.INT }}</p>
                                    <p>Akaraterő: {{ npc.AK }}</p>
                                    <p>Asztrál: {{ npc.ASZT }}</p>
                                </div>
                                <div class="col-sm">
                                    <p><b>Harcértékek: </b></p>
                                    <p>Kezdeményező Érték ( KÉ ): {{ npc.KE }}</p>
                                    <p>Támadó Érték ( TÉ ): {{ npc.TE }}</p>
                                    <p>Védő Érték ( VÉ ): {{ npc.VE }}</p>
                                    <p>Célzó Érték ( CÉ ): {{ npc.CE }}</p>
                                    <p>Sebzés ( Sp ): {{ npc.SP }}</p>
                                    <p>Sebzés Felfogó Érték ( SFÉ ): {{ npc.SFE }}</p>
                                </div>
                            </div>
                            <div>
                                <p><b>Az NJK álltalános leírása:</b></p>
                                <p>{{ npc.description }}</p>
                                <p><b>NJK Szerepe a játékban: </b></p>
                                <p>{{ npc.role }}</p>
                                <p><b>NJK viselkedési mintája: </b></p>
                                <p>{{ npc.sablon }}</p>
                            </div>
                            <div class="text-center m-2">
                                <button type="button" class="btn btn-success costum-btn m-3" @click="npcAdd(npc)">NJK hozzáadása a listához</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="tab-pane fade" id="pills-elementals" role="tabpanel" aria-labelledby="pills-elementals-tab">
                 <div v-for="npc, index in elementals" :key="'ELEMENTALS' + index" class="accordion-item">
                    <h2 class="accordion-header" :id="'ELEMENTALS' + index + '-heading'">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" :data-bs-target="'#' + 'ELEMENTALS' + index" aria-expanded="false" :aria-controls="'ELEMENTALS' + index">
                            {{ npc.name }}
                        </button>
                    </h2>
                    <div :id="'ELEMENTALS' + index" class="accordion-collapse collapse" :aria-labelledby="'ELEMENTALS' + index + '-heading'">
                        <div class="accordion-body">
                            <div class="row">
                                <div class="col-sm">
                                    <p><b>Faj: </b> {{ npc.race }} </p>
                                    <p><b>Szint: </b> {{ npc.level }} </p>
                                    <p><b>TP érték: </b> {{ npc.exp }} </p>
                                    <p><b>Életerő:</b></p>
                                    <p>Életerő Pontok ( Ép ): {{ npc.EP }}</p>
                                    <p>Fájdalomtűrési Pontok ( Fp ): {{ npc.FP }}</p>
                                </div>
                                <div class="col-sm">
                                    <p><b>Tulajdonságok:</b></p>
                                    <p>Erő: {{ npc.ERO }}</p>
                                    <p>Gyorsaság: {{ npc.GYORS }}</p>
                                    <p>Ügyesség: {{ npc.UGY }}</p>
                                    <p>Állóképesség: {{ npc.ALLO }}</p>
                                    <p>Egészség: {{ npc.EG }}</p>
                                    <p>Szépség: {{ npc.SZEP }}</p>
                                    <p>Inteligencia: {{ npc.INT }}</p>
                                    <p>Akaraterő: {{ npc.AK }}</p>
                                    <p>Asztrál: {{ npc.ASZT }}</p>
                                </div>
                                <div class="col-sm">
                                    <p><b>Harcértékek: </b></p>
                                    <p>Kezdeményező Érték ( KÉ ): {{ npc.KE }}</p>
                                    <p>Támadó Érték ( TÉ ): {{ npc.TE }}</p>
                                    <p>Védő Érték ( VÉ ): {{ npc.VE }}</p>
                                    <p>Célzó Érték ( CÉ ): {{ npc.CE }}</p>
                                    <p>Sebzés ( Sp ): {{ npc.SP }}</p>
                                    <p>Sebzés Felfogó Érték ( SFÉ ): {{ npc.SFE }}</p>
                                </div>
                            </div>
                            <div>
                                <p><b>Az NJK álltalános leírása:</b></p>
                                <p>{{ npc.description }}</p>
                                <p><b>NJK Szerepe a játékban: </b></p>
                                <p>{{ npc.role }}</p>
                                <p><b>NJK viselkedési mintája: </b></p>
                                <p>{{ npc.sablon }}</p>
                            </div>
                            <div class="text-center m-2">
                                <button type="button" class="btn btn-success costum-btn m-3" @click="npcAdd(npc)">NJK hozzáadása a listához</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="tab-pane fade" id="pills-undeads" role="tabpanel" aria-labelledby="pills-undeads-tab">
                 <div v-for="npc, index in undeads" :key="'UNDEADS' + index" class="accordion-item">
                    <h2 class="accordion-header" :id="'UNDEADS' + index + '-heading'">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" :data-bs-target="'#' + 'UNDEADS' + index" aria-expanded="false" :aria-controls="'UNDEADS' + index">
                            {{ npc.name }}
                        </button>
                    </h2>
                    <div :id="'UNDEADS' + index" class="accordion-collapse collapse" :aria-labelledby="'UNDEADS' + index + '-heading'">
                        <div class="accordion-body">
                            <div class="row">
                                <div class="col-sm">
                                    <p><b>Faj: </b> {{ npc.race }} </p>
                                    <p><b>Szint: </b> {{ npc.level }} </p>
                                    <p><b>TP érték: </b> {{ npc.exp }} </p>
                                    <p><b>Életerő:</b></p>
                                    <p>Életerő Pontok ( Ép ): {{ npc.EP }}</p>
                                    <p>Fájdalomtűrési Pontok ( Fp ): {{ npc.FP }}</p>
                                </div>
                                <div class="col-sm">
                                    <p><b>Tulajdonságok:</b></p>
                                    <p>Erő: {{ npc.ERO }}</p>
                                    <p>Gyorsaság: {{ npc.GYORS }}</p>
                                    <p>Ügyesség: {{ npc.UGY }}</p>
                                    <p>Állóképesség: {{ npc.ALLO }}</p>
                                    <p>Egészség: {{ npc.EG }}</p>
                                    <p>Szépség: {{ npc.SZEP }}</p>
                                    <p>Inteligencia: {{ npc.INT }}</p>
                                    <p>Akaraterő: {{ npc.AK }}</p>
                                    <p>Asztrál: {{ npc.ASZT }}</p>
                                </div>
                                <div class="col-sm">
                                    <p><b>Harcértékek: </b></p>
                                    <p>Kezdeményező Érték ( KÉ ): {{ npc.KE }}</p>
                                    <p>Támadó Érték ( TÉ ): {{ npc.TE }}</p>
                                    <p>Védő Érték ( VÉ ): {{ npc.VE }}</p>
                                    <p>Célzó Érték ( CÉ ): {{ npc.CE }}</p>
                                    <p>Sebzés ( Sp ): {{ npc.SP }}</p>
                                    <p>Sebzés Felfogó Érték ( SFÉ ): {{ npc.SFE }}</p>
                                </div>
                            </div>
                            <div>
                                <p><b>Az NJK álltalános leírása:</b></p>
                                <p>{{ npc.description }}</p>
                                <p><b>NJK Szerepe a játékban: </b></p>
                                <p>{{ npc.role }}</p>
                                <p><b>NJK viselkedési mintája: </b></p>
                                <p>{{ npc.sablon }}</p>
                            </div>
                            <div class="text-center m-2">
                                <button type="button" class="btn btn-success costum-btn m-3" @click="npcAdd(npc)">NJK hozzáadása a listához</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="tab-pane fade" id="pills-jins" role="tabpanel" aria-labelledby="pills-jins-tab">
                 <div v-for="npc, index in jins" :key="'JINS' + index" class="accordion-item">
                    <h2 class="accordion-header" :id="'JINS' + index + '-heading'">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" :data-bs-target="'#' + 'JINS' + index" aria-expanded="false" :aria-controls="'JINS' + index">
                            {{ npc.name }}
                        </button>
                    </h2>
                    <div :id="'JINS' + index" class="accordion-collapse collapse" :aria-labelledby="'JINS' + index + '-heading'">
                        <div class="accordion-body">
                            <div class="row">
                                <div class="col-sm">
                                    <p><b>Faj: </b> {{ npc.race }} </p>
                                    <p><b>Szint: </b> {{ npc.level }} </p>
                                    <p><b>TP érték: </b> {{ npc.exp }} </p>
                                    <p><b>Életerő:</b></p>
                                    <p>Életerő Pontok ( Ép ): {{ npc.EP }}</p>
                                    <p>Fájdalomtűrési Pontok ( Fp ): {{ npc.FP }}</p>
                                </div>
                                <div class="col-sm">
                                    <p><b>Tulajdonságok:</b></p>
                                    <p>Erő: {{ npc.ERO }}</p>
                                    <p>Gyorsaság: {{ npc.GYORS }}</p>
                                    <p>Ügyesség: {{ npc.UGY }}</p>
                                    <p>Állóképesség: {{ npc.ALLO }}</p>
                                    <p>Egészség: {{ npc.EG }}</p>
                                    <p>Szépség: {{ npc.SZEP }}</p>
                                    <p>Inteligencia: {{ npc.INT }}</p>
                                    <p>Akaraterő: {{ npc.AK }}</p>
                                    <p>Asztrál: {{ npc.ASZT }}</p>
                                </div>
                                <div class="col-sm">
                                    <p><b>Harcértékek: </b></p>
                                    <p>Kezdeményező Érték ( KÉ ): {{ npc.KE }}</p>
                                    <p>Támadó Érték ( TÉ ): {{ npc.TE }}</p>
                                    <p>Védő Érték ( VÉ ): {{ npc.VE }}</p>
                                    <p>Célzó Érték ( CÉ ): {{ npc.CE }}</p>
                                    <p>Sebzés ( Sp ): {{ npc.SP }}</p>
                                    <p>Sebzés Felfogó Érték ( SFÉ ): {{ npc.SFE }}</p>
                                </div>
                            </div>
                            <div>
                                <p><b>Az NJK álltalános leírása:</b></p>
                                <p>{{ npc.description }}</p>
                                <p><b>NJK Szerepe a játékban: </b></p>
                                <p>{{ npc.role }}</p>
                                <p><b>NJK viselkedési mintája: </b></p>
                                <p>{{ npc.sablon }}</p>
                            </div>
                            <div class="text-center m-2">
                                <button type="button" class="btn btn-success costum-btn m-3" @click="npcAdd(npc)">NJK hozzáadása a listához</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="tab-pane fade" id="pills-bestia" role="tabpanel" aria-labelledby="pills-bestia-tab">
                 <div v-for="npc, index in monsters" :key="'BESTIA' + index" class="accordion-item">
                    <h2 class="accordion-header" :id="'BESTIA' + index + '-heading'">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" :data-bs-target="'#' + 'BESTIA' + index" aria-expanded="false" :aria-controls="'BESTIA' + index">
                            {{ npc.name }}
                        </button>
                    </h2>
                    <div :id="'BESTIA' + index" class="accordion-collapse collapse" :aria-labelledby="'BESTIA' + index + '-heading'">
                        <div class="accordion-body">
                            <div class="row">
                                <div class="col-sm">
                                    <p><b>Faj: </b> {{ npc.race }} </p>
                                    <p><b>Szint: </b> {{ npc.level }} </p>
                                    <p><b>TP érték: </b> {{ npc.exp }} </p>
                                    <p><b>Életerő:</b></p>
                                    <p>Életerő Pontok ( Ép ): {{ npc.EP }}</p>
                                    <p>Fájdalomtűrési Pontok ( Fp ): {{ npc.FP }}</p>
                                </div>
                                <div class="col-sm">
                                    <p><b>Tulajdonságok:</b></p>
                                    <p>Erő: {{ npc.ERO }}</p>
                                    <p>Gyorsaság: {{ npc.GYORS }}</p>
                                    <p>Ügyesség: {{ npc.UGY }}</p>
                                    <p>Állóképesség: {{ npc.ALLO }}</p>
                                    <p>Egészség: {{ npc.EG }}</p>
                                    <p>Szépség: {{ npc.SZEP }}</p>
                                    <p>Inteligencia: {{ npc.INT }}</p>
                                    <p>Akaraterő: {{ npc.AK }}</p>
                                    <p>Asztrál: {{ npc.ASZT }}</p>
                                </div>
                                <div class="col-sm">
                                    <p><b>Harcértékek: </b></p>
                                    <p>Kezdeményező Érték ( KÉ ): {{ npc.KE }}</p>
                                    <p>Támadó Érték ( TÉ ): {{ npc.TE }}</p>
                                    <p>Védő Érték ( VÉ ): {{ npc.VE }}</p>
                                    <p>Célzó Érték ( CÉ ): {{ npc.CE }}</p>
                                    <p>Sebzés ( Sp ): {{ npc.SP }}</p>
                                    <p>Sebzés Felfogó Érték ( SFÉ ): {{ npc.SFE }}</p>
                                </div>
                            </div>
                            <div>
                                <p><b>Az NJK álltalános leírása:</b></p>
                                <p>{{ npc.description }}</p>
                                <p><b>NJK Szerepe a játékban: </b></p>
                                <p>{{ npc.role }}</p>
                                <p><b>NJK viselkedési mintája: </b></p>
                                <p>{{ npc.sablon }}</p>
                            </div>
                            <div class="text-center m-2">
                                <button type="button" class="btn btn-success costum-btn m-3" @click="npcAdd(npc)">NJK hozzáadása a listához</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
        <div class="text-center m-3">
            <button type="button" class="btn btn-secondary costum-btn m-3" @click="cancelEdit">Mégsem</button>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
    computed: {
        ...mapGetters('magusBestiarium', {
            aquirs: 'aquirs',
            animals : 'animals',
            monsters: 'monsters',
            demons: 'demons',
            jins: 'jins',
            elementals: 'elementals',
            undeads: 'undeads',
        }),
    },
    methods: {
        npcAdd(npc) {
           this.$emit('save', {npc: npc, index: null});
        },
        cancelEdit() {
            this.$emit('cancel');
        },
    },
}
</script>