<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class LoginController extends Controller
{
    public function login(Request $request) {
        $credentials = $request->validate([
            'email' => 'required|email',
            'password' => 'required|string'
        ]);

        if (!Auth::attempt($credentials)) {
            return response()->json([
                'message_error' => 'Invalid login credentials'
            ], 401);
        }

        $access_token = Auth::user()->createToken('authToken');
        $access_token = $access_token->accessToken;

        return response()->json([
            'access_token' => $access_token,
            'user' => Auth::user()
        ], 200);
    }
}
