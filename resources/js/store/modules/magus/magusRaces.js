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
            skills: {
                af: [],
                mf: [],
                precent: {
                    maszas: 0,
                    eses: 0,
                    ugras: 0,
                    lopakodas: 0,
                    rejtozes: 0,
                    koteltanc: 0,
                    zsebmetszes: 0,
                    csabdafelfedezes: 0,
                    zarnyitas: 0,
                    titkosajto: 0,
                },
            },
            description: ['Az emberek Ynev legelterjetebb népe. Nem rendelkeznek semilyen különleges képességgel, a kasztok és leírások átlaga rájuk vonatkozik. Átlag életkoruk úgy 60-70 év.']
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
            forbittenClasses: ['LOVAG', 'TOLVAJ', 'PAP', 'PAP_DONVIK', 'PAP_AREL', 'PAP_THARR', 'PAP_KYEL', 'PAPLOVAG', 'HARCMUVESZ', 'KARDMUVESZ', 'BOSZORKANY', 'BOSZORKANYMESTER', 'TUZVARAZSLO'],
            CE: 20,
            specials: ['Kétszer jobb hallás', 'Két és félszer jobb látás', 'Infralátás 50 méterig', 'Nekromancia érzékenység -8'],
            skills: {
                af: [],
                mf: ['LOVAGLAS', 'IDOMITAS', 'ERDOJARAS'],
                precent: {
                    maszas: 0,
                    eses: 0,
                    ugras: 0,
                    lopakodas: 0,
                    rejtozes: 0,
                    koteltanc: 0,
                    zsebmetszes: 0,
                    csabdafelfedezes: 0,
                    zarnyitas: 0,
                    titkosajto: 0,
                },
            },
            description: [
                'Az elfeket két különböző csoportba oszthatjuk: a közönséges elfekre - akiknek jó néhány alfaja létezik, és az óelfekre. Miután a MAGUS rendszerében csak közönséges elffel lehet játszani, ezért itt és most csak rájuk térünk ki.',
                'Negyvenezer éve még csak Dél-Yneven léteztek elfek. Származásukat illetően csupán legendáikra hagyatkozhatunk - a legtöbb bölcs Larion szigetét tartja őshazájuknak. A kráni Sötét Hatalom megjelenése után a Délen virágzó elf birodalom hanyatlásnak indult. Életterük egyre szűkült, némely csoportjaik a fenyegetés elől Északra menekültek, míg a délen maradottak beszorultak Tysson Larba, hogy azután onnan is tovább meneküljenek Lasmosi-félszigetre. Itt élnek ma is, Elfendelnek nevezett királyságukban. Északra költözött társaik szerencsésebbnek bizonyultak: a Nyugati-óceán partjától a kontinens belsejéig húzódó komor erdőségekben - távol majd minden emberi civilizációtól - telepedtek meg. Birodalmukat Sirenar Szövetség néven jegyzik az ynevi bölcsek.',
                'Az elf elzárkózásra hajlamos, a világot csöndes méltóságal szemlélő nép - egyes feltételezések szerint a lélekvándorlás egy magasabb lépcsőfokát jelentik. Mérhetelenül hosszú ideig élnek az embernépekhez képest, s ez gondolkodásmódjukra, és viselkedésükre egyaránt rányomja bélyegét. Türelmesek, emberi mércével gyönyörűek, bölcsességük, felhalmozott tudásuk elképesztő. A természet gyermekei, mindenki másnál jobban ismerik az élővilágot, tisztelettel és végtelen megbecsüléssel közelítenek hozzá. Városaik, településeik erdők mélyén állnak, követ csak elvétve használnak felépítésükhöz, ám művészetük és hozzáértésük folytán a fából készült házaik vetekednek a leggondosabban, legpazarabban megépített kőpalotával is. Idejük nagy részét elmélkedéssel, művészeteik gyakorlásával töltik, de az univerzum legkitűnőbb íjászai is egyben, s nem kétséges: náluk jobb lovasokat még nem hordott hátán Ynev. Testfelépítésük, mozgásuk inkább könnyed és légies, mint erőtől duzzadó, de gyorsak akár a szarvas, és kézügyességük is párját ritkítja. Bőrük halovány, hajuk aranyszőke, szemük borostyánszínű vagy mélykék. Mindent összevetve csodálatos nép ez: egyedi- bárhova is vetődjenek Yneven - csodálatot, olykor azonban, a babonaságok, előítéletek miatt, félelmet váltanak ki más fajok szülötteiből. Közönbös azonban senki sem marad irántuk.',
                'Nyugodt, türelmes életüket, megszokott környezetüket nem szívessen hagyják el, az embernépek mentalitása teljesen idegen tőlük. Nyiltak és egyenesek, igaztalanságon, vagy hazugságon nem kaphatja őket még ellenségeik sem. Jellemük az Élet és a Rend értékeinek leghívebb tükre. Hogy olykor rosz hírüket keltik, arról kizárólag az emberi civilizációban nevelkedett - s attól megrontott - fajtársaik tehetnek, akiket - bár látszólag mindenben azonosak elf birodalmakban élő társaikkal - gondolkodását, erkölcseit már eltorzította a fiatalabb népek kultúrája.',
                'Igazi elfek csak igen ritkán kapják el a kalandozó-kórt, igy a legtöbb elf kalandozó valamelyik emberbirodalomból, annak elf közösségéből származik. Noha nem zárható ki, hogy az ősi földön élők némelyikében is kiváncsiság ébred a születésük óta jócskán megváltozott külvilág iránt, ennek valószínűsége egy az ezerhez.',
                'Bármilyen eltorzult is az emberek közt nevelkedett elfek értékrendje, némely ösztönüket sosem vetkőzik le. Minden elf - származzon bárhonnét - nehezen viseli a kővárosokat, s a csillagos eget jobban kedveli fedél gyanánt, mint a cserepes tetőt. Az Élet szeretete ott fészkell bennük, s -legyenek bár rettenthetetlen harcosok, netán híres gladiátorok - az öncélú pusztítás, a kegyetlenség távol áll tőlük. A természet egyébb teremtményeivel kialakult évezredes jó kapcsolat sem múlik el nyomtalanul: nincs az az elf, aki tétlenül tűrné, hogy egy állatot megkínozzanak, vagy egy ligetet fölöslegesen kivágjanak. Ez persze kölcsönös, az erdő-mező vadjai ösztönös bizalommal viseltetnek irányukban, s ha egy nekivadult lovat, vagy örjöngő kutyát kell lecsillapítani, azt elfeknél jobban senki sem képes teljesíteni.',
                'Az elfek természetétől leginkább a feketemágia - Nekromancia - esik távol, ezért az efféle varázslatoknak kevésbé bírnak ellenszegülni, mint mások.'
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
            forbittenClasses: ['PAP', 'PAP_DONVIK', 'PAP_AREL', 'PAP_THARR', 'PAP_KYEL', 'PAPLOVAG', 'TUZVARAZSLO'],
            CE: 10,
            specials: ['Másfélszer jobb hallás', 'Kiváló futó', 'Infralátás 10 méterig', 'Nekromancia érzékenység -6'],
            skills: {
                af: [],
                mf: ['LOVAGLAS', 'IDOMITAS'],
                precent: {
                    maszas: 0,
                    eses: 0,
                    ugras: 0,
                    lopakodas: 0,
                    rejtozes: 0,
                    koteltanc: 0,
                    zsebmetszes: 0,
                    csabdafelfedezes: 0,
                    zarnyitas: 0,
                    titkosajto: 0,
                },
            },
            description: [
                'A félelfek Ynev legkülönösebb jellemű lényei. Egyik szülőjük elf, mig a másik ember, s ez a kettőség egész - igen hosszú - életük során végigkíséri őket. Igazán nem képesek beilleszkedni egyik nép világába sem - az embereknek túlságosan elfek, az elfeknek túlságosan emberek. Gondolkodásmódjukban közelebb állnak az emberekhez - noha mindég egyfajta töprengő, a világ dolgain merengő hozzáállás jellemzi őket -, külsejük azonban magán hordozza elfőseik örökségét. Légiesebbek, könnyedebbek mint az emberek - igaz, az elfeknél erősebb testalkatúak -,vonásaik megnyerőek, hajuk szőke, olykor ezüstszín, szemük legtöbbször ibolyakék. Állandóan nyughatatlanok. Egyszer egy Dorani bölcs azt találta állítani róluk, hogy örökké helyüket keresik a világban, s ez kissé profán általánosítás, van benn némi igazság. Igen sok kalandozó kerül ki közülük, ennek oka nyilván a fenti tényekben keresendő. A két faj számtalan kitünő tulajdonságát egyesíti, ám vég nélkül - önmaguk számára is megmagyarázhatatlan - elégedetlenségük olyan átok, mely megakadályozza őket abban, hogy népük döntő befolyásolással bírjon a világ sorsának alakításában. A természet furcsa fintora, hogy két félelf utódja is félelf lesz, sőt egy félelf és egy tisztavérű elf frigyéből is csak félelf születhet. Félelf és ember kapcsolatából mindég ember születik.',
                'A félelfek is rajongva szeretik a természetet és az élőlényeket, noha korántsem olyan töretlen a kapcsolatuk vele, mint tisztavérű társaiké. Álltalában az Élet és a Rend erkölcsei szerint élik életüket, noha találhatunk köztük velejéig romlott, önmaguktól és a világtól megkeseredett gyilkosokat is. Hazudni hamar megtanultak, ám a barátság szentségét még a legelvetemültebbek sem gyalázzák meg.',
                'A félelfek természetétől - akárcsak elf szüleikétől - leginkább a Nekromancia esik távol, ezért az efféle varázslatoknak kevésbé bírnak ellenszegülni, mint mások.'
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
            skills: {
                af: [],
                mf: [],
                precent: {
                    maszas: 0,
                    eses: 0,
                    ugras: 0,
                    lopakodas: 0,
                    rejtozes: 0,
                    koteltanc: 0,
                    zsebmetszes: 0,
                    csabdafelfedezes: 35,
                    zarnyitas: 0,
                    titkosajto: 30,
                },
            },
            description: [
                'A törpék Beriquelről érkeztek, a P.sz. 1200-as években. Hamarosan barátságot kötöttek az Északi Szövetség népeivel, akik eleinte ugyan különösnek találták ezt az apró termetű fajt, mely szokásában és gondolkodásában igen elüt az embertől - ám rövidesen rádöbbentek, milyen kemény harcosokra, milyen hű barátokra tettek szert.',
                'Való igaz: a törpéknél, az építészet, a statika szerelmeseinél keresve sem találni rendíthetetlenebb társakat. Életük egész tartalma alatt az állandóságot a nyugalmat keresik - ám mivel Ynev és a valóság talaján is két lábbal állnak, pontosan felmérik, hogy az állandósághoz, a nyugalomhoz és a kényelemhez munkára, vagyonra, vagyis kiemelkedetségre van szükség.',
                'Az átlag fölé emelkedés egyik módja: maradandót alkotni. Aki látot már törpék építette palotát, netán megfordult a Tarini-hegység mélyén kialakított barlangvárosaik valamelyikében, tudja, miként viszonyulnak ehhez a kérdéshez. Épületeik, hídjaik bámulatosan szilárdak, századokig, sőt, akár ezredévekig is dacolnak az idővel. A törpék azonban nem csak az építészet terén alkottak nagyot. Erről azok mondhatnának bővebbet, akik viseltek már ütközetben törpék álltal kovácsolt páncélt, láncinget és pajzsot, vagy küzdöttek már tarini csadabárddal nem tarini vértbe öltözött szerencsétlenekkel.',
                'A kiemelkedés másik bevett módja a katonáskodás - s Tarin törpéi nagy számban élnek ezzel a lehetőséggel. Az Északi Szövetség ármádiájának gyalogos derékhadát adják háború idején, de rettegést keltenek az ellenség szívében villámgyors mozgású rackla-lovasaik is.Feljebbvalóik parancsát mindenkor képességeik legjavát adva teljesítik. Ha nem természetes akadály álja útjukat, szétrombolják, legyen az fatörzsek torlasza, vagy roppant kövekből rakott fal, ha szorult helyzetbe kerülnek, utolsó törpéig harcolnak, megadni sosem szokták magukat. Valamennyi törpe harcos számára adott az előmenetel lehetősége, hadijelvényeik alatt nincs más mérce, csak a rátermettség.',
                'Azok a törpék akik a fejüket kalandozásra adják, a harmadik megoldás mellett teszik le voksukat, mely kockázat tekintetében vetekszik ugyan a másodikkal, viszont gyorsabb - és bisztosabb - kiemelkedést tesz lehetővé az elsőnél. Északon gyakorta látható, az aranyaikat elmélyülten számoló törpe kalandozók. Erionnál meszebbre azonban nem szívesen merészkednek, mert Dél emberközpontú birodalmai nem igazán az ő ízlésüknek valók.',
                'Ha további nyugodt életük anyagi/erkölcsi feltételeit biztosítva látják, visszavonulnak otthonukba, melyet - minden tartozékával együtt - egy rozomák elszántságával védenek. Előfordul persze, hogy egy - kezdetben csak anyagi érdekből kalandozó - törpe a nagyvilág, a kötetlen munka és a kockázat szerelmesévé válik, s egész hosszú ( kb 800 év ) életét ennek szenteli.',
                'A törpék átlagos testmagassága 130 cm, alkatuk tömbszerű, nagy erőkifejtésre képesek, kitartásuk párját ritkítja. Arcuk széles, gyakorta - de nem mindég - szakáll ékíti. Szemük sötét árnyalatú, az egészen ősi, beriqueli vérvonal képviselőié azonban gleccserkék is lehet. Rendszerint csak egyszer házasodnak, a hűség fogalmának, az emberektől eltérő módon, csak egy változatát, a sírig tartót ismerik.'
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
            skills: {
                af: [],
                mf: [],
                precent: {
                    maszas: 0,
                    eses: 0,
                    ugras: 0,
                    lopakodas: 0,
                    rejtozes: 0,
                    koteltanc: 0,
                    zsebmetszes: 0,
                    csabdafelfedezes: 20,
                    zarnyitas: 0,
                    titkosajto: 10,
                },
            },
            description: [
                'Mágikus beavatkozás eredményeképpen létrejött faj, melynek egyedei az orkok legértékesebb tulajdonságait csillogtatják: a makacsságig menő kitartást, a természetes, állati inteligenciát, a kérhetetlen vadságot - ezúttal az emberiség céljai érdekében.',
                'Az udvari - másnéven nemesített - orkok Északon jelentek meg, első osztaguk egy ottani hatalmasság szolgálatában állt. A világhír, azaz inkább a koronás fők divathóbortja akkor kapta szárnyára őket, mikor kemény küzdelemben megmentették a szorongatott nagyúr életét.',
                'Alkotóik, mikor magasabb intelligenciával ruházták fel őket, csak bizonyos problémák kiküszöbölésére törekedtek, nem szenteltek elég figyelmet az így létrhívott új faj asztrális és mentális adotságainak növekedésével. Az emberi értelemben vett érzelmek a természetes körülmények közt élő közönséges orkoknál sem mennek ritkaságszámba, az udvari orkok gondolkodásvilága azonban annyira kifinomult, hogy ideális táptalajt jelentet az öncélú lelki folyamatok -pl. szépelgés, melankólia - számára is. Bármely udvari ork képes bonyolult gondolatfüzéreit akár egy álló héten át is gombolyítani, mielőtt rászánná magát, hogy végkövetkeztetéseit egy arra alkalmasnak látszó emberrel megossza. Ha megteszi, rendszerint csalódás az osztályrésze: gondolatai hiába magvasak, szinte minden esetben sok ezer éve ismertek már, réges rég papirra vetette őket azóta elporlat tollforgatók. Az udvari orkok kisebbrendűség érzése allighanem épp e szerencsétlen fáziseltolódás következménye. Filozófiáról, művészetekről egyszerűen képtelenek újat mondani alkotójuknak, az embernek - azt pedig, hogy személyiségük, személyük is értékek hordozója lehet, nemigen tudják felfogni.',
                'Az udvari orkok az Északi szövetség országaiban mindenütt megtalálhatók, ám uraik kiséretében Ynev majd minden tájára eljuthatnak. Az utóbbi évszázadban vált álltalánossá az a gyakorlat, hogy a főnemesek a kiemelkedő képességű udvari orkjaikat taníttatják, netán szélnek is eresztik - ekkor jelentek meg a kontinensen a kalandkeresők között.',
                'A kalandozók nem sokat adnak a külsőre, annál többet a belső értékekre: társaságuk ideális a gátlásoktól gyötört, melankóliára hajlamos udvari orkok számára, akiket bizonyos idő elteltével bisztosan helyre ráznak. Egy-egy kalandozócsapat roppant vegyes összetételű lehet - Erion csapszékeiben hallani történeteket olyan vitézi különítményről, melynek vezetője és esze udvari orkként kezdte pályafutását.',
                'Az udvari orkok átlagos testmagassága 180 cm, szőrzetük világosabb árnyalatú Káosz teremtette társaiknál, arcukon és nyakukon kimondottan ritkás - és jó hogy az, mert a boldogtalanokat még ez is szégyenérzettel tölti el. Ha egy udvari ork kalandozó társai nem ügyelnek eléggé, ha a férfiak nem tartják állandóan maguknál a borotvájukat, egy reggel azon vehetik észre magukat, hogy egy csupasz képű szörnyeteg az utitársuk. Az udvari orkok szeme savószinű, ritkábban földbarna. Kínosan tiszták - egy természetes állapotú, közönséges ork éppúgy undorral tölti el őket, mint az embereket. Az igazi orkokhoz fűződő viszonyuk egyébbként is sajátságos: mindkét faj képviselői saját torzképüknek tekintik a másikat. Az udvari orkok azért gyűlölik a vadon élőket, mert őket teszik felelőssé az emberek előítéleteiért - a vadon élő orkok pedig faja minden -amúgy kétes- értékének árulóját látja az udvariban. Keveredés a két faj között sosem fordul elő.'
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