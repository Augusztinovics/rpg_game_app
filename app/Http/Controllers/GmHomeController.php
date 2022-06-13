<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

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
     * Show the game master registrations.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function gmRegistryShow()
    {
        return view('home');
    }

     /**
     * Process the game master registrations.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function gmRegistryProcess()
    {
        return view('home');
    }
}
