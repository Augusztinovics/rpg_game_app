@extends('layouts.app')

@section('content')
<div class="container-fluid">
    <div class="text-center m-5">
        <h1>Üdvözölünk a leendő Kalandmesterek között</h1>
        <p>Kalandmesterként tudsz készíteni játékmodulokat, megosztani azokat másokkal vagy átvenni és átírni mások álltal készített modulokat.</p>
        <p>Ne feled, kalandmesternek nagy a felelősége, hiszen minden jáékos szórakozása rajta múlik.</p>
        <p>Kívánok sok szép és érdekes kalandot!</p>
        <div class="text-center my-4">
            <iframe class="p-3 shadow-lg border border-4 border-danger rounded-3" width="560" height="315" src="https://www.youtube.com/embed/7X7B_ahpyL8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
        <hr>
        <form action="/gm-registry/registry" method="post">
            @csrf
            <button type="submit" class="btn btn-success costum-btn">Átépítés Kalandmesterre</button>
        </form>
    </div>
</div>
@endsection