/**-------------------------------------------
 * 
 * STORE FOR MAGUS WEAPONS
 * 
 * -------------------------------------------
 */
 const state = {
    weapons: [
        {
            id: 'BUZOGANY_SHADLEKI',
            name: 'Buzogány, shadleki',
            TamKor: '1',
            Type: 'Szúró/vágófegyver',
            Ke: 8,
            Te: 13,
            Ve: 14,
            Ce: 0,
            Sp: {
                name: 'k6+1',
                damage: [2, 7]
            },
            weight: '1,8 kg',
            price: '1 arany 3 ezüst',
            description: 'A shadleki buzogány Shadon egy tartományában kifejlesztett, négy baltaéllel és vaskos heggyel ellátot páncélnyitogató eszköz - inkább vágó-, mintsem zúzófegyver.',
        },
        {
            id: 'CSATABARD_EGYKEZES',
            name: 'Csatabárd, egykezes',
            TamKor: '1',
            Type: 'Szúró/vágófegyver',
            Ke: 5,
            Te: 12,
            Ve: 11,
            Ce: 0,
            Sp: {
                name: 'k10',
                damage: [1, 10]
            },
            weight: '2 kg',
            price: '6 ezüst',
            description: 'A csatabárd a balta harcban használt rokona. Egy hoszabb rövidebb fa nyélhez erősitenek egy vagy akár két éles pengét.Az egykezes változat fél méteres. A törpék kedvenc fegyvere.',
        },
        {
            id: 'CSATABARD_KETKEZES',
            name: 'Csatabárd, kétkezes',
            TamKor: '1/2',
            Type: 'Szúró/vágófegyver',
            Ke: 0,
            Te: 8,
            Ve: 6,
            Ce: 0,
            Sp: {
                name: '3k6',
                damage: [3, 18]
            },
            weight: '5 kg',
            price: '2 arany',
            description: 'A csatabárd a balta harcban használt rokona. Egy hoszabb rövidebb fa nyélhez erősitenek egy vagy akár két éles pengét.A kétkezes változat egy méteres. A törpék kedvenc fegyvere.',
        },
        {
            id: 'CSATACSAKANY',
            name: 'Csatacsákány',
            TamKor: '1',
            Type: 'Szúró/vágófegyver',
            Ke: 5,
            Te: 11,
            Ve: 8,
            Ce: 0,
            Sp: {
                name: 'k10',
                damage: [1, 10]
            },
            weight: '2,5 kg',
            price: '8 ezüst',
            description: 'A csatacsákány, más néven fokos sokban hasonlit a közönséges csákányhoz, ám feje jóval rövidebb, úgy egyarasznyi. Gyakran két hegyel látják el.',
        },
        {
            id: 'HAJITOBARD',
            name: 'Hajitóbárd',
            TamKor: '2',
            Type: 'Szúró/vágófegyver',
            Ke: 9,
            Te: 10,
            Ve: 7,
            Ce: 0,
            Sp: {
                name: 'k6',
                damage: [1, 6]
            },
            weight: '1,2 kg',
            price: '1 ezüst',
            description: 'A hajitóbárd két fő változatban készül, az egyik egy teljesen hagyományos kisbalta, a másik -gyakoribb- változat teljes egészében fémből készül.',
        },
        {
            id: 'KARD_ROVID',
            name: 'Kard, rövid',
            TamKor: '1',
            Type: 'Szúró/vágófegyver',
            Ke: 9,
            Te: 12,
            Ve: 14,
            Ce: 0,
            Sp: {
                name: 'k6+1',
                damage: [2, 7]
            },
            weight: '1 kg',
            price: '1 arany',
            description: 'A rövidkard 40-60 cm hosszú, egyenes pengéje mindkét oldalon ki van élezve. Gyakran ijászok második fegyvere.',
        },
        {
            id: 'KARD_HOSSZU',
            name: 'Kard, hosszú',
            TamKor: '1',
            Type: 'Szúró/vágófegyver',
            Ke: 6,
            Te: 14,
            Ve: 16,
            Ce: 0,
            Sp: {
                name: 'k10',
                damage: [1, 10]
            },
            weight: '1,5 kg',
            price: '1 arany 5 ezüst',
            description: 'A hosszúkard pengéje 60-80 cm-es, egyenes és kétélű. Álltalában gyalogos katonák fő fegyvere.',
        },
        {
            id: 'KARD_MASFELKEZES',
            name: 'Kard, másfélkezes',
            TamKor: '1',
            Type: 'Szúró/vágófegyver',
            Ke: 4,
            Te: 13,
            Ve: 12,
            Ce: 0,
            Sp: {
                name: '2k6',
                damage: [2, 12]
            },
            weight: '2 kg',
            price: '2 arany 5 ezüst',
            description: 'A másfélkezes kard a hosszúkardhoz hasonló, pengéje egyenes, kétélű, ám markolata hozávetőlegesen kétszer olyan hosszú, hogy két kézzel is lehessen fogni.',
        },
        {
            id: 'KARD_LOVAGI',
            name: 'Kard, lovagi',
            TamKor: '1',
            Type: 'Szúró/vágófegyver',
            Ke: 2,
            Te: 10,
            Ve: 7,
            Ce: 0,
            Sp: {
                name: '2k6+2',
                damage: [4, 14]
            },
            weight: '3,5 kg',
            price: '3 arany',
            description: 'A lovagi kard a lovagok kedvenc fegyvere. Egyenes, kétélű pengéje 80-120 cm hosszú. A vége lekerekitett, vagy igen tompa szögben csúcsos. Keresztvasa gyakran S alakú.',
        },
        {
            id: 'KARD_PALLOS',
            name: 'Kard, pallos',
            TamKor: '1/2',
            Type: 'Szúró/vágófegyver',
            Ke: 0,
            Te: 6,
            Ve: 2,
            Ce: 0,
            Sp: {
                name: '3k6+2',
                damage: [5, 20]
            },
            weight: '7 kg',
            price: '5 arany',
            description: 'A pallos szintén lovagi fegyver, hossza nem ritkán eléri a két métert, amiből az egyenes, kétélű penge 160 cm. Két kézzel forgatják.',
        },
        {
            id: 'KARD_SZABLYA',
            name: 'Kard, szablya',
            TamKor: '1',
            Type: 'Szúró/vágófegyver',
            Ke: 7,
            Te: 15,
            Ve: 17,
            Ce: 0,
            Sp: {
                name: 'k6+2',
                damage: [3, 8]
            },
            weight: '1,5 kg',
            price: '1 arany 6 ezüst',
            description: 'A szablya pengéje 60-80 cm hosszú és enyhén hajlitott. Csak a külső iv van kiélezve. Ivelése miatt sokkal jobban lehet vele vágni, mint az egyenes kardokkal -szúrásra, döfésre ritkán használják.',
        },
        {
            id: 'KARD_DZSENN_SZABLYA',
            name: 'Kard, dzsenn szablya',
            TamKor: '1',
            Type: 'Szúró/vágófegyver',
            Ke: 9,
            Te: 20,
            Ve: 17,
            Ce: 0,
            Sp: {
                name: 'k6+3',
                damage: [4, 9]
            },
            weight: '0,5 kg',
            price: '120 arany',
            description: 'A dzsenn szablya szokatlanul keskeny és hosszú, ivelt pengéjű, mágikus úton készitett, ám mágikus tulajdonságokkal nem rendelkező fegyver. Gyakorlatilag törhetetlen.',
        },
        {
            id: 'KARD_JATAGAN',
            name: 'Kard, jatagán',
            TamKor: '1',
            Type: 'Szúró/vágófegyver',
            Ke: 7,
            Te: 14,
            Ve: 14,
            Ce: 0,
            Sp: {
                name: 'k6+2',
                damage: [3, 8]
            },
            weight: '0,8 kg',
            price: '1 arany 4 ezüst',
            description: 'A jatagán elnyújtott S alakot formázó, egyélű pengéje rővid, a kiszélesedő hegy ráadás pengéje visszahúzáskor mélyit a seben',
        },
        {
            id: 'KARD_HANDZSAR',
            name: 'Kard, handzsár',
            TamKor: '1',
            Type: 'Szúró/vágófegyver',
            Ke: 6,
            Te: 14,
            Ve: 15,
            Ce: 0,
            Sp: {
                name: 'k6+3',
                damage: [4, 9]
            },
            weight: '2 kg',
            price: '1 arany 5 ezüst',
            description: 'A handzsár a dzsadok kedvelt fegyvere. Erősen ivelt, csak a külső éle van kifenve. Jellegzetessége, hogy a penge a keresztvasnál allig tenyérnyi, a hegynél viszont jó másféltenyérnyi széles.',
        },
        {
            id: 'KARD_FEJVADASZ',
            name: 'Kard, fejvadász',
            TamKor: '1',
            Type: 'Szúró/vágófegyver',
            Ke: 8,
            Te: 16,
            Ve: 16,
            Ce: 0,
            Sp: {
                name: 'k6+2',
                damage: [3, 8]
            },
            weight: '0,8 kg',
            price: '2 arany',
            description: 'A fejvadászkard speciális, kétmarkolatú fegyver, Gorviktól Kránig szinte mindenütt alkalmazzák. Hossza személyre szabott, alsó, úgynevezett tonfa-markolatnál fogva, az alkarra szoritva épp könyékig ér. Külső élre és hegyre fenik.',
        },
        {
            id: 'KARD_SLAN',
            name: 'Kard, slan',
            TamKor: '1',
            Type: 'Szúró/vágófegyver',
            Ke: 8,
            Te: 20,
            Ve: 12,
            Ce: 0,
            Sp: {
                name: 'k10+2',
                damage: [3, 12]
            },
            weight: '1,4 kg',
            price: '100 arany',
            description: 'A Slan kard a kardművész fegyvere. Keskeny enyhén ivelt pengéjének csak a külső ivét fenik ki. Hossza 1,1 méter amiből 30 cm a markolat. Keresztvasa kicsi, kör alakú. Különleges kovácsolási eljárással készül, nagyon nehezen törik, borotvaélles.',
        },
        {
            id: 'KARD_KIGYO',
            name: 'Kard, kigyó',
            TamKor: '1',
            Type: 'Szúró/vágófegyver',
            Ke: 6,
            Te: 14,
            Ve: 15,
            Ce: 0,
            Sp: {
                name: 'k10',
                damage: [1, 10]
            },
            weight: '1,4 kg',
            price: '6 arany',
            description: 'A kigyókard szinte kizárólag a Tharr-papok fegyvertárában lelhető fel. Hossza 1,1 méter, kétélű pengéje enyhén hullámos. Egykezes fegyver.',
        },
        {
            id: 'KES',
            name: 'Kés',
            TamKor: '2',
            Type: 'Szúró/vágófegyver',
            Ke: 10,
            Te: 4,
            Ve: 0,
            Ce: 0,
            Sp: {
                name: 'k5',
                damage: [1, 5]
            },
            weight: '0,2 kg',
            price: '50 réz',
            description: 'A kés, bár nem fegyvernek készült, szükség esetén azzá válhat. A legfontosabb részletek, amelyek a tőrtől megkülönböztetik: nincs kereszvasa, és álltalában egyélű.',
        },
        {
            id: 'MARA_SEQUOR',
            name: 'Mara-sequor',
            TamKor: '1',
            Type: 'Szúró/vágófegyver',
            Ke: 7,
            Te: 16,
            Ve: 14,
            Ce: 0,
            Sp: {
                name: '2k6+2',
                damage: [3, 14]
            },
            weight: '1 kg',
            price: '2 arany',
            description: 'A mara-sequor 1 méter hosszúságú, enyhe ivben hajló, hegyénél kétélű, belső pengére fent vágókard. Hagyományos kráni fejvadászeszköz-lásd még sequor.',
        },
        {
            id: 'RAMIERA',
            name: 'Ramiera',
            TamKor: '2',
            Type: 'Szúró/vágófegyver',
            Ke: 8,
            Te: 17,
            Ve: 14,
            Ce: 0,
            Sp: {
                name: 'k6+1',
                damage: [2, 7]
            },
            weight: '0,8 kg',
            price: '2 arany',
            description: 'A ramiera jó 40 cm hosszúságú, levélkeresztbetszetű, keskeny, kétélű és tűhegyes szúrófegyver, a gorviki fejvadászok és orgyilkosok kedvenc eszköze.',
        },
        {
            id: 'SEQUOR',
            name: 'Sequor',
            TamKor: '2',
            Type: 'Szúró/vágófegyver',
            Ke: 8,
            Te: 13,
            Ve: 16,
            Ce: 0,
            Sp: {
                name: 'k6+2',
                damage: [3, 8]
            },
            weight: '0,4 kg',
            price: '1 arany 3 ezüst',
            description: 'A sequor erősen görbitett pengéjű, kétélű és borotvaéles vágótőr. Krán fejvadászainak hagyományos fegyvere. Rajtuk kivül szinte csak egy yllinori embervadász-iskola beavatottai alkalmazzák.',
        },
        {
            id: 'SLAN_CSILLAG',
            name: 'Slan csillag',
            TamKor: '3',
            Type: 'Szúró/vágófegyver',
            Ke: 10,
            Te: 4,
            Ve: 0,
            Ce: 0,
            Sp: {
                name: 'k3',
                damage: [1, 3]
            },
            weight: '0,1 kg',
            price: '40 réz',
            description: 'A Slan csillag lapos, sokágú tenyérnyi fémlap, kiválóan lehet dobni.Általában 3-8 csúcsa van.',
        },
        {
            id: 'TOR',
            name: 'Tőr',
            TamKor: '2',
            Type: 'Szúró/vágófegyver',
            Ke: 10,
            Te: 8,
            Ve: 2,
            Ce: 0,
            Sp: {
                name: 'k6',
                damage: [1, 6]
            },
            weight: '0,3 kg',
            price: '1 ezüst',
            description: 'A tőr a legáltalánosabb fegyver szerte Yneven. Rengeteg különböző formája van, de pengéje nem haladja meg a 40 cm-t. Legtöbbször kétélű.',
        },
        {
            id: 'TOR_DOBO',
            name: 'Tőr, dobó',
            TamKor: '2',
            Type: 'Szúró/vágófegyver',
            Ke: 10,
            Te: 11,
            Ve: 2,
            Ce: 0,
            Sp: {
                name: 'k6',
                damage: [1, 6]
            },
            weight: '0,5 kg',
            price: '1 ezüst 50 réz',
            description: 'A dobótőr különlegesen kiképzett tőr, aminek súlyelosztása jó dobhatóságot tesz lehetővé. Kétélű. Keresztvasa kicsi vagy egyáltalán nincs is. Gyakran egyetlen fémdarabból készül, és nem vonják be külön a markolatott.',
        },
        {
            id: 'TOR_SLAN',
            name: 'Tőr, slan',
            TamKor: '2',
            Type: 'Szúró/vágófegyver',
            Ke: 9,
            Te: 14,
            Ve: 6,
            Ce: 0,
            Sp: {
                name: 'k6+2',
                damage: [3, 8]
            },
            weight: '0,8 kg',
            price: '70 arany',
            description: 'A Slan tőr sokban hasonlit a Slan kardra, csak rövidebb. Felépitésében inkább kardra, mint tőrre emlékeztet, de pengéje hossza nem haladja meg a 40 cm-t.',
        },
        {
            id: 'TORKARD',
            name: 'Tőrkard',
            TamKor: '2',
            Type: 'Szúró/vágófegyver',
            Ke: 9,
            Te: 12,
            Ve: 14,
            Ce: 0,
            Sp: {
                name: 'k6+2',
                damage: [3, 8]
            },
            weight: '0,8 kg',
            price: '2 arany',
            description: 'A tőrkard vagy rapir pengéje 80 cm hosszú, keskeny és egyenes. Mindkét oldalán ki van élezve, de főleg döfésre használják. Keskeny pengéje kivételes hajlékonyságot tesz lehetővé, ezért is terjedt el vivóeszközként. Keresztvasa diszes, a markolatot gyakran kosár védi.',
        },
        {
            id: '',
            name: '',
            TamKor: '1',
            Type: '',
            Ke: 0,
            Te: 0,
            Ve: 0,
            Ce: 0,
            Sp: {
                name: 'k6',
                damage: [1, 6]
            },
            weight: '',
            price: '',
            description: '',
        },
        {
            id: '',
            name: '',
            TamKor: '1',
            Type: '',
            Ke: 0,
            Te: 0,
            Ve: 0,
            Ce: 0,
            Sp: {
                name: 'k6',
                damage: [1, 6]
            },
            weight: '',
            price: '',
            description: '',
        },
        {
            id: '',
            name: '',
            TamKor: '1',
            Type: '',
            Ke: 0,
            Te: 0,
            Ve: 0,
            Ce: 0,
            Sp: {
                name: 'k6',
                damage: [1, 6]
            },
            weight: '',
            price: '',
            description: '',
        },
        {
            id: '',
            name: '',
            TamKor: '1',
            Type: '',
            Ke: 0,
            Te: 0,
            Ve: 0,
            Ce: 0,
            Sp: {
                name: 'k6',
                damage: [1, 6]
            },
            weight: '',
            price: '',
            description: '',
        },
        {
            id: '',
            name: '',
            TamKor: '1',
            Type: '',
            Ke: 0,
            Te: 0,
            Ve: 0,
            Ce: 0,
            Sp: {
                name: 'k6',
                damage: [1, 6]
            },
            weight: '',
            price: '',
            description: '',
        },
    ],
};
const getters = {
    weapons: () => {
        return state.weapons;
    },
    weapon: (state) => (id) => {
        return state.weapons.find(w => w.id === id);
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