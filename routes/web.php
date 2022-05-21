<?php

use Illuminate\Support\Facades\Route;

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

Auth::routes();

Route::group(['middleware' => 'Language'], function () {
    Route::get('/',"\App\Http\Controllers\IndexController@index")->name('index');
    Route::get('/change-language/{lang}',"\App\Http\Controllers\HomeController@changeLang");
    Route::get('/photorestoration',"\App\Http\Controllers\PhotoRestorationController@index")->name('photoRestoration.index');

    Route::group(['middleware' => 'auth'], function () {
        Route::get('/home',"\App\Http\Controllers\HomeController@index")->name('home');
    });

    Route::group(['middleware' => 'admin'], function () {
        Route::resource('/admin/users', '\App\Http\Controllers\UserController', ['names'=>[
            'index'=>'admin.users.index',
            'create'=>'admin.users.create',
            'store'=>'admin.users.store',
            'edit'=>'admin.users.edit',
            'update'=>'admin.users.update',
        ]]);
    });

    Route::group(['middleware' => 'mod'], function () {
        Route::resource('/mod', '\App\Http\Controllers\ContentModController', ['names'=>[
            'index'=>'mod.index',
            'store'=>'mod.store',
            'edit'=>'mod.edit',
            'update'=>'mod.update',
            'show'=>'mod.show'
        ]]);
        Route::resource('/admin/categories', '\App\Http\Controllers\CategoriesController', ['names'=>[
            'index'=>'admin.categories.index',
            'create'=>'admin.categories.create',
            'store'=>'admin.categories.store',
            'edit'=>'admin.categories.edit',
            'update'=>'admin.categories.update',
        ]]);
        Route::DELETE('/mapObject/{id}', '\App\Http\Controllers\MapObjectController@destroy')->name('mapObject.remove');
        Route::PUT('/mapObject/{id}', '\App\Http\Controllers\MapObjectController@publish')->name('mapObject.publish');
        Route::get('/mapObject/{id}','\App\Http\Controllers\MapObjectController@show')->name('mapObject.show');
    });
});

//TODO:Move to API.php
//Methods supporting vue views
Route::group(['middleware' => 'auth'], function () {
    Route::post('/mapobjects',"\App\Http\Controllers\MapObjectController@store")->name('mapObject.store');
    Route::get('/getcategories','\App\Http\Controllers\CategoriesController@getCategories')->name('addObject.getCategories');
});

Route::get('/getmapobjects','\App\Http\Controllers\MapObjectController@getMapObjects')->name('mapObjects.get');
Route::get('/getmapobject/{id}','\App\Http\Controllers\MapObjectController@getMapObject')->name('mapObject.get');
