@extends('layouts.app')

@section('content')
<div class="container-fluid">
    <player-site :server-ip="'{{ $server_ip }}'"/>
</div>
@endsection
