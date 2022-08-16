<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use App\Models\WhatsNew;

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

     /**
     * getting all published news
     * 
     * @return json
     */
    public function getNews(Request $request){
        
        $news = WhatsNew::where('published', 1)->orderBy('publushed_at', 'asc')->paginate(1);
        
       return response()->json($news, 200);
    }
}
