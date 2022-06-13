<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class GameType extends Model
{
    use HasFactory;

    protected $fillable = [
        'game_name',
        'short_description',
        'D4',
        'D6',
        'D8',
        'D10',
        'D12',
        'D20',
        'D100',
        'character_create_data_root',
    ];
}
