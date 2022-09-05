@extends('layouts.app')

@section('content')
<div class="container-fluid">
   <magus-module-create 
      :game-module='{{ json_encode($game_module, true) }}'
      :game-data='{{ json_encode($game_data, true) }}'
   />
</div>
@endsection