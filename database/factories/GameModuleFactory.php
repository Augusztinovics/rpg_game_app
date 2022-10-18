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
            'game' => $this->faker->word
        ];
    }
}
