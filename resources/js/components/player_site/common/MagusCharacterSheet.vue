<template>
    <div class="container-fluid bg-success">
        <div class="text-center p-4"><h2 class="text-white">magus karakterlap</h2></div>

        <!-- --------fizikai tulajdonsagok---------- -->
        <div class="bg-light border border-secondary rounded mb-3 p-3">
            <div class="row">
                <div class="col-5 text-wrap">
                        <h3 class="border-bottom border-secondary my-4 p-2">Erő </h3>
                        <h3 class="border-bottom border-secondary my-4 p-2">Gyorsaság </h3>
                        <h3 class="border-bottom border-secondary my-4 p-2">Ügyesség </h3>
                        <h3 class="border-bottom border-secondary my-4 p-2">Állóképesség </h3>
                        <h3 class="border-bottom border-secondary my-4 p-2">Egészség </h3>
                        <h3 class="border-bottom border-secondary my-4 p-2">Szépség </h3>
                        <h3 class="border-bottom border-secondary my-4 p-2">Inteligencia </h3>
                        <h3 class="border-bottom border-secondary my-4 p-2">Akaraterő </h3>
                        <h3 class="border-bottom border-secondary my-4 p-2">Asztrál </h3>
                </div>
                    <div class="col-4">
                        <h3 class="my-4"><span title="Ideiglenesen csökkentsd a tulajdonságot" class="btn btn-outline-danger btn-sm me-2" @click="ModEro('-')"><b>-</b></span> <span title="Visszaálitani a tulajdonságot eredeti értékére" class="btn btn-outline-dark btn-lg" @click="ModEro('0')"><b>{{ ero }}</b></span> <span title="Ideiglenesen növeld a tulajdonságot" class="btn btn-outline-success btn-sm ms-2" @click="ModEro('+')"><b>+</b></span></h3>
                        <h3 class="my-4"><span title="Ideiglenesen csökkentsd a tulajdonságot" class="btn btn-outline-danger btn-sm me-2" @click="ModGyors('-')"><b>-</b></span> <span title="Visszaálitani a tulajdonságot eredeti értékére" class="btn btn-outline-dark btn-lg" @click="ModGyors('0')"><b>{{ gyorsasag }}</b></span> <span title="Ideiglenesen növeld a tulajdonságot" class="btn btn-outline-success btn-sm ms-2" @click="ModGyors('+')"><b>+</b></span></h3>
                        <h3 class="my-4"><span title="Ideiglenesen csökkentsd a tulajdonságot" class="btn btn-outline-danger btn-sm me-2" @click="ModUgy('-')"><b>-</b></span> <span title="Visszaálitani a tulajdonságot eredeti értékére" class="btn btn-outline-dark btn-lg" @click="ModUgy('0')"><b>{{ ugyesseg }}</b></span> <span title="Ideiglenesen növeld a tulajdonságot" class="btn btn-outline-success btn-sm ms-2" @click="ModUgy('+')"><b>+</b></span></h3>
                        <h3 class="my-4"><span title="Ideiglenesen csökkentsd a tulajdonságot" class="btn btn-outline-danger btn-sm me-2" @click="ModAllo('-')"><b>-</b></span> <span title="Visszaálitani a tulajdonságot eredeti értékére" class="btn btn-outline-dark btn-lg" @click="ModAllo('0')"><b>{{ allokepesseg }}</b></span> <span title="Ideiglenesen növeld a tulajdonságot" class="btn btn-outline-success btn-sm ms-2" @click="ModAllo('+')"><b>+</b></span></h3>
                        <h3 class="my-4"><span title="Ideiglenesen csökkentsd a tulajdonságot" class="btn btn-outline-danger btn-sm me-2" @click="ModEg('-')"><b>-</b></span> <span title="Visszaálitani a tulajdonságot eredeti értékére" class="btn btn-outline-dark btn-lg" @click="ModEg('0')"><b>{{ egeszseg }}</b></span> <span title="Ideiglenesen növeld a tulajdonságot" class="btn btn-outline-success btn-sm ms-2" @click="ModEg('+')"><b>+</b></span></h3>
                        <h3 class="my-4"><span title="Ideiglenesen csökkentsd a tulajdonságot" class="btn btn-outline-danger btn-sm me-2" @click="ModSzep('-')"><b>-</b></span> <span title="Visszaálitani a tulajdonságot eredeti értékére" class="btn btn-outline-dark btn-lg" @click="ModSzep('0')"><b>{{ szepseg }}</b></span> <span title="Ideiglenesen növeld a tulajdonságot" class="btn btn-outline-success btn-sm ms-2" @click="ModSzep('+')"><b>+</b></span></h3>
                        <h3 class="my-4"><span title="Ideiglenesen csökkentsd a tulajdonságot" class="btn btn-outline-danger btn-sm me-2" @click="ModInt('-')"><b>-</b></span> <span title="Visszaálitani a tulajdonságot eredeti értékére" class="btn btn-outline-dark btn-lg" @click="ModInt('0')"><b>{{ inteligencia }}</b></span> <span title="Ideiglenesen növeld a tulajdonságot" class="btn btn-outline-success btn-sm ms-2" @click="ModInt('+')"><b>+</b></span></h3>
                        <h3 class="my-4"><span title="Ideiglenesen csökkentsd a tulajdonságot" class="btn btn-outline-danger btn-sm me-2" @click="ModAk('-')"><b>-</b></span> <span title="Visszaálitani a tulajdonságot eredeti értékére" class="btn btn-outline-dark btn-lg" @click="ModAk('0')"><b>{{ akarat }}</b></span> <span title="Ideiglenesen növeld a tulajdonságot" class="btn btn-outline-success btn-sm ms-2" @click="ModAk('+')"><b>+</b></span></h3>
                        <h3 class="my-4"><span title="Ideiglenesen csökkentsd a tulajdonságot" class="btn btn-outline-danger btn-sm me-2" @click="ModAszt('-')"><b>-</b></span> <span title="Visszaálitani a tulajdonságot eredeti értékére" class="btn btn-outline-dark btn-lg" @click="ModAszt('0')"><b>{{ asztral }}</b></span> <span title="Ideiglenesen növeld a tulajdonságot" class="btn btn-outline-success btn-sm ms-2" @click="ModAszt('+')"><b>+</b></span></h3>
                </div>
                <div class="col-3">
                    <div class="">
                        <div class="border border-secondary rounded my-4">
                            <p class="mb-3 p-1">Sp: <span>{{ spMod }}</span></p>
                        </div>            
                        <div class="border border-secondary rounded my-4">
                            <p class="mb-3 p-1">Mod: <span> +1</span></p>
                        </div>
                        <div class="border border-secondary rounded my-4">
                            <p class="mb-3 p-1">Mod: <span> 0</span></p>
                        </div>
                        <div class="border border-warning rounded my-5">
                            <p class=" p-2"><b>*Figyelem!!!</b></p>
                            <p class=" p-2">A <span title="Ideiglenesen csökkentsd a tulajdonságot" class="btn btn-outline-danger btn-sm me-2"><b>-</b></span> és <span title="Ideiglenesen növeld a tulajdonságot" class="btn btn-outline-success btn-sm ms-2"><b>+</b></span> gombok segitségével csak ideiglenesen lehet növelni vagy csökkenteni a tulajdonságot. A tulajdonság értékére kattintva, vagy a lap ujratöltésénél visszaáll az eredeti értékére.</p> 
                        </div>
                    </div>   
                </div> 
            </div>     
        </div>

        <!-- A 3 colt tartalmazo row -->
        <div class="row justify-content-evenly">
            <!-- az elso col a rowba -->
           <div class="col-lg">

               <!-- ------eletero--------- -->
               <div class=" bg-light border border-secondary rounded mb-4 p-3">
                   <h4 class="text-center mt-2">Életerő</h4>
                   <div class="row">
                       <div class="col border-end border-secondary">
                           <p>Max Ép</p>
                           <p class="border-bottom border-secondary">{{ maxEp }}</p>
                           <p>Akt Ép</p>
                           <p>{{ magusCharacter.AktEp }}</p>
                       </div>
                        <div class="col">
                            <p>Max Fp</p>
                            <p class="border-bottom border-secondary">{{ maxFp }}</p>
                            <p>Fp/szint</p>
                            <p>{{ Kaszt.FpSzint }}</p>
                        </div>
                   </div>
                   <p class="border-top border-secondary">Akt Fp</p>
                   <p>{{ magusCharacter.AktFp }}</p>
               </div>

                <!-- Pszi kepzetseg -->    
                <div class="bg-light border border-secondary rounded mb-3 p-3">
                   <h4 class="text-center mt-2">Pszi képzetség</h4>
                   <p>Iskola tipusa<span></span></p>
                   <p>Használat foka<span></span></p>
                   <p>Használat szintje<span></span></p>
                   <div class="row">
                       <div class="col  border-end border-secondary">
                           <p>Pszi/szint</p>
                           <p></p>
                       </div>
                        <div class="col">
                            <p>Max pszi pont</p>
                            <p></p>
                        </div>
                   </div>
                   <p class="border-top border-secondary">Akt pszi pont</p>
                   <p></p>
                </div>

                <!-- pszi pajzsok -->
                <div class=" bg-light border border-secondary rounded mb-3 p-3">
                   <h4 class="text-center mt-2">Pszi pajzok</h4>
                   <div class="row">
                       <div class="col border-end border-secondary">
                           <p>ASZTRÁL</p>
                           <p>Statikus</p>
                           <p class="border-bottom border-secondary">8</p>
                           <p>Dinamikus</p>
                           <p class="border-bottom border-secondary">8</p>
                           <p>ME</p>
                           <p>8</p>
                       </div>
                        <div class="col">
                            <p>MENTÁL</p>
                            <p>Statikus</p>
                           <p class="border-bottom border-secondary">8</p>
                           <p>Dinamikus</p>
                           <p class="border-bottom border-secondary">8</p>
                           <p>ME</p>
                           <p>8</p>
                        </div>
                   </div>          
               </div>

                <!-- mana -->
                 <div class=" bg-light border border-secondary rounded mb-3 p-3">
                   <h4 class="text-center mt-2">Mana-pontok</h4>
                   <div class="row">
                       <div class="col border-end border-secondary">
                           <p>Mp/szint</p>
                           <p>0</p>   
                       </div>
                        <div class="col">
                            <p>Max Mp</p>
                            <p>0</p>
                        </div>
                   </div>
                   <p class="border-top border-secondary">Akt Mp</p>
                   <p>0</p>
                   <p class="border-top border-secondary">Egyébb módositók</p>
                   <p>0</p>
               </div>
           </div>

            <!-- A masodik col a rowba -->
           <div class="col-lg">

                <!-- karakter altalanos adatai -->
                <div class="bg-light border border-secondary rounded mb-5 p-3">
                    <div>
                        <h4 class="text-center mt-5 border-bottom border-secondary">Karakter adatai</h4>
                        <p class="fs-4 border-bottom border-secondary mt-5"><span class="fw-bolder me-2">Név: </span><span>{{ magusCharacter.Nev }}</span></p>
                        <p class="fs-4 border-bottom border-secondary"><span class="fw-bolder me-2">Kaszt: </span><span>{{ Kaszt.name }}</span><button type="button" class="btn btn-outline-success btn-sm ms-2" data-bs-toggle="modal" data-bs-target="#kasztModal">i</button></p>
                        <p class="fs-4 border-bottom border-secondary"><span class="fw-bolder me-2">Faj: </span><span>{{ Faj.name }}</span><button type="button" class="btn btn-outline-success btn-sm ms-2" data-bs-toggle="modal" data-bs-target="#fajModal">i</button></p>
                        <p class="fs-4 border-bottom border-secondary"><span class="fw-bolder me-2">Jellem: </span><span>{{ Jellem.name }}</span> <button v-if="Jellem.name !== ''" type="button" class="btn btn-outline-success btn-sm ms-2" data-bs-toggle="modal" data-bs-target="#jellemModal">i</button></p>
                        <p class="fs-4 border-bottom border-secondary"><span class="fw-bolder me-2">Vallás: </span><span></span></p>
                        <p class="fs-4 border-bottom border-secondary"><span class="fw-bolder me-2">Szimbólum: </span><span>{{ magusCharacter.Szimbolum }}</span></p>
                        <p class="fs-4 border-bottom border-secondary"><span class="fw-bolder me-2">Szülőföld: </span><span>{{ magusCharacter.Szulofold }}</span></p>
                        <p class="fs-4 border-bottom border-secondary mb-5"><span class="fw-bolder me-2">Iskola: </span><span>{{ magusCharacter.Iskola }}</span></p>
                        <div class="my-5 text-center">
                            <p class="border border-secondary p-3 fs-1 fw-bolder">{{ magusCharacter.Szint }}</p>
                            <p class="fs-3 mt-2">Tapasztalati szint</p>
                        </div>
                    </div>
                </div>

                <!-- Tam per kor -->
                <div class="bg-light border border-secondary rounded mb-5 p-3">
                   <div class="row">
                       <div class="col border-end border-secondary">
                           <p>HM/szint</p>
                           <p>{{ hmSzint }}</p>
                       </div>
                        <div class="col">
                            <p>Tám/kör</p>
                            <p>{{ tamKor }}</p>
                        </div>
                   </div>
               </div>

                <!-- viselt pancel tipusa -->
                <div class="bg-light border border-secondary rounded mb-4 p-3">
                    <div>
                        <h4 class="text-center mt-2 pb-3 border-bottom border-secondary">Viselt páncél tipus</h4>
                        <p>Szegecselt bőr vért</p>
                    </div>
                </div>

                 <!-- viselt pancel ertekei -->
                <div class="bg-light border border-secondary rounded mb-4 p-3">
                    <div>
                        <h4 class="text-center mt-2 pb-3 border-bottom border-secondary">Viselt páncél módositói</h4>
                        <p class="fs-5"><span class="fw-bolder me-2">MGT: </span><span>0</span></p>
                        <p class="fs-5"><span class="fw-bolder me-2">Max SFÉ: </span><span>0</span></p>
                        <p class="fs-5"><span class="fw-bolder me-2">SFÉ: </span><span>0</span></p>
                    </div>
                </div>

           </div>
            <!-- A harmadik col a rowba -->
            <div class="col-lg">

               <div class="bg-light border border-secondary rounded mb-4 p-3">
                   <h4 class="text-center mt-2">Kezdeményező érték (KÉ)</h4>
                   <div class="row">
                       <div class="col border-end border-secondary">
                           <p>Alap</p>
                           <p class="border-bottom border-secondary">{{ Kaszt.KEalap}}</p>
                           <p>Osztott HM</p>
                           <p>{{ magusCharacter.KeSzint }}</p>
                       </div>
                        <div class="col">
                            <p>Aktuális</p>
                            <p class="border-bottom border-secondary">11</p>
                            <p>Fegyver nélkül</p>
                            <p>{{ keAlap }}</p>
                        </div>
                   </div>
                   <p class="border-top border-secondary">Módositók</p>
                   <p></p>
               </div>

                <div class="bg-light border border-secondary rounded mb-4 p-3">
                   <h4 class="text-center mt-2">Támadó érték (TÉ)</h4>
                   <div class="row">
                       <div class="col border-end border-secondary">
                           <p>Alap</p>
                           <p class="border-bottom border-secondary">{{ Kaszt.TEalap}}</p>
                           <p>Osztott HM</p>
                           <p>{{ magusCharacter.TeSzint }}</p>
                       </div>
                        <div class="col">
                            <p>Aktuális</p>
                            <p class="border-bottom border-secondary">11</p>
                            <p>Fegyver nélkül</p>
                            <p>{{ teAlap }}</p>
                        </div>
                   </div>
                   <p class="border-top border-secondary">Módositók</p>
                   <p></p>
               </div>

                <div class="bg-light border border-secondary rounded mb-4 p-3">
                   <h4 class="text-center mt-2">Védő érték (VÉ)</h4>
                   <div class="row">
                       <div class="col border-end border-secondary">
                           <p>Alap</p>
                           <p class="border-bottom border-secondary">{{ Kaszt.VEalap}}</p>
                           <p>Osztott HM</p>
                           <p>{{ magusCharacter.VeSzint }}</p>
                       </div>
                        <div class="col">
                            <p>Aktuális</p>
                            <p class="border-bottom border-secondary">11</p>
                            <p>Fegyver nélkül</p>
                            <p>{{ veAlap }}</p>
                        </div>
                   </div>
                   <p class="border-top border-secondary">Módositók</p>
                   <p></p>
               </div>

               <div class="bg-light border border-secondary rounded mb-4 p-3">
                   <h4 class="text-center mt-2">Célzó érték (CÉ)</h4>
                   <div class="row">
                       <div class="col border-end border-secondary">
                           <p>Alap</p>
                           <p class="border-bottom border-secondary">{{ ceFaj }}</p>
                           <p>Osztott HM</p>
                           <p>{{ magusCharacter.CeSzint }}</p>
                       </div>
                        <div class="col">
                            <p>Aktuális</p>
                            <p class="border-bottom border-secondary">11</p>
                            <p>Fegyver nélkül</p>
                            <p>{{ ceAlap }}</p>
                        </div>
                   </div>
                   <p class="border-top border-secondary">Módositók</p>
                   <p></p>
               </div>

               <!-- viselt pajzs tipus -->
                <div class="bg-light border border-secondary rounded mb-4 p-3">
                    <div>
                        <h4 class="text-center mt-2 pb-3 border-bottom border-secondary">Viselt pajzs tipusa</h4>
                        <p>Kis kerek fapajzs</p>
                    </div>
                </div>

                <!-- viselt pajzs erteke -->
                <div class="bg-light border border-secondary rounded mb-4 p-3">
                    <div>
                        <h4 class="text-center mt-2 pb-3 border-bottom border-secondary">Viselt pajzs módositói</h4>
                        <p class="fs-5"><span class="fw-bolder me-2">Pajzs VÉ: </span><span>0</span></p>
                        <p class="fs-5"><span class="fw-bolder me-2">Sebzés: </span><span>0</span></p>
                    </div>
                </div>
           </div>
        </div>

        <!-- fegyverek -->
        <div class="bg-light border border-secondary rounded mb-4 p-3">
            <table class="table table-striped">
                <thead>
                    <tr>
                        <th scope="col-1">Kézben</th>
                        <th scope="col-4">Fegyver</th>
                        <th scope="col-1">Tám/kör</th>
                        <th scope="col-1">KÉ</th>
                        <th scope="col-1">TÉ</th>
                        <th scope="col-1">VÉ</th>
                        <th scope="col-1">CÉ</th>
                        <th scope="col-2">Sebzés</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row" class="bg-success"></th>
                        <td>Hosszu kard</td>
                        <td>1</td>
                        <td>7</td>
                        <td>14</td>
                        <td>16</td>
                        <td>0</td>
                        <td>k10</td>
                    </tr>
                    <tr>
                        <th scope="row"></th>
                        <td>Tőr</td>
                        <td>2</td>
                        <td>10</td>
                        <td>2</td>
                        <td>7</td>
                        <td>0</td>
                        <td>k6</td>
                    </tr>
                    
                </tbody>
            </table>
        </div>

        <!-- kepzetsegek -->
        <div class="row justify-content-evenly">
            <div class="col-sm-4">
                <div class="bg-light border border-secondary rounded mb-4 p-3">
                    <div class="row">
                        <div class="col">
                            <p>Képzetség</p>
                            <p>pontok</p>
                        </div>
                        <div class="col border-end border-secondary">
                            <h3>9</h3>
                        </div>
                        <div class="col">
                            <p>KP/szint</p>
                            <p>11</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-sm-8">
                <div class="bg-light border border-secondary rounded mb-4 p-3">
                    <div class="row">
                        <div class="col-3">
                            <p>Egyébb</p>
                            <p>módositók</p>
                        </div>
                        <div class="col">
                            <p>leirás....</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- kepzetseg tablazat -->
         <div class="bg-light border border-secondary rounded mb-4 p-3">
            <table class="table table-striped">
                <thead>
                    <tr>
                        <th scope="col-8">Képzettség</th>
                        <th scope="col">KP</th>
                        <th scope="col">Szint</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Fegyverhasználat ( hosszukard )</td>
                        <td>3</td>
                        <td>Af</td>
                    </tr>
                    <tr>
                        <td>Futás</td>
                        <td>2</td>
                        <td>Af</td>
                    </tr>
                    
                </tbody>
            </table>
        </div>

        <!-- kincsek -->
        <div class="bg-light border border-secondary rounded mb-4 p-3">
            <div class="row">
                <div class="col text-center">
                    <h5>réz</h5>
                    <p>12</p>
                </div>
                <div class="col text-center">
                    <h5>ezüst</h5>
                    <p>2</p>
                </div>
                <div class="col text-center">
                    <h5>arany</h5>
                    <p>1</p>
                </div>
                <div class="col text-center">
                    <h5>mithrill</h5>
                    <p>0</p>
                </div>
                <div class="col text-center">
                    <h5>drágakő</h5>
                    <p>0</p>
                </div>
                <div class="col text-center">
                    <h5>egyébb</h5>
                    <p>0</p>
                </div>
            </div>
        </div>

        <!-- felszereles -->
        <div class="bg-light border border-secondary rounded mb-4 p-3">
            <table class="table table-striped">
                <thead>
                    <tr>
                        <th scope="col-6">Felszerelés</th>
                        <th scope="col-2">darab</th>
                        <th scope="col">elhelyezés</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Hálózsák</td>
                        <td>1</td>
                        <td>táska alatt</td>
                    </tr>
                    <tr>
                        <td>Fáklya</td>
                        <td>2</td>
                        <td>táskába</td>
                    </tr>                  
                </tbody>
            </table>
        </div>

        <!-- egyebb -->
        <div class="row justify-content-evenly">
            <div class="col">
                <div class="bg-light border border-secondary rounded mb-4 p-3">
                    <h4>Egyébb módositók</h4>
                    <p v-for="special, index in Faj.specials" :key="index">{{ special }}</p>
                </div>
            </div>
            <div class="col">
                <div class="bg-light border border-secondary rounded mb-4 p-3">
                    <h4>A Karakter leirása</h4>
                    <p>majd egyszer ha lesz karakter</p>
                </div>
            </div>
            <div class="col">
                <div class="bg-light border border-secondary rounded mb-4 p-3">
                    <h5>Tapasztalati pontok</h5>
                    <p class="border border-secondary rounded m-4 p-3">15</p>
                    <h5>Pontok a következő szinthez</h5>
                    <p class="border border-secondary rounded m-4 p-3">160</p>
                </div>
            </div>
        </div>

        <!-- -----Info Modals------- -->

        <!-- JELLEM -->
        <div class="modal fade" id="jellemModal" tabindex="-1" aria-labelledby="jellemModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="jellemModalLabel">{{ Jellem.name }}</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        {{ Jellem.description }}
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>

        <!-- FAJ -->
        <div class="modal fade" id="fajModal" tabindex="-1" aria-labelledby="fajModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="fajModalLabel"><b>{{ Faj.name }}</b></h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                       <p v-for="des, index in Faj.description" :key="index">{{ des }}</p>
                       <p> <b>Különleges képességek </b></p>
                       <p v-for="special, index in Faj.specials" :key="index">{{ special }}</p>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>

        <!-- KASZT -->
        <div class="modal fade" id="kasztModal" tabindex="-1" aria-labelledby="kasztModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="kasztModalLabel">{{ Kaszt.name }}</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <magus-kaszt-preview :kaszt="Kaszt" />
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
    import { mapGetters } from 'vuex';
    import MagusKasztPreview from './MagusKasztPreview.vue';
    export default {
        components: {
           MagusKasztPreview
        },
        props: {
            magusCharacter: Object,
        },
        data() {
            return {
                eroMod: 0,
                gyorsMod: 0,
                ugyMod: 0,
                alloMod: 0,
                egMod: 0,
                szepMod: 0,
                intMod: 0,
                akMod: 0,
                asztMod: 0,
            }
        },

        //COMPUTED----------------------------------
        computed: {
            ...mapGetters('magusAligments', {
                 aligment: 'aligment'
            }),
            ...mapGetters('magusRaces', {
                race: 'race'
            }),
            ...mapGetters('magusClasses', {
                magusKaszt: 'magusClass'
            }),
            spMod() {
                let sp = 0;
                if (this.ero > 16) {
                    sp = this.ero - 16;
                }
                return '+' + sp.toString();
            },
            Jellem() {
                let jellem = this.aligment(this.magusCharacter.Jellem);
                if (jellem) {
                    return jellem
                } else {
                    return {name: 'Not selected', description: 'Not selected'}
                }
            },
             Faj() {
                 let race = 'HUMAN';
                 if (this.magusCharacter) {
                     race = this.magusCharacter.Faj;
                 }
                return this.race(race);
            },
             Kaszt() {
                 let kaszt = 'HARCOS';
                 if (this.magusCharacter) {
                     kaszt = this.magusCharacter.Kaszt;
                 }
                return this.magusKaszt(kaszt);
            },
            ero() {
                let AlapEro = 0;
                if (this.magusCharacter) {
                    AlapEro = this.magusCharacter.ERO
                }
                return AlapEro + this.Faj.ERO + this.eroMod;
            },
            gyorsasag() {
                let AlapGyors = 0;
                if (this.magusCharacter) {
                    AlapGyors = this.magusCharacter.GYORS
                }
                return AlapGyors + this.Faj.GYORS + this.gyorsMod;
            },
             ugyesseg() {
                let AlapUgy = 0;
                if (this.magusCharacter) {
                    AlapUgy = this.magusCharacter.UGY
                }
                return AlapUgy + this.Faj.UGY + this.ugyMod;
            },
             allokepesseg() {
                let AlapAllo = 0;
                if (this.magusCharacter) {
                    AlapAllo = this.magusCharacter.ALLO
                }
                return AlapAllo + this.Faj.ALLO + this.alloMod;
            },
             egeszseg() {
                let AlapEg = 0;
                if (this.magusCharacter) {
                    AlapEg = this.magusCharacter.EG
                }
                return AlapEg + this.Faj.EG + this.egMod;
            },
             szepseg() {
                let AlapSzep = 0;
                if (this.magusCharacter) {
                    AlapSzep = this.magusCharacter.SZEP
                }
                return AlapSzep + this.Faj.SZEP + this.szepMod;
            },
             inteligencia() {
                let AlapInt = 0;
                if (this.magusCharacter) {
                    AlapInt = this.magusCharacter.INT
                }
                return AlapInt + this.Faj.INT + this.intMod;
            },
             akarat() {
                let AlapAk = 0;
                if (this.magusCharacter) {
                    AlapAk = this.magusCharacter.AK
                }
                return AlapAk + this.Faj.AK + this.akMod;
            },
             asztral() {
                let AlapAszt = 0;
                if (this.magusCharacter) {
                    AlapAszt = this.magusCharacter.ASZT
                }
                return AlapAszt + this.Faj.ASZT + this.asztMod;
            },
            maxEp() {
                let epMod = 0;
                if (this.egeszseg > 10) {
                    epMod = this.egeszseg - 10;
                }
                return this.Kaszt.Epalap + epMod;
            },
            maxFp() {
                let akMod = 0;
                let alloMod = 0;
                let szintMod = 0;
                if (this.akarat > 10) {
                    akMod = this.akarat - 10;
                };
                if (this.allokepesseg > 10) {
                    alloMod = this.allokepesseg - 10;
                };
                if (this.magusCharacter) {
                    szintMod = this.magusCharacter.FpSzint;
                }
                return this.Kaszt.Fpalap + akMod + alloMod + szintMod;
            },
            hmSzint() {
                return this.Kaszt.HmSzint + this.Kaszt.KESzintKotelezo + this.Kaszt.TESzintKotelezo + this.Kaszt.VESzintKotelezo + this.Kaszt.CESzintKotelezo;
            },
            tamKor() {
                if (this.gyorsasag > 15 && this.ugyesseg > 15) {
                    return 'A használt fegyver Tám/Köre +1';
                } else {
                    return 'A használt fegyver Tám/Köre';
                }
            },
            keAlap() {
                let gyorsMod = 0;
                let ugyMod = 0;
                if (this.gyorsasag > 10) {
                    gyorsMod = this.gyorsasag - 10;
                }
                if (this.ugyesseg > 10) {
                    ugyMod = this.ugyesseg - 10;
                }
                return this.Kaszt.KEalap + (this.Kaszt.KESzintKotelezo * this.magusCharacter.Szint) + this.magusCharacter.KeSzint + gyorsMod + ugyMod;
            },
            teAlap() {
                let gyorsMod = 0;
                let ugyMod = 0;
                let eroMod = 0;
                if (this.gyorsasag > 10) {
                    gyorsMod = this.gyorsasag - 10;
                }
                if (this.ugyesseg > 10) {
                    ugyMod = this.ugyesseg - 10;
                }
                if (this.ero > 10) {
                    eroMod = this.ero - 10;
                }
                return this.Kaszt.TEalap + (this.Kaszt.TESzintKotelezo * this.magusCharacter.Szint) + this.magusCharacter.TeSzint + gyorsMod + ugyMod + eroMod;
            },
             veAlap() {
                let gyorsMod = 0;
                let ugyMod = 0;
                if (this.gyorsasag > 10) {
                    gyorsMod = this.gyorsasag - 10;
                }
                if (this.ugyesseg > 10) {
                    ugyMod = this.ugyesseg - 10;
                }
                return this.Kaszt.VEalap + (this.Kaszt.VESzintKotelezo * this.magusCharacter.Szint) + this.magusCharacter.VeSzint + gyorsMod + ugyMod;
            },
            ceAlap() {
                let ugyMod = 0;
                let ce = 0;
                if (this.ugyesseg > 10) {
                    ugyMod = this.ugyesseg - 10;
                }
                if (this.Faj.CE > 0) {
                    ce = this.Faj.CE;
                } else {
                    ce = this.Kaszt.CEalap;
                }
                return ce + (this.Kaszt.CESzintKotelezo * this.magusCharacter.Szint) + this.magusCharacter.CeSzint + ugyMod;
            },
            ceFaj() {
                let ce = 0;
                if (this.Faj.CE > 0) {
                    ce = this.Faj.CE;
                } else {
                    ce = this.Kaszt.CEalap;
                }
                return ce;
            }
        },

        //METHODS-------------------------------------
        methods: {
            ModEro(mod) {    
                if (mod === '+') {
                    this.eroMod++;
                };
                 if (mod === '-') {
                   this.eroMod--;
                };
                 if (mod === '0') {
                    this.eroMod = 0;
                }
            },
            ModGyors(mod) {  
                if (mod === '+') {
                    this.gyorsMod++;
                };
                 if (mod === '-') {
                   this.gyorsMod--;
                };
                 if (mod === '0') {
                    this.gyorsMod = 0;
                }
            },
            ModUgy(mod) {         
                if (mod === '+') {
                    this.ugyMod++;
                };
                 if (mod === '-') {
                   this.ugyMod--;
                };
                 if (mod === '0') {
                    this.ugyMod = 0;
                }
            },
             ModAllo(mod) {         
                if (mod === '+') {
                    this.alloMod++;
                };
                 if (mod === '-') {
                   this.alloMod--;
                };
                 if (mod === '0') {
                    this.alloMod = 0;
                }
            },
             ModEg(mod) {         
                if (mod === '+') {
                    this.egMod++;
                };
                 if (mod === '-') {
                   this.egMod--;
                };
                 if (mod === '0') {
                    this.egMod = 0;
                }
            },
            ModSzep(mod) {         
                if (mod === '+') {
                    this.szepMod++;
                };
                 if (mod === '-') {
                   this.szepMod--;
                };
                 if (mod === '0') {
                    this.szepMod = 0;
                }
            },
            ModInt(mod) {         
                if (mod === '+') {
                    this.intMod++;
                };
                 if (mod === '-') {
                   this.intMod--;
                };
                 if (mod === '0') {
                    this.intMod = 0;
                }
            },
            ModAk(mod) {         
                if (mod === '+') {
                    this.akMod++;
                };
                 if (mod === '-') {
                   this.akMod--;
                };
                 if (mod === '0') {
                    this.akMod = 0;
                }
            },
            ModAszt(mod) {         
                if (mod === '+') {
                    this.asztMod++;
                };
                 if (mod === '-') {
                   this.asztMod--;
                };
                 if (mod === '0') {
                    this.asztMod = 0;
                }
            },
        },
        mounted() {
            console.log('Component mounted.')
        }
    }
</script>