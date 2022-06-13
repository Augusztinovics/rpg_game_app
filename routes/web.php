<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\GmHomeController;
use App\Http\Controllers\MagusDataController;

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

Route::get('/', function () {
    return view('welcome');
});

Auth::routes();

Route::get('/home', [HomeController::class, 'index'])->name('home');
Route::get('/gmhome', [GmHomeController::class, 'index'])->name('gmhome');


//Json game data routs
Route::get('magus/character-creation-data', [MagusDataController::class, 'magusCharacterCreationData']);
