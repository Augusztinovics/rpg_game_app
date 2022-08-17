<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use App\Models\User;
use App\Models\FrendRequest;

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
        $user = $request->user();
        $sendedFrendRequests = FrendRequest::where('from_user', $user->id)->where('accepted', false)->get();
        $recivedFrendRequests = FrendRequest::where('to_user', $user->id)->where('accepted', false)->get();
        $userData = [
            'user' => $user,
            'sendedFrendRequests' => $sendedFrendRequests,
            'recivedFrendRequests' => $recivedFrendRequests,
        ];

        return response()->json($userData, 200);
    }

    /**
     * get all user detail
     * 
     * @return json
     */
    public function getAllUser(Request $request) {

        $searchUsername = $request->query('usn');
        if ($searchUsername) {
            $users = User::where('id', '!=', $request->user()->id)->where('name', 'LIKE', '%' . $searchUsername . '%')->get();
        } else {
            $users = User::where('id', '!=', $request->user()->id)->paginate(25);
        }

        return response()->json($users, 200);
    }

}
