<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use App\Models\GameModule;

class GameModuleMakerController extends Controller
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
    public function index(Request $request, $id)
    {
        if ($request->user()->level === 'PLAYER'){
            return redirect()->route('home');
        }

        if($id == 'new') {
            $module = GameModule::create([
                'gm_id' => $request->user()->id,
                'game' => 'MAGUS',
                'game_module_name' => 'Új MAGUS játék module'
            ]);

            $data = [
                'game_module' => $module,
                'game_data' => []
            ];

            return view('magusgameedit', $data);

        } else {

            $module = GameModule::where('id', $id)->first();
            if (!$module) {
                return redirect()->route('home');
            }

            $data = [
                'game_module' => $module,
                'game_data' => $module->gameModuleDatas()
            ];

            return view('magusgameedit', $data);
        }
    }

    /**
     * updating module name
     * 
     * @return json
     */
    public function updateGameModuleName(Request $request, $id){
        
        $moduleName = $request->input('moduleName');
        if (!$moduleName) {
            return response()->json(['error' => 'missing module name data'], 406);
        }
        $gameModule = GameModule::findOrFail($id);
        $gameModule->game_module_name = $moduleName;
        $gameModule->save();
        
       return response()->json('Success', 200);
    }

     /**
     * updating module global notes
     * 
     * @return json
     */
    public function updateGameModuleNote(Request $request, $id){
        
        $moduleNote = $request->input('note');
        if (!$moduleNote) {
            return response()->json(['error' => 'missing module note data'], 406);
        }
        $gameModule = GameModule::findOrFail($id);
        $gameModule->global_note = $moduleNote;
        $gameModule->save();
        
       return response()->json('Success', 200);
    }

    /**
     * get module global notes
     * 
     * @return json
     */
    public function getGameModuleNote(Request $request, $id){
        
        $gameModule = GameModule::findOrFail($id);
        $data = [
            'notes' => $gameModule->global_note
        ];
        
       return response()->json($data, 200);
    }
   
}
