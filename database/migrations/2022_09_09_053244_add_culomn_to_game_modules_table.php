<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddCulomnToGameModulesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('game_modules', function (Blueprint $table) {
            $table->json('global_note')->nullable();
            $table->json('npc_data')->nullable();
            $table->json('game_chat')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('game_modules', function (Blueprint $table) {
            $table->dropColumn('global_note');
            $table->dropColumn('npc_data');
            $table->dropColumn('game_chat');
        });
    }
}
