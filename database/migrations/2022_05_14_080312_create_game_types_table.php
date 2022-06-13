<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateGameTypesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('game_types', function (Blueprint $table) {
            $table->id();
            $table->string('game_name', 20);
            $table->string('short_description', 150)->nullable();
            $table->boolean('D4')->nullable();
            $table->boolean('D6')->nullable();
            $table->boolean('D8')->nullable();
            $table->boolean('D10')->nullable();
            $table->boolean('D12')->nullable();
            $table->boolean('D20')->nullable();
            $table->boolean('D100')->nullable();
            $table->string('character_create_data_root');
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
        Schema::dropIfExists('game_types');
    }
}
