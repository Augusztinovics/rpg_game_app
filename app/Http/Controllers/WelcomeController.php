<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Carbon\Carbon;
use App\Models\DownloadCount;
use App\Models\WhatsNew;
use App\Models\PageView;
use App\Models\PublicGameModule;
use App\Models\PublicGameModuleData;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use PDF;

class WelcomeController extends Controller
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
        $searchAuthor = $request->query('author');
        $searchTitle = $request->query('title');

        if ($searchAuthor && $searchTitle) {
            $gameModules = PublicGameModule::where('author_name', 'LIKE', '%' . $searchAuthor . '%')->where('game_module_name', 'LIKE', '%' . $searchTitle . '%')->where('game', $game)->get();
        } elseif ($searchAuthor) {
            $gameModules = PublicGameModule::where('author_name', 'LIKE', '%' . $searchAuthor . '%')->where('game', $game)->get();
        } elseif ($searchTitle) {
            $gameModules = PublicGameModule::where('game_module_name', 'LIKE', '%' . $searchTitle . '%')->where('game', $game)->get();
        } else {
            $gameModules = PublicGameModule::where('game', $game)->paginate(10);
        }

        return response()->json(
            [
                'gameModules' => $gameModules,
                'isGm' => optional(Auth::user())->level !== 'PLAYER',
                'isAdmin' => optional(Auth::user())->level === 'ADMIN'
            ],
        200);
    }

    /**
     * get all game module
     *
     * @return json
     */
    public function getPublicGameModuleData(Request $request, $id)
    {
        $gameModuleDatas = PublicGameModuleData::where('public_game_module_id', $id)->get();

        return response()->json($gameModuleDatas, 200);
    }

    /**
     * Download module.
     *
     * @return \Illuminate\Http\Response
     */
    public function generatePublicGameModulePDF($id)
    {
        $gameModule = PublicGameModule::find($id);
        if (!$gameModule) {
            return response()->json('Cant find game module', 417);
        }
        $count = $gameModule->downloaded;
        if (!$count) {
            $count = 1;
        } else {
            $count += 1;
        }
        $gameModule->downloaded = $count;
        $gameModule->save();

        $author = User::find($gameModule->author_id);
        if ($author) {
            if ($author->gold) {
                $gold = $author->gold + config('gold.download', 5);
                $author->gold = $gold;
            } else {
                $author->gold = config('gold.download', 5);
            }
            $author->save();
        }

        $moduleData = PublicGameModuleData::where('public_game_module_id', $id)->get();
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

        $downloadCount = DownloadCount::first();
        if(!$downloadCount) {
            DownloadCount::create([
                'magus_game_downloaded' => 1
            ]);
        } else {
            $count = $downloadCount->magus_game_downloaded;
            if (!$count) {
                $count = 1;
            } else {
                $count +=1;
            }
            $downloadCount->magus_game_downloaded = $count;
            $downloadCount->save();
        }

        $pdf = PDF::loadView('pdf.gamemodule', $gameData);

        return $pdf->download('Module - ' . $gameModule->game_module_name . '.pdf');
    }

    /**
     * Download emty caractersheet
     * 
     *  @return \Illuminate\Contracts\Support\Renderable
     */
    public function downloadMagusCharacterSheet()
    {
        $downloadCount = DownloadCount::first();
        if(!$downloadCount) {
            DownloadCount::create([
                'magus_character_sheet' => 1
            ]);
        } else {
            $count = $downloadCount->magus_character_sheet;
            if (!$count) {
                $count = 1;
            } else {
                $count +=1;
            }
            $downloadCount->magus_character_sheet = $count;
            $downloadCount->save();
        }
        
        $pdf = PDF::loadView('pdf.maguscharactersheet');

        return $pdf->download('Karakterlap.pdf');
    }
}
