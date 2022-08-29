<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\Response;

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
    public function index()
    {

        
        return view('home');
    }

    /**
     * get all game module 
     * 
     * @return json
     */
    public function getAllGameModules(Request $request, $game) {

        $user = $request->user();
        $gameModules = [
            ['id' => 1, 'name' => 'Test game module']
        ];
       
        
       return response()->json($gameModules, 200);
    }
}
