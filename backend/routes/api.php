<?php

use Illuminate\Support\Facades\Route;

use App\Http\Controllers\API\AuthController;
use App\Http\Controllers\API\BookController;
use App\Http\Controllers\API\CategoryController;
use App\Http\Controllers\API\IssuedBookController;

Route::get('/test', function () {

    return response()->json([
        'message' => 'API Working Successfully'
    ]);

});

Route::apiResource('books', BookController::class);

Route::apiResource('categories', CategoryController::class);

Route::apiResource('issued-books', IssuedBookController::class);

Route::put(
    'return-book/{id}',
    [IssuedBookController::class, 'returnBook']
);

Route::get(

    'receipt/{id}',

    [IssuedBookController::class, 'generateReceipt']

);

Route::post(

    'register',

    [AuthController::class, 'register']

);

Route::post(

    'login',

    [AuthController::class, 'login']

);

Route::get(

    'dashboard-stats',

    [AuthController::class, 'dashboardStats']

);