/**-------------------------------------------
 * 
 * STORE FOR MAGUS PAP SPELLS
 * 
 * -------------------------------------------
 */
 const state = {
    kisArkanum: [
        {
            name: 'A hatalom szava',
            sfera: ['L', 'H', 'E', 'T'],
            sferaText: 'Lélek, Halál, Élet, Természet',
            mana: 15,
            manaText: '15',
            strenght: '35',
            castTime: '1 szegmens',
            effectTime: 'Speciális',
            effectRange: '30 láb sugarú kör',
            resistans: 'Asztrális',
            description: [
                '-A látszat csal, az univerzum a hazugságok sokaságára épül- tartja egy ősi kyr bölcsesség. Az igazi hatalommal bírók nem ritkán titkolják, mire képesek valójában. Egyszerű, szerény megjelenésük nem árulkodik erejükről, s ez megtévesztő lehet. Persze a valódi hatalom kisugárzása szinte tapinthatóan árad birtokosából, s ezt látja minden nyitott szemmel, tiszta elmével járó lény. Ám a sok nagyhangú, felületes, csupán a látszatra adó szerencsétlen gyakorta már csak akkor veszi észre, kivel került szembe, kit sértett vérig, mikor már késő, visszakozni lehetetlen. Az efféle fickók megtorpantására szolgál a Hatalom szava.',
                'A varázslat egyetlen szó kimondásából áll, mely tisztán és érthetően hallatszik 30 láb körzetben. A papnak közben fel kell mutatni szent jellképét. Mindenki, aki ezen területen belül tartózkodik, szembesül a pap valódi hatalmával ( Nevezetesen: megismeri a Tapasztalati szintjét, főbb harcértékeinek nagyságrendjét-de nem pontos értékeket ), és dudatára ébred annak, hogy mi mire képes az. A varázslat sohasem hazudik és nincs kényszerítő ereje. Ha a támadók nem riadnak meg, a papnak más eszközöket kell keresni megfékezésükre. ( NJK esetében a Bátorság annyival csökken amennyi a pap tapasztalati szintjének kétszerese, ha nullára csökken a Bátorság, az NJK rettegni fog a paptól ) A varázslat nem evilági lényekre, vagy élőholtakra nem fejti ki hatását.',
                'A felhasznált MP-k megduplázásával megkétszerezhető a mágia erőssége, vagy hatótávolsága. Háromszor annyi Mp rááldozásával megháromszorozható, stb.'
            ],
        },
        {
            name: 'Áldás',
            sfera: ['L', 'H', 'E', 'T'],
            sferaText: 'Lélek, Halál, Élet, Természet',
            mana: 3,
            manaText: '3',
            strenght: '5',
            castTime: '5 szegmens',
            effectTime: '2 kör/szint vagy 1 hónap/szint',
            effectRange: 'Érintés',
            resistans: '-',
            description: [
                'Az egyik legalapvetőbb papi mágia. Alkalmazásokor a pap istene jóindulátát, segítségét kéri és kapja. Mindazok, akikre a pap kiterjeszti az áldás hatását ( 1 személy / szint ) - hacsak jellemük nem gyökeressen ellentéte a pap vallásának jellemével - megerősödnek eltökéltségükben, a varázslat időtartalma alatt optimisták, jókedvűek és bátrak lesznek. Ez idő alatt minden Harci Értékükhöz +5 járul, akárcsak az Asztrális és Mentális mágiaellenállásukhoz, míg a rájuk irányzott Átkok ellen +50-nel dobnak ME-t. A varázslat nem evilági vagy élőholt lényekre nem fejti ki hatását.',
                'Az Áldás segítségével felszentelt étel és víz tiszta és fogysztható lesz - amennyiben mérgezett volt, úgy látványossan megposhad, undorítóvá válik. Azok a tárgyak amelyeket a pap megáldott, 1 hónap/szint időtartam alatt nem porosodnak, nem fog rajtuk a rozsda és színüket sem veszítik.',
                'A megáldott tárgyból a fent említett időtartam alatt sugárzó mágia - azonos varázslaterősség mellett - semlegesíti az Átok hatását, ám ezzel szertefoszlik, s a tárgy továbbiakban közönséges, mágiától mentes dolognak minősül.',
            ],
        },
        {
            name: 'Mágia kifürkészése',
            sfera: ['L', 'H', 'E', 'T'],
            sferaText: 'Lélek, Halál, Élet, Természet',
            mana: 5,
            manaText: '5',
            strenght: '10',
            castTime: '5 szegmens',
            effectTime: 'Azonnali',
            effectRange: 'Kijelölt varázslat',
            resistans: '-',
            description: [
                'Rendkívül hasznos varázslat, pompás kiegészítője a Mágia szétoszlatásának. Segítségével a pap megtudja, hogy az elpusztításra szánt varázslat milyen erősítésű. Ily módon nem kell találomra varázsolnia, nem vesznek ell a Mp-k, ha rosszul méri fel a lehetőségeket a pap.',
                'A varázslók által létrehozott varázslatokkal szemben haszontalan.',
            ],
        },
        {
            name: 'Mágia szétoszlatása',
            sfera: ['L', 'H', 'E', 'T'],
            sferaText: 'Lélek, Halál, Élet, Természet',
            mana: 7,
            manaText: '7',
            strenght: '5',
            castTime: '1 kör',
            effectTime: 'Azonnali',
            effectRange: 'Kijelölt varázslat',
            resistans: '-',
            description: [
                'Ezt a mágiaformát alkalmazva a pap képessé válik - a varázslói varázslatok kivételéve - más mágiák hatásainak megszüntetésére. Természetesen csakis abban az esetben, ha a varázslatra felhasznált mana-pontok száma meghaladja a szétoszlatásra szánt varázslatba fektetett mana-pontok számát. Varásztárgyak mágikus hatása ily módon nem semlegesíthetők. A varázslatot csak az adott varázslat időtartalma alatt lehet szétoszlatni, annak következményei nem befolyásolhatók. Amennyiben nem nyilvánvaló, hogy mágikus hatásról van szó, a szétoszlatáshoz feltétlenül szükséges a ?ágiaismeret képzettség alapfokú ismerete.',
                'A varázslat hátulütője , hogy elképesztő megterhelést ró végrehajtójára. A pap ugyanis annyi körön keresztül képtelen lesz a varázslásra, amekkora erősítésű a szétoszlatott mágia volt.',
            ],
        },
        {
            name: 'Szent fény',
            sfera: ['L', 'H', 'E', 'T'],
            sferaText: 'Lélek, Halál, Élet, Természet',
            mana: 3,
            manaText: '3',
            strenght: '15',
            castTime: '1 szegmens',
            effectTime: '3 kör/szint',
            effectRange: 'Speciális',
            resistans: '-',
            description: [
                'Nevezik az Istenek Vezérlő Tüzének is. A pap a varázslat végrehajtásával fényt gyújt valamely tárgyon vagy helyen. E fény 15 cm sugarú gömbként, kékesen ragyogva világít. A szent fény csak olyan tárgyon vagy helyen - személyen nem!- jelenik meg, melyet szertartás varázslat segítségével felszenteltek. A mágia 3 fáklyányi világosságot ad a legnagyobb sötétségben is, s időlegesen eloszlatja a Sötétség-varázs hatását. A Szent fény csak erősebb Mágia szétoszlatásával szüntethető meg, egyébb módon eloltani lehetetlen.',
                'A Fény által bevilágított területen sem ultra-, sem infralátás nem működik.',
                'A varázslat ideje alatt figyelmezteti a papot, ha olyan helyre téved, amelynek vallásával ellentétes jellemű kisugárzása van, illetve ha veszély leselkedik rá. Ilyenkor színe egyre mélyül, majd vörös árnyalatba csap át. A Szent Fény a varázslat időtartalma alatt - további MP-ok felhasználása nélkül - a pap akaratának megfelelően bármikor kioltható és újraéleszthető.',
                'A Mana-pontok többszörözésével a mágia erőssége, valamint időtartama növelhető meg.',
            ],
        },
        {
            name: 'Szertartás',
            sfera: ['L', 'H', 'E', 'T'],
            sferaText: 'Lélek, Halál, Élet, Természet',
            mana: 3,
            manaText: '3',
            strenght: '500',
            castTime: 'Speciális',
            effectTime: 'Végleges',
            effectRange: 'Speciális',
            resistans: '-',
            description: [
                '',
            ],
        },
        {
            name: '',
            sfera: [],
            sferaText: '',
            mana: 0,
            manaText: '',
            strenght: '',
            castTime: '',
            effectTime: '',
            effectRange: '',
            resistans: '',
            description: [
                '',
            ],
        },
        {
            name: '',
            sfera: [],
            sferaText: '',
            mana: 0,
            manaText: '',
            strenght: '',
            castTime: '',
            effectTime: '',
            effectRange: '',
            resistans: '',
            description: [
                '',
            ],
        },
        {
            name: '',
            sfera: [],
            sferaText: '',
            mana: 0,
            manaText: '',
            strenght: '',
            castTime: '',
            effectTime: '',
            effectRange: '',
            resistans: '',
            description: [
                '',
            ],
        },
        {
            name: '',
            sfera: [],
            sferaText: '',
            mana: 0,
            manaText: '',
            strenght: '',
            castTime: '',
            effectTime: '',
            effectRange: '',
            resistans: '',
            description: [
                '',
            ],
        },
        {
            name: '',
            sfera: [],
            sferaText: '',
            mana: 0,
            manaText: '',
            strenght: '',
            castTime: '',
            effectTime: '',
            effectRange: '',
            resistans: '',
            description: [
                '',
            ],
        },
        {
            name: '',
            sfera: [],
            sferaText: '',
            mana: 0,
            manaText: '',
            strenght: '',
            castTime: '',
            effectTime: '',
            effectRange: '',
            resistans: '',
            description: [
                '',
            ],
        },
        {
            name: '',
            sfera: [],
            sferaText: '',
            mana: 0,
            manaText: '',
            strenght: '',
            castTime: '',
            effectTime: '',
            effectRange: '',
            resistans: '',
            description: [
                '',
            ],
        },
        {
            name: '',
            sfera: [],
            sferaText: '',
            mana: 0,
            manaText: '',
            strenght: '',
            castTime: '',
            effectTime: '',
            effectRange: '',
            resistans: '',
            description: [
                '',
            ],
        },
        {
            name: '',
            sfera: [],
            sferaText: '',
            mana: 0,
            manaText: '',
            strenght: '',
            castTime: '',
            effectTime: '',
            effectRange: '',
            resistans: '',
            description: [
                '',
            ],
        },
        {
            name: '',
            sfera: [],
            sferaText: '',
            mana: 0,
            manaText: '',
            strenght: '',
            castTime: '',
            effectTime: '',
            effectRange: '',
            resistans: '',
            description: [
                '',
            ],
        },
        {
            name: '',
            sfera: [],
            sferaText: '',
            mana: 0,
            manaText: '',
            strenght: '',
            castTime: '',
            effectTime: '',
            effectRange: '',
            resistans: '',
            description: [
                '',
            ],
        },
        {
            name: '',
            sfera: [],
            sferaText: '',
            mana: 0,
            manaText: '',
            strenght: '',
            castTime: '',
            effectTime: '',
            effectRange: '',
            resistans: '',
            description: [
                '',
            ],
        },
        {
            name: '',
            sfera: [],
            sferaText: '',
            mana: 0,
            manaText: '',
            strenght: '',
            castTime: '',
            effectTime: '',
            effectRange: '',
            resistans: '',
            description: [
                '',
            ],
        },
        {
            name: '',
            sfera: [],
            sferaText: '',
            mana: 0,
            manaText: '',
            strenght: '',
            castTime: '',
            effectTime: '',
            effectRange: '',
            resistans: '',
            description: [
                '',
            ],
        },
        {
            name: '',
            sfera: [],
            sferaText: '',
            mana: 0,
            manaText: '',
            strenght: '',
            castTime: '',
            effectTime: '',
            effectRange: '',
            resistans: '',
            description: [
                '',
            ],
        },
    ],
    kisArkanumEgyedi: [
        {
            name: '',
            istenId: '',
            sfera: [],
            sferaText: '',
            mana: 0,
            manaText: '',
            strenght: '',
            castTime: '',
            effectTime: '',
            effectRange: '',
            resistans: '',
            description: [
                '',
            ],
        },
    ],
    nagyArkanum: [
        {
            name: '',
            sfera: [],
            sferaText: '',
            mana: 0,
            manaText: '',
            strenght: '',
            castTime: '',
            effectTime: '',
            effectRange: '',
            resistans: '',
            description: [
                '',
            ],
        },
    ],
    nagyArkanumEgyedi: [
        {
            name: '',
            istenId: '',
            sfera: [],
            sferaText: '',
            mana: 0,
            manaText: '',
            strenght: '',
            castTime: '',
            effectTime: '',
            effectRange: '',
            resistans: '',
            description: [
                '',
            ],
        },
    ],
};
const getters = {
    kisArkanum: () => {
        return state.kisArkanum;
    },
    kisArkanumCurrentAll: (state) => (data) => {
        return state.kisArkanum.filter(s => s.sfera.some(s => data.sfera.includes(s)));
    },
    availableKisArkanum: (state) => (data) => {
        return state.kisArkanum.filter(s => s.mana <= data.mana && s.sfera.some(s => data.sfera.includes(s)));
    },
    nagyArkanum: () => {
        return state.nagyArkanum;
    },
    nagyArkanumCurrentAll: (state) => (data) => {
        return state.nagyArkanum.filter(s => s.sfera.some(s => data.sfera.includes(s)));
    },
    availableNagyArkanum: (state) => (data) => {
        return state.nagyArkanum.filter(s => s.mana <= data.mana && s.sfera.some(s => data.sfera.includes(s)));
    },
    egyediKisArkanum: (state) => (vallasId) => {
        return state.kisArkanumEgyedi.filter(s => s.istenId == vallasId);
    },
    egyediNagyArkanum: (state) => (vallasId) => {
        return state.nagyArkanumEgyedi.filter(s => s.istenId == vallasId);
    },
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