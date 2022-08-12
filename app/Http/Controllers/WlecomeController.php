<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class WlecomeController extends Controller
{
    //
    /**
     * Show the welcome page.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function index()
    {
        return view('welcome');
    }
}
