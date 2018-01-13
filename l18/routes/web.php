<?php

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


Route::get("dogs", function(){
	return [
		"Alaskan Malamute", 
		"Basenji", 
		"Clumber Spaniel", 
		"Dachshund",
		"English Cocker Spaniel", 
		"Finnish Laphund", 
		"Great Dane",
		"Havaneses",
		"Ibizan Hound", 
		"Jug", 
		"Keeshond", 
		"Leonberger"
	];
});