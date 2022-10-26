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
            description: 'A diszciplína helyszínek, szövegek, vagy események megjegyzésében, illetve régi- egyébként már elfelejtett - események felidézésében nyújt segítséget. Ha a Pszi-alkalmazó szeretne valamit úgy az elméjébe vésni, hogy arra később-minden részletében - visszaemlékezzen, akkor rövid (két körig tartó) meditációval mindegy beleégeti a kívánt dolgot az agyába. Ezek után az emlék még három éven át tökéletesen tisztán él benne, s minden különösebb erőfeszítés (vagy diszciplína alkalmazása) nélkül felidézhető. Az emlék három év után ugyanúgy halványodni kezd, mint egy nem efféle beégetéssel szerzett kép. Ha a Pszi-alkalmazó olyan emléket kíván felidézni, melyet nem a fent említett módon tárol az agyában, akkor a diszciplína alkalmazásával erre is mód nyílik. Az így felidézet emlék 10 körig tökéletesen éles lesz, ám utána semmivé válik, s csak a diszciplína újbóli alkalmazásával kerül elő megint. Mesterfokú alkalmazás esetén nem csak saját magunkba idézhetünk fel emléket, hanem másokban is.',
        },
        {
            name: 'Ébredés ( Ébresztés )',
            psiPoint: 0,
            psiPointText: '-',
            ME: 'mentál',
            medTime: '1 kör',
            activeTime: '-',
            description: 'A Pszi-alkalmazó képes beprogramozni magát arra, hogy egy meghatározott időben minden külső befolyásolás nélkül felébredjen. Az önszugessztiónak vagy arra kell irányulnia, hogy mennyi idő után szakadjon ki az állomból, vagy egy külső jelhez kell kapcsolódnia. Mivel az érzékszervek az álom alatt is működnek - noha normál esetben a gyenge ingereket a tudat figyelmen kívül hagyja - a diszciplína alkalmazója olyasféle jeleket határozhat meg ébredési pontnak, mint hajnali kakasszó, az Éjközép teljes sötétje, lova ideges horkantása, stb. A diszciplína nem működik, ha a karakter elájult, kábítószeres állomba merült, vagy valamely mentális támadás hatására kapcsolt ki tudata. Az alkalmazáshoz legalább egy pszi-ponttal kell rendelkeznie.',
        },
        {
            name: 'Érzékélesités ( Tompitás és Megzavarás )',
            psiPoint: 2,
            psiPointText: 'érzékszervekként 2 Pszi-pont',
            ME: 'mentális',
            medTime: '2 kör',
            activeTime: '1 kör',
            description: 'A Pszi-energiák lehetőséget nyújtanak arra, hogy felhasználásukkal az alapvető öt érzékszerv hatását növeljük vagy csökkentsük. A diszciplína arra ad módot, hogy a látást, hallást, szaglást, tapintást és ízlelést akaratunk szerint befolyásoljuk. A Látás befolyásolásával nem csak élesíthetjük a szemet (esetleg elhomályosíthatjuk), hanem lehetőség nyílik a Megzavarására is. A látás élesítésével maximum megkétszereződik a látótávolság, tompításával azonban vakság is okozható. Megzavarása esetén a szem nem tud kellőképp fókuszálni, így felléphet kettős látás, esetleg a távolság, vagy egy közeledő tárgy, lény sebességének felmérésében okozhat problémát. A valóságtól való eltérés 10% és 60% között mozoghat. A Hallás élesítése kétszeresére növeli a hallótávot, tompítása süketséget okozhat. Megzavarásánál a hangok távolságát esetleg irányát véti el a befolyásolt lény. Az eltérés megegyezik a látásnál leírtakkal. A Szaglás, Tapintás és az Ízlelés felerősítése megkétszerezi ezen érzékszervek hatásfokát, tompításuk az érzékszervek teljes kikapcsolásával is járhat. Megzavarásával elérhetjük, hogy más szag, anyagi minőség (esetleg hőmérséklet), vagy íz érződjék. A Megzavarás mértékének eldöntése a Kaland Mester feladata. FIGYELEM! A diszciplína nem alkalmas arra, hogy bármely érzékszerv befolyásolásával valós kárt okozzon. PL. Nem lehet a hőérzetet annyira felfokozni, ami már Fp vesztéssel jár. A diszciplína végrehajtása érzékszervenként 2 Pszi-pontba kerül, és hatását egy körig fejti ki. 4 Pszi-ponttért két érzékszervet lehet befolyásolni 1 körig, vagy egy érzékszervet 2 körig, stb.',
        },
        {
            name: 'Fájdalomcsillapitás ( Kinozás )',
            psiPoint: 1,
            psiPointText: '1 Pszi-pont / Fp',
            ME: 'asztrál',
            medTime: '1 kör',
            activeTime: 'végleges',
            description: 'A diszciplína segítségével az agy fájdalomközpontjára gyakorolhatunk hatást. Lehetőség nyílik fájdalomérzet tompítására vagy keltésére. Miután nem gyógyít, vagy okoz valódi sebet, az Életerő Pontokra nincs befolyással. Csak Fp-ot adhatunk vissza, vagy vehetünk el. A Fp-ok teljes elvonásával - 0 Fp-ra kínzással - elérhetjük, hogy az áldozat elájuljon, ám igazi seb ekkor sem keletkezik rajta. Maximum Fp fölé sem magunkat, sem másokat nem juttathatunk, bármennyi Pszi-pontot is áldoznánk rá. Asztráltesttel nem rendelkező lényekre a diszciplína hatástalan.',
        },
        {
            name: 'Hatodik Érzék',
            psiPoint: 5,
            psiPointText: '5 Pszi-pont',
            ME: '-',
            medTime: '5 szegmens',
            activeTime: '60 kör',
            description: 'A Hatodik Érzék az agy azon különleges képességeit használja fel, mely lehetővé teszi, hogy, az idő szövedékén átszűrődő eseménymozaikokat összerendezve megérezze a közeljövőben bekövetkező történések irányát. A diszciplína alkalmazója megérzésekhez juthat az időtartam alatt. Ezek a megérzések semmiféle pontossággal nem bírnak, csupán egy hamarosan bekövetkező eseményre figyelmeztetik a karaktert. A megérzések lehetnek rossz, vagy jó előjelűek. Rossz előérzetet kelt minden olyan történés, mely ártalmas lehet, vagy gonosz szándékkal cselekedték. Jó előérzethez juthat a diszciplína alkalmazója, ha az időtartam alatt semmiféle baj nem történik vele, illetve a rá váró események a javára válnak. A Hatodik Érzéknek két alkalmazásmódja lehetséges. Az első esetben a karakter csupán általánosságban kíváncsi az időtartam alatt bekövetkező események rá vonatkozó előjelére. Ennek tipikus példája, ha a karakter egy sötét barlang szájánál megtorpanva használja a diszciplínát. Amennyiben a barlangban ellenséges lények lapulnak, amelyek valamely módon a pisztonságára törnek a diszciplína időtartalma alatt, akkor a karaktert Rossz Előérzet fogja el. Nem tudja az okát, sőt a leselkedő veszedelem mértékét és pontos irányát sem ismeri, csupán arról szerez tudomást, hogy valami vár rá. Belépve a barlangba fokozódik Rossz Előérzete - ahogy az időben közeledik az ártalmas esemény -, majd a baj közvetlen megtörténte előtt egy pillanattal megérzi irányát is. Ha ez egy támadás volt, már nem érte a diszciplína alkalmazóját váratlanul, s ebben az esetben az ellenséges akció nem minősül Meglepetésnek. A Hatodik Érzék másik alkalmazási módja, ha a karakter arra kíváncsi, hogy az általa végrehajtott cselekmény milyen hatással jár rá nézve. Ilyenkor a diszciplína alkalmazása után megkérdezheti a Kalandmesterét, hogy milyen előérzetei vannak, érdemes-e megtennie, amire készül. A válasz minden esetben annyi, hogy jó vagy rossz érzések ébrednek benne. Indoklás sosincs. Jellemző helyzet, mikor a karakter egy sírt kíván kibontani. Végrehajtja a diszciplínát, s megkérdezi a Kalandmestert érzéseiről. Ha a sírban élőhalott fekszik, a karakternek Rossz Előérzete támad. Ha a sírban semmi sincs (legfeljebb egy porhadó tetem), vagy a koporsó mélyén kincs hever, a karakterben Jó Előérzetek ébrednek. A diszciplína 5 Pszi-pontért 60 körig (azaz 10 percig) 10 Pszi-pontért 20 percig működik. Csak af felhasználás létezik.',
        },
        {
            name: 'Képességjavitás ( Rontás )',
            psiPoint: 1,
            psiPointText: '+-1 = 1 Pszi, +-2 = 2 Pszi, +- 3 = 4 Pszi, +-4 = 8 Pszi, +-5 = 16 Pszi, +-6 = 32 Pszi',
            ME: 'asztrál',
            medTime: '2 kör',
            activeTime: '6 kör',
            description: 'Olykor - különleges vészhelyzetekben - az emberi fizikum látszólagos csodákra képes. Egy vadállattól megrémült gyermek hihetetlen gyorsasággal képes felkúszni egy sudár, ág nélküli fa törzsére, s miután a veszély elmúlt, nem csak azon csodálkozik, hogy miként sikerült ez neki, hanem gyakorta lemászni sem tud magától. Ez jellemző példája a Pszi akaratlan megnyilvánulásának, hiszen ilyenkor az agy szabadit fel a testben olyan erőforrásokat, melyek egyébként nem hozzáférhető. A diszciplína ugyanezt képes végrehajtani, természetesen a tudat teljes irányítása alatt. A Pszi-erők segítségével a fizikai képességek - a Szépség kivételével - megváltoztathatók. A változtatás időleges, s a diszciplína időtartalmának lejárta után visszatérnek az eredeti értékek. Ugyanakkor lehetetlent nem szabad elvárnunk a Pszitől sem: egyik képességünket sem emelhetjük 20 fölé. FIGYELEM! Bármely képesség nullára - vagy nulla alá - csökkentése azonnali halálhoz vezet. A Képességjavítás az egyik legkedveltebb Általános Diszciplína. Gyakorta használják a Méregellenállás - az Egészség tíz feletti része - megnövelésére. Valójában hasznos minden olyan esetben, amikor Képességpróbára kényszerülünk, hiszen az adott pillanatban valóban erősebbek, gyorsabbak, egészségesebbek vagy ügyesebbek leszünk. Nem szabad elfelejteni, hogy ha harc folyamán megnöveljük Egészségünket - és egy csapást csak az így nyert Ép-okkal éltük túl -, amint a diszciplína hatása elmúlik, a nyert Ép-k is semmivé lesznek, s ebbe akár bele is halhatunk. Ha Rontással az ellenfelünk Egészségét annyira lecsökkentjük, hogy ettől elveszíti maradék Ép-jeit, akkor meghal. Hiába jönnek vissza az Ép-k a diszciplína hatásának megszűnésével, a lélek nem költözik vissza a halott testbe.',
        },
        {
            name: 'Roham ( Megfékezés )',
            psiPoint: 1,
            psiPointText: '1 Pszi-pont = +2 TÉ',
            ME: 'asztrál',
            medTime: '1 szegmens',
            activeTime: '1 támadás',
            description: 'A diszciplína alkalmazója egyetlen csapásra összpontosítva, teste és elméje minden tartalékát kiadja egy lerohanás szerű támadásba. Az alkalmazó, mély torokhangú kiáltás kíséretében hajtja végre a rohamot. A diszciplína felemészti az alkalmazó összes aktuális Pszi-pontját, beleértve a Dinamikus Pajzsba tároltakat is. Ez azt jelenti, hogy a támadó kénytelen felhasználni minden Pszi-pontot, amivel rendelkezik, s az ebből nyert energia hozzáadódik a Támadó Értékéhez. 1 Pszi-pont +2 TÉ-t jelent. ( Azaz 5 Pszi-pont felhasználása esetén +10 van a TÉ-n). Amennyiben az ellenfél nem ugyanazt a diszciplínát alkalmazza, a kezdeményezés automatikusan a Roham alkalmazóját illeti, kezdeményező dobás nélkül. Megfékezés esetén a diszciplína végrehajtója ezzel a módszerrel megakasztja, megzavarja támadóját, az elveszti a kezdeményezést, és a fenti módon kiszámolt érték levonódik Támadó Értékéből. Ez a diszciplína olykor igen hasznos lehet, ám nem szabad figyelmen kívül hagyni veszélyét: agyunk feltöltődéséig képtelenek leszünk bármiféle Pszi-alkalmazásra és elménket is csak Statikus Pajzs védi.',
        },
        {
            name: 'Telekinézis',
            psiPoint: 2,
            psiPointText: '2 Pszi-pont / 1 kg',
            ME: '-',
            medTime: '1 szegmens',
            activeTime: '1 kör',
            description: 'Agyi energiáink segítségével kisebb tárgyakat mozgathatunk látótávolságon belül. Elfordíthatunk a zárba egy kulcsot, tőlünk távol heverő fegyvert magunkhoz húzhatjuk, vagy észrevétlenül elcsenhetünk az ékszerész műhelyből némi drágaságot. A diszciplína alkalmazása taglejtéseket nem igényel, pusztán a mozgatni kívánt tárgyon kell tartani tekintetünket. Amint elfordulunk, vagy valami eltakarja a tárgyat, az mozdulatlanná válik, esetleg - ha a levegőben volt - lepottyan. A Telekinézis csak lassú mozgatásra alkalmas - egy futó ember sebességénél nagyobbat nem érhetünk el vele - ezért ily módon fegyvert dobni, vagy sebesülést okozni szinte lehetetlen. A diszciplína kifejti hatását mágikus tárgyakra is. 2 Pszi-pont felhasználásával 1 kg súlyú tárgy mozgatható 1 körig, 4 Pszi-pont rááldozásával mozgathatunk 1 kg-os tárgyat 2 körig vagy 2 kg-os tárgyat 1 körig, stb.',
        },
        {
            name: 'Telepátia ( Gondolatátvitel )',
            psiPoint: 2,
            psiPointText: '2 Pszi-pont 1 kör, ha látják egymást, 1 Pszi-pont 1 szegmens, ha nem',
            ME: 'mentál',
            medTime: '3 kör',
            activeTime: 'változó',
            description: 'Az egyik legősibb alkalmazás, más néven Gondolatátvitel. Az Általános Diszciplínák azon kivétele, amely igazán csak mesterfokon használható. Segítségével gondolati úton lehet beszélgetni, vagy a Pszi alkalmazó álltál felidézett képeket közölni. A Telepátia csak Pszi képzettséggel rendelkezők között működik. Alapfokon az alkalmazó nem tud beszélgetést kezdeményezni, sőt válaszolni sem, csupán a hozzá intézet gondolati üzenetet venni. A diszciplína mesterfokú alkalmazása ad módot arra, hogy a Gondolatátvitelt megindítsa, és - két mesterfokú alkalmazó esetében - válaszoljon a kérdésekre. A Telepátia alkalmazásához a Gondolatátvitel megkezdőjének tökéletesen ismernie kell a gondolatokat fogadó személyt - ebben az esetben a távolság nem számit - vagy látni kell azt. Amennyiben a Telepátia résztvevői látják egymást,  csupán 2 Pszi-pontba kerül az 1 körig tartó gondolatátvitel. Ha nem látják egymást, 1 szegmensenként kerül 1 Pszi-pontba. A Pszi pontok növelésével egyenlő arányban növelhető a diszciplína időtartalma is. Egyszerre legfeljebb két elme kapcsolódhat össze Telepátiával, tehát a gondolati úton történő beszélgetésbe nem lehet harmadik részről sem beleszólni, sem azt lehallgatni. Az egyetlen olyan Diszciplína, mely megtalálja a módját, hogy átszivárogjon a Statikus Pajzson, noha a Dinamikus Pajzs ezt is feltartóztatja. Ha egy efféle pajzsot viselőnek küldenek Telepátiával üzenetet, az csak azt fogja érzékelni, hogy kapcsolatot keresnek vele. Amennyiben fogadni kívánja, az üzenetet 1 szegmenses koncentrációval át kell rendeznie Dinamikus Pajzsát, és a kapcsolat létrejöhet. A Dinamikus Pajzsot nem kell megszüntetnie, elméje nem válik védtelenné a gondolatátvitel időtartalmára. A Telepátia megvalósulásakor nem rést nyit a tudatát óvó pajzson, hanem átrendezi azt, ezért nincs arra mód, hogy a kapcsolat megszületésének pillanatában valaki - akár a Gondolatátvitel kedvezményezője - egy másik, ügyes diszciplína hatásával kedveskedjen az üzenetet fogadónak. A Telepátia mindég csak annak a Pszi-alkalmazónak kerül Psz-pontjába, aki a gondolat közlést kezdeményezte.',
        },
        {
            name: 'Testhőmérséklet Növelés ( Hűtés )',
            psiPoint: 1,
            psiPointText: '5 fokonként 1 Pszi-pont',
            ME: 'mentál',
            medTime: '6 kör',
            activeTime: '1 óra',
            description: 'A diszciplína alkalmazója képes saját - mesterfokon más testének hőmérsékletét növelni vagy csökkenteni. Így lehetőség nyílik a vizes ruhát megszárítani magán, vagy egy lángoló házból kimenekülnie égési sérülések nélkül. Minden felhasznált Pszi-ponttal 5 fokkal képes megváltoztatni a testhőmérsékletet. Az ötven fok fölé emelt testhő hat kör után ájulást eredményez, hosszabb távon halállal jár. A húsz fokra csökkent testhőmérséklet Tetszhalálhoz vezet- ilyen formában még egy felkészületlen szervezet is képes életben maradni néhány hónapig -, húsz fok alá csökkent testhő maradandó egészségkárosodással jár, míg a negyedórát meghaladó 5 fok alatti állapot visszafordíthatatlan folyamatot indít el a szervezetben, és az áldozat meghal. A diszciplína lehetőséget ad arra, hogy 1 Pszi-pontért 5 fokkal eltérő hőmérsékletet 1 óráig fenntartsa, 2 Pszi-pontért az 5 fokos befolyásolás 2 óráig, vagy a 10 fokos változtatást 1 órán keresztül biztosítsa, stb.',
        },
        {
            name: 'Pszi-lökés',
            psiPoint: 1,
            psiPointText: '1 Pszi-pont / 1 kg',
            ME: '-',
            medTime: '1 szegmens',
            activeTime: '-',
            description: 'Más néven energialökés. A mágiához legközelebb álló, alapvető diszciplína. Használata során a Pszi-alkalmazó kis mennyiségű mágikus energiát gyűjt magába, ám mivel tárolására nem készíti fel a módszer, azonnal ki is áramlik belőle. A Pszi-lökés irányítható, gyenge szél fuvallat formájában nyilvánul meg. Taszító ereje használt Pszi-pontonként 1 kg. Apróbb dolgok felborítására, arrébb lökésére szokták használni, olykor - kellő erővel alkalmazva - tárgyak vagy emberek egyensúlyi helyzetét lehet megszüntetni vele.',
        },
        {
            name: 'Statikus Pszi Pajzs',
            psiPoint: 1,
            psiPointText: 'minimum 1',
            ME: '-',
            medTime: '90 kör',
            activeTime: 'még le nem bontják',
            description: 'A Pszi-pajzsok hivatottak megvédeni az elmét mágikus és Pszi befolyások ellen. A Pszi-alkalmazó agyi energiáiból erőteret épít tudata köré, melyen a tudati támadások fennakadhatnak. A Statikus Pajzs egyfajta állandó védelem, ami mindaddig óvja a tudatot, amíg alkalmazója meg nem szünteti, vagy valaki le nem Rombolja. A Statikus Pajzs erőssége annyi, ahány Pszi-pontból építették. Gyakorlati hatása abban nyilvánul meg, hogy a pajzs erősségét hozzáadjuk a Tudatalatti Mágia ellenálláshoz és így dobjuk a ME-t. Két különböző Statikus Pajzs létezik: asztrális és mentális. Az Asztrál Pajzs az asztrális támadások ME-ához adódik hozzá, míg a Mentális Pajzs a mentális ME-hoz. A Statikus Pajzs, miután felépült, többé nem befolyásolható: Pszi-pontokat sem hozzáadni sem elvonni nem lehetséges. Védő hatását akkor is kifejti, ha a Pszi-alkalmazó alszik, eszméletlen vagy bármilyen egyéb okból öntudatlan, hiszen immár az elmétől függetlenül működik. Lebontani is csak újabb 90 körön át tartó meditációval lehet, vagy Pszi-ostrommal. A Statikus Pajzshoz felhasznált pszi-pontok a későbbiekben nem számítanak bele az aktuális pszi-pontok számába. Ez azt jelenti, hogy az alkalmazó megteheti, hogy egy békés napon az összes Pszi-pontját Statikus Pajzsok emelésére fordítja, majd pihenés után ismét maximális pszi-pontjaira támaszkodhat tudatát már védik a Statikus Pajzsok. Minden elme köré legfeljebb egy asztrális, és egy mentális Statikus Pajzs építhető. Statikus Pszi-pajzs, mesterfokú alkalmazással bárki elméje köré (nem csak ember, de lélekkel rendelkező állat) építhető, ám a más elméje köré épített pajzs, akárki építette is (harcművész, kardművész, vagy varázsló), bárki által alkalmazott Pszi-ostrommal lebontható.',
        },
        {
            name: 'Dinamikus Pszi-pajzs',
            psiPoint: 1,
            psiPointText: 'minimum 1 Pszi-pont',
            ME: '-',
            medTime: '30 kör',
            activeTime: 'mig eszméletét nem veszti',
            description: 'A Statikus Pajzsokra építhető egyetlen újabb védelmi réteg, az úgynevezett Dinamikus Pajzs. A 30 körig tartó meditáció után a Dinamikus Pajzs megmarad mindaddig, míg az alkalmazó meg nem szünteti, vagy Pszi-ostrommal le nem bontják. Felépítése után - ellentétben a Statikus Pajzzsal- bármikor további pszi-pontok adhatók hozzá (azaz erősíthető), vagy vonhatók ki belőle. Ez minden alkalommal 1 körig tartó, rövid, meditatív koncentrációt igényel. Erőssége minden esetben megegyezik az épp benne tárolt pszi-pontok mennyiségével, ám az aktuális pszi-pontok számánál sosem lehet több. A Dinamikus Pajzsokban tárolt pszi-pontok beleszámítanak a karakter aktuális pszi-pontjaiba, azaz az asztrális és mentális Dinamikus Pajzsokba működő pszi-pontok és a diszciplínákra felhasználható pontok összessége a karakter Max pszi-pontja. Fenntartása folyamatos gyenge koncentrációt igényel, amire a pszi-alkalmazó szinte bármilyen esetben képes - kivéve, ha alszik, eszméletlen vagy bármely egyéb okból öntudatlan. Ha az elmét valamilyen erős sok éri, akárcsak egy pillanatra is, vagy a tudatot megbénítják, a Dinamikus Pajzs azonnal lebomlik. A Dinamikus Pajzsnak éppúgy két fajtája létezik, mint a Statikusnak (Asztrál és Mentál), és erőssége is éppúgy adódik hozzá a ME-hoz. Előnye a statikus pajzshoz képest, hogy a benne tárolt pszi energia bármikor hozzáférhető, s felhasználható egyéb diszciplínák alkalmazásához vagy Pszi-ostrom folytatásához. Hátránya, hogy a Dinamikus Pajzs lebontásával a támadó nem csak közelebb jutott az elméhez, hanem az alkalmazót a diszciplínákra felhasználható pszi-pontjai nagy részétől (a Dinamikus Pajzsban tároltaktól) is megfosztotta. Dinamikus Pajzs más elméje köré nem építhető.',
        },
        {
            name: 'Pszi-ostrom',
            psiPoint: 1,
            psiPointText: 'minimum 1 pszi-pont',
            ME: '-',
            medTime: '1 szegmens',
            activeTime: '-',
            description: 'A tudat védelmére felépített Pszi-pajzsok megsemmisítésére szolgáló diszciplína, mely csak mesterfokon alkalmazható. Két különböző típusa létezik: Pszi-rombolás és Pszi-bontás. Pszi rombolással a Statikus Pajzsokat lehet megszüntetni. A Statikus Pajzsok nem bonthatók Pszi-pontonként - egyszerre kell lerombolni őket. Ez a következőképpen történik: A diszciplína alkalmazója meghatározza, hogy a romboláshoz hány pszi-pontot kíván felhasználni. Ennyi lesz a Rombolás erőssége. Ha ez nagyobb egyenlő, mint a pajzs erőssége a pajzs megszűnik, ha kisebb, akkor a Romboláshoz használt pszi-pontok elvésznek, de a pajzs teljes erősségében megmarad. A Rombolás nem árt a Dinamikus Pajzsoknak. A Dinamikus Pajzsok kiiktatására a Bontás szolgál. Segítségével akár pszi-pontonként is rombolható a Dinamikus Pajzs. Ilyenkor a Bontáshoz használt pszi-pontok mennyiségével megegyező pszi-pont bomlik le a Dinamikus Pajzsból. Bontással nem támadható Statikus Pajzs. A Pszi alapfokú alkalmazói nem érzékelik, ha egy elmét pajzsok védenek. Mesterfokon már gyenge (pszi-pontot nem igénylő) koncentrációval megállapítható, ha a tudatot övezi valamiféle védelem. Azt azonban, hogy Statikus vagy Dinamikus pajzsok működnek, csak a Kyr metódus alkalmazói tudhatják. A Pszi-ostrom folytatója következtethet a pajzsok típusaira, hiszen pontosan érzékeli, ha az Ostrom valamely fajtája sikerrel jár, vagy a felhasznált energiák nem ütköztek ellenállásba.',
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