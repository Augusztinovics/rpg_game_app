<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use App\Models\CharacterSheet;

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
    public function characterCreate(Request $request){
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
    public function updateCharacter(Request $request, $id){
        
        $characterData = $request->input('characterData');
        if (!$characterData) {
            return response()->json(['error' => 'missing character data'], 406);
        }
        $character = CharacterSheet::findOrFail($id);
        $character->character_data = $characterData;
        $character->save();
        
       return response()->json('Success', 200);
    }
}
