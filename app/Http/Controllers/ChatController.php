<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use App\Models\User;

class ChatController extends Controller
{
    //
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth');
    }

    /**
     * getting current user detail
     * 
     * @return json
     */
    public function getCurrentUser(Request $request) {
        $data = [
            'user_id'   => $request->user()->id,
            'user_name' => $request->user()->name
        ];

        return response()->json($data, 200);
    }

    /**
     * get all user detail
     * 
     * @return json
     */
    public function getAllUser(Request $request) {

        $users = User::where('id', '!=', $request->user()->id)->paginate(25);

        return response()->json($users, 200);
    }

}
