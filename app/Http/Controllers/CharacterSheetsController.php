<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use App\Models\CharacterSheet;
use App\Models\GameModulePlayer;
use App\Models\GameModule;

class CharacterSheetsController extends Controller
{
   // use ApiResponse;

     /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth');
    }

    /**
     * creating new character
     * 
     * @return json
     */
    public function characterCreate(Request $request) {
        $user = $request->user();
        $game = $request->input('game');
        if (!$game) {
            return response()->json(['error' => 'missing game type'], 406);
        }
        $characterData = $request->input('characterData');
        if (!$characterData) {
            return response()->json(['error' => 'missing character data'], 406);
        }

        $character = new CharacterSheet();
        $character->user_id = $user->id;
        $character->game = $game;
        $character->character_data = $characterData;
        $character->save();
        
       return response()->json($character, 200);
    }

    /**
     * updating character
     * 
     * @return json
     */
    public function updateCharacter(Request $request, $id) {
        
        $characterData = $request->input('characterData');
        if (!$characterData) {
            return response()->json(['error' => 'missing character data'], 406);
        }
        $character = CharacterSheet::findOrFail($id);
        $character->character_data = $characterData;
        $character->save();
        
       return response()->json('Success', 200);
    }

     /**
     * getting all magus characters
     * 
     * @return json
     */
    public function gameCharacters(Request $request, $game) {
        
        $user = $request->user();
        $characters = CharacterSheet::where('user_id', $user->id)->where('game', $game)->get();
       
        
       return response()->json($characters, 200);
    }

    /**
     * delete magus character
     * 
     * @return json
     */
    public function deleteGameCharacter(Request $request, $id) {
        
        CharacterSheet::where('id', $id)->delete();
       
        
       return response()->json('Success', 200);
    }

    /**
     * get the player game calls
     * 
     * @return json
     */
    public function getGameCalls(Request $request, $game) {
        $user = $request->user();
        $calls = GameModulePlayer::where('player_id', $user->id)->get();

        $data = [];
        foreach ($calls as $call) {
            $module = GameModule::find($call->game_module_id);
            if ($module && $module->game == $game) {
                $data[] = [
                    'game_id' => $module->id,
                    'game_name' => $module->game_module_name,
                    'character_id' => $call->character_id ? $call->character_id : false,
                ];
            }
        }

        return response()->json($data, 200);
    }
}
