<?php

namespace App\Http\Controllers;

use App\Models\PublicGameModule;
use App\Models\PublicGameModuleData;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use App\Models\GameModule;
use App\Models\GameModuleData;
use App\Models\MyFriend;
use App\Models\GameModulePlayer;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use PDF;

class GmHomeController extends Controller
{
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
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function index(Request $request)
    {
        if ($request->user()->level === 'PLAYER'){
            return redirect()->route('home');
        }

        return view('gmhome');
    }

    /**
     * get all game module
     *
     * @return json
     */
    public function getAllGameModules(Request $request, $game) {

        $user = $request->user();
        $gameModules = GameModule::with('players')->where('gm_id', $user->id)->where('game', $game)->paginate(10);
        return response()->json($gameModules, 200);
    }

    /**
     * get friend list
     *
     * @return json
     */
    public function getFriendList(Request $request) {

        $user = $request->user();
        $friends = MyFriend::with('friend')->where('user_id', $user->id)->get();
        return response()->json($friends, 200);
    }

    /**
     * add player to module
     *
     * @return json
     */
    public function addPlayerToModule(Request $request, $id) {
        $playerId = $request->input('playerId');
        if ($playerId) {
            GameModulePlayer::create([
                'game_module_id' => $id,
                'player_id' => $playerId
            ]);
        }
        $players = GameModulePlayer::where('game_module_id', $id)->get();
        return response()->json($players, 200);
    }

    /**
     * remove player from module
     *
     * @return json
     */
    public function removePlayerFromModule(Request $request, $id) {
        $playerId = $request->input('playerId');
        if ($playerId) {
            GameModulePlayer::where('game_module_id', $id)->where('player_id', $playerId)->delete();
        }
        $players = GameModulePlayer::where('game_module_id', $id)->get();
        return response()->json($players, 200);
    }

    /**
     * remove game module
     *
     * @return json
     */
    public function deleteGameModule(Request $request, $id) {
        GameModuleData::where('game_module_id', $id)->delete();
        GameModulePlayer::where('game_module_id', $id)->delete();
        GameModule::where('id', $id)->delete();
        return response()->json('sucess', 200);
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function generateGameModulePDF($id)
    {
        $gameModule = GameModule::find($id);
        $moduleData = GameModuleData::where('game_module_id', $id)->get();
        $gameModuleData = [];
        foreach ($moduleData as $data) {
            $oneData = [
                'stageTitle' => $data->module_data['title'] ?? '',
                'stageNote' => $data->module_data['note'] ?? [],
                'stageImg' => $data->module_data['img'] ?? 'default.jpg',
                'stageMap' => $data->module_data['map'] ?? [],
                'stageDescription' => $data->module_data['description'] ?? '',
            ];
            $gameModuleData[] = $oneData;
        }
        $gameData = [
            'title' => $gameModule->game_module_name,
            'notes' => $gameModule->global_note ?? [],
            'npcs' => $gameModule->npc_data ?? [],
            'stages' => $gameModuleData,
        ];

        $pdf = PDF::loadView('pdf.gamemodule', $gameData);

        return $pdf->download('Module - ' . $gameModule->game_module_name . '.pdf');
    }

    public function shareGameModule(GameModule $gameModule, Request $request)
    {
        if ($gameModule->shared){
            abort(Response::HTTP_EXPECTATION_FAILED, 'Game module already shared, id= ' . $gameModule->id);
        }

        return DB::transaction(function() use($gameModule){
            $publicGameModule = PublicGameModule::query()->create([
                'game' => $gameModule->game,
                'game_module_name' => $gameModule->game_module_name,
                'global_note' => $gameModule->global_note,
                'npc_data' => $gameModule->npc_data
            ]);

            $gameModuleDatas = $gameModule->gameModuleDatas()->orderBy('game_module_data_order')->get();

            /** @var GameModuleData $moduleData */
            foreach($gameModuleDatas as $gameModuleData) {
                PublicGameModuleData::query()->create([
                    'public_game_module_id' => $publicGameModule->id,
                    'module_data' => $gameModuleData->module_data
                ]);
            }

            $gameModule->shared = true;
            $gameModule->save();

            return response()->json($publicGameModule, 200);
        });
    }

    public function usePublicGameModule(PublicGameModule $publicGameModule, Request $request)
    {
        return DB::transaction(function() use($publicGameModule){
            $gameModule = GameModule::query()->create([
                'gm_id' => Auth::id(),
                'game' => $publicGameModule->game,
                'game_module_name' => $publicGameModule->game_module_name,
                'global_note' => $publicGameModule->global_note,
                'npc_data' => $publicGameModule->npc_data,
                'shared' => true
            ]);

            /** @var PublicGameModule $publicGameModuleData */
            foreach($publicGameModule->publicGameModuleDatas as $index => $publicGameModuleData) {
                GameModuleData::query()->create([
                    'game_module_id' => $gameModule->id,
                    'game_module_data_order' => $index + 1,
                    'module_data' => $publicGameModuleData->module_data
                ]);
            }

            return response()->json($gameModule, 200);
        });
    }
}
