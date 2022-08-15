<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use App\Models\User;
use App\Models\CharacterSheet;
use App\Models\CostumerSupport;

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
        $searchUsername = $request->query('usn');
        $searchUserEmail = $request->query('use');
        
        if ($searchUsername) {
            $users = User::with('characterSheets')->where('name', 'LIKE', '%' . $searchUsername . '%')->get();
        } elseif ($searchUserEmail) {
            $users = User::with('characterSheets')->where('email', 'LIKE', '%' . $searchUserEmail . '%')->get();
        } else {
            $users = User::with('characterSheets')->paginate(25);
        }
       
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

     /**
     * updating a character
     * 
     * @return json
     */
    public function updateCharacter(Request $request){
        
        if ($request->user()->level !== 'ADMIN'){
            return response()->json('forbitten', 403);
        }
        $character = $request->input('selectedCharacter');
        $characterToUpdate = CharacterSheet::find($character['id']);
        $characterToUpdate->character_data = $character['character_data'];
        
       if ($characterToUpdate->save()) {
            return response()->json('succes', 200);
       } else {
            return response()->json('fail', 407);
       }
    }

    //costumer support controll functions

    /**
     * getting all question
     * 
     * @return json
     */
    public function getAllQuestion(Request $request){
        
        if ($request->user()->level !== 'ADMIN'){
            return response()->json('forbitten', 403);
        }
        
        $questions = CostumerSupport::with('user')->paginate(25);
        
       
       return response()->json($questions, 200);
    }

     /**
     * getting all unanswered question
     * 
     * @return json
     */
    public function getAllUnasweredQuestion(Request $request){
        
        if ($request->user()->level !== 'ADMIN'){
            return response()->json('forbitten', 403);
        }
        
        $questions = CostumerSupport::with('user')->where('answer', null)->paginate(25);
        
       
       return response()->json($questions, 200);
    }

    /**
     * answering a question
     * 
     * @return json
     */
    public function answerQuestion(Request $request, $id){
        
        if ($request->user()->level !== 'ADMIN'){
            return response()->json('forbitten', 403);
        }
        $question = CostumerSupport::find($id);
        $question->answer = $request->input('answer');

       if ($question->save()) {
            return response()->json('succes', 200);
       } else {
            return response()->json('fail', 407);
       }
    }

    /**
     * deleting user questions for corrent user
     * 
     * @return json
     */
    public function deleteQuestion(Request $request, $question_id){
        if ($request->user()->level !== 'ADMIN'){
            return response()->json('forbitten', 403);
        }

        CostumerSupport::where('id', $question_id)->delete();
       
        return response()->json('Success', 200);
    }
}
