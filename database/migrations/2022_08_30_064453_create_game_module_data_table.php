<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateGameModuleDataTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('game_module_data', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('game_module_id');
            $table->integer('game_module_data_order')->default(1);
            $table->json('module_data');
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
        Schema::dropIfExists('game_module_data');
    }
}
