<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use App\Models\User;

class AdminController extends Controller
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
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function index(Request $request)
    {
        if ($request->user()->level !== 'ADMIN'){
            return redirect()->route('home');
        }

        return view('admin');
    }

    //User controll funtions

     /**
     * getting all users
     * 
     * @return json
     */
    public function getAllUser(Request $request){
        
        if ($request->user()->level !== 'ADMIN'){
            return response()->json('forbitten', 403);
        }
        
        $users = User::get();
       
        
       return response()->json($users, 200);
    }

     /**
     * updating a user
     * 
     * @return json
     */
    public function updateUser(Request $request){
        
        if ($request->user()->level !== 'ADMIN'){
            return response()->json('forbitten', 403);
        }
        $user = $request->input('selectedUser');
        $userToUpdate = User::find($user['id']);
        $userToUpdate->name = $user['name'];
        $userToUpdate->email = $user['email'];
        $userToUpdate->level = $user['level'];
        $userToUpdate->gold = $user['gold'];
       if ($userToUpdate->save()) {
            return response()->json('succes', 200);
       } else {
            return response()->json('fail', 407);
       }
    }

     /**
     * delete user
     * 
     * @return json
     */
    public function deleteUser(Request $request, $id){
        
        User::where('id', $id)->delete();
       
        
       return response()->json('Success', 200);
    }
}
