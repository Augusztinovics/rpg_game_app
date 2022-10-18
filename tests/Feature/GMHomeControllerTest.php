<?php

namespace Tests\Feature;

use App\Models\GameModule;
use App\Models\GameModuleData;
use App\Models\User;
use Database\Factories\GameModuleDataFactory;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class GMHomeControllerTest extends TestCase
{

    use RefreshDatabase;

    /**
     * A basic test example.
     *
     * @return void
     */
    public function testShareGameModule()
    {
        $user = User::factory()->create([
            'level' => 'GAME_MASTER'
        ]);

        /** @var GameModule $gameModuleToShare */
        $gameModuleToShare = GameModule::factory()
            ->has(GameModuleData::factory()->count(5), 'gameModuleDatas')
            ->create([
                'gm_id' => $user->id,
                'shared' => false
        ]);

        $response = $this->actingAs($user)->postJson('/gm/share-game-module/' . $gameModuleToShare->id);
        $response->assertStatus(201);

        $this->assertDatabaseHas('public_game_modules', [
            'game' => $gameModuleToShare->game
        ]);

        $this->assertDatabaseHas('game_modules', [
            'id' => $gameModuleToShare->id,
            'shared' => true
        ]);

        foreach($gameModuleToShare->gameModuleDatas as $gameModuleData){
            $this->assertDatabaseHas('public_game_module_data', [
                'module_data' => $this->castAsJson($gameModuleData->module_data)
            ]);
        }
    }
}
