/**-------------------------------------------
 * 
 * STORE FOR MAGUS PSI SLAN
 * 
 * -------------------------------------------
 */
 const state = {
    slanPsi: [
        {
            name: 'Aranyharang',
            psiPoint: 1,
            psiPointText: '1 pszi-pont / 1 SFÉ',
            ME: '-',
            medTime: '1 kör',
            activeTime: '2 kör',
            description: 'A tudat test feletti tökéletes uralma nyilvánul meg ebben a diszciplínában. Segítségével az alkalmazó képessé válik testét élő páncéllá alakítani. Ezt izomzata átrendezésével, és pszi-energiák kisugárzásával éri el. Az Aranyharang éppolyan SFÉ-t ad alkalmazójának, mint akármelyik páncél. A diszciplína az egyik legnehezebben elsajátítható, és legveszedelmesebb pszi-alkalmazási módszer. Éppen ezért az alkalmazó nem használhatja korlátlanul: maximális értéke megegyezik az alkalmazó Tapasztalati Szintjével. Ez gyakorlatban azt jelenti, hogy az Aranyharang SFÉ-je soha nem lehet nagyobb, mint az alkalmazó Tapasztalati Szintje. Az időtartam sem növelhető a végtelenségig, ha ugyanis valaki túllépi a 3kör/TSZ határt, akkor az Állóképessége ideiglenesen csökken annyival, amennyivel túllépte. A csökkenés ideje annyi lesz, amennyi ideig a diszciplína hatása alatt állt. Ha egy 1. szintű harcművész 6 körig alkalmazott Aranyharangot, akkor 3 körrel lépte túl a határt, tehát a következő 6 körre -3 járul az Állóképességéhez. 1 Pszi-pontért 1-es SFÉ nyerhető 2 körre, 2 pszi-pontért 2-es SFÉ 2 körre, vagy 1-es SFÉ 4 körre, stb.',
        },
        {
            name: 'Belső Idő',
            psiPoint: 10,
            psiPointText: '10 Pszi-pont',
            ME: '-',
            medTime: '1 szegmens',
            activeTime: '1 szegmens',
            description: 'A Slan Pszi alkalmazásának tökélyre vitele. A diszciplína alkalmazója képes saját belső idejét annyira lelassítani, hogy minden-a valóságban-egy szegmensnyi időt egy teljes körnek érzékel. Ez lehetőséget nyújt az alkalmazónak arra, hogy az eseményeket jobban végiggondolva mérlegeljen, s hogy az eltelt valós idő helyett, saját belső ideje szerint használjon diszciplínákat. Mindamellett a Slan-út Belső Ideje nemcsak a gondolati folyamatokat gyorsítja fel, hanem a diszciplína alkalmazójának a testét is, így az alkalmazónak minden szempontból egy teljes köre van cselekedni- akár harcolni is-, míg a külvilág számára csupán egy szegmens telik el. A külső szemlélő érzékei szinte követhetetlen gyorsaságúnak találja a diszciplína alkalmazóját-az időtartam alatt a Kezdeményezés minden esetben a Belső Idővel felgyorsított Slant illeti. A használat során az alkalmazó képes kitérni mágikus lövedékek elől, a rálőtt nyílvesszőket akár puszta kézzel is megfoghatja, és lehetetlen meglepetésszerű támadást intézni ellene. Rendkívül megerőltető diszciplína. Az Időtartam lejárta után az alkalmazó annyi körig kényszerül pihenni, ahány kört - szegmenst- a hatás alatt töltött. A pihenő alatt semmiféle pszi-tevékenységet nem fojtathat, a pajzsok fenntartásán kívül, és bármilyen megerőltető tevékenység (pl. harc) csak -25-ös módosítóval végezhető-ez harc esetén a KÉ-re, TÉ-re, VÉ-re és CÉ-re egyszerre vonatkozik. 10 pszi-pont felhasználásával a valós idő 1 szegmense lassítható le, 20 pszi-pontért már 2 szegmens, stb.',
        },
        {
            name: 'Chi-harc',
            psiPoint: 1,
            psiPointText: '1 Pszi-pont / kör',
            ME: '-',
            medTime: '1 szegmens',
            activeTime: 'szinttől függ',
            description: 'A Chi-harc nem más, mint a harc- vagy kardművész azon tudása, mely segítségével a belső energiáit harc közben a teste szolgálatába állíthatja. Ettől lesz több egyszerű pusztakezes verekedőnél és fegyverhasználónál-ez a harc művészete. A Chi-harc folyamán nem lehet meglepni az alkalmazót, és lehetetlen oly módon harcolni, hogy az ellenfél csak ártalmatlanná váljon. A Chi-harc hatékonysága 1.TSZ-TÁM/KÖR: 1-IDŐ: 1kör-TÉ,VÉ: +10-KÉ: +2-SP: +1 - 3.TSZ-TÁM/KÖR: 2-IDŐ: 1kör-TÉ,VÉ: +15-KÉ: +4-SP: +3 - 5.TSZ-TÁM/KÖR: 3-IDŐ: 2kör-TÉ,VÉ: +20-KÉ: +6-SP: +5 - 7.TSZ-TÁM/KÖR: 4-IDŐ: 2kör-TÉ,VÉ: +25-KÉ: +8-SP: +7 - 9.TSZ-TÁM/KÖR: 5-IDŐ: 3kör-TÉ,VÉ: +30-KÉ: +10-SP: +9 - 11.TSZ-TÁM/KÖR: 6-IDŐ: 4kör-TÉ,VÉ: +35-KÉ: +12-SP: +11 - 13.TSZ-TÁM/KÖR: 6-IDŐ: 5kör-TÉ,VÉ: +40-KÉ: +14-SP: +13 - 15.TSZ-TÁM/KÖR: 6-IDŐ: 6kör-TÉ,VÉ: +45-KÉ: +16-SP: +15 - 17.TSZ-TÁM/KÖR: 6-IDŐ: 7kör-TÉ,VÉ: +50-KÉ: +18-SP: +17 - 19.TSZ-TÁM/KÖR: 6-IDŐ: korlátlan-TÉ,VÉ: +50-KÉ: +18-SP: +19 - Minden ez utáni TSZ-en csupán a sebzés nől +1 el. Az-az 1-2 szinten 1 pszi-pont felhasználásával a diszciplína alkalmazója 1 körig képes a Chi-harcra, miáltal TÉ-je, VÉ-je 10-zel növekszik, KÉ-jéhez +2 adódik, míg sebzéséhez +1. További pszi-pontok ráfordításával csak az Időtartalmat lehet elnyújtani. A diszciplína alkalmazása nagyon megterheli a testet és szellemet. Ezért amikor a Chi-harc időtartalma lejár, a felhasználónak annyi időt kell pihenéssel töltenie, mint amennyi ideig volt a diszciplína hatása alatt. A pihenés ebben az esetben csupán annyit jelent, hogy a karakternek normál harcot kell folytatnia, de más diszciplínákat használhat. Pszi-pontok száma a Chi-harc meghosszabbítására: +1kör=+4pszi - +2kör=+9pszi - +3kör=+16pszi - +4kör=25pszi - +5kör=+36pszi - +6kör=+49pszi. Chi-harccal egyidejűleg, csak a pajzsok fenntartása és az Aranyharang használható, SEMMILYEN más diszciplína NEM használható.',
        },
        {
            name: 'Érzékelhetetlenség',
            psiPoint: 8,
            psiPointText: '8 pszi-pont',
            ME: '-',
            medTime: '1 kör',
            activeTime: '1 kör',
            description: 'A diszciplína alkalmazója mozdulatlanná dermedve képes érzékelhetetlenné válni. Ebben az állapotban még a legélesebb érzékszervek számára sem fedezhető fel, és kikerül a Hatodik Érzék hatósugarából is. Az Érzékelhetetlenség folyamán semmilyen tevékenység (mozgás, harc, pszi-alkalmazás vagy kommunikáció) nem végezhető. A Kyr metódus Auraérzékelés előtt is rejtve marad, csupán olyan Láthatatlanság-észleléssel fedezhető fel, amely legalább 4-es erősségű. 8 pszi-pont felhasználásával 1 körig alkalmazható a diszciplína, 16 pszi-pontért 2 körig, stb.',
        },
        {
            name: 'Halálos Ujj',
            psiPoint: 3,
            psiPointText: '3 pszi-pont / 1 Ép',
            ME: '-',
            medTime: '1 szegmens',
            activeTime: '24 óra',
            description: 'A Pszi energiák koncentrált, romboló kisugárzásának módszere Yadegori Chunin nevéhez fűződik. A Halálos Ujjat- nevezik még Yadegori érintésének is- sokáig titkos tanításként kezelték, csak nem rég jutott el Tiadlanba, ahol a legtöbb Slan iskola átvette és tanítani kezdte. A diszciplínát a legveszélyesebb pszi-alkalmazásnak tartják. Használatával időzített belső sérülések okozhatók. Az alkalmazónak meg kell érintenie valamelyik mutatóujjával az ellenfelét. Ez harci szituációban sikeres támadást igényel. Az okozott sérülés az alkalmazó akarata szerint - de 24 órán belül eső - időpontban keletkezik, gyógyítása nem lehetséges. A diszciplína minden esetben Ép vesztést okoz, s a páncélok SFÉ-je nem vonódik le belőle, sőt az Aranyharang sem jelent védelmet hatása ellen. Nehézsége okán nem használható korlátlanul: minden TSZ-en csak 1 Ép sérülés okozható, mely 3 pszi-pont felhasználásába kerül. Második TSZ-en már 6 pszi-pont rááldozásával 2 Ép veszteség érhető el, stb.',
        },
        {
            name: 'Jelentéktelenség',
            psiPoint: 6,
            psiPointText: '6 pszi-pint',
            ME: '-',
            medTime: '1 szegmens',
            activeTime: '1 kör',
            description: 'A Slan-ek életük nagy részét-míg ki nem kerülnek a kolostorból, vagy iskolából-csöndes önmagukba zárkózással, nyugalmas elmélyedéssel töltik. A szinte észrevétlen jelenlét, háttérbe húzódó viselkedés az effajta életmód egyik alapkövetelménye. Mindezt tökélyre fejlesztve, és a pszi-energiákat is segítségül hívva, a Slan-út alkalmazói elérték, hogy a teljes Jelentéktelenség aurájába burkolózzanak. A diszciplína használatakor az alkalmazó nem tűnik fel a legéberebb őrnek, a legfigyelmesebb szemlélődőnek sem. A ráirányított tekintet lesiklik róla, jelentéktelen, figyelmet nem érdemlő senkinek hat. A tudatos érzékeléssel persze felfedik és lelepleződik akkor is, ha a figyelmes szemlélő sikeres Intelligencia próbát dob. Ha azonban az alkalmazó már elhagyta a helyszint-ahol a diszciplína segítségével sikerült észrevétlen maradnia- hiába járt le a Jelentéktelenség időtartalma, nem ébred gyanú senkiben. Közönséges példája ennek, ha az alkalmazó úgy kíván halálos ellenségeinek táborában végighaladni, hogy észrevétlen maradjon. Ilyenkor a diszciplína segítségével Jelentéktelenné válik, s az őrök és táborlakók - sikeres Intelligencia Próba, vagy tudatos érzékelés híján - nem figyelnek föl rá. Miután a tábort elhagyja, senkinek nem jut eszébe, hogy idegen járt közöttük. A diszciplína alkalmazása közben szólni, beszédbe elegyedni, vagy harcba bocsátkozni nem lehet-, ez azonnali lelepleződéssel jár. A diszciplína értelmetlen alkalmazása is balul üthet ki: magányos emberhez odamenni, vagy hegyi óriások falujába besétálni-, azaz bármi olyat tenni, amikor nincs mód a környezetben tartózkodókhoz való azonosulásra-nem vezethet sikerhez. A Jelentéktelenség 6 pszi-pontért 1 körig tartható fenn, 12 pszi-pontért 2 körig, stb.',
        },
        {
            name: 'Levitáció',
            psiPoint: 1,
            psiPointText: '1 pszi-pont',
            ME: '-',
            medTime: '1 kör',
            activeTime: '1 óra',
            description: 'Meglehetőleg kevés gyakorlati alkalmazhatósággal bíró diszciplína, ám a Slenek szertartásainak elengedhetetlen kelléke. Az emberi test súlyának teljes leküzdésére szolgál, alkalmazásával föld feletti lebegésre nyílik mód. 1 pszi-pont felhasználásával 1 órán keresztül lehet 1 méter magasságban lebegni, 2 pszi-pontért már két órán keresztül tartható fenn a diszciplína hatása. A Levitáció magassága nem növelhető, ám az alkalmazó bármekkora súlyt-amennyiben a teste korlátai elbírják- felemelésére képes. A diszciplína alkalmazása közben a Slan teste sebezhetetlenné válik bármely nem mágikus-fegyverrel szemben. A diszciplína folyamatos koncentrációt igényel, közben fizikai támadás, vagy egyéb diszciplína használata nem lehetséges.',
        },
        {
            name: 'Statikus Pszi-pajzs',
            psiPoint: 1,
            psiPointText: 'minimum 1',
            ME: '-',
            medTime: '90 kör',
            activeTime: 'végleges',
            description: 'A Slan-út alkalmazói által gerjesztett Statikus Pajzs felépítésében gyökeresen különbözik a Pyarroni módszer segítségével létrehozottól, ám működésében és alkalmazásában teljesen megegyezik azzal. A valódi különbség a végeredményben mutatkozik meg: a Slan-út Statikus Pszi-pajzsát senki nem képes lerombolni, csak maga az alkalmazó szüntetheti meg, és építheti újra. Efféle pajzsot a Slan csak a saját elméje köré képes felhúzni.',
        },
        {
            name: 'Testsúlyváltoztatás',
            psiPoint: 1,
            psiPointText: 'változó',
            ME: '-',
            medTime: '1 kör',
            activeTime: '3 kör',
            description: 'A diszciplína használatával a Pszi-alkalmazó képes saját testsúlyát megnövelni, vagy lecsökkenteni. Ezáltal képessé válik több emelet magasba felugrani, a havon futni anélkül, hogy mély nyomokat hagyna, esetleg gyorsabban úszni. A diszciplína alkalmazásával nem változtatható meg az alkalmazó által hordott, vagy viselt tárgyak súlya. A felhasznált pszi-pontok növelésével a diszciplína időtartalma is meghosszabbítható. A változtatáshoz szükséges pszi-pontok: 1kg=1 pszi, 3kg=2 pszi, 5kg=4 pszi, 9kg=7 pszi, 13kg=10 pszi, 31kg=20 pszi, 2x=30 pszi, 3x=35 pszi. Háromszorosánál nagyobbra növelni, vagy harmadánál kevesebbre csökkenteni a testsúlyt bármennyi pszi-pont rááldozásával sem lehet.',
        },
        {
            name: 'Tetszhalál',
            psiPoint: 6,
            psiPointText: '6 pszi-pont',
            ME: '-',
            medTime: '10 kör',
            activeTime: '1 óra',
            description: 'Az alkalmazás segítségével lehetőség nyílik a test élettani folyamatainak felfüggesztésére. Ilyenkor az alkalmazó semmiféle életjelet nem ad, nincs szüksége táplálékra vagy folyadékra, de még levegőre sem. Mozdulatlanná válik- olyan ez, mint a halál dermedtsége - és kihűl, a tudati folyamatok megszűnnek, így lebomlik a Dinamikus Pajzs, csak a Statikus marad meg. Ezzel szemben az Asztrál és Mentál test nem alszik, így az alkalmazó továbbra sem lehet alanya a Természeti Anyagi Mágiájának. Az alkalmazónak előre el kell döntenie a Tetszhalál időtartalmát, mert nincs rá mód, hogy az Időtartam lejárta előtt félbeszakítsa a diszciplínát. Tetszhalál állapotában semmiféle fájdalom nem okozható, és a testet ért Ép sérülések feleződnek. Az egyetlen olyan diszciplína ez, melynek alkalmazása során valóban regenerálódik a test. Minden Tetszhalálban töltött óra alatt 1 Ép regenerálódik - azaz gyógyul magától-, és 10 Fp. Maximum fölé sem Ép, sem Fp nem emelkedhet. A szervezetbe került mérgek hatóideje háromszorosára lassul, ráadásul sebzésük is harmadolódik. A Tetszhalál felfedezése csak a Kyr metódus Auraérzékelésével lehetséges. A pszi-pontok megduplázásával az időtartam megkétszereződik, triplázásával megháromszorozódik, stb.',
        },
        {
            name: 'Zavarás',
            psiPoint: 20,
            psiPointText: 'minimum 20 Pszi-pont',
            ME: 'mentál',
            medTime: '1 szegmens',
            activeTime: '1 szegmens',
            description: 'A Zavarás olyan rövid tudati csapás, mely képes kibillenteni ellenfelünket koncentrációjából, megzavarni meditációját, megtörni a Transzállapotot. A legtöbb Pszi-diszciplína azonnal megszakad, ha alkalmazója ellen sikeres Zavarást hajtottak végre. Kivételt csupán a Tetszhalál képez. Ahhoz, hogy sikeres legyen, a Zavaráshoz legalább eggyel több pszi-pontot kell, mint amennyi a megzavarni kívánt személy mentális pajzsaiban (statikus és dinamikus) van, ám ha ez a feltétel teljesül, akkor nincs helye további TME-nek. A Zavarás nem bontja le a megzavart lény pajzsait, csupán keresztülférkőzik rajtuk, hatását még abban a szegmensben kifejti és megszűnik. Az áldozat sem abban a körben sem a következőben nem képes semmi olyasmit cselekedni, amely komoly koncentrációt igényel, azaz Pszit használni, vagy varázsolni.',
        },
    ],
};
const getters = {
    slanPsi: () => {
        return state.slanPsi;
    },
    availableSlanPsi: (state) => (psi) => {
        return state.slanPsi.filter(s => s.psiPoint <= psi);
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