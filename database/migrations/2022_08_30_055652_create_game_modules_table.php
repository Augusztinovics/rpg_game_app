<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateGameModulesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('game_modules', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('gm_id');
            $table->string('game', 10);
            $table->string('game_module_name')->nullable();
            $table->integer('game_module_state')->default(1);
            $table->boolean('game_active')->default(false);
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
        Schema::dropIfExists('game_modules');
    }
}
