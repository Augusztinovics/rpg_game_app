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
            psiPointText: '5 Pszi-pont',
            ME: '-',
            medTime: '5 szegmens',
            activeTime: '60 kör',
            description: 'A Hatodik Érzék az agy azon különleges képességeit használja fel, mely lehetővé teszi, hogy, az idő szövedékén átszűrődő eseménymozaikokat ősszerendezve megérezze a közeljövőben bekövetkező történések irányát. A diszciplina alkalmazója megérzésekhez juthat az időtartam alatt. Ezek a megérzések semmiféle pontosságal nem birnak, csupán egy hamarosan bekövetkező eseményre figyelmeztetik a karaktert. A megérzések lehetnek rossz, vagy jó előjelűek. Rossz előérzetet kelt minden olyan történés, mely ártalmas lehet, vagy gonosz szándékkal cselekedték. Jó előérzethez juthat a diszciplina alkalmazója, ha az időtartal alatt semmiféle baj nem történik vele, illetve a rá váró események a javára válnak. A Hatodik Érzéknek két alkalmazásmódja lehetséges. Az első esetben a karakter csupán álltalánosságban kiváncsi az időtartam allatt bekövetkező események rá vonatkozó előjelére. Ennek tipikus példája, ha a karakter egy sötét barlang szájánál megtorpanva használja a diszciplinát. Amenyiben a barlangban ellenséges lények lapulnak, amelyek valamely módon a bisztonságára törnek a diszciplina időtartalma alatt, akkor a karaktert Rossz Előérzet fogja el. Nem tudja az okát, sőt a leselkedő veszedelem mértékét és pontos irányát sem ismeri, csupán arról szerez tudomást, hogy valami vár rá. Belépve a barlangba fokozódik Rossz Előérzete - ahogy az időben közeledik az ártalmas esemény -, majd a baj közvetlen megtörténte előtt egy pillanattal megérzi irányát is. Ha ez egy támadás volt, már nem érte a diszciplina alkalmazóját váratlanul, s ebben az esetben az ellenséges akció nem minősül Meglepetésnek. A Hatodik Érzék másik alkalmazási módja, ha a karakter arra kiváncsi, hogy az álltala végrehajtott cselekmény milyen hatással jár rá nézve. Ilyenkor a diszciplina alkalmazása után megkérdezheti a Kalandmesterét, hogy milyen előérzetei vannak, érdemes-e megtennie, amire készül. A válasz minden esetben annyi, hogy jó vagy rossz érzések ébrednek benne. Indoklás sosincs. Jellemző helyzet, mikor a karakter egy sirt kiván kibontani. Végrehajtja a diszciplinát, s megkérdezi a Kalandmestert érzéseiről. Ha a sirban élőhalott fekszik, a karakternek Rossz Előérzete támad. Ha a sirban semmi sincs ( legfeljebb egy porhadó tetem ), vagy a koporsó mélyén kincs hever, a karakterben Jó Előérzetek ébrednek. A diszciplina 5 Pszi-pontért 60 körig ( azaz 10 percig ) 10 Pszi-pontert 20 percig működik. Csak af felhasználás létezik.',
        },
        {
            name: 'Képességjavitás ( Rontás )',
            psiPoint: 1,
            psiPointText: '+-1 = 1 Pszi, +-2 = 2 Pszi, +- 3 = 4 Pszi, +-4 = 8 Pszi, +-5 = 16 Pszi, +-6 = 32 Pszi',
            ME: 'asztrál',
            medTime: '2 kör',
            activeTime: '6 kör',
            description: 'Olykor - különleges vészhelyzetekben - az emberi fizikum látszólagos csodákra képes. Egy vadállattól megrémült gyermek hihetetlen gyorsasággal képes felkúszni egy sudár, ág nélküli fa törzsére, s miután a veszély elmúlt, nem csak azon csodálkozik, hogy miként sikerült ez neki, hanem gyakorta lemászni sem tud magától. Ez jellemző példája a Pszi akaratlan megnyilvánulásának, hisyen ilyenkor az agy szabadit fel a testben olyan erőforrásokat, melyek egyébbként nem hozzáférhető. A diszciplina ugyanezt képes végrehajtani, természetesen a tudat teljes irányitása alatt. A Pszi-erők segitségével a fizikai képességek - a Szépség kivételével - megváltoztathatók. A változtatás időleges, s a diszciplina időtartalmának lejárta után visszatérnek az eredeti értékek. Ugyanakkor lehetetlent nem szabad elvárnunk a Pszitől sem: egyik képességünket sem emelhetjük 20 fölé. FIGYELEM! Bármely képesség nullára - vagy nulla alá - csökkentése azonnali halálhoz vezet. A Képességjavitás az egyik legkedveltebb Álltalános Diszciplina. Gyakorta használják a Méregellenállás - az Egészség tiz feletti része - megnövelésére. Valójában hasznos minden olyan esetben, amikor Képességpróbára kényszerülünk, hiszen az adott pillanatban valóban erősebbek, gyorsabbak, egészségesebbek vagy ügyesebbek leszünk. Nem szabad elfelejteni, hogy ha harc folyamán megnöveljük Egészségünket - és egy csapást csak az igy nyert Ép-okkal éltük túl -, amint a diszciplina hatása elmúlik, a nyert Ép-k is semmivé lesznek, s ebbe akár bele is halhatunk. Ha Rontással az ellenfelünk Egészségét annyira lecsökkentjük, hogy ettől elvesziti maradék Ép-jeit, akkor meghal. Hiába jönnek vissza az Ép-k a diszciplina hatásának megszűnésével, a lélek nem költözik vissza a halott testbe.',
        },
        {
            name: 'Roham ( Megfékezés )',
            psiPoint: 1,
            psiPointText: '1 Pszi-pont = +2 TÉ',
            ME: 'asztrál',
            medTime: '1 szegmens',
            activeTime: '1 támadás',
            description: 'A diszciplina alkalmazója egyetlen csapásra összpontositva, teste és elméje minden tartalékát kiadja egy lerohanásszerű támadásba. Az alkalmazó, mély torokhangú kiáltás kiséretében hajtja végre a rohamot. A diszciplina felemészti az alkalmazó összes aktuális Pszi-pontját, beleértve a Dinamikus Pajzsba tároltakat is. Ez azt jelenti, hogy a támadó kénytelen felhasználni minden Pszi-pontot, amivel rendelkezik, s az ebből nyert energia hozzáadódik a Támadó Értékéhez. 1 Pszi-pont +2 TÉ-t jelent. ( Azaz 5 Pszi-pont felhasználása esetén +10 van a TÉ-n ). Amennyiben az ellenfél nem ugyanazt a diszciplinát alkalmazza, a kezdeményezés autómatikusan a Roham alkalmazóját illeti, kezdeményező dobás nélkül. Megfékezés esetén a diszciplina végrehajtója ezzel a módszerrel megakasztja, megzavarja támadóját, az elveszti a kezdeményezést, és a fenti módon kiszámolt érték levonódik Támadó Értékéből. Ez a diszciplina olykor igen hasznos lehet, ám nem szabad figyelmen kivül hagyni veszélyét: agyunk feltöltődéséig képtelenek leszünk bármiféle Pszi-alkalmazásra és elménket is csak Statikus Pajsz védi.',
        },
        {
            name: 'Telekinézis',
            psiPoint: 2,
            psiPointText: '2 Pszi-pont / 1 kg',
            ME: '-',
            medTime: '1 szegmens',
            activeTime: '1 kör',
            description: 'Agyi energiáink segitségével kisebb tárgyakat mozgathatunk látótávolságon belül. Elfordithatunk a zárba egy kulcsot, tőlünk távol heverő fegyvert magunkhoz húzhatjuk, vagy észrevétlenül elcsnhetünk az ékszerész műhelyből némi drágaságot. A diszciplina alkalmazása taglejtéseket nem igényel, pusztán a mozgatni kivánt tárgyon kell tartani tekintetünket. Amint elfordulunk, vagy valami eltakarja a tárgyat, az mozdulatlanná válik, esetleg - ha a levegőben vol - lepottyan. A Telekinézis csak lassú mozgatásra alkalmas - egy futó ember sebességénél nagyobbat nem érhetünk el vele - ezért ily módon fegyvert dobni, vagy sebesülést okozni szinte lehetetlen. A diszciplina kifejti hatását mágikus tárgyakra is. 2 Pszi-pont felhasználásával 1 kg súlyú tárgy mozgatható 1 körig, 4 Pszi-pont rááldozásával mozgathatunk 1 kg-os tárgyat 2 körig vagy 2 kg-os tárgyt 1 körig, stb.',
        },
        {
            name: 'Telepátia ( Gondolatátvitel )',
            psiPoint: 2,
            psiPointText: '2 Pszi-pont 1 kör, ha látják egymást, 1 Pszi-pont 1 szegmens, ha nem',
            ME: 'mentál',
            medTime: '3 kör',
            activeTime: 'változó',
            description: 'Az egyik legősibb alkalmazás, más néven Gondolatátvitel. Az Álltalános Diszciplinák azon kivétele, amely igazán csak mesterfokon használható. Segitségével gondolati úton lehet beszélgetni, vagy a Pszi alkalmazó álltal felidézett képeket közölni. A Telepátia csak Pszi képzettséggel rendelkezők között működik. Alapfokon az alkalmazó nem tud beszélgetést kezdeményezni, sőt válaszolni sem, csupán a hozzá intézet gondolati üzenetet venni. A diszciplina mesterfokú alkalmazása ad módott arra, hoy a Gondolatátvitelt meginditsa, és - két mesterfokú alkalmazó esetében - válaszoljon a kérdésekre. A Telepátia alkalmazásához a Gondolatátvitel megkezdőjének tökéletesen ismernie kell a gondolatokat fogadó személyt - ebben az esetben a távolság nem számit - vagy látni kell azt. Amennyiben a Telepátija résztvevői látják egymást,  csupán 2 Pszi-pontba kerül az 1 körig tartó gondolatátvitel. Ha nem látják egymást 1 szegmensenként kerül 1 Pszi-pontba. A Pszi pontok növelésével egyenlő arányban növelhető a diszciplina időtartalma is. Egyszerre legfeljebb két elme kapcsolódhat össze Telepátiával, tehát a gondolati úton történő beszélgetésbe nem lehet harmadik részről sem beleszólni, sem azt lehalgatni. Az egyetlen olyan Diszciplina, mely megtalálja a módját, hogy átszivárogjon a Statikus Pajzson, noha a Dinamikus Pajzs ezt is feltartóztatja. Ha ezy efféle pajzsot viselőnek küldenek Telepátiával üzenetet, az csak azt fogja érzékelni, hogy kapcsolatot keresnek vele. Amennyiben fogadni kivánja az üzenetet 1 szegmenses koncentrációval át kell rendeznie Dinamikus Pajzsát, és a kapcsolat létrejöhet. A Dinamikus Pajzsot nem kell megszüntetnie, elméje nem válik védtelenné a gondolatátvitel időtartalmára. A Telepátia megvalósulásakor nem rést nyit a tudatát óvó pajzson, hanem átrendezi azt, ezért nincs arra mód, hogy a kapcsolat megszületésének pillanatában valaki - akár a Gondolatátvitel kedvezményezője - egy másik, ügyes diszciplina hatásával kedveskedjen az üzenetet fogadónak. A Telepátia mindég csak annak a Pszi-alkalmazónak kerül Psz-pontjába, aki a gondolat közlést kezdeményezte.',
        },
        {
            name: 'Testhőmérséklet Növelés ( Hűtés )',
            psiPoint: 1,
            psiPointText: '5 fokonként 1 Pszi-pont',
            ME: 'mentál',
            medTime: '6 kör',
            activeTime: '1 óra',
            description: 'A diszciplina alkalmazója képes saját - mesterfokon más testének hőmérsékletét növelni vagy csökkenteni. Igy lehetőség nyilik a vizes ruhát megszáritani magán, vagy egy lángoló házból kimenekülnie égési sérülések nélkül. Minden felhasznált Pszi-pontal 5 fokkal képes megváltoztatni a testhőmérsékletet. Az ötven fok fölé emelt testhő hat kör után ájulást eredményez, hosszabb távon halállal jár. A húsz fokra csökkent testhőmérséglet Tetszhalálhoz vezet- ilyen formában még egy felkészületlen szervezet is képes életben maradni néhány hónapig - , húsz fok alá csökkent testhő maradandó egészségkárosodással jár, mig a negyedórát meghaladó 5 fok alatti állapot visszafordithatatlan folyamatot indit el a szervezetben, és az áldozat meghal. A diszciplina lehetőséget ad arra, hogy 1 Pszi-pontért 5 fokkal eltérő hőmérségletet 1 óráig fentartsa, 2 Pszi-pontért az 5 fokos befolyásolás 2 óráig, vagy a 10 fokos változtatást 1 órán keresztül bisztositsa, stb.',
        },
        {
            name: 'Pszi-lökés',
            psiPoint: 1,
            psiPointText: '1 Pszi-pont / 1 kg',
            ME: '-',
            medTime: '1 szegmens',
            activeTime: '-',
            description: 'Más néven energialökés. A mágiához legközelebb álló, alapvető diszciplina. Használata során a Pszi-alkalmazó kis mennyiségű mágikus energiát gyűjt magába, ám mivel tárolására nem késziti fel a módszer, azonnal ki is áramlik belőle. A Pszi-lökés irányitható, gyenge szél fuvallat formájában nyilvánul meg. Taszitó ereje használt Pszi-pontonként 1 kg. Apróbb dolgok felboritására, arrébb lökésére szokták használni, olykor - kellő erővel alkalmazva - tárgyak vagy emberek egyensúlyi helyzetét lehet megszüntetni vele.',
        },
        {
            name: 'Statikus Pszi Pajzs',
            psiPoint: 1,
            psiPointText: 'minimum 1',
            ME: '-',
            medTime: '90 kör',
            activeTime: 'még le nem bontják',
            description: 'A Pszi-pajzsok hivatottak megvédeni az elmét mágikus és Pszi befolyások ellen. A Pszi-alkalmazó agyi energiáiból erőteret épit tudata köré, melyen a tudati támadások fenakadhatnak. A Statikus Pajzs egyfajta állandó védelem, ami mindaddig óvja a tudatot, amig alkalmazója meg nem szünteti, vagy valaki le nem Rombolja. A Statikus Pajzs erőssége annyi, ahány Pszi-pontból épitették. Gyakorlati hatása abban nyilvánul meg, hogy a pajzs erősségét hozzáadjuk a Tudatalatti Mágiaellenálláshoz és igy dobjuk a ME-t. Két különböző Statikus Pajzs létezik: asztrális és mentális. Az Asztrál Pajzs az asztrális támadások ME-ához adódik hozzá, ,ig a Mentális Pajzs a mentális ME-hoz. A Statikus Pajzs, miután felépült, többé nem befolyásolható: Pszi-pontokat sem hozzáadni sem elvonni nem lehetséges. Védő hatását akkor is kifejti, ha a Pszi-alkalmazó alszik, eszméletlen vagy bármilyen egyébb okból öntudatlan, hiszen immár az elmétől függetlenül működik. Lebontani is csak újabb 90 körön át tartó meditációval lehet., vagy Pszi-ostrommal. A Statikus Pajzshoz felhasznált pszi-pontok a későbbiekben nem számitanak bele az aktuális pszi-pontok számába. Ez azt jelenti, hogy az alkalmazó megteheti, hogy egy békés napon az összes Pszi-pontját Statikus Pajzsok emelésére forditja, majd pihenés után ismét maximális pszi-pontjaira támaszkodhat-noh tudatát már védik a Statikus Pajzsok. Minden elme köré legfeljebb egy asztrális, és egy mentális Statikus Pajzs épithető. Statikus Pszi-pajzs, mesterfoku alkalmazással bárki elméje köré ( nem csak ember, de lélekkel rendelkező állat) épithető, ám a más elméje köré épitett pajzs, akárki épitette is ( harcművész, kardművész, vagy varázsló ), bárki álltal alkalmazott Pszi-ostrommal lebontható.',
        },
        {
            name: 'Dinamikus Pszi-pajzs',
            psiPoint: 1,
            psiPointText: 'minimum 1 Pszi-pont',
            ME: '-',
            medTime: '30 kör',
            activeTime: 'mig eszméletét nem veszti',
            description: 'A Statikus Pajzsokre épithető egyetlen újabb védelmi réteg, az úgynevezett Dinamikus Pajzs. A 30 körig tartó meditáció után a Dinamikus Pajzs megmearad mindaddig, mig az alkalmazó meg nem szünteti, vagy Pszi-ostrommal le nem bontják. Felépitése után - ellentétben a Statikus Pajzsal- bármikor további pszi-pontok adhatók hozzá ( azaz erősihető ), vagy vonhatók ki belőle. Ez minden alkalommal 1 körig tartó, rövid, meditativ koncentrációt igényel. Erőssége minden esetben megegyezik az épp benne tárolt pszi-pontok mennyiségével, ám az aktuális psziüpontok számánál sosem lehet több. A Dinamikus Pajzsokban tárolt pszi-pontok beleszámitanak a karakter aktuális pszi-pontjaiba, azaz az asztrális és mentális Dinamikus Pajszokba működő pszi-pontok és a diszciplinákra felhasználható pontok összesége a karakter max pszi-pontja. Fentartása folyamatos gyenge koncentrációt igényel, amir a pszi-alkalmazó szinte bármilyen esetben képes - kivéve, ha alszik, eszméletlen vagy bármely egyébb okból öntudatlan. Ha az elmét valamilyen erős sok éri, akárcsak egy pillanatra is, vagy a tudatot megbénitják, a Dinamikus Pajzs azonnal lebomlik. A Dinamikus Pajzsnak éppúgy két fajtája létezik, mint a Statikusnak ( sztrál és mentál ), és erőssége is éppúgy adódik hozzá a ME-hoz. Előnye a statikus pjzshoz képest, hogy a benne tárolt pszi energia bármikor hozzáférhető, s felhasználható egyébb diszciplinák alkalmazásához vagy Pszi-ostrom folytatásához. Hátránya, hogy a Dinamikus Pajzs lebontásával a támadó nem csak közelebb jutott az elméhez, hanem az alkalmazót a diszciplinákra felhasználható pszi-pontjai nagy részétől ( a Dinamikus Pajzsban tároltaktól ) is megfosztotta. Dinamikus Pajzs más elméje köré nem épithető.',
        },
        {
            name: 'Pszi-ostrom',
            psiPoint: 1,
            psiPointText: 'minimum 1 pszi-pont',
            ME: '-',
            medTime: '1 szegmens',
            activeTime: '-',
            description: 'A tudat védelmére felépitett Pszi-pajzsok megsemisitésére szolgáló diszciplina, mely csak mesterfokon alkalmazható. Két különböző tipusa létezik: Pszi-rombolás és Pszi-bontás. Pszi rombolással a Statikus Pajzsokat lehet megszüntetni. A Statikus Pajzsok nem bonthatók Pszi-pontonként-egyszerre kell lerombolni őket. Ez a következőképpen történik: A diszciplina alkalmazója meghatározza, hogy a romboláshoz hány pszi-pontot kiván felhasználni. Ennyi lesz a Rombolás erőssége. Ha ez nagyobb egyenlő, mint a pajzs erőssége a pajzs megszűnik, ha kisebb akkor a Romboláshoz használt psziüpontok elvésznek, de a pajzs teljes erősségében megmarad. A Rombolás nem árt a Dinamikus Pajzsoknak. A Dinamikus Pajzsok kiiktatására a Bontás szolgál. Segitségével akár pszi-pontonként is rombolható a Dinamikus Pajzs. Ilyenkor a Bontáshoz használt pszi-pontok mennyiségével megegyező pszi-pont bomlik le a Dinamikus Pajzsból. Bontással nem támadható Statikus Pajzs. A Pszi alapfokú alkalmazói nem érzékelik, ha egy elmét pajzsok védenek. Mesterfokon már gyenge ( pszi-pontot nem igénylő ) koncentrációval megállapitható, ha a tudatot övezi valamiféle védelem. Azt azonban, hogy Statikus vagy Dinamikus pajzsok működnek, csak a Kzr metódus alkalmazói tudhatják. A Pszi-ostrom folytatója következtethet a pajzsok tipusaira, hizsen pontosan érzékeli, ha az Ostrom valamely fajtája sikerrel jár, vagy a felhasznált energiák nem ütköztek ellenállásba.',
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