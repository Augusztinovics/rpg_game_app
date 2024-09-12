<!DOCTYPE html>
<html lang="hu">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="description" content="Itt játszhatsz különböző (jelenleg csak MAGUS ETK) RPG játékokat a barátaiddal">
        <meta name="keywords" content="RPG, MAGUS, magus, szerepjáték">
        <meta name="author" content="Avgusztinovics János">
        <title>RPG játékok</title>

          <!-- Scripts -->
        <script src="{{ asset('js/app.js') }}" defer></script>

        <!-- Styles -->
        <link href="{{ asset('css/app.css') }}" rel="stylesheet">
        <link href="{{ asset('css/home.css') }}" rel="stylesheet">

        
    </head>
    <body class="bg-secondary">
       
        <nav class="navbar navbar-expand-md navbar-dark bg-dark shadow-sm">
            <div class="container-fluid">
                <a class="navbar-brand" href="{{ url('/') }}">
                    RPG játékok
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="{{ __('Toggle navigation') }}">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <!-- Left Side Of Navbar -->
                    <ul class="navbar-nav me-auto">
                        <li class="nav-item">
                            <a class="nav-link" href="{{ route('game-downloads') }}">Különböző Letöltések</a>
                        </li>
                    </ul>

                    <!-- Right Side Of Navbar -->
                    <ul class="navbar-nav ms-auto">
                        <!-- Authentication Links -->
                        @guest
                            @if (Route::has('login'))
                                <li class="nav-item">
                                    <a class="nav-link" href="{{ route('login') }}">Bejelentkezés</a>
                                </li>
                            @endif

                            @if (Route::has('register'))
                                <li class="nav-item">
                                    <a class="nav-link" href="{{ route('register') }}">Regisztráció</a>
                                </li>
                            @endif
                        @else
                            @if (Auth::user()->gold)
                            <li class="nav-item border border-warning rounded-2">
                                <a class="nav-link text-warning" href="{{ route('gold') }}">
                                    <img class="me-1" src="/img/gold.png" alt="pentagram" width="30" height="30">
                                    Arany: {{ Auth::user()->gold }}
                                </a>
                            </li>
                            @endif
                            <li class="nav-item dropdown">
                                <a id="navbarDropdown" class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" v-pre>
                                    {{ Auth::user()->name }}
                                </a>
                                <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdownMenuLink">
                                    <li>
                                        <a class="dropdown-item" href="{{ route('home') }}">Játékos Panel</a>
                                    </li>
                                    @if (Auth::user()->level === 'ADMIN')
                                    <li>
                                        <a class="dropdown-item" href="{{ route('admin') }}">Admin Panel</a>
                                    </li>
                                    @endif
                                    @if (Auth::user()->level === 'GAME_MASTER' || Auth::user()->level === 'ADMIN')
                                    <li>
                                        <a class="dropdown-item" href="{{ route('gmhome') }}">Játékmester Panel</a>
                                    </li>
                                    @endif
                                    <li>
                                        <a class="dropdown-item" href="{{ route('logout') }}"
                                            onclick="event.preventDefault();
                                                            document.getElementById('logout-form').submit();">
                                            Kijelentkezés
                                        </a>
                                        <form id="logout-form" action="{{ route('logout') }}" method="POST" class="d-none">
                                            @csrf
                                        </form>
                                    </li>
                                </ul>
                            </li>
                            @if (Auth::user()->level === 'PLAYER')
                                <li class="nav-item">
                                    <a class="nav-link" href="{{ route('gm-registry') }}">Átépítés Kalandmesterre</a>
                                </li>
                            @endif
                        @endguest
                    </ul>
                </div>
            </div>
        </nav>
        <main>
            <div class="cover-image">
                <div class="cover-text">
                    <h1 class="display-2 fw-bold pb-4">Üdvözlet az RPG játékokon!</h1>
                    <p class="lead fw-bold fs-4">Itt játszhatsz különböző (jelenleg csak MAGUS ETK) RPG játékokat a barátaiddal</p>
                </div>  
            </div>
            <div class="container bg-light shadow-lg">
                <section>
                    <div class="pt-5">
                        <h2 class="display-4 fw-bold text-center pb-4">A Cél</h2>
                        <p class="px-4">Réges régen sokat játszottam a barátaimmal asztali RPG játékokat. De az iskolát befejezve, mindenki elment, munkát vállalt, legtöbbjük elköltözött másik városba ( én is ), sőt néhányan másik országba költöztek.</p>
                        <p class="px-4">Igy játszani már igen neház volt, de a játék szelleme megmaradt, igy kezdtem neki ennek az aplikációnak.</p>
                        <p class="px-4">Az aplikáció segitségével az egymástól távol élő barátok, játékostársak is játszhatnak ujra eggyütt online asztali RPG-t.</p>
                        <p class="px-4">Az idő múllásával, -és persze ha van rá igény, szeretnék minnél több fajta játékot beépiteni az aplikációba, de elsőnek a M.A.G.U.S. szerepjátékkal kezdtem.</p>
                        <p class="px-4">Jelenleg a M.A.G.U.S. ETK szabályrendszerével lehet játszani az aplikáció segitségével.</p>
                    </div>  
                </section>
                <hr class="mt-5">
                <section>
                    <div class="pt-4">
                        <h2 class="display-4 fw-bold text-center pb-4 mb-4">Mit nyújt az aplikáció</h2>
                        <p class="px-4">Az aplikáció három főbb részre van osztva: <b>Játékos panel</b>, <b>Kalandmester panel</b> és <b>Játékoldal</b></p>
                        <p class="p-4 h3"><b>Játékos panel</b></p>
                        <p class="px-4">A Játékos panel segítségével karaktereket készíthetsz, jelenlen ETK, de tervben van az MTK karakterekkel való bővítés is. Valamint itt küldhetsz barátkérelmeket, cseveghetsz a barátlistáról éppen aktív játékosokkal és elküldheted kérdéseidet az adminnak.</p>
                        <p class="p-4 h3"><b>Kalandmester panel</b></p>
                        <p class="px-4">Ha átépíted magad KM-nek, ezen a panelen készíthetsz játékmodulokat, megoszthatod, vagy letöltheted őket.</p>
                        <p class="p-4 h3"><b>Játékoldal</b></p>
                        <p class="px-4">Ha van egy KM és néhány játékos, itt játszhattok online. Az oldal bisztosít élő hang és üzenet lehetőséget, rajztáblát a KM-nek és még sok minden mást.</p>
                        <p class="p-4 h3"><b>Bónusz</b></p>
                        <p class="px-4">A különböző letöltések menüponton letölthetsz üres karakterlapot, valamint mások álltal megosztott játék modult.</p>
                    </div>
                </section>
                <hr class="mt-5">
                <section>
                    <div class="pt-5 pb-5">
                        <h2 class="display-4 fw-bold text-center pb-4">Az oldal használata</h2>
                        <h3 class="p-4">Regisztráció</h3>

                        <div class="row px-4">
                            <div class="col-lg mb-3">
                                <img class="img-fluid" src="/img/help/reg_box.jpg" alt="Register link">
                            </div>
                            <div class="col text-center mb-3">
                                <p>Ha új vagy az oldalon a jobb felső sarokban lévő regisztráció link segítségével regisztrálhatsz az oldalra.</p>
                            </div>
                        </div>

                        <div class="row px-4">
                            <div class="col text-center mb-3">
                                <p>A regiszter link egy egyszerű regisztrációs formra vezett. Itt megadhatod a bejelentkezéshez szükséges adatokat. A Felhasználó névnek és Emailnek egyedinek kell, hogy legyen, tehát ha hibát jelez a regisztráció, akkor valaki már használja az adott nevet. Az emailnek, csak email formában kell, hogy legyen (nem szükséges, hogy valódi email legyen) mivel nem küldünk semmiféle emailt senkinek, így nem ellenőrizzük annak valódiságát. FIGYELEM! Mivel az emailt nem ellenőrizzük, így nincs lehetőség a későbbiekben a jelszó megváltoztatására, kérem írja fel a Felhasználó nevet, Emailt és Jelszavat miután regisztrált, mivel akármelyik elfelejtése esetén, csak az újra regisztrálás lehetősége marad!</p>
                            </div>
                            <div class="col-lg mb-3">
                                <img class="img-fluid" src="/img/help/reg.jpg" alt="Register">
                            </div>
                        </div>

                        <hr>

                        <h3 class="p-4">Bejelentkezés</h3>

                        <div class="row px-4">
                            <div class="col-lg mb-3">
                                <img class="img-fluid" src="/img/help/login_box.jpg" alt="Register link">
                            </div>
                            <div class="col text-center mb-3">
                                <p>Amennyiben már regisztráltál a Bejelentkezés link segítségével léphetsz be újra</p>
                            </div>
                        </div>

                        <div class="row px-4">
                            <div class="col text-center mb-3">
                                <p>A bejelentkezés alkalmával az email cím és a jelszó szükséges. Az emlékez rám kipipálásával legközelebb (ha ugyanarról a számítógépről próbálkozol) a rendszer magától bejelentkezik.</p>
                            </div>
                            <div class="col-lg mb-3">
                                <img class="img-fluid" src="/img/help/login.jpg" alt="Register">
                            </div>
                        </div>

                        <hr>

                        <h3 class="p-4">Játékos panel</h3>

                        <div class="text-center my-5">
                            <iframe class="p-3 shadow-lg border border-4 border-danger rounded-3" width="100%" height="400" src="https://www.youtube.com/embed/jX1NyMyhPDQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                        <hr class="mt-5">

                        <h3 class="p-4">Játék szerkesztő</h3>
                        <div class="text-center my-5">
                            <iframe class="p-3 shadow-lg border border-4 border-danger rounded-3" width="100%" height="400" src="https://www.youtube.com/embed/7X7B_ahpyL8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        </div>
                        <hr class="mt-5">

                        <h3 class="p-4">Játék oldal</h3>
                        <div class="text-center my-4">
                            <iframe class="p-3 shadow-lg border border-4 border-danger rounded-3" width="100%" height="400" src="https://www.youtube.com/embed/pnehxsLOQ4o" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        </div>
                        <hr class="mt-5">

                        <div class="my-4">
                            <p class="px-4">Ahoz, hogy az aplikációt használni tudhassa valaki, elsősorban be kell regisztrálni</p>
                            <p class="px-4">A regisztráció egy egyszerű lépésből áll, és nem kell konfirmállni vagy fizetni érte semmit.</p>
                            <p class="px-4">A regisztrációhoz meg kell adni egy felhasználó nevet, egy e-mail cimet ( később ezen e-mail megadásával fog lehetni belépni ) és egy jelszavat. Ennyi. FIGYELEM, mivel nem ellenőrizzük az e-mail cimeket, igy nincs lehetőség elfelejtett jelszavak újraaktivizálására. Regisztráció után kérem irja fel magának, mert elfelejtés esetén csak az újraregisztrálás lehetősége marad!</p>
                            <p class="px-4">Belépés után a Játékos Panelen a felhasználó hozzáfér az aplikáció lehetőségeihez.</p>
                            <p class="px-4">FIGYELEM az aplikáció használata ingyenes és nem kérünk vagy gyűjtünk semmilyen adatot a felhasználóktól, csak amit a regisztrációhoz meg kell adni, de ezen adatokat sem használjuk, vagy adjuk át semmiféle harmadik személynek. A regisztráció csupán azért szükséges, hogy tudjuk melyik karakterlap kihez tartozik.</p>
                        </div>
                    </div>
                </section>
            </div>
            <div id="app">
                <welcome-news />
            </div>
        </main> 
        <footer class="bg-info">
            <div class="p-5 text-center">
                <p>Az aplikáció sok adatot, leirást tartalmaz az adott játékhoz, de ezen adatok semmiféleképpen sem teljes adatok, igy NEM helyetesitik a Törvénykönyveket.</p>
            </div>
        </footer> 
    </body>
</html>
