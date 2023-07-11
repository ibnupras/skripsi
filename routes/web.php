<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\SurveyController;
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
    return view('auth\login');
});

Auth::routes();

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');




Route::group(['middleware' => ['auth']], function () {
    route::get('/checkRole',[App\Http\Controllers\HomeController::class,'checkRole'])->name('checkRole');
    Route::get('/survey', [SurveyController::class, 'index'])->name('survey');

    Route::group(['middleware' => ['isAdmin']], function () {

        route::get('admin/admin',[App\Http\Controllers\HomeController::class,'admin'])->name('admin');


    });


    Route::group(['middleware' => ['isUser']], function () {

        route::get('user/user',[App\Http\Controllers\HomeController::class,'user'])->name('user');

    });
});
