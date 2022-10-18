<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\LoginCount;
use App\Models\User;

class HomeController extends Controller
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
        LoginCount::create([
            'user_id' => Auth::id()
        ]);
        $data = [
            'js_server_settings' => [
                'server_ip' => config('server.server_ip'),
                'server_port' => config('server.server_port'),
                'use_port' =>  config('server.server_use_port')
            ]   
        ];
        return view('home')->with($data);
    }

    /**
     * Show the game master registrations.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function gmRegistryShow()
    {
        return view('gmupgrade');
    }

     /**
     * Process the game master registrations.
     *
     * @return \Illuminate\Http\RedirectResponse
     */
    public function gmRegistryProcess(Request $request)
    {
        $user = User::find(Auth::id());
        
        if (!$user) {
            return redirect()->route('/'); 
        }
        if ($user->level == 'PLAYER') {
            $user->level = 'GAME_MASTER';
            $user->save();
        }

        return redirect()->route('gmhome');
    }
}
