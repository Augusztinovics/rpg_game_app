<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use App\Models\User;
use App\Models\CostumerSupport;

class CostumerSupportController extends Controller
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
     * getting user questions from corrent user
     * 
     * @return json
     */
    public function getUsersQuestions(Request $request){
        
        $questions = $request->user()->questions;
       
       return response()->json($questions, 200);
    }

    /**
     * creating user questions for corrent user
     * 
     * @return json
     */
    public function makeQuestion(Request $request){

        $request->validate([
            'question' => 'required',
        ]);
        
        $newSupport = CostumerSupport::create([
            'user_id' => $request->user()->id,
            'question' => $request->input('question')
        ]);

        if (!$newSupport) {
            return response()->json('Error saving the question', 406);
        }
       
       return response()->json($newSupport, 200);
    }

    /**
     * deleting user questions for corrent user
     * 
     * @return json
     */
    public function deleteQuestion(Request $request, $question_id){

        CostumerSupport::where('id', $question_id)->delete();
       
        return response()->json('Success', 200);
    }
}
