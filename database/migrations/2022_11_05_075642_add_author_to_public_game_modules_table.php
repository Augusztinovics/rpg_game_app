<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddAuthorToPublicGameModulesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('public_game_modules', function (Blueprint $table) {
            $table->string('author_name')->nullable();
            $table->unsignedBigInteger('author_id')->nullable();
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
            $table->dropColumn('author_name');
            $table->dropColumn('author_id');
        });
    }
}
