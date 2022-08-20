<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use App\Models\User;
use App\Models\FrendRequest;
use App\Models\MyFriend;

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
        $sendedFrendRequests = FrendRequest::with('reciver')->where('from_user', $user->id)->where('accepted', false)->get();
        $recivedFrendRequests = FrendRequest::with('sender')->where('to_user', $user->id)->where('accepted', false)->get();
        $friends = MyFriend::with('friend')->where('user_id', $user->id)->get();
        $userData = [
            'user' => $user,
            'sendedFrendRequests' => $sendedFrendRequests,
            'recivedFrendRequests' => $recivedFrendRequests,
            'friends' => $friends,
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

    /**
     * make a friend request
     * 
     * @return json
     */
    public function friendRequest(Request $request) {

        $from = $request->user()->id;
        $to = $request->input('to');
        if (!$to) {
            return response()->json('missing to user', 406);
        }
        $message = $request->input('message');
        $friendRequest = FrendRequest::create([
            'from_user' => $from,
            'to_user'   => $to,
            'message'   => $message,
            'accepted'  => false,
        ]);

        if (!$friendRequest) {
            return response()->json('failed to create friend request', 406);
        }
        return response()->json('success', 200);
    }

    /**
     * accept friend request
     * 
     * @return json
     */
    public function acceptFriend(Request $request, $id) {

        $friendRequest = FrendRequest::find($id);
        if (!$friendRequest) {
            return response()->json('Cant find the request', 406);
        }

        MyFriend::create([
            'user_id'   => $friendRequest->from_user,
            'friend_id' => $friendRequest->to_user,
        ]);

        MyFriend::create([
            'user_id'   => $friendRequest->to_user,
            'friend_id' => $friendRequest->from_user,
        ]);
        $friendRequest->accepted = true;
        $friendRequest->save();
        
        return response()->json('success', 200);
    }

    /**
     * delete friend request
     * 
     * @return json
     */
    public function deleteFriend(Request $request, $id) {

        $friendRequest = FrendRequest::find($id);
        if (!$friendRequest) {
            return response()->json('Cant find the request', 406);
        }
        $friendRequest->delete();
        return response()->json('success', 200);
    }

    /**
     * test io
     * 
     * @return json
     */
    public function ioSend(Request $request) {

       dd($request);
        return response()->json('success', 200);
    }

}
