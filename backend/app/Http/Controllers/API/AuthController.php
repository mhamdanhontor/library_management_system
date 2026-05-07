<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;

use Illuminate\Http\Request;

use App\Models\User;

use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{

    // REGISTER

    public function register(Request $request)
    {

        $validated = $request->validate([

            'name' => 'required',

            'email' => 'required|email|unique:users',

            'password' => 'required|min:6'

        ]);

        $user = User::create([

            'name' => $request->name,

            'email' => $request->email,

            'password' => Hash::make($request->password),

            'role' => 'user'

        ]);

        return response()->json([

            'message' => 'User Registered Successfully',

            'user' => $user

        ]);
    }

    // LOGIN

    public function login(Request $request)
    {

        $user = User::where(

            'email',

            $request->email

        )->first();

        if (!$user || !Hash::check(

            $request->password,

            $user->password

        )) {

            return response()->json([

                'message' => 'Invalid Credentials'

            ], 401);
        }

        return response()->json([

            'message' => 'Login Successful',

            'user' => $user

        ]);
    }

public function dashboardStats()
{

    return response()->json([

        'total_books' => \App\Models\Book::count(),

        'issued_books' => \App\Models\IssuedBook::count(),

        'total_users' => \App\Models\User::count()

    ]);
}

}