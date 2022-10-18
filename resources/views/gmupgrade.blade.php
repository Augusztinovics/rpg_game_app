@extends('layouts.app')

@section('content')
<div class="container-fluid">
    <div class="text-center m-5">
        <h1>Üdvözölünk a leendő Kalandmesterek között</h1>
        <p>Kalandmesterként tudsz készíteni játékmodulokat, megosztani azokat másokkal vagy átvenni és átírni mások álltal készített modulokat.</p>
        <p>Ne feled, kalandmesternek nagy a felelősége, hiszen minden jáékos szórakozása rajta múlik.</p>
        <p>Kívánok sok szép és érdekes kalandot!</p>
        <form action="/gm-registry/registry" method="post">
            @csrf
            <button type="submit" class="btn btn-success costum-btn">Átépítés Kalandmesterre</button>
        </form>
    </div>
</div>
@endsection