@extends('layouts.app')

@section('content')
<div class="container-fluid">
    <player-site :server-settings='{{ json_encode($js_server_settings, true) }}'/>
</div>
@endsection
