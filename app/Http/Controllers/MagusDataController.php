<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\Response;

class MagusDataController extends Controller
{
    use ApiResponse;

    /**
     * The data what need for character creation
     */
    public function magusCharacterCreationData(){
        $data = [
            'test' => true,
        ];
        $headers = [];
       return response()->json($data, 200, $headers);
    }
}
