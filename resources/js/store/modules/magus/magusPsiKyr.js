/**-------------------------------------------
 * 
 * STORE FOR MAGUS PSI KYR
 * 
 * -------------------------------------------
 */
 const state = {
    kyrPsi: [
        {
            name: 'Energiagyűjtés',
            psiPoint: 1,
            psiPointText: '1 Pszi-pont / 10 Mana vagy 5 Mana vagy 3 Mana',
            ME: '-',
            medTime: '1 óra vagy 2 kör vagy 5 szegmens',
            activeTime: '-',
            description: [
                'A Kyr metódus legalapvetőbb diszciplinája, a varázslók tudományának az alapja. Segitségével a varázsló elméjébe gyűjtheti a világegyetemet átható mágikus energiákat ( Mana-pont ), az energiát melyből varázslatait létrehozza. Természetesen egyszerre maximum annyit, amenyit befogadni képes. Erről a mennyiségről a Tapasztalati Szint fügvényében a max Mana-pont tudósit. Az Energiagyűjtés leegyszerűsitve nem más, mint a Pszi-pontok Mana-pontokra váltása - a váltószám az Energiagyűjtés alkalmazott módszerétől függ. Itt csak a három alapvető módszert ismertetjük: a Meditációs formula, a Kivonás és a Kisajtolás.',
                'A meditációs formula ( 1 Pszi-pont = 10 Mp ) alkalmazásához a varázslónaka Meditációs Varázskörben kell tartózkodnia ( ennek elkészitése 18 Mp-ba kerül és 30 percbe tellik ) és ott 1 óra hosszan transzállapotban meditálni. Már ebből is látszik, hogy ennél a módszernél jelentős előkészületekre van szükség, s a varázsló másfél óra hosszatt helyhez van kötva. Mégis, a varázslók, ha idejük és a körülmények engedik, ehhez az energiagyűjtési módszerhez folyamodnak, mert igy juthatnak a legtöbb mágikus energiához (Mp) a legkevesebb pszi-pontért. Ha a meditáció bármely okból félbeszakad, az Energiagyűjtés sikertelen lesz, s a felhasznált pszi-pontok is elvesznek. Mitöbb a varázsló elméjéből elillan a már korábban begyűjtött energia is, azaz Mana-pontjainak száma nullára zuhan. Ha az 1 órás meditáció zavartalanul véget ér, azzal a varázsló sikeresen gyűjtötte az elméjébe a kivánt mennyiségű mágikus energiát. Tizszer annyi Mana-pontot kap, mint ahány pszi-pontot a diszciplina alkalmazására forditott, tehát a meditációs formula alkalmazásával 1 pszi-pontért 10 Mana-pont jár.',
                'Kivonáshoz ( 1 pszi-pont 3 Mp ) a varázslók olyankor folyamodnak, ha kifogytak az elmélyükben tárolt energiákból, és sürgősen utánpótlásra van szükségük. A sietségért cserébe a kisebb hatékonysággal fizetnek - a módszer a pszi-pontok valóságos pazarlása! Ellenben csak 2 körig tart, és sem Transz, sem Meditációs Varázskör nem kell hozzá: azaz semmiféle előkészületet nem igényel, mindössze némi öszpontositást. Közben a varázsló sétálhat, léptethet a lován, de nem harcolhat, varázsolhat, s nem alkalmazhat más diszciplinát. A módszer alkalmazásakor a varázsló kivonja a környezetéből a többletenergiákat, mindenhonnan csak keveset és csak a felesleget- nem árt senkinek és semminek. Kivonással háromszor annyi Mana-ponthoz jut, mint amennyi pzsi-pontot a diszciplinára álldozott, tehát 1 pszi-pontért 3 Mana-pontot nyer.',
                'A Kisajtolás ( 1 pszi-pont = 5 Mp )természetéből fakadóan fekete mágia! Alkalmazásakor a varázsló nem a felesleget vonja el környezetétől, hanem kisajtol abból annyi energiát amennyit csak képes. A folyamat eredményeképpen a varázsló Zónájában ( 20m sugarú gömb ) a növények elszáradnak ( csak 20 Mp felett ) és az élőlények kinzó fájdalmat éreznek egész testükben. A fájdalom nem jár sebbel, de Fp vesztést okoz a varázsló Zónájában tartózkodó összes lénynek. A veszteség minden megkezdett 20 Mp után K6 ( Fp pl: 20 Mp = K6 Fp, 25 Mp = 2K6 Fp, 70 Mp = 4K6 Fp ). Az álldozat ilyen módon Ép-t soha nem veszithett. A Kisajtolás 5 szegmens alatt elvégezhető, és 5-ször annyi Mp-ot eredményez, mint amennyi pszi-pontot a varázsló a diszciplinára elhasznált, vagyis 1 pszi-pontért 5 Mana-pont jár. A leirtak kivételével a Kisajtolás módszere teljesen azonos a Kivonással.',
            ],
        },
        {
            name: 'Transz',
            psiPoint: 1,
            psiPointText: '1 Pszi-pont',
            ME: '-',
            medTime: '10 perc',
            activeTime: 'fentartható',
            description: [
                'A diszciplina segitségével a végrehajtó transzállapotba kerülhet. Hogy ez megtörténjen, tiz percig mozdulatlanul meditál, teljes szellemével a Transz elérésére öszpontosit. Ez alatt nem végezhet fizikai vagy szellemi tevékenységet, mozdulatlanul áll, vagy ül, netán fekszik.',
                'Transzba lassú mozdulatokkal képes mozogni, akár egy sétáló lovat is megülni, vagy gyalogolni, mágikus jeleket rajzolni, beszélni, irni, de nem képes fürge mozdulatokra, közelharcra és a transztól eltérő öszpontositásra. Maga a végrehajtó bármikor visszatérhet normális tudatállapotba, más azonban nehezen képes kizökkenteni. A transzba lévő emberhez hiába bezsélnek, rázzák, öntik nyakon vizzel, a Transz csak Fp, vagy Ép vesztést okozó zavarás hatására szakad meg.',
                'A transzállapot feltétlenül szükséges egyes mágikus tanok gyakorlásánál ( pl Jelmágia ), s ilyenkor a varázslók ezen diszciplinához folyamodnak. Egyetlen pszi-pont felhasználásával a végrehajtó korlátlan ideig transzállapotba kerülhet. Természetesen léteznek más módszerek is a transzállapot elérésére, mint például a koplalás, kántálás, törzsi tánc - ám ezek a javasasszonyok, boszorkányok, sámánok fegyvertárába tartoznak. Transzállapotban az ember testi funkciói lelassulnak, igy jóval ( ötször ) hosszabb időt képes kibirni evés, ivás vagy levegővétel nélkül.',
            ],
        },
        {
            name: 'Láthatatlanság Észlelése',
            psiPoint: 5,
            psiPointText: '5 Pszi-pont / E',
            ME: '-',
            medTime: '2 szegmens',
            activeTime: '5 kör',
            description: [
                'A diszciplina végrehajtója öt körön keresztül látja a mágikusan láthatatlanná tett tárgyakat és élőlényeket. Természetesen csak azokat, emelyeknél a diszciplina erőssége meghaladja a láthatatlanság erősségét. Hasonlóképpen a Leplezett varázslatok esetében: az alkalmazó megpillantja a láthatatlanná tett mágikus hatásokat, varázslatokat. Alapesetben a diszciplina erőssége 1, de dupla vagy tripla mennyiségű pszi-pont felhasználásával töbszörözhető. Ugyanez igaz az 5 körös időtartamra is.',
            ],
        },
        {
            name: 'Asztrálszem',
            psiPoint: 3,
            psiPointText: '3 Pszi-pont + 1 pszi-pont / 3E',
            ME: 'asztrál',
            medTime: '3 szegmens',
            activeTime: 'azonnali',
            description: [
                'A diszciplina mások érzelmeinek, indulatainak kifürkésére alkalmas. Segitségével át lehet látni az Asztrális Pajzson is. Bármilyen erősitésű Asztrális Szemmel tekintünk valakire, egyet mindenképpen és bisztosan megtudhatunk: az illető érzelmi kiegyensúlyozottságának mértékét, másként szólva Asztrálját. Ezen túl az álldozat jogosult Asztrális Mágiaellenállásra.',
                'Abban az esetben, ha a kiszemelt álldozat Mágiaellenállása sikeres, az alkalmazó csak a legnyilvánvalóbb érzelmekről szerez tudomást - melyek általában már puszta emberismerettel is felismerhetők. Kimagaslóan erős érzelmekről van itt szó: ilyen a heves szerelem, a vak gyűlölet, a szamuráj hűsége vagy az éppen fellángoló szexuális vágy. Mindezeknek is csupán létére derül fény, a céljukra, arra, hogy az illető kinek vagy minek az irányában érez, arra nem. Erre a diszciplina alkalmazója legfeljebb következtethet: például kitalálja, hogy a pap vak hűsége istene felé irányul.',
                'Ha az álldozat elvéti Asztrális Mágiaellenállását, világossá válik az érzelem célja is, mitöbb a kevésbé nyilvávaló érzelmek is napvilágra kerülnek. Persze az Asztrálszem egyszeri használata nem egyenlő az álldozat érzelmi életének teljes feltérképezésével. Segitségével megpillantható öt nyilvánvaló, három álltalános vagy egy titkos érzelem. Legutóbbiról akkor beszélünk ha valaki öszpontosit arra, hogy lelke mélyén elrejtsen egy érzelmet illetve indulatot - egyszerre legfeljebb kettővel teheti.',
                'A Szem alkalmazója vagy a KM-re bizza, hogy mesélje el, mi az amit lát, vagy célirányosan kérdezhet is. Felteheti a kérdést, hogy a diszciplina álldozata miként érez meghatározott személyek vagy eszmék irányába. Kérheti az öt legnyilvánvalóbb érzelmek felsorolását, vagy tudakozódhat egy esetleges titkos érzelem felől. A választól függetlenül, a kérdést annyiszor ismételheti meg, ahányszor a felsorolt feltételek lehetővé teszik.',
                'A diszciplina egyszerre egyetlen személy ellen használható, és a feltüntetett 3 szegmens alatt a teljes információcsere lezajlik. Ez idő alatt az alkalmazó meditativ tudatállapotba kell, hogy legyen.',
                'A diszciplina másik alkalmazási módja, amikor az alkalmazó az Asztrálszem tekintetével nem egy valakit vesz alaposan szemügyre, hanem a 3 szegmens alatt gyorsan körbepásztáz. Ilyenkor megtudhatja a közelbe tartózkodó - legfeljebb 10 személy Asztrál Képességének értékét, de érzelmeiket s azok célját nem fürkészheti ki.',
                'Az alkalmazásra szánt minden egyes további pzsi-pont - a feltüntetett 3-on felül - nem egyel, hanem 3-al növeli a diszciplina erősségét. Az Asztrálszem használatáról a diszciplina álldozata nem szerez tudomást.',
            ],
        },
        {
            name: 'Mentálszem',
            psiPoint: 5,
            psiPointText: '5 Pszi-pont + 1 pszi-pont / 2 E',
            ME: 'mentál',
            medTime: '5 szegmens',
            activeTime: 'azonnali',
            description: [
                'A Mentálszem egyetlen személy gondolati életének minőségéről ad felvilágositást. Segitségével át lehet látni a Mentálpajzson, bár ilyenkor nem égbekiálltó az eredmény - de nem is lebecsülendő.',
                'A Mentálszem használata ellen a kiszemelt áldozat Mentális Mágiaellenállásra jogosult. Ha ez sikeres, akkor az alkalmazó annyit tud meg róla, hogy figyelemreméltó elme-e, netán átlagos gondolkodó, vagy éppen afféle ostoba tuskó. Továbbá azt, hogy valakitől valakihez Mentá-fonál vezet. Hogy kitől kihez, az csak akkor derithető ki, ha az alkalmazó mindkét álldozatot szemügyre veszi Mentál Szemével.',
                'Ha az álldozat elvéti Mágiaellenállását, az alkalmazó számszerűen tudomást szerez Intelligencia és Akaraterő Képességéről, valamint Kasztjáról valamint +- 1 eltéréssel Tapasztalati Szintjéről és Pszi használatának szintjéről.',
                'A diszciplina egyszerre egyetlen személy ellen alkalmazható, és a feltüntetett 5 szegmens alatt a teljes információcsere lezajlik. Ez alatt az alkalmazó meditativ tudatállapotba kell, hogy legyen.',
                'A diszciplina másik használati módja, mikor az alkalmazó a Mentál Szemmel nem egy valakit vesz alaposan szemügyre, hanem az 5 szegmens alatt gyorsan körbepásztáz. Olyenkor legfeljebb tiz, közelében tartózkodó személyről tudhatja meg azt, amit a sikeres Mágiaellenállás esetében irtunk le, de mást nem fürkészhet ki.',
                'Az alkalmazásra szánt minden egyes további pszi-pont - a feltüntetett 5-ön felül - nem 1-gyel hanem 2-vel növeli a diszciplina erősségét. A Mentálszem használatáról a diszciplina áldozata nem szerez tudomást.',
            ],
        },
        {
            name: 'Auraérzékelés',
            psiPoint: 7,
            psiPointText: '7 Pszi-pont + 1 pszi-pont / 2 E',
            ME: 'asztrál és mentál',
            medTime: '1 szegmens',
            activeTime: '-',
            description: [
                'Minden kifejlett lélekkel biró teremtmény kisugároz magából Személyes Aurát. Ez azon túl, hogy megvédi a lélek uralta testet a mágia bizonyos formáitól, messzemenően jellemzó az illetőre. Egy varázsló képes arra, hogy különleges érzékeivel szemügyre vegye az Aurát. Ha már máskor is látta és megjegyezte, az Aura alapján felismeri a lelket, bármely testben lakozik is. Képes érzékelni szembeötlő természetelleneségeket is, mint amikor emberi lélek állatban lakozik, vagy forditva. Továbbá meg tudja állapitani, hogy az illető milyen fajhoz tartozik.',
                'Mivel azonban az Asztrál és Mentál Pajzsok az Aura köré épülnek fel, mindezen információkat csak akkor szerezheti meg, ha átlát a pajzsokon. Ezt csak ugy érheti el, hogy az Auraérzékelést annyira felerősiti, hogy áldozata elvétse külön-külön mind Asztrális, mind Mentális Mágiaellenállását.',
                'Mindaddig, mig ez nem történik meg, a diszciplina csak a Pajzsok erősségéről szolgáltat adatokat. Nem számszerűen, hanem a következő felsorolás szerint elárulja, milyen nagyságrendű az illető Statikus és Dinamikus Asztrál- és Mentálpajzsa: NINCS: 0 E, GYENGE: 1-9 E, MÉRSÉKELT: 10-21 E, KÖZEPES: 22-34 E, ERŐS: 35-50 E, NAGYON ERŐS: 51+E',
                'A diszciplinát előszeretettel használják alakjukat megváltoztatott személyek felismerésére, netán vélt azonosság vagy ennek ellenkezőjének tisztázására, mivel az Aura elváltoztatására nincs mód!',
                'Az Auraérzékelésre szánt minden további pszi-pont - a leirt 7-en felül - nem eggyel, hanem 2-vel növeli a diszciplina erőségét.',
            ],
        },
        {
            name: 'Mágikus Tekintet',
            psiPoint: 4,
            psiPointText: '4 Pszi-pont',
            ME: 'akaraterőpróba',
            medTime: '1 szegmens',
            activeTime: 'még meg nem törik, vagy szakitsák',
            description: [
                'A diszciplina az energiagyűjtés mellett a Kyr metódus másik csúcspontját jelenti. Kifejezetten újkeletű, bár évek alatt széleskörben elterjedt, kifejlesztése egy Ynev-szerte csak a Smaragd Uraként ismert pyarroni mágus nevéhez fűződik. Alapja az okult tan, miszerint az anyagi porhüvelyben a szem a legrövidebb út a lélek felé. Éppen ezért az alkalmazónak minden esetben a kiszemelt álldozat szemébe kell néznie.',
                'Bárki, aki a diszciplina alkalmazójának a szemébe néz, Akaraterő-próbát köteles dobni, amit ha elvét, többé nem képes tekintetét a varázslóétól elszakitani. Bármit tehet, hátrálha, akár rá is támadhat az alkalmazóra, de nem cselekedhet semmi olyat, aminek következtében kiszabadulna a Mágikus Tekintet béklyójából. Vagyis nem helyezhet semmit az összekapcsolódó tekintet útjába, nem fordulhat és, nem léphet takarásba. A kapcsolat megtartása minden célja előtt való! A Mágikus Tekintettől csak akkor szabadulhat, ha az alkalmazó tekintetének elforditásával szabadon engedi, illetve ha harmadik személy akár egy pillanatra is akadályt gördit a két pillantás kereszttüzébe.',
                'Ha az álldozat kiszabadul, a diszciplina időtartalma azonnal lejár, egyébbként percekig, órákig, de elméletileg akár a végtelenségig is tarthat.',
                'A varázsló az a személy ellen, aki Mágikus Tekintetének rabja, magasabb hatásfokkal képes Asztrál-, és Mentálmágiát alkalmazni. Ami természetesen feltételezi, hogy a varázslat ideje alatt az álldozat nem szabadul. Hogy az emlitett magasabb hatásfok mit jelent, az a következő felsorolásból derül ki: 1.TSZ: +4E, 2.TSZ: +5E, 3.TSZ: +6E, 4.TSZ: +7E, 5.TSZ: +9E, 6.TSZ: +10E, 7.TSZ: +11E, 8.TSZ: +12E, 9.TSZ: +13E, 10.TSZ: +15E, 11.TSZ: +16E, 12.TSZ: +17E, 13.TSZ: +18E, 14.TSZ: +19E, 15.TSZ: +21E',
                'A varázslat erősségéhez hozzáadandó az adott Tapasztalati Szinten ( TSZ ) tarozó +E ( erősség ) értéke. ( például: 4. TSZ-en, ha a varázslat erőssége 13, Mágikus Tekintet rabságában az Erősség 20-nak minősül ).',
                'A varázslat létrejöttével - de még időtartalmának lejártával sem - az álldozat nem szabadul a Mágikus Tekintet bilincséből. Ez csak a fent emlitett esetekben történhet, addig a varázsló annyiszor varázsol rá a leirt kedvezményekkel, ahányszor csak jónak látja, illetve ameddig Mana-pontjai el nem fogynak.',
            ],
        },
        {
            name: 'Pszi-ostrom',
            psiPoint: 1,
            psiPointText: 'minimum 1 Pszi-pont',
            ME: '-',
            medTime: '1 szegmens',
            activeTime: 'változó',
            description: [
                'Mindenben azonos az Álltalános Diszciplinákban leirt Pszi-ostrommal, ám ezzel 1 pszi-pontért 2 pszi-pont bontható le a Dinamikus, és 2 E rombolható le a statikus pajzsokból.',
            ],
        },
    ],
};
const getters = {
    kyrPsi: () => {
        return state.kyrPsi;
    },
    availableKyrPsi: (state) => (psi) => {
        return state.kyrPsi.filter(s => s.psiPoint <= psi);
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