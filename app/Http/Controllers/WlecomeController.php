<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Carbon\Carbon;
use App\Models\WhatsNew;
use App\Models\PageView;
use App\Models\PublicGameModule;

class WlecomeController extends Controller
{
    /**
     * Show the welcome page.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function index()
    {
        $pageView = PageView::where('created_at', '>=', Carbon::today())->first();
        if ($pageView) {
            $count = $pageView->views;
            if (!$count) {
                $count = 1;
            } else {
                $count ++;
            }
            $pageView->views = $count;
            $pageView->save();
        } else {
            PageView::create([
                'views' => 1
            ]);
        }
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

    /**
     * Show the welcome page.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function gameDownloads()
    {
        return view('gamedownloads');
    }

    /**
     * get all game module 
     * 
     * @return json
     */
    public function getAllPublicGameModules(Request $request, $game)
    {
        $gameModules = PublicGameModule::where('game', $game)->paginate(10);

        return response()->json($gameModules, 200);
    }
}
