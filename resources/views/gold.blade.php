@extends('layouts.app')

@section('content')
<div class="container-fluid">
    <div class="container text-center">
        <h1>Üdvözöllek a kincstárban {{ Auth::user()->name}}</h1>
        <p class="mt-5 mb-4">Először is köszönöm, hogy aktívan részt veszel a szerepjátékban!</p>
        <p>Aranyat akkor kaptál, mikor megosztottad játékmodulodat a többiekkel és amikor valaki átveszi, vagy letölti modulodat.</p>
        <p>Hogy mit lehet kezdeni az arannyal?</p>
        <p>Jelenleg nem sokat, mindegy tiszteletpontként értelmezheted, de terv szerint idővel használható forrásá szeretném változtatni.</p>
        <p>Hogy ez pontosan mit is takar...Hmm majd kiderül, egyenlőre amire gondolok, hogy új képek legyenek adhatóak a játékmodul szerkesztőhöz.</p>
        <p>Ha van ötleded vagy kívánságod írd meg ( bár a teljesítését nem garantálom ).</p>
    </div>
</div>
@endsection