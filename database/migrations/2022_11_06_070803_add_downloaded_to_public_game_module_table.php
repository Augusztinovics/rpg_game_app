<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddDownloadedToPublicGameModuleTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('public_game_modules', function (Blueprint $table) {
            $table->integer('downloaded')->unsigned()->nullable()->default(0);
            $table->json('taked_by')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('public_game_modules', function (Blueprint $table) {
            $table->dropColumn('downloaded');
            $table->dropColumn('taked_by');
        });
    }
}
