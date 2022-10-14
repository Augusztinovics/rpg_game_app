<!DOCTYPE html>
<html lang="hu">
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>{{ $title }}</title>
        <style>
            * {
                font-family: DejaVu Sans !important;
            }
            .page-break {
                page-break-after: always;
            }
            .header-img {
                display: inline-block;
                margin-right: auto;
            }
            .stage-des-text {
                text-align: center;
            }
            .stage-text {
                margin: 10px;
                padding: 10px;
                font-size: 1.2rem;
                background: rgba(255, 255, 255, 0.7);
                border-radius: 15%;
                white-space: pre-wrap;
            }
            .stage-title {
                margin: 10;
                text-align: center;
            }
            .one-row {
                display: inline-block;
                width: 45%;
            }
        </style>
    </head>
    <body>
        <div>
            <div class="stage-title">
                <img class="header-img" src="{{ public_path('/img/pentagram.png') }}" alt="pentagram" width="72" height="72">
                <h1>{{ $title }}</h1>
            </div>
            <div>
                <h2>A játék fő történésvonala:</h2>
                @foreach ($notes as $note)
                    <p><span><b>- </b></span>{{ $note['note'] }}</p>
                @endforeach
            </div>
        </div>
       
        @foreach ($stages as $stage)
            <div class="page-break"></div>
            <div>
                <div class="stage-title">
                    <img class="header-img" src="{{ public_path('/img/pentagram.png') }}" alt="pentagram" width="72" height="72">
                    <h2>{{ $stage['stageTitle'] }}</h2>
                </div>
                <div>
                    <img src="{{ public_path('/img/fantasy-bg/' . $stage['stageImg']) }}" alt="stage background image" style="width:100%;">
                    <div class="stage-des-text">
                        <p class="stage-text"><b>{{ $stage['stageDescription'] }}</b></p>
                    </div>
                </div>
            </div>

            @if (count($stage['stageNote']) > 0)
                <div class="page-break"></div>
                <div>
                    <div class="stage-title">
                        <img class="header-img" src="{{ public_path('/img/pentagram.png') }}" alt="pentagram" width="72" height="72">
                        <h2>{{ $stage['stageTitle'] }}</h2>
                    </div>
                    <p><b>A jelenet történési menete:</b></p>
                    <div>
                        @foreach ($stage['stageNote'] as $note)
                            <p><span><b>- </b></span>{{ $note }}</p>
                        @endforeach
                    </div>
                </div>
            @endif
        @endforeach
        @if (count($npcs) > 0)
            <div class="page-break"></div>
            <div class="stage-title">
                <img class="header-img" src="{{ public_path('/img/pentagram.png') }}" alt="pentagram" width="72" height="72">
                <h2>Bestiárium</h2>
            </div>
            <hr>
            @foreach ($npcs as $npc)
                <div>
                    <h2>{{ $npc['name'] }}</h2>
                </div>
                <p>------------------------------------------</p>
                <div> 
                    <div>
                        <div class="one-row">
                            <p><b>Tulajdonságok:</b></p>
                            <p>Erő: {{ $npc['ERO'] }}</p>
                            <p>Gyorsaság: {{ $npc['GYORS'] }}</p>
                            <p>Ügyesség: {{ $npc['UGY'] }}</p>
                            <p>Állóképesség: {{ $npc['ALLO'] }}</p>
                            <p>Egészség: {{ $npc['EG'] }}</p>
                            <p>Szépség: {{ $npc['SZEP'] }}</p>
                            <p>Inteligencia: {{ $npc['INT'] }}</p>
                            <p>Akaraterő: {{ $npc['AK'] }}</p>
                            <p>Asztrál: {{ $npc['ASZT'] }}</p>
                        </div>
                        <div class="one-row">
                            <p><b>Faj: </b> {{ $npc['race'] }}</p>
                            <p><b>Szint: </b> {{ $npc['level'] }}</p>
                            <p><b>TP érték: </b> {{ $npc['exp'] }}</p>
                            <p><b>Életerő:</b></p>
                            <p>Életerő Pontok ( Ép ): {{ $npc['EP'] }}</p>
                            <p>
                                Fájdalomtűrési Pontok ( Fp ): {{ $npc['FP'] }}
                            </p>
                            <p><b>Harcértékek: </b></p>
                            <p>Kezdeményező Érték ( KÉ ): {{ $npc['KE'] }}</p>
                            <p>Támadó Érték ( TÉ ): {{ $npc['TE'] }}</p>
                            <p>Védő Érték ( VÉ ): {{ $npc['VE'] }}</p>
                            <p>Célzó Érték ( CÉ ): {{ $npc['CE'] }}</p>
                            <p>Sebzés ( Sp ): {{ $npc['SP'] }}</p>
                            <p>
                                Sebzés Felfogó Érték ( SFÉ ): {{ $npc['SFE'] }}
                            </p>
                        </div>
                    </div>
                    <div>
                        <p><b>Az NJK álltalános leírása:</b></p>
                        <p>{{ $npc['description'] }}</p>
                        <p><b>NJK Szerepe a játékban: </b></p>
                        <p>{{ $npc['role'] }}</p>
                        <p><b>NJK viselkedési mintája: </b></p>
                        <p>{{ $npc['sablon'] }}</p>
                    </div>
                </div>
                <hr>
            @endforeach
        @endif
    </body>
</html>