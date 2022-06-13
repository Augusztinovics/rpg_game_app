/**-------------------------------------------
 * 
 * STORE FOR MAGUS CLASSES
 * 
 * -------------------------------------------
 */
 const state = {
    //kasztok
    classes: [
        {
            id: 'HARCOS',
            name: 'Harcos',
            ERO: 'k6+12+kf',
            GYORS: '2k6+6+kf',
            UGY: '2k6+6+kf',
            ALLO: 'k10+8+kf',
            EG: 'k10+10',
            SZEP: '3k6x2',
            INT: '3k6x2',
            AK: '2k6+6',
            ASZT: '3k6x2',
            KEalap: 9,
            TEalap: 20,
            VEalap: 75,
            CEalap: 0,
            KESzintKotelezo: 0,
            TESzintKotelezo: 3,
            VESzintKotelezo: 3,
            CESzintKotelezo: 0,
            HmSzint: 5,
            Epalap: 7,
            Fpalap: 6,
            FpSzint: 'k6+4',
            Kpalap: 10,
            KpSzint: 14,
            Mpalap: 0,
            MpSzint: 0,
            skills: [
                {
                    name: 'fegyverhasznalat',
                    level: 'Af',
                    kp: 0,
                },
            ],
            skillsOtherLevel: {},
            TpSzint:[
                [0, 160],
                [161, 320],
                [321, 640],
                [641, 1440],
                [1441, 2800],
                [2801, 5600],
                [5601, 10000],
                [10001, 20000],
                [20001, 40000],
                [40001, 60000],
                [60001, 80000],
                [80001, 112000],
                31200
            ],
            description: [
                'A harcosok kasztjába azokat az elsődleges fegyverforgatásra kitanitott karaktereket soroljuk, akik jóval többek, mint egyszerű katonák, de nem részesültek lovagi nevelésben, sem gladiátori kiképzésben, és nem is valamilyen fejvadászklán berkeiben nőttek fel.A harcos messze a legnépesebb karakterkaszt: tagjai között találunk kalandorokat, kalandozókat, testőröket, magányos zsoldosokat, sőt uralkodókat is.',
                'A harcosok azok, akik a fegyverforgatáson túl a legkülönfélébb dolgokhoz értenek. Akad közöttük olyan, aki jártas a mágiában, aki tolvajként is megállná a helyét, mint ahogy olyan is, aki ostoba, de erős, akár egy Keleti Barbár.',
                'Ahány tája Ynevnek, annyifélék a harcosok.',
                'A keleti barbárok testi erejükről, súlyos fegyvereikről ismertek.Nem hordanak páncélt, olykor ruhát sem, csak egyetlen ágyékkötőt. Eszük kevés, de birnak egyfajta józan, természetes erkölcsiséggel - és hihetetlen szakértelemmel forgatják kétkezes kardjukat, bárdjukat',
                'Gorvik hegyvidékének lakói örökös viszálykodásban, családi háborúságban állnak egymással.Súlyos prémekkel védekeznek a hideg ellen, és bőrvértekkel társaik keskeny, tűhegyes kardjaival szemben. Nem idegen tőlük a hátulról, lesből támadás, a méreg használata, s a ravaszkodás sem.',
                'Yllinorban, Mogorva Chei országában mérhetetlenül magas a harcos kasztúak száma. Úgy tartják sehol másutt nem élnek annyian mint itt. Könnyű láncinget viselnek, hosszú kardot, egykezes csatabárdot, csatacsákányt forgatnak. Kiváló lovasok - azt beszélik az utca túloldalára is lóval járnak - és ugyanilyen remek céllövészek. Hosszú, szarulemezekből ragasztott, visszacsapó ijakat használnak. Lelkes odaadással éltetik királyukat és istennőjüket.',
                'A Pyarron környéki várakban, általában egy-egy lovagrend árnyékában léteznek harcos rendek, mely nem kizárólag a fegyverforgatásban jeleskednek, hanem a különféle tudományokban is. Ők álltalában a lovagokéhoz hasonló életet élnek, nehézvértezetet és nehézfegyvereket viselnek, mégsem lovagok, inkább azok kisérői, tanácsnokai, testőrei.'
            ],
            harcertek: 'A harcosok harcértékei az egyik legkedvezőbb a magus kasztjai közül. Egyedül a gladiátorok különb fegyverforgatók náluk, és a Harcművészek olyankor, amikor Pszi-képességükhöz folyamodnak. Egy harcos kasztú karakter KÉ alapja 9, TÉ alapja 20, VÉ alapja 75, CÉ alapja 0, továbbá minden tapasztalati szinten ( már az elsőn is ) 11 Harcérték Módositót kap. Ezt tetszése szerint szétoszthatja KÉ-je, TÉ-je, VÉ-je és CÉ-je között, azonban TÉ-jére és VÉ-jére köteles minden szinten 3-3 pontot álldozni ( a rendszer autómatikusan levonja ). Az zllinori származású harcos karakter CÉ-jét is köteles minden Tapasztalati Szinten 3-mal növelni.',
            eletero: 'A harcosok életerő és fájdalomtűrés tekintetében is a legjobbak közé tartoznak. Gyermekkoruktól kezdve egészséges életet élnek, ezer megpróbáltatást küzdenek le, ami megedzi őket. Ép alapjuk 7, amihez a karakternek még egészség tiz feletti részét kell hozzáadnia, hogy megkapja Életerő Pontjainak számát. A harcos Fp alapja 6, amihez még Akaratereje és Állóképessége tiz feletti hányada, Tapasztalati Szintenként pedig további k6 + 4 Fp ( már 1. szinten is ) járul.',
            kepzetsegek: 'A harcos, mint az eddigiekből is kiviláglott, a lehtőségek kasztja. A harcon túl semmit sem köteles megtanulni, igy bőven jut ideje és energiája arra, hogy bármilyen képzettséget elsajátitson. Ez mutatkozik meg abban, hogy az összes kasztok közül a harcos bir a legtöbb Képzetségi Pontal ( Kp ): Kp alapja 10, és minden Tapasztalati Szinten ( már 1. szinten is ) további 14-et kap.',
            tapasztalat: 'A harcos kasztú karakter számára a TSZ-lépés annál nehezebb, minnél magasabb a szint, amelyre fellépni igyekszik.',
            fegyvertar: 'A harcosok annyiféle fegyverrel verekszenek, ahány félék. Egyes tájegységekre és szervezetre persze jellemző lehet egy adott fegyver és vértezett. A harcosok ahogy egyre tapasztaltabbak lesznek, egy legfeljebb két fegyver használatát sajátitják el mesterfokon. Ezek természetesen azok, melyeket leggyakrabban forgatnak. A harcos már alacsony szinten is erős karakter, és ha a játékos ügyesen gazdálkodik a magas Harcérték Módositóval valamint a Képzetségi Pontokkal, ez később sem változik meg. Mindenkinek melegen ajánljuk a kasztot, annak pedig, aki először játszik egyenesen forrón.',
        },
        
    ]
};
const getters = {
    classes: (state) => {
        return state.races;
    },
    magusClass: (state) => (id) => {
        return state.classes.find(r => r.id === id) ?? state.classes[0];
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