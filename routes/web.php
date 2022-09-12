<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\GmHomeController;
use App\Http\Controllers\GameModuleMakerController;
use App\Http\Controllers\CharacterSheetsController;
use App\Http\Controllers\ChatController;
use App\Http\Controllers\WlecomeController;
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
Route::get('/', [WlecomeController::class, 'index']);
Route::get('/news', [WlecomeController::class, 'getNews']);

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
Route::get('gm/magus-game-module/{id}', [GameModuleMakerController::class, 'index']);
Route::post('gm/update-magus-game-module-name/{id}', [GameModuleMakerController::class, 'updateGameModuleName']);
Route::post('gm/update-magus-game-module-note/{id}', [GameModuleMakerController::class, 'updateGameModuleNote']);
Route::get('gm/get-magus-game-module-note/{id}', [GameModuleMakerController::class, 'getGameModuleNote']);