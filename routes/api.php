<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\InformasiController;

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

Route::post('/simpan-informasi', 'App\Http\Controllers\InformasiController@simpanInformasi');
Route::GET('/informasi', 'App\Http\Controllers\InformasiController@getInformasi');
// Route::get('/kantor', 'App\Http\Controllers\KantorController@getKantor');
Route::delete('/hapus-informasi', 'App\Http\Controllers\InformasiController@hapusInformasi');


Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
