<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\GmHomeController;
use App\Http\Controllers\GameModuleMakerController;
use App\Http\Controllers\CharacterSheetsController;
use App\Http\Controllers\ChatController;
use App\Http\Controllers\WelcomeController;
use App\Http\Controllers\AdminController;
use App\Http\Controllers\CostumerSupportController;
use App\Models\User;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

//Welcome page routs
Route::get('/', [WelcomeController::class, 'index']);
Route::get('/news', [WelcomeController::class, 'getNews']);
Route::get('/game-downloads', [WelcomeController::class, 'gameDownloads'])->name('game-downloads');
Route::get('public/game-modules/{game}', [WelcomeController::class, 'getAllPublicGameModules']);
Route::get('public/game-module-data/{id}', [WelcomeController::class, 'getPublicGameModuleData']);
Route::get('public/game-module-pdf/{id}', [WelcomeController::class, 'generatePublicGameModulePDF']);

Auth::routes();

//Head menu roots
Route::get('/home', [HomeController::class, 'index'])->name('home');
Route::get('/gmhome', [GmHomeController::class, 'index'])->name('gmhome');
Route::get('/admin', [AdminController::class, 'index'])->name('admin');


//Json game data routs
Route::post('character/create', [CharacterSheetsController::class, 'characterCreate']);
Route::post('character/update/{id}', [CharacterSheetsController::class, 'updateCharacter']);
Route::get('character/game-characters/{game}', [CharacterSheetsController::class, 'gameCharacters']);
Route::post('character/delete/{id}', [CharacterSheetsController::class, 'deleteGameCharacter']);

//Json costumers routs
Route::get('support/questions', [CostumerSupportController::class, 'getUsersQuestions']);
Route::post('support/question', [CostumerSupportController::class, 'makeQuestion']);
Route::post('support/question/{question_id}', [CostumerSupportController::class, 'deleteQuestion']);

//Chat routs
Route::get('chat/current-user', [ChatController::class, 'getCurrentUser']);
Route::get('chat/all-user', [ChatController::class, 'getAllUser']);
Route::post('chat/friend-request', [ChatController::class, 'friendRequest']);
Route::post('chat/accept-friend-request/{id}', [ChatController::class, 'acceptFriend']);
Route::post('chat/delete-friend-request/{id}', [ChatController::class, 'deleteFriend']);
Route::get('socket.io/', [ChatController::class, 'ioSend']);

//Gm registry routs
Route::get('gm-registry/registry-show', [HomeController::class, 'gmRegistryShow'])->name('gm-registry');
Route::post('gm-registry/registry', [HomeController::class, 'gmRegistryProcess']);

//Admin routs
//users
Route::get('admin/all-users', [AdminController::class, 'getAllUser']);
Route::post('admin/update', [AdminController::class, 'updateUser']);
Route::post('admin/delete/{id}', [AdminController::class, 'deleteUser']);
Route::get('admin/metrick-data', [AdminController::class, 'getMetrickData']);
//character
Route::post('admin/update-character', [AdminController::class, 'updateCharacter']);
//costumer support
Route::get('admin/questions', [AdminController::class, 'getAllQuestion']);
Route::get('admin/unanswered-questions', [AdminController::class, 'getAllUnasweredQuestion']);
Route::post('admin/answer/{id}', [AdminController::class, 'answerQuestion']);
Route::post('admin/delete-question/{question_id}', [AdminController::class, 'deleteQuestion']);
//news
Route::get('admin/news', [AdminController::class, 'getAllNews']);
Route::post('admin/news/create', [AdminController::class, 'storeNews']);
Route::post('admin/news/publish/{id}', [AdminController::class, 'publishUnpublishNews']);
Route::post('admin/news/update/{id}', [AdminController::class, 'updateNews']);
Route::post('admin/news/delete/{id}', [AdminController::class, 'deleteNews']);

//Gm routs
Route::get('gm/game-modules/{game}', [GmHomeController::class, 'getAllGameModules']);
Route::get('gm/friend-list', [GmHomeController::class, 'getFriendList']);
Route::post('gm/ad-game-module-player/{id}', [GmHomeController::class, 'addPlayerToModule']);
Route::post('gm/remove-game-module-player/{id}', [GmHomeController::class, 'removePlayerFromModule']);
Route::post('gm/delete-game-module/{id}', [GmHomeController::class, 'deleteGameModule']);
Route::get('gm/game-module-pdf/{id}', [GmHomeController::class, 'generateGameModulePDF']);
Route::post('gm/share-game-module/{gameModule}', [GmHomeController::class, 'shareGameModule']);
Route::post('gm/use-public-game-module/{publicGameModule}', [GmHomeController::class, 'usePublicGameModule']);

Route::get('gm/magus-game-module/{id}', [GameModuleMakerController::class, 'index']);
Route::post('gm/update-magus-game-module-name/{id}', [GameModuleMakerController::class, 'updateGameModuleName']);
Route::post('gm/update-magus-game-module-note/{id}', [GameModuleMakerController::class, 'updateGameModuleNote']);
Route::get('gm/get-magus-game-module-note/{id}', [GameModuleMakerController::class, 'getGameModuleNote']);
Route::get('gm/get-magus-game-module-npc/{id}', [GameModuleMakerController::class, 'getGameModuleNpc']);
Route::post('gm/update-magus-game-module-npc/{id}', [GameModuleMakerController::class, 'updateGameModuleNpc']);
Route::post('gm/create-game-module-data/{id}', [GameModuleMakerController::class, 'createGameModuleData']);
Route::post('gm/update-game-module-data/{id}', [GameModuleMakerController::class, 'updateGameModuleData']);
Route::post('gm/update-game-module-order/{id}', [GameModuleMakerController::class, 'updateGameModuleDataOrder']);
Route::post('gm/delete-game-module-data/{id}', [GameModuleMakerController::class, 'deleteGameModuleData']);
