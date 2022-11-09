<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateDownloadCountsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('download_counts', function (Blueprint $table) {
            $table->id();
            $table->integer('magus_character_sheet')->unsigned()->nullable()->default(0);
            $table->integer('magus_game_downloaded')->unsigned()->nullable()->default(0);
            $table->integer('magus_game_shared')->unsigned()->nullable()->default(0);
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
        Schema::dropIfExists('download_counts');
    }
}
