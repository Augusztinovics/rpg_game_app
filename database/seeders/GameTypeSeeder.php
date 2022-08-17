<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\GameType;

class GameTypeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        foreach ($this->data() as $gm) {
            GameType::create($gm);
        }
    }

    private function data(){
        return [
            [
                'game_name' => 'MAGUS',
                'short_description' => 'K100 system fantasy RPG',
                'D6' => true,
                'D10' => true,
                'D100' => true,
                'character_create_data_root' => 'magus/character-creation-data',
            ]
        ];
    }
}
