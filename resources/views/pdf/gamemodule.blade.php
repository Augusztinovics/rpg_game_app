<!DOCTYPE html>
<html lang="hu">
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>{{ $title }}</title>
        <style>
            .page-break {
                page-break-after: always;
            }
            .header-img {
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
            }
            .stage-des {
                position: relative;
                text-align: center;
            }
            .stage-des-text {
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
            }
            .stage-text {
                margin: 10px;
                padding: 10px;
                font-size: 1.2rem;
                background: rgba(255, 255, 255, 0.7);
                border-radius: 15%;
                white-space: pre-wrap;
            }
        </style>
    </head>
    <body>
        <div>
            <div>
                <h1>{{ $title }}</h1>
            </div>
            <div>
                <h2>A játék fő történésvonala:</h2>
                @foreach ($notes as $note)
                    <p>{{ $note['note'] }}</p>
                @endforeach
            </div>
        </div>
        <div class="page-break"></div>
        <?php print_r($stages); ?>
        @foreach ($stages as $stage)
            <div>
                <img class="header-img" src="/img/pentagram.png" alt="pentagram" width="72" height="72">
                <h2>{{ $stage['stageTitle'] }}</h2>
                <div class="stage-des">
                    <img src="/img/fantasy-bg/{{ $stage['stageImg'] }}" alt="stage background image" style="width:100%;">
                    <div class="stage-des-text">
                        <p class="stage-text"><b>{{ $stage['stageDescription'] }}</b></p>
                    </div>
                </div>
            </div>
            <div class="page-break"></div>
            @if (count($stage['stageMap']) > 0)
                 <!-- Need the canvas with map first-->

                 <div class="page-break"></div>
            @endif
            @if (count($stage['stageNote']) > 0)
                <div>
                    <h2>{{ $stage['stageTitle'] }}</h2>
                    <p><b>A jelenet történési menete:</b></p>
                    <div>
                        @foreach ($stage['stageNote'] as $note)
                            <p>{{ $note }}</p>
                        @endforeach
                    </div>
                </div>
                <div class="page-break"></div>
            @endif
        @endforeach
    </body>
</html>