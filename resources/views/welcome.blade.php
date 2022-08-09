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
                                        <a class="dropdown-item" href="#">Admin panel</a>
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
                        <h2 class="display-4 fw-bold text-center pb-4">The goal</h2>
                        <p class="px-4">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia libero asperiores earum nam consequatur, odio, quaerat autem ullam deserunt sapiente debitis quia vitae quasi eligendi? Sunt ipsum aut culpa corrupti!</p>
                    </div>  
                </section>
                <hr>
                <section>
                    <div class="pt-5">
                        <h2 class="display-4 fw-bold text-center pb-4">Features</h2>
                        <p class="px-4">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia libero asperiores earum nam consequatur, odio, quaerat autem ullam deserunt sapiente debitis quia vitae quasi eligendi? Sunt ipsum aut culpa corrupti!</p>
                    </div>  
                </section>
                <hr>
                <section>
                    <div class="pt-5 pb-5">
                        <h2 class="display-4 fw-bold text-center pb-4">Using the Site</h2>
                        <p class="px-4">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia libero asperiores earum nam consequatur, odio, quaerat autem ullam deserunt sapiente debitis quia vitae quasi eligendi? Sunt ipsum aut culpa corrupti!</p>
                    </div>  
                </section>
            </div>
            <div id="app"></div>
        </main> 
        <footer class="bg-info">
            <div class="p-5 text-center">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque labore esse ut expedita, cupiditate</p>
            </div>
        </footer> 
    </body>
</html>
