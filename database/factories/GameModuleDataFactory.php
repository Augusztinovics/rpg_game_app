<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class GameModuleDataFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'module_data' => $this->faker->words(5)
        ];
    }
}
