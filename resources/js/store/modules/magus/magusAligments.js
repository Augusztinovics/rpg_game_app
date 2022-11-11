/**-------------------------------------------
 * 
 * STORE FOR MAGUS ALIGMENTS
 * 
 * -------------------------------------------
 */
const state = {
    //jellem
    aligments: [
         {  
             id: 'E',
             name: 'Élet - Unikornis',
             description: 'Az élet jelleműek nagy becsben tartanak minden élőlényt, s ha tehetik megakadályozzák az erőszakos halált. Őrizkednek mások szabadságának korlátozásától, elutasítanak mindenfajta fenyegetéssel, erőszakkal járó tettet - ám fegyvert ragadnak, ha az Élet szabadságát veszélyben érzik, ilyenkor nem riadnak vissza a vérontástól sem.',
         },
         {
            id: 'H',
            name: 'Halál - Mantikor',
            description: 'A Halál jellembe sorolhatók semmire sem becsülik az életet. Lelkiismeret nélkül pusztítanak el mindent ami az útjukba kerül.Sokan azért lelik örömüket az élők elpusztításában, mert maguknak nem adatott meg a jog az élethez - ebbe a csoportba tartozik az élőhalottak jelentős része.Mások megvetnek minden életet , kivéve a sajátjukat. Előfordulnak azonban olyanok is, akiknek a létezés nem nyújt semmi üdvözítöt, s saját életüket ugyanolyan értéktelennek tartják, mint bárki másét.Többen az Istenek követének érzik magukat, akinek joga, mi több kötelessége eldönteni, kinek van illetve nincs maradása az anyagi világban.',
        },
        {
            id: 'R',
            name: 'Rend - Draco',
            description: 'A Rend hívei valják, hogy az őket körülvevő univerzumban bekövetkező változások az Istenek létezésének következményeképp megfoghatatlan harmóniát alkotnak. Ezt szeretnének megvalósítani saját életükben, munkájukban is. Céljuk az építés, a helyes élet törvényeinek megalkotása. Harmóniát keresnek a természettel, s elutasítanak minden olyan cselekedetet, amely az egyetemes törvények megszegését jelenti. Sokszor tekintik fontosabbnak  a közösség érdekeit saját jóllétüknél, s elejét veszik minden olyan cselekedetnek, mely a közösség kárára válhat.',
        },
        {
            id: 'K',
            name: 'Káosz - Traclon',
            description: 'A Káosz szolgái nincsenek tekintettel semilyen befolyásoló erőre, mely meggátolná őket szabad akaratuk érvényesítésében. Sokszor nem is saját jóllétükért, hanem függetlenségük bizonyítására cselekednek minden logika ellenében. Nem lételemük a pusztítás, de alkalmasint örömüket lelhetik benne. Előfordulhat, hogy csak azért rombolnak, mert valaki kísérletet tett megfékezésükre, s ezt minden tiltást elutasító lelkük nem képes elviselni.',
        },
        {
            id: 'ER',
            name: 'Élet, Rend - Kerub',
            description: 'A Kerub jelleműek amellett, hogy az élet szentségét védelmezik, mindég figyelembe veszik a fenálló -akár isteni, akár emberi -törvények betartását is, noha a vérontást mindenképp kerülendőnek tartják. Ha kell, ennek érdekében még a törvények megszegésére is hajlandóak, ameddig ez nem segíti elő a Halál vagy Káosz erőinek térnyerését.',
        },
        {
            id: 'EK',
            name: 'Élet, Káosz - Sellő',
            description: 'A Sellő jellemű karakterek is elsődleges fontosságúnak tartják az élet védelmét, de eszközeikben már nem annyira válogatósak. Sokszor fittyet hánynak bármifajta törvényre, gyakran még a józan ész diktálta elővigyázatosságot is figyelmen kivül hagyják. Annyira azonban nem öntörvényűek, hogy ne vegyék észre, cselekedeteikkel mikor ártanak olyanoknak is, akik nem szolgáltak arra rá.',
        },
        {
            id: 'HR',
            name: 'Halál, Rend - Krák',
            description: 'A Krák jelleműek nem tulajdonítanak nagy fontosságot mások életének, gyakorta a ragadozók kegyetlenségével gyilkolnak, de soha nem puszta szeszélyből. Álltalában egész eszmerendszer áll a hátuk mögött, olykor nagy hatalmú szervezetek, amelyek soha nem riadnak vissza a vér látványától. Hidegvérű gyilkosok. Ideológiájuk legalább annyira megvetik a Káosz különféle megjelenési formáit, mint a cél nélküli létet.',
        },
        {
            id: 'HK',
            name: 'Halál, Káosz - Kiméra',
            description: 'A Kiméra jellemű karakterek egyesítik magukban mindazt, ami gyűlöletes a magukat józan gondolkodóknak nevezők szemében. Számukra az élet -gyakorta a sajátjuk is -mit sem ér, nem ritka az olyan sem, aki kifejezetten gyűlöli mindazokat, akik szervezett államokban, közösségekben laknak. Módszereikben nem válogatnak, gyakorta elhamarkodottan döntenek. Céljuk között szerepel, hogy ne csak hatékonyan, de látványosan is cselekedjenek.',
        },
        {
            id: 'RE',
            name: 'Rend, Élet - Griff',
            description: 'A Griff jelleműek mindenben alávetik magukat a saját maguk vagy mások által hozott törvényeknek, cselekedeteiket szigorú szabályok határozzák meg. Szabályok melyek tiltják ugyan a gyilkosságot, de mindazok ellen szólnak, akik az életet veszélyeztetik. Ha arra kényszerülnek, hogy öljenek, azt soha nem élvezetből, hanem mindég a kötelesség parancsára teszik.',
        },
        {
            id: 'RH',
            name: 'Rend, Halál - Hastin',
            description: 'Méltón kapták a nevüket a legszívósabb harci kutyáról a Hastin jelleműek. Szolgálnak és ölnek, ha kell kérlelhetetlen és könyörtelen gyilkosok, mihelyt arra valakitől parancsot kaptak, vagy érdekeik, hitük így követeli. Nem életcéljuk azonban más életének kioltása és semmiféleképpen nem ölnek szórakozásból. Álltalában hideg és számitó eszmerendszereket vallanak magukénak, nem ritkán felsőbbrendűség ideáját szolgálják.',
        },
        {
            id: 'KE',
            name: 'Káosz, Élet - Pegazus',
            description: 'Öntörvényű és önfejű alakok a Pegazus jelleműek, ha valakit szolgálnak, azt csakis saját érdekükben teszik. Mindenfajta korlátozást nyűgnek, szabadságuk megkurtítására tett kísérletnek tekintenek -bármit tesznek azonban, ha módjukban áll, igyekeznek megkimélni ellenfeleik vagy áldozataik életét.',
        },
        {
            id: 'KH',
            name: 'Káosz, Halál - Démon',
            description: 'A Démon jellemű karakterek állnak a legtávolabb mindattól, amit köznapi értelemben emberinek nevezünk. Kötöttségek nélkül, zavaros gondolatok hajtják őket, s mivel az életet semmibe veszik, nem ritkán szakadatlan harc és menekülés az életük. A tiszteletet nem, csupán a félelmet ismerik, s csakis az erősebbeket tűrik el úrként maguk felett.',
        },
    ]
};
const getters = {
    aligments: (state) => {
        return state.aligments;
    },
    aligment: (state) => (id) => {
        return state.aligments.find(a => a.id === id);
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