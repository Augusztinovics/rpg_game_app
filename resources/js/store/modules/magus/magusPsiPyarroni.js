/**-------------------------------------------
 * 
 * STORE FOR MAGUS PSI PYARRONI 
 * 
 * -------------------------------------------
 */
 const state = {
    pyarronPsi: [
        {
            name: 'Emlékfelidézés',
            psiPoint: 1,
            psiPointText: '1 Pszi-pont',
            ME: 'mentális',
            medTime: '2 kör',
            activeTime: '3 év vagy 10 kör',
            description: 'A diszciplina helyszinek, szövegek, vagy események megjegyzésében, illetve régi- egyébbként már elfelejtett - események felidézésében nyújt segitséget. Ha a Pszi-alkalmazó szeretne valamit úgy az elméjébe vésni, hogy arra később-minden részletében-visszaemlékezzen, akkor rövid ( két körig tartó ) meditációval mindegy beleégeti a kivánt dolgot az agyába. Ezek után az emlék még három éven át tökéletesen tisztán él benne, s minden különösebb erőfeszités ( vagy diszciplina alkalmazása ) nélkül felidézhető. Az emlék három év után ugyanúgy halványodni kezd, mint egy nem efféle beégetéssel szerzett kép. Ha a Pszi-alkalmazó olyan emléket kiván felidézni, melyet nem a fent emlitett módon tárol az agyában, akkor a diszciplina alkalmazásával erre is mód nyilik. Az igy felidézet emlék 10 körig tökéletesen éles lesz, ám utánna semmivé válik, s csak a diszciplina újboli alkalmazásával kerül elő megint. Mesterfokú alkalmazás esetén nem csak saját magunkba idézhetünk fel emléket, hanem másokban is.',
        },
        {
            name: 'Ébredés ( Ébresztés )',
            psiPoint: 0,
            psiPointText: '-',
            ME: 'mentál',
            medTime: '1 kör',
            activeTime: '-',
            description: 'A Pszi-alkalmazó képes beprogramozni magát arra, hogy egy meghatározott időben minden külső befolyásolás nélkül felébredjen. Az önszugessziónak vagy arra kell irányulnia, hogy mennyi idő után szakadjon ki az állomból, vagy egy külső jelhez kell kapcsolódnia. Mivel az érzékszervek az álom alatt is mőködnek - noha normál esetben a gyenge ingereket a tudat figyelmenkivül hagyja - a diszciplina alkalmazója olyasféle jeleket határozhat meg ébredési pontnak, mint hajnali kakasszó, az Éjközép teljes sötétje, lova ideges horkantása, stb. A diszciplina nem mőködik, ha a karakter elájult, kábitószeres állomba merült, vagy valamely mentális támadás hatására kapcsolt ki tudata. Az alkalmazáshoz legalább egy pszi-pontal kell rendelkeznie.',
        },
        {
            name: 'Érzékélesités ( Tompitás és Megzavarás )',
            psiPoint: 2,
            psiPointText: 'érzékszervekként 2 Pszi-pont',
            ME: 'mentális',
            medTime: '2 kör',
            activeTime: '1 kör',
            description: 'A Pszi-energiák lehetőséget nyújtanak arra, hogy felhasználásukkal az alapvető öt érzékszerv hatását növeljük vagy csökkentsük. A diszciplina arra ad módot, hogy a látást, hallást, szaglást, tapintást és izlelést akaratunk szerint befolyásoljuk. A Látás befolyásolásával nem csak élesithetjük a szemet ( esetleg elhomályosithatjuk ), hanem lehetőség nyilik a Megzavarására is. A látás élesitésével maximum megkétszereződik a látótávolság, tompitásával azonban vakság is okozható. Megzavarása esetén a szem nem tud kellőképp fókuszálni, igy felléphet kettőslátás, esetleg a távolság, vagy egy közeledő tárgy, lény sebességének felmérésében okozhat problémát. A valóságtól való eltérés 10% és 60% között mozoghat. A Hallás élesitése kétszeresére növeli a hallótávot, tompitása süketséget okozhat. Megzavarásánál a hangok távolságát esetleg irányát véti el a befolyásolt lény. Az eltérés megegyezik a látásnál leirtakkal. A Szaglás, Tapintás és az Izlelés felerősitése megkétszerezi ezen érzékszervek hatásfokát, tompitásuk az érzékszervek teljes kikapcsolásával is járhat. Megzavarásával elérhetjük, hogy más szag, anyagi minőség ( esetleg hőmérséklet ), vagy iz érződjék. A Megzavarás mértékének eldöntése a Kaland Mester feladata. FIGYELEM! A diszciplina nem alkalmas arra, hogy bármely érzékszerv befolyásolásával valós kárt okozzon. PL. Nem lehet a hőérzetet annyira felfokozni, ami már Fp vesztéssel jár. A diszciplina végrehajtása érzékszervenként 2 Pszi-pontba kerül, és hatását egy körig fejti ki. 4 Pszi-ponttért két érzékszervet lehet befolyásolni 1 körig, vagy egy érzékszervet 2 körig, stb.',
        },
        {
            name: 'Fájdalomcsillapitás ( Kinozás )',
            psiPoint: 1,
            psiPointText: '1 Pszi-pont / Fp',
            ME: 'asztrál',
            medTime: '1 kör',
            activeTime: 'végleges',
            description: 'A diszciplina segitségével az agy fájdalomközpontjára gyakorolhatunk hatást. Lehetőség nyilik fájdalomérzet tompitására vagy keltésére. Miután nem gyógyit, vagy okoz valódi sebet, az Életerő Pontokra nincs befolyással. Csak Fp-ot adhatunk vissza, vagy vehetünk el. A Fp-ok teljes elvonásával - 0 Fp-ra kinzással - elérhetjük, hogy az álldozat elájuljon, ám igazi seb ekkor sem keletkezik rajta. Maximum Fp fölé sem magunkat, sem másokat nem juttathatunk, bármennyi Psz-pontot is álldoznánk rá. Asztráltesttel nem rendelkező lényekre a diszciplina hatástalan.',
        },
        {
            name: 'Hatodik Érzék',
            psiPoint: 5,
            psiPointText: '5 Psz-pont',
            ME: '-',
            medTime: '5 szegmens',
            activeTime: '60 kör',
            description: '',
        },
        {
            name: '',
            psiPoint: 0,
            psiPointText: '',
            ME: '',
            medTime: '',
            activeTime: '',
            description: '',
        },
        {
            name: '',
            psiPoint: 0,
            psiPointText: '',
            ME: '',
            medTime: '',
            activeTime: '',
            description: '',
        },
        {
            name: '',
            psiPoint: 0,
            psiPointText: '',
            ME: '',
            medTime: '',
            activeTime: '',
            description: '',
        },
        {
            name: '',
            psiPoint: 0,
            psiPointText: '',
            ME: '',
            medTime: '',
            activeTime: '',
            description: '',
        },
        {
            name: '',
            psiPoint: 0,
            psiPointText: '',
            ME: '',
            medTime: '',
            activeTime: '',
            description: '',
        },
        {
            name: '',
            psiPoint: 0,
            psiPointText: '',
            ME: '',
            medTime: '',
            activeTime: '',
            description: '',
        },
        {
            name: '',
            psiPoint: 0,
            psiPointText: '',
            ME: '',
            medTime: '',
            activeTime: '',
            description: '',
        },
        {
            name: '',
            psiPoint: 0,
            psiPointText: '',
            ME: '',
            medTime: '',
            activeTime: '',
            description: '',
        },
        {
            name: '',
            psiPoint: 0,
            psiPointText: '',
            ME: '',
            medTime: '',
            activeTime: '',
            description: '',
        },
    ],
};
const getters = {
    pyarronPsi: () => {
        return state.pyarronPsi;
    },
    availablePyarronPsi: (state) => (psi) => {
        return state.pyarronPsi.filter(s => s.psiPoint <= psi);
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