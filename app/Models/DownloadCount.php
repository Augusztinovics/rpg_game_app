<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class DownloadCount extends Model
{
    use HasFactory;

    protected $fillable = [
        'magus_character_sheet',
        'magus_game_downloaded',
        'magus_game_shared',
        'magus_game_used'
    ];
}
