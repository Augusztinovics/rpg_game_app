<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class GameModuleFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'game' => $this->faker->word,
            'game_module_name' => $this->faker->word,
            'global_note' => $this->faker->words,
            'npc_data' => $this->faker->words
        ];
    }
}
