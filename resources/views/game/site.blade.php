<!DOCTYPE html>
<html lang="hu">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Modul</title>
    <!-- Scripts -->
    <script src="{{ asset('js/socket.io.min.js') }}" defer></script>
    <script src="{{ asset('js/app.js') }}" defer></script>

    <!-- Styles -->
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
    <link href="{{ asset('css/home.css') }}" rel="stylesheet">
</head>
<body>
    <div id="app">
        <game-site 
            :game-module='{{ json_encode($game_module, true) }}'
            :game-data='{{ json_encode($game_data, true) }}'
            :js-server-settings='{{ json_encode($js_server_settings, true) }}'
            :user-id='{{ json_encode($user_id, true) }}'
            :is-gm='{{ json_encode($is_gm, true) }}'
            :character='{{ json_encode($character, true) }}'
        />
    </div>
</body>
</html>