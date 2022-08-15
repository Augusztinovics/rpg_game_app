<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>RPG games</title>

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
                    RPG games
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="{{ __('Toggle navigation') }}">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <!-- Left Side Of Navbar -->
                    <ul class="navbar-nav me-auto">

                    </ul>

                    <!-- Right Side Of Navbar -->
                    <ul class="navbar-nav ms-auto">
                        <!-- Authentication Links -->
                        @guest
                            @if (Route::has('login'))
                                <li class="nav-item">
                                    <a class="nav-link" href="{{ route('login') }}">{{ __('Login') }}</a>
                                </li>
                            @endif

                            @if (Route::has('register'))
                                <li class="nav-item">
                                    <a class="nav-link" href="{{ route('register') }}">{{ __('Register') }}</a>
                                </li>
                            @endif
                        @else
                            <li class="nav-item dropdown">
                                <a id="navbarDropdown" class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" v-pre>
                                    {{ Auth::user()->name }}
                                </a>

                                <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdownMenuLink">
                                    <li>
                                        <a class="dropdown-item" href="{{ route('home') }}">Player Dashboard</a>
                                    </li>
                                    @if (Auth::user()->level === 'ADMIN')
                                    <li>
                                        <a class="dropdown-item" href="{{ route('admin') }}">Admin panel</a>
                                    </li>
                                    @endif
                                    @if (Auth::user()->level === 'GAME_MASTER' || Auth::user()->level === 'ADMIN')
                                    <li>
                                        <a class="dropdown-item" href="{{ route('gmhome') }}">Game Master Dashboard</a>
                                    </li>
                                    @endif
                                    <li>
                                        <a class="dropdown-item" href="{{ route('logout') }}"
                                            onclick="event.preventDefault();
                                                            document.getElementById('logout-form').submit();">
                                            {{ __('Logout') }}
                                        </a>
    
                                        <form id="logout-form" action="{{ route('logout') }}" method="POST" class="d-none">
                                            @csrf
                                        </form>
                                    </li>
                                </ul>
                            </li>
                            
                        @endguest
                    </ul>
                </div>
            </div>
        </nav>
        <main>
            <div class="cover-image">
                <div class="cover-text">
                <h1 class="display-2 fw-bold pb-4">Welcome in RPG games</h1>
                <p class="lead fw-bold fs-4">Here you can play a different RPG games with your friends</p>
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
                <hr>
                <section>
                    <div class="pt-5">
                        <h2 class="display-4 fw-bold text-center pb-4">Mit nyújt az aplikáció</h2>
                        <p class="px-4">Jelenleg az aplikáció a fejlesztés első fázisában van.</p>
                        <p class="px-4">Az első fázis funkciói:</p>
                        <p class="px-4">Karakter készités</p>
                        <p class="px-4">Játékos karaktereket lehet elkésziteni 6 egyszerű lépésben, igy nem kell a játékosoknak órákat tölteni karakterkészitéssel.</p>
                        <p class="px-4">Interaktiv karakterlap</p>
                        <p class="px-4">Miután a karakter elkészült, további játék során a karakterlap kiszámol minden szükséges értéket, levonni és hozzáadni lehet minden változtatható értékhez és az aplikáció újraszámol minden végértéket az adott változás függvényében.</p>
                        <p class="px-4">Súgók, és leirások szinte mindenhez, jegyzetek készithetők, törölhetők. Felszerelés adható elvehető a karaktertől...és még sok más.</p>
                        <p class="px-4">A további fázisok tervei</p>
                        <p class="px-4">A második fázisban egy belső beszélgető (chat) aplikáció elkészitése van, ahol a szobákat a játékoscsapatok tudják megcsinálni, igy minden csapatnak külön szobája lehet, amibe csak a Kalandmester meghivásával lehet belépni.</p>
                        <p class="px-4">A harmadik fázisra egy játékmodul készitésére alkalmas vizuális felület elkészitése van tervezve, aminek segitségével a Kalandmesterek moduljaikat könnyebben elkészithetik, és vizuálisan is bemutathatják játék közben.</p>
                        <p class="px-4">A negyedik fázis gyakorlatilag az eddigiek egy honlapra való összehozatala, igy minden csapatnak, minden játékmodul külön honlappá válik, és az adott modult saját honlapján fogják tudni játszani a játékosok.</p>
                    </div>  
                </section>
                <hr>
                <section>
                    <div class="pt-5 pb-5">
                        <h2 class="display-4 fw-bold text-center pb-4">Az oldal használata</h2>
                        <p class="px-4">Ahoz, hogy az aplikációt használni tudhassa valaki, elsősorban be kell regisztrálni</p>
                        <p class="px-4">A regisztráció egy egyszerű lépésből áll, és nem kell konfirmállni vagy fizetni érte semmit.</p>
                        <p class="px-4">A regisztrációhoz meg kell adni egy felhasználó nevet, egy e-mail cimet ( később ezen e-mail megadásával fog lehetni belépni ) és egy jelszavat. Ennyi. FIGYELEM, mivel nem ellenőrizzük az e-mail cimeket, igy nincs lehetőség elfelejtett jelszavak újraaktivizálására. Regisztráció után kérem irja fel magának, mert elfelejtés esetén csak az újraregisztrálás lehetősége marad!</p>
                        <p class="px-4">Belépés után a Játékos Panelen a felhasználó hozzáfér az aplikáció lehetőségeihez.</p>
                        <p class="px-4">FIGYELEM az aplikáció használata ingyenes és nem kérünk vagy gyűjtünk semmilyen adatot a felhasználóktól, csak amit a regisztrációhoz meg kell adni, de ezen adatokat sem használjuk, vagy adjuk át semmiféle harmadik személynek. A regisztráció csupán azért szükséges, hogy tudjuk melyik karakterlap kihez tartozik.</p>
                    </div>  
                </section>
            </div>
            <div id="app"></div>
        </main> 
        <footer class="bg-info">
            <div class="p-5 text-center">
                <p>Az aplikáció sok adatot, leirást tartalmaz az adott játékhoz, de ezen adatok semmiféleképpen sem teljes adatok, igy NEM helyetesitik a Törvénykönyveket.</p>
            </div>
        </footer> 
    </body>
</html>
