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
            ERO: { name:'k6+12+kf', sp: [13, 18, 1]},
            GYORS: { name: '2k6+6+kf', sp: [8, 18, 1]},
            UGY: { name: '2k6+6+kf', sp: [8, 18, 1]},
            ALLO: { name: 'k10+8+kf', sp: [9, 18, 1]},
            EG: { name: 'k10+10', sp: [11, 20, 0]},
            SZEP: { name: '3k6x2', sp: [3, 18, 2]},
            INT: { name: '3k6x2', sp: [3, 18, 2]},
            AK: {name: '2k6+6', sp: [8, 18, 0]},
            ASZT: { name: '3k6x2', sp: [3, 18, 2]},
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
            FpSzint: {
                name: 'k6+4',
                sp: [5, 10]
            },
            Kpalap: 10,
            KpSzint: 14,
            Mpalap: 0,
            MpSzint: 0,
            skillsFirstLevel: {
                FegyverhasznalatAlap: 3,
                FegyverhasznalatMester: 0,
                FegyverdobasAlap: 0,
                FegyverdobasMester: 0,
                NyelvismeretAf: 0,
                NyelvismeretMf: 0,
                SzakmaAf: 0,
                SzakmaMf: 0,
                af: ['LOVAGLAS', 'USZAS', 'FUTAS'],
                mf: [],
                precent: {
                    maszas: 15,
                     eses: 20,
                     ugras: 10,
                     lopakodas: 0,
                     rejtozes: 0,
                     koteltanc: 0,
                     zsebmetszes: 0,
                     csabdafelfedezes: 0,
                     zarnyitas: 0,
                     titkosajto: 0,
                },
            },
            skillsOtherLevel: {
                6 : {
                    FegyverhasznalatAlap: 0,
                    FegyverhasznalatMester: 0,
                    FegyverdobasAlap: 0,
                    FegyverdobasMester: 0,
                    NyelvismeretAf: 0,
                    NyelvismeretMf: 0,
                    SzakmaAf: 0,
                    SzakmaMf: 0,
                    af: ['HADVEZETES'],
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
            },
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
                'A harcosok kasztj??ba azokat az els??dleges fegyverforgat??sra kitanitott karaktereket soroljuk, akik j??val t??bbek, mint egyszer?? katon??k, de nem r??szes??ltek lovagi nevel??sben, sem gladi??tori kik??pz??sben, ??s nem is valamilyen fejvad??szkl??n berkeiben n??ttek fel.A harcos messze a legn??pesebb karakterkaszt: tagjai k??z??tt tal??lunk kalandorokat, kalandoz??kat, test??r??ket, mag??nyos zsoldosokat, s??t uralkod??kat is.',
                'A harcosok azok, akik a fegyverforgat??son t??l a legk??l??nf??l??bb dolgokhoz ??rtenek. Akad k??z??tt??k olyan, aki j??rtas a m??gi??ban, aki tolvajk??nt is meg??lln?? a hely??t, mint ahogy olyan is, aki ostoba, de er??s, ak??r egy Keleti Barb??r.',
                'Ah??ny t??ja Ynevnek, annyif??l??k a harcosok.',
                'A keleti barb??rok testi erej??kr??l, s??lyos fegyvereikr??l ismertek.Nem hordanak p??nc??lt, olykor ruh??t sem, csak egyetlen ??gy??kk??t??t. Esz??k kev??s, de birnak egyfajta j??zan, term??szetes erk??lcsis??ggel - ??s hihetetlen szak??rtelemmel forgatj??k k??tkezes kardjukat, b??rdjukat',
                'Gorvik hegyvid??k??nek lak??i ??r??k??s visz??lykod??sban, csal??di h??bor??s??gban ??llnak egym??ssal.S??lyos pr??mekkel v??dekeznek a hideg ellen, ??s b??rv??rtekkel t??rsaik keskeny, t??hegyes kardjaival szemben. Nem idegen t??l??k a h??tulr??l, lesb??l t??mad??s, a m??reg haszn??lata, s a ravaszkod??s sem.',
                'Yllinorban, Mogorva Chei orsz??g??ban m??rhetetlen??l magas a harcos kaszt??ak sz??ma. ??gy tartj??k sehol m??sutt nem ??lnek annyian mint itt. K??nny?? l??ncinget viselnek, hossz?? kardot, egykezes csatab??rdot, csatacs??k??nyt forgatnak. Kiv??l?? lovasok - azt besz??lik az utca t??loldal??ra is l??val j??rnak - ??s ugyanilyen remek c??ll??v??szek. Hossz??, szarulemezekb??l ragasztott, visszacsap?? ijakat haszn??lnak. Lelkes odaad??ssal ??ltetik kir??lyukat ??s istenn??j??ket.',
                'A Pyarron k??rny??ki v??rakban, ??ltal??ban egy-egy lovagrend ??rny??k??ban l??teznek harcos rendek, mely nem kiz??r??lag a fegyverforgat??sban jeleskednek, hanem a k??l??nf??le tudom??nyokban is. ??k ??lltal??ban a lovagok??hoz hasonl?? ??letet ??lnek, neh??zv??rtezetet ??s neh??zfegyvereket viselnek, m??gsem lovagok, ink??bb azok kis??r??i, tan??csnokai, test??rei.'
            ],
            harcertek: 'A harcosok harc??rt??kei az egyik legkedvez??bb a magus kasztjai k??z??l. Egyed??l a gladi??torok k??l??nb fegyverforgat??k n??luk, ??s a Harcm??v??szek olyankor, amikor Pszi-k??pess??g??kh??z folyamodnak. Egy harcos kaszt?? karakter K?? alapja 9, T?? alapja 20, V?? alapja 75, C?? alapja 0, tov??bb?? minden tapasztalati szinten ( m??r az els??n is ) 11 Harc??rt??k M??dosit??t kap. Ezt tetsz??se szerint sz??toszthatja K??-je, T??-je, V??-je ??s C??-je k??z??tt, azonban T??-j??re ??s V??-j??re k??teles minden szinten 3-3 pontot ??lldozni ( a rendszer aut??matikusan levonja ). Az zllinori sz??rmaz??s?? harcos karakter C??-j??t is k??teles minden Tapasztalati Szinten 3-mal n??velni.',
            eletero: 'A harcosok ??leter?? ??s f??jdalomt??r??s tekintet??ben is a legjobbak k??z?? tartoznak. Gyermekkorukt??l kezdve eg??szs??ges ??letet ??lnek, ezer megpr??b??ltat??st k??zdenek le, ami megedzi ??ket. ??p alapjuk 7, amihez a karakternek m??g eg??szs??g tiz feletti r??sz??t kell hozz??adnia, hogy megkapja ??leter?? Pontjainak sz??m??t. A harcos Fp alapja 6, amihez m??g Akaratereje ??s ??ll??k??pess??ge tiz feletti h??nyada, Tapasztalati Szintenk??nt pedig tov??bbi k6 + 4 Fp ( m??r 1. szinten is ) j??rul.',
            kepzetsegek: 'A harcos, mint az eddigiekb??l is kivil??glott, a leht??s??gek kasztja. A harcon t??l semmit sem k??teles megtanulni, igy b??ven jut ideje ??s energi??ja arra, hogy b??rmilyen k??pzetts??get elsaj??titson. Ez mutatkozik meg abban, hogy az ??sszes kasztok k??z??l a harcos bir a legt??bb K??pzets??gi Pontal ( Kp ): Kp alapja 10, ??s minden Tapasztalati Szinten ( m??r 1. szinten is ) tov??bbi 14-et kap.',
            tapasztalat: 'A harcos kaszt?? karakter sz??m??ra a TSZ-l??p??s ann??l nehezebb, minn??l magasabb a szint, amelyre fell??pni igyekszik.',
            fegyvertar: 'A harcosok annyif??le fegyverrel verekszenek, ah??ny f??l??k. Egyes t??jegys??gekre ??s szervezetre persze jellemz?? lehet egy adott fegyver ??s v??rtezett. A harcosok ahogy egyre tapasztaltabbak lesznek, egy legfeljebb k??t fegyver haszn??lat??t saj??titj??k el mesterfokon. Ezek term??szetesen azok, melyeket leggyakrabban forgatnak. A harcos m??r alacsony szinten is er??s karakter, ??s ha a j??t??kos ??gyesen gazd??lkodik a magas Harc??rt??k M??dosit??val valamint a K??pzets??gi Pontokkal, ez k??s??bb sem v??ltozik meg. Mindenkinek melegen aj??nljuk a kasztot, annak pedig, aki el??sz??r j??tszik egyenesen forr??n.',
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