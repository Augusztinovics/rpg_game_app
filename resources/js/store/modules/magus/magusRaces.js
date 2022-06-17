/**-------------------------------------------
 * 
 * STORE FOR MAGUS RACES
 * 
 * -------------------------------------------
 */
 const state = {
    //fajok
    races: [
        {
            id: 'HUMAN',
            name: 'Ember',
            ERO: 0,
            GYORS: 0,
            UGY: 0,
            ALLO: 0,
            EG: 0,
            SZEP: 0,
            INT: 0,
            AK: 0,
            ASZT: 0,
            forbittenClasses: [],
            CE: 0,
            specials: [],
            skills: [],
            description: ['Az emberek Ynev legelterjetebb népe. Nem rendelkeznek semilyen különleges képességgel, a kasztok és leirások átlaga rájuk vonatkozik. Átlag életkoruk ugy 60-70 év.']
        },
        {
            id: 'ELF',
            name: 'Elf',
            ERO: -2,
            GYORS: 1,
            UGY: 1,
            ALLO: -1,
            EG: 0,
            SZEP: 1,
            INT: 0,
            AK: 0,
            ASZT: 0,
            forbittenClasses: ['LOVAG', 'TOLVAJ', 'PAP', 'PAPLOVAG', 'HARCMUVESZ', 'KARDMUVESZ', 'BOSZORKANY', 'BOSZORKANYMESTER', 'TUZVARAZSLO'],
            CE: 20,
            specials: ['Kétszer jobb hallás', 'Két és félszer jobb látás', 'Infralátás 50 méterig', 'Nekromancia érzékenység -8'],
            skills: [
                {
                    name: 'Lovaglás',
                    level: 'MF',
                    kp: 0,
                },
                {
                    name: 'Erdőjárás',
                    level: 'MF',
                    kp: 0,
                },
                {
                    name: 'Idomitás',
                    level: 'MF',
                    kp: 0,
                }
            ],
            description: [
                'Az elfeket két különböző csoportba oszthatjuk: a közönséges elfekre - akiknek jó néhány alfaja létezik, és az óelfekre. Miután a MAGUS rendszerében csak közönséges elffel lehet játszani, ezért itt és most csak rájuk térünk ki.',
                'Negyvenezer éve még csak Dél-Zneven léteztek elfek. Származásukat illetően csupán legendáikra hagyatkozhatunk - a legtöbb bölcs Larion szigetét tartja őshazájuknak. A kráni Sötét Hatalom megjelenése után a Délen virágzó elf birodalom hanyatlásnak indult. Életterük egyre szűkült, némely csoportjaik a fenyegetés elől Északra menekültek, mig a délen maradottak beszorultak Tzsson Larba, hogy azután onnan is tovább meneküljenek Lasmosiüfélszigetre. Itt élnek ma is, Elfendelnek nevezett királyságukban. Északra költözött társaik szerencsésebbnek bizonyultak: a Nyugati-óceán partjától a kontinens belsejéig húzódó komor erdőségekben - távol majd minden emberi civilizációtól - telepedtek meg. Birodalmukat Sirenar Szövetség néven jegyzik az ynevi bölcsek.',
                'Az elf elzárkózásra hajlamos, a világot csöndes méltóságal szemlélő nép - egyes feltételezések szerint a lélekvándorlás egy magasabb lépcsőfokát jelentik. Mérhetelenül hosszú ideig élnek az embernépekhez képest, s ez gondolkodásmódjukra, és viselkedésükre egyaránt rányomja bélyegét. Türelmesek, emberi mércével gyönyörűek, bölcsességük, felhalmozott tudásuk elképesztő. A természet gyermekei, mindenki másnál jobban ismerik az élővilágot, tisztelettel és végtelen megbecsüléssel közelitenek hozzá. Városaik, településeik erdők mélyén állnak, követ csak elvétve használnak felépitésükhöz, ám művészetük és hozzáértésük folytán a fából készült házaik vetekednek a leggondosabban, legpazarabban megépitett kőpalotával is. Idejük nagy részét elmélkedéssel, művészeteik gyakorlásával töltik, de az univerzum legkitűnőbb ijászai is egyben, s nem kétséges: náluk jobb lovasokat még nem hordott hátán Ynev. Testfelépitésük, mozgásuk inkább könnyed és légies, mint erőtől duzzadó, de gyorsak akár a szarvas, és kézügyességük is párját ritkitja. Bőrük halovány, hajuk aranyszőke, szemük borostyánszinű vagy mélykék. Mindent összevetve csodálatos nép ez: egyedi- bárhova is vetődjenek Yneven - csodálatot, olykor azonban, a babonaságok, előitéletek miatt, félelmet váltanak ki más fajok szülötteiből. Közönbös azonban senki sem marad irántuk.',
                'Nyugodt, türelmes életüket, megszokott környezetüket nem szivessen hagyják el, az embernépek mentalitása teljesen idegen tőlük. Nyiltak és egyenesek, igaztalanságon, vagy hazugságon nem kaphatja őket még ellenségeik sem. Jellemük az Élet és a Rend értékeinek leghivebb tükre. Hogy olykor rosz hirüket keltik, arról kizárólag az emberi civilizációban nevelkedett - s attól megrontott - fajtársaik tehetnek, akiket - bár látszólag mindenben azonosak elf birodalmakban élő társaikkal - gondolkodását, erkölcseit már eltorzitotta a fiatalabb népek kultúrája.',
                'Igazi elfek csak igen ritkán kapják el a kalandozó-kórt, igy a legtöbb elf kalandozó valamelyik emberbirodalomból, annak elf közösségéből származik. Noha nem zárható ki, hogy az ősi földön élők némelyikében is kiváncsiság ebred a születésük óta jócskán megváltozott külvilág iránt, ennek valószinűsége egy az ezerhez.',
                'Bármilyen eltorzult is az emberek közt nevelkedett elfek értékrendje, némely ösztönüket sosem vetkőzik le. Minden elf - származzon bárhonnét - nehezen viseli a kővárosokat, s a csillagos eget jobban kedveli fedél gyanánt, mint a cserepes tetőt. Az Élet szeretete ott fészkell bennük, s -legyenek bár rettenthetetlen harcosok, netán hires gladiátorok - az öncélú pusztitás, a kegyetlenség távol áll tőlük. A természet egyébb teremtményeivel kialakult évezredes jó kapcsolat sem múlik el nyomtalanul: nincs az az elf, aki tétlenül tűrné, hogy egy állatot megkinozzanak, vagy egy ligetet fölöslegesen kivágjanak. Ez persze kölcsönös, az erdő-mező vadjai ösztönös bizalommal viseltetnek irányukban, s ha egy nekivadult lovat, vagy örjöngő kutyát kell lecsillapitani, azt elfeknél jobban senki sem képes teljesiteni.',
                'Az elfek természetétől leginkább a feketemágia - Nekromancia - esik távol, ezért az efféle varázslatoknak kevésbé birnak ellenszegülni, mint mások.'
            ]
        },
        {
            id: 'HALF_ELF',
            name: 'Félelf',
            ERO: -1,
            GYORS: 1,
            UGY: 0,
            ALLO: 0,
            EG: 0,
            SZEP: 0,
            INT: 0,
            AK: 0,
            ASZT: 0,
            forbittenClasses: ['PAP', 'PAPLOVAG', 'TUZVARAZSLO'],
            CE: 10,
            specials: ['Másfélszer jobb hallás', 'Kiváló futó', 'Infralátás 10 méterig', 'Nekromancia érzékenység -6'],
            skills: [
                {
                    name: 'Lovaglás',
                    level: 'MF',
                    kp: 0,
                },
                {
                    name: 'Idomitás',
                    level: 'MF',
                    kp: 0,
                }
            ],
            description: [
                'A félelfek Ynev legkülönösebb jellemű lényei. Egyik szülőjük elf, mig a másik ember, s ez a kettőség egész - igen hosszú - életük során végigkiséri őket. Igazán nem képesek beilleszkedni egyik nép világába sem - az embereknek túlságosan elfek, az elfeknek túlságosan emberek. Gondolkodásmódjukban közelebb állnak az emberekhez - noha mindég egyfajta töprengő, a világ dolgain merengő hozzáállás jellemzi őket -, külsejük azonban magán hordozza elfőseik örökségét. Légiesebbek, könnyedebbek mint az emberek - igaz, az elfeknél erősebb testalkatúak -,vonásaik megnyerőek, hajuk szőke, olykor ezüstszin, szemük legtöbbször ibolyakék. Állandóan nyughatatlanok. Egyszer egy Dorani bölcs azt találta állitani róluk, hogy örökké helyüket keresik a világban, s ez kissé profán általánositás, van benn némi igazság. Igen sok kalandozó kerül ki közülük, ennek oka nyilván a fenti tényekben keresendő. A két faj számtalan kitünő tulajdonságát egyesiti, ám vég nélkül - önmaguk számára is megmafyarázhatatlan - elégedetlenségük olyan átok, mely megakadályozza őket abban, hogy népük döntő befolyásolással birjon a világ sorsának alakitásában. A természet furcsa fintora, hogy két félelf utódja is félelf lesz, sőt egy flelf és egy tisztavérú elf frigyéből is csak félelf születhet. Félelf és ember kapcsolatából mindég ember születik.',
                'A félelfek is rajongva szeretik a természetet és az élőlényeket, noha korántsem olyan töretlen a kapcsolatuk vele, mint tisztavérű társaiké. Éltalában az Élet és a Rend erkölcsei szerint élik életüket, noha találhatunk köztük velejéig romlott, önmaguktól és a világtól megkeseredett gyilkosokat is. Hazudni hamar megtanultak, ám a barátság szentségét még a legelvetemültebbek sem gyalázzák meg.',
                'A félelfek természetétől - akárcsak elf szüleikétől - leginkább a Nekromancia esik távol, ezért az efféle varázslatoknak kevésbé birnak ellenszegülni, mint mások.'
            ]
        },
        {
            id: 'TORPE',
            name: 'Törpe',
            ERO: 1,
            GYORS: 0,
            UGY: 0,
            ALLO: 1,
            EG: 1,
            SZEP: -2,
            INT: -1,
            AK: 0,
            ASZT: -1,
            forbittenClasses: ['FEJVADASZ', 'LOVAG', 'BARD', 'PAPLOVAG', 'HARCMUVESZ', 'KARDMUVESZ', 'BOSZORKANY', 'BOSZORKANYMESTER', 'TUZVARAZSLO'],
            CE: 0,
            specials: ['Infralátás 30 méter', 'Kiválló időérzék', 'Föld alatt mélységérzett - 2 méter pontosság', '+-5 év pontossággal meghatározza egy épület korát'],
            skills: [
                {
                    name: 'Csabdafelfedezés',
                    level: '35%',
                    kp: 0,
                },
                {
                    name: 'Titkosajtó keresés',
                    level: '30%',
                    kp: 0,
                }
            ],
            description: [
                'A törpék Beriquelről érkeztek, a P.sz. 1200-as években. Hamarosan barátságot kötöttek az Északi Szövetség népeivel, akik eleinte ugyan különösnek találták ezt az apró termetű fajt, mely szokásában és gondolkodásában igen elüt az embertől - ám rövidesen rádöbbentek, milyen kemény harcosokra, milyen hű barátokra tettek szert.',
                'Való igaz: a törpéknél, az épitészet, a statika szerelmeseinél keresve sem találni rendithetetlenebb társakat. Életük egész tartalma alatt az állandóságot a nyugalmat keresik - ám mivel Ynev és a valóság talaján is két lábbal állnak, pontosan felmérik, hogy az állandósághoy, a nyugalomhoz és a kényelemhez munkára, vagyonra, vagyis kiemelkedetségre van szükség.',
                'Az átlag fölé emelkedés egyik módja: maradandót alkotni. Aki látot már törpék épitette palotát, netán megfordult a Tarini-hegység mélyén kialakitott barlangvárosaik valamelyikében, tudja, miként viszonyulnak ehhez a kérdéshez. Épületeik, hidjaik bámulatosan szilárdak, századokig, sőt, akár ezredévekig is dacolnak az idővel. A törpék azonban nem csak az épitészet terén alkottak nagyot. Erről azok mondhatnának bővebbet, akik viseltek már ütközetben törpék álltal kovácsolt páncélt, láncinget és pajzsot, vagy küzdöttek már tarini csadabárddal nem tarini vértbe öltözött szerencsétlenekkel.',
                'A kiemelkedés másik bevett módja a katonáskodás - s Tarin törpéi nagy számban élnek ezzel a lehetőséggel. Az Északi Szövetség ármádiájának gyalogos derékhadát adják háború idején, de rettegést keltenek az ellenség szivében villámgyors mozgású rackla-lovasaik is.Feljebbvalóik parancsát mindenkor képességeik legjavát adva teljesitik. Ha nem természetes akadály álja útjukat, szétrombolják, legyen az fatörzsek torlasza, vagy roppant kövekből rakott fal, ha szorult helyzetbe kerülnek, utolsó törpéig harcolnak, megadni sosem szokták magukat. Valamennyi törpe harcos számára adott az előmenetel lehetősége, hadijelvényeik alatt nincs más mérce, csak a rátermettség.',
                'Azok a törpék akik a fejüket kalandozásra adják, a harmadik megoldás mellett teszik le voksukat, mely kockázat tekintetében vetekszik ugyan a másodikkal, viszont gyorsabb - és bisztosabb - kiemelkedést tesz lehetővé az elsőnél. Északon gyakorta látható, az aranyaikat elmélyülten számoló törpe kalandozók. Erionnál meszebbre azonban nem szivesen merészkednek, mert Dél emberközpontú birodalmai nem igazán az ő izlésüknek valók.',
                'Ha további nyugodt életük anyagi/erkölcsi feltételeit biztositva látják, visszavonulnak otthonukba, melyet - minden tartozékával együtt - egy royzomák elszántságával védenek. Előfordul persze, hogy egy - kezdetben csak anyagi érdekből kalandozó - törpe a nagyvilág, a kötetlen munka és a kockázat szerelmesévé válik, s egész hosszú ( kb 800 év ) életét ennek szenteli.',
                'A törpék átlagos testmagassága 130 cm, alkatuk tömbszerű, nagy erőkifejtésre képesek, kitartásuk párját ritkitja. Arcuk széles, gyakorta - de nem mindég - szakáll ékiti. Szemük sötét árnyalatú, az egészen ősi, beriqueli vérvonal képviselőié azonban gleccserkék is lehet. Rendszerint csak egyszer házasodnak, a hűség fogalmának, az emberektől eltérő módon, csak egy változatát, a sirig tartót ismerik.'
            ]
        },
        {
            id: 'HALF_ORK',
            name: 'Udvari Ork',
            ERO: 2,
            GYORS: 0,
            UGY: 0,
            ALLO: 1,
            EG: 2,
            SZEP: -3,
            INT: -1,
            AK: 0,
            ASZT: -3,
            forbittenClasses: ['LOVAG', 'BARD', 'PAPLOVAG', 'HARCMUVESZ', 'KARDMUVESZ', 'BOSZORKANY', 'TUZVARAZSLO', 'VARAZSLO'],
            CE: 0,
            specials: ['Infralátás 15 méterig', 'Föld alatti mélységérzett - 4 méter pontosság', 'Ötször jobb szaglás'],
            skills: [
                {
                    name: 'Csabdafelfedezés',
                    level: '20%',
                    kp: 0,
                },
                {
                    name: 'Titkosajtó keresés',
                    level: '10%',
                    kp: 0,
                }
            ],
            description: [
                ''
            ]
        }
    ]
};
const getters = {
    races: (state) => {
        return state.races;
    },
    race: (state) => (id) => {
        return state.races.find(r => r.id === id) ?? state.races[0];
    }
};
const mutations = {};
const actions = {};

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions,
}