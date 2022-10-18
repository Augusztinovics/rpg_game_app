<?php

namespace Tests\Feature;

use App\Models\GameModule;
use App\Models\GameModuleData;
use App\Models\PublicGameModule;
use App\Models\PublicGameModuleData;
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
        $response->assertOk();

        $this->assertDatabaseHas('public_game_modules', [
            'game' => $gameModuleToShare->game,
            'game_module_name' => $gameModuleToShare->game_module_name,
            'global_note' => json_encode($gameModuleToShare->global_note),
            'npc_data' => json_encode($gameModuleToShare->npc_data),
        ]);

        $this->assertDatabaseHas('game_modules', [
            'id' => $gameModuleToShare->id,
            'shared' => true
        ]);

        foreach($gameModuleToShare->gameModuleDatas as $gameModuleData){
            $this->assertDatabaseHas('public_game_module_data', [
                'module_data' => json_encode($gameModuleData->module_data)
            ]);
        }
    }

    public function testUsePublicGameModule()
    {
        $user = User::factory()->create([
            'level' => 'GAME_MASTER'
        ]);

        /** @var PublicGameModule $publicGameModule */
        $publicGameModule = PublicGameModule::factory()
            ->has(PublicGameModuleData::factory()->count(5), 'publicGameModuleDatas')
            ->create();

        $response = $this->actingAs($user)->postJson('/gm/use-public-game-module/' . $publicGameModule->id);
        $response->assertOk();

        $this->assertDatabaseHas('game_modules', [
            'gm_id' => $user->id,
            'game' => $publicGameModule->game,
            'game_module_name' => $publicGameModule->game_module_name,
            'global_note' => json_encode($publicGameModule->global_note),
            'npc_data' => json_encode($publicGameModule->npc_data),
            'shared' => true
        ]);

        foreach($publicGameModule->publicGameModuleDatas as $publicGameModuleData){
            $this->assertDatabaseHas('game_module_data', [
                'module_data' => json_encode($publicGameModuleData->module_data)
            ]);
        }
    }
}
