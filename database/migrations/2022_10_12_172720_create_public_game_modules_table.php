<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePublicGameModulesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('public_game_modules', function (Blueprint $table) {
            $table->id();
            $table->string('game', 10);
            $table->string('game_module_name')->nullable();
            $table->timestamps();
            $table->json('global_note')->nullable();
            $table->json('npc_data')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('public_game_modules');
    }
}
