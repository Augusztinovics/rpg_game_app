<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class GameModulePlayer extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'game_module_id',
        'player_id',
    ];

    public function player() {
        return $this->belongsTo(User::class, 'player_id');
    }

    public function gameModule() {
        return $this->belongsTo(GameModule::class, 'game_module_id');
    }

    public function playerCharacter() {
        if ($this->character_id) {
            return $this->belongsTo(CharacterSheet::class, 'character_id');
        } else {
            return null;
        }
        
    }
}
