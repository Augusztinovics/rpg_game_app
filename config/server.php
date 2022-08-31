<?php

return [

    /*
    |--------------------------------------------------------------------------
    | Server ip Configuration
    |--------------------------------------------------------------------------
    |
    | The ip and port for js server
    |
    */

    'server_ip' => env('SERVER_IP', '127.0.0.1'),
    'server_port' => env('JS_SERVER_PORT', '4411'),
    'server_use_port' => env('JS_USE_PORT', true),
];
