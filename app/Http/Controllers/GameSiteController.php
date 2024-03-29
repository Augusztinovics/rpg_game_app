<?php

namespace App\Http\Controllers;

use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\GameModule;
use App\Models\GameModuleData;
use App\Models\GameModulePlayer;
use App\Models\GamePageView;

class GameSiteController extends Controller
{
    //
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
    public function index(Request $request, $id)
    {

        $module = GameModule::where('id', $id)->first();
        if (!$module) {
            return redirect()->route('home');
        }

        $players = GameModulePlayer::where('game_module_id', $module->id)->get();
        if (!$players && $module->gm_id !== Auth::id()) {
            return redirect()->route('home');
        }

        if (!$players->contains('player_id', Auth::id()) && $module->gm_id !== Auth::id()) {
            return redirect()->route('home');
        }

        $character = false;
        $characterId = GameModulePlayer::where('player_id', Auth::id())->where('game_module_id', $module->id)->first();
        if ($characterId) {
            $character = $characterId->playerCharacter;
        }

        $gameData = GameModuleData::where('game_module_id', $module->id)->orderBy('game_module_data_order', 'asc')->get();
        if (Auth::id() === $module->gm_id) {
            $module->game_active = true;
            $module->save();
        }
        $data = [
            'game_module' => $module,
            'game_data' => $gameData,
            'js_server_settings' => [
                'server_ip' => config('server.server_ip'),
                'server_port' => config('server.server_port'),
                'use_port' =>  config('server.server_use_port')
            ],
            'user_id' => Auth::id(),
            'is_gm' => Auth::id() === $module->gm_id,
            'character' => $character
        ];

        $pageView = GamePageView::where('created_at', '>=', Carbon::today())->first();
        if ($pageView) {
            $count = $pageView->views;
            if (!$count) {
                $count = 1;
            } else {
                $count ++;
            }
            $moduleIds = $pageView->module_ids ?? [];
            $userIds = $pageView->user_ids ?? [];
            if (!in_array($id, $moduleIds)) {
                $moduleIds[] = $id;
                $pageView->module_ids = $moduleIds;
            }
            if (!in_array(Auth::id(), $userIds)) {
                $userIds[] = Auth::id();
                $pageView->user_ids = $userIds;
            }
            $pageView->views = $count;
            $pageView->save();
        } else {
            GamePageView::create([
                'views'      => 1,
                'module_ids' => [$id],
                'user_ids'   => [Auth::id()],
            ]);
        }

        return view('game.site', $data);

    }

    /**
     * update the game module active state
     * 
     * @param \App\Models\GameModule $module
     *
     * @return json
     */
    public function updateGameModuleActive(Request $request, GameModule $module) {

        $user = $request->user();
        if (!$user) {
            return response()->json('Nobady here', 403);
        }
        if ($user->id !== $module->gm_id) {
            return response()->json('What are you want?', 403);
        }
        $module->game_active = $request->input('game_active', false);
        $module->save();
        return response()->json('ok', 200);
    }

    /**
     * update the game module active state
     * 
     * @param \App\Models\GameModule $module
     *
     * @return json
     */
    public function updateGameModuleState(Request $request, GameModule $module) {

        $user = $request->user();
        if (!$user) {
            return response()->json('Nobady here', 403);
        }
        if ($user->id !== $module->gm_id) {
            return response()->json('What are you want?', 403);
        }
        $module->game_module_state = $request->input('game_state', 1);
        $module->save();
        $gameData = GameModuleData::where('game_module_id', $module->id)->orderBy('game_module_data_order', 'asc')->get();
        $data = ['game_data' => $gameData];
        return response()->json($data, 200);
    }

    /**
     * get the new game module data
     *
     * @return json
     */
    public function getNewModuleData(Request $request, $id) {

        $gameModule = GameModuleData::findOrFail($id);
        return response()->json($gameModule->module_data, 200);
    }
}
