<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateGameModulePlayersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('game_module_players', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('game_module_id');
            $table->unsignedBigInteger('player_id');
            $table->unsignedBigInteger('character_id')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('game_module_players');
    }
}
