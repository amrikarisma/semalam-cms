<?php

use App\Http\Controllers\Dashboard\DashboardPageController;
use App\Http\Controllers\Dashboard\UserController;
use App\Http\Controllers\Frontend\PageController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
Route::group(['middleware' => 'auth:api', 'prefix' => 'dashboard'], function(){
    Route::get('users/{user}', [UserController::class, 'show']);
    Route::resource('pages', DashboardPageController::class);
});

Route::middleware('api')->group(function () {
    Route::post('login', [UserController::class, 'login']);
    Route::post('register', [UserController::class, 'register']);
    Route::get('pages', [PageController::class, 'index']);
    Route::get('page/{id}', [PageController::class, 'show']);

    
});